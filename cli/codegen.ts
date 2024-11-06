import { Project } from "ts-morph";
import { getDescriptors, toDocs } from "@fartlabs/ht/cli/codegen";

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
    sourceFile.addImportDeclaration({
      isTypeOnly: true,
      moduleSpecifier: `@fartlabs/ht/${descriptor.tag}`,
      namedImports: [descriptor.propsInterfaceName],
    });

    // Import the render function.
    sourceFile.addImportDeclaration({
      moduleSpecifier: `@fartlabs/ht/${descriptor.tag}`,
      namedImports: [
        { name: descriptor.functionName, alias: "render" },
      ],
    });

    // Re-export the props interface.
    sourceFile.addExportDeclaration({
      isTypeOnly: true,
      namedExports: [descriptor.propsInterfaceName],
    });

    // Create the component function.
    const componentName = descriptor.tag.toUpperCase();
    sourceFile.addFunction({
      name: componentName,
      isExported: true,
      parameters: [{
        name: "props",
        type: `${descriptor.propsInterfaceName} & { children?: string[] }`,
        initializer: "{}",
      }],
      returnType: "string",
      statements: descriptor.isVoid ? ["return render(props);"] : [
        "const { children, ...rest } = props;",
        "return render(rest, ...(children ?? []));",
      ],
      docs: toDocs({
        description:
          `${componentName} component renders the [\`${descriptor.tag}\`](${descriptor.see}) element.`,
        see: descriptor.see,
        isDeprecated: descriptor.isDeprecated,
        isExperimental: descriptor.isExperimental,
      }),
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

  // Update the deno.json exports.
  const denoConfig = JSON.parse(await Deno.readTextFile("./deno.json"));
  denoConfig.exports = {
    ".": "./mod.ts",
    "./jsx-runtime": "./jsx-runtime.ts",
    "./render": "./render.ts",
    "./global-attributes": "./global-attributes.ts",
    ...Object.fromEntries(descriptors.map((descriptor) => [
      `./${descriptor.tag}`,
      `./${descriptor.tag}.tsx`,
    ])),
  };
  await Deno.writeTextFile("./deno.json", JSON.stringify(denoConfig, null, 2));

  // Run `deno fmt` on the generated files.
  const command = new Deno.Command(
    Deno.execPath(),
    { args: ["fmt", "./"] },
  );
  const output = await command.output();
  if (!output.success) {
    throw new Error(new TextDecoder().decode(output.stderr));
  }
}
