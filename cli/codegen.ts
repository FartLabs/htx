import { Project } from "ts-morph";
import { getDescriptors } from "@fartlabs/ht/cli/codegen.ts";

if (import.meta.main) {
  const project = new Project();

  // Create a new TSX component file for each descriptor.
  const descriptors = getDescriptors();
  for (const descriptor of descriptors) {
    const sourceFile = project.createSourceFile(
      `./${descriptor.tag}.tsx`,
      "",
      { overwrite: true, scriptKind: /* TSX */ 4 },
    );

    // Import the props interface.
    sourceFile.addImportDeclaration(
      descriptor.attrs.length === 0
        ? {
          isTypeOnly: true,
          moduleSpecifier: "@fartlabs/ht",
          namedImports: ["GlobalAttributes"],
        }
        : {
          isTypeOnly: true,
          moduleSpecifier: `@fartlabs/ht/${descriptor.tag}`,
          namedImports: [descriptor.propsInterfaceName],
        },
    );

    // Import the render function.
    sourceFile.addImportDeclaration({
      moduleSpecifier: "@fartlabs/ht",
      namedImports: [descriptor.functionName],
    });

    // Create the component function.
    sourceFile.addFunction({
      name: descriptor.tag,
      isExported: true,
      parameters: [{
        name: "props",
        type: `${descriptor.propsInterfaceName} & { children?: string[] }`,
        hasQuestionToken: true,
      }],
      returnType: "string",
      statements: [
        "const { children, ...rest } = props;",
        descriptor.isVoid
          ? `return ${descriptor.functionName}(rest);`
          : `return ${descriptor.functionName}(rest, ...(children ?? []));`,
      ],
    });
  }

  // Create the mod file.
  const modFile = project.createSourceFile(
    "mod.ts",
    undefined,
    { overwrite: true },
  );
  for (const descriptor of descriptors) {
    modFile.addStatements(`export * from "./${descriptor.tag}.tsx";`);
  }

  // Save all the files.
  await project.save();

  // Run `deno fmt` on the generated files.
  const command = new Deno.Command(Deno.execPath(), {
    args: ["fmt", "./"],
  });
  const output = await command.output();
  if (!output.success) {
    throw new Error(new TextDecoder().decode(output.stderr));
  }
}
