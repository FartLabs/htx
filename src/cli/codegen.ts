/**
 * @fileoverview
 *
 * This script generates TypeScript files for each HTML element based on the
 * data from the Browser Compatibility Data (BCD) project. It also generates a
 * file that exports a global attributes interface and a mod file that exports
 * all the element files.
 */

import { toConstantCase } from "@std/text/unstable-to-constant-case";
import { toKebabCase } from "@std/text/to-kebab-case";
import { toSnakeCase } from "@std/text/to-snake-case";
import type { SourceFile } from "ts-morph";
import { Project } from "ts-morph";
import bcd from "@mdn/browser-compat-data" with { type: "json" };
import {
  bcdElementEventNames,
  booleanAttributes,
  type Descriptor,
  getDescriptors,
  getInputTypes,
  toDocs,
} from "@fartlabs/ht/codegen";

/**
 * generatedFilePreludeString is the comment at the top of generated files.
 */
const generatedFilePreludeString = `/**
* @fileoverview
*
* This file was generated. Do not modify this file directly.
*/`;

if (import.meta.main) {
  // Create a project.
  const project = new Project();

  // Create a file that exports a global attributes interface.
  const globalAttrsFile = project.createSourceFile(
    "./src/global_attributes.ts",
    undefined,
    { overwrite: true },
  );
  globalAttrsFile.addStatements(generatedFilePreludeString);
  const globalAttrsInterface = globalAttrsFile.addInterface({
    isExported: true,
    name: "GlobalAttributes",
    extends: ["DataAttributes"],
    docs: toDocs({
      description:
        "GlobalAttributes are the global attributes for HTML elements.",
      see: "https://developer.mozilla.org/docs/Web/HTML/Global_attributes",
    }),
    properties: [
      {
        name: "children",
        type: "string | string[] | undefined",
        hasQuestionToken: true,
        docs: toDocs({
          description: "The children of the element.",
        }),
      },
    ],
  });
  globalAttrsFile.addInterface({
    isExported: true,
    name: "DataAttributes",
    docs: toDocs({
      description:
        "DataAttributes are the attributes that start with `data-` for HTML elements.",
      see:
        "https://developer.mozilla.org/docs/Web/HTML/Global_attributes#data-*",
    }),
    properties: [
      { name: "[attr: `data-${string}`]", type: "string | undefined" },
    ],
  });
  for (const attr in bcd.html.global_attributes) {
    if (attr.includes("_")) {
      continue;
    }

    globalAttrsInterface.addProperty({
      name: attr.includes("-") || attr.includes(":") ? `'${attr}'` : attr,
      hasQuestionToken: true,
      type: booleanAttributes.has(attr)
        ? "string | boolean | undefined"
        : "string | undefined",
      docs: toDocs({
        see: bcd.html.global_attributes[attr].__compat?.mdn_url,
        isExperimental: bcd.html.global_attributes[attr].__compat?.status
          ?.experimental,
        isDeprecated: bcd.html.global_attributes[attr].__compat?.status
          ?.deprecated,
      }),
    });
  }

  for (const attr in bcd.svg.global_attributes) {
    if (attr.includes("_") || bcd.html.global_attributes[attr]) {
      continue;
    }

    globalAttrsInterface.addProperty({
      name: attr.includes("-") || attr.includes(":") ? `'${attr}'` : attr,
      hasQuestionToken: true,
      type: booleanAttributes.has(attr)
        ? "string | boolean | undefined"
        : "string | undefined",
      docs: toDocs({
        see: bcd.svg.global_attributes[attr].__compat?.mdn_url,
        isExperimental: bcd.svg.global_attributes[attr].__compat?.status
          ?.experimental,
        isDeprecated: bcd.svg.global_attributes[attr].__compat?.status
          ?.deprecated,
      }),
    });
  }

  for (const attr in bcd.mathml.global_attributes) {
    if (
      attr.includes("_") || bcd.html.global_attributes[attr] ||
      bcd.svg.global_attributes[attr]
    ) {
      continue;
    }

    globalAttrsInterface.addProperty({
      name: attr.includes("-") || attr.includes(":") ? `'${attr}'` : attr,
      hasQuestionToken: true,
      type: booleanAttributes.has(attr)
        ? "string | boolean | undefined"
        : "string | undefined",
      docs: toDocs({
        see: bcd.mathml.global_attributes[attr].__compat?.mdn_url,
        isExperimental: bcd.mathml.global_attributes[attr].__compat?.status
          ?.experimental,
        isDeprecated: bcd.mathml.global_attributes[attr].__compat?.status
          ?.deprecated,
      }),
    });
  }

  for (const elementEventName of bcdElementEventNames) {
    globalAttrsInterface.addProperty({
      name: `on${elementEventName}`,
      hasQuestionToken: true,
      type: `string | undefined`,
      docs: toDocs({
        description:
          `The \`on${elementEventName}\` event handler occurs when the user interacts with the element.`,
        see:
          `https://developer.mozilla.org/docs/Web/Events/${elementEventName}`,
      }),
    });
  }

  // Create a file for each element.
  const descriptors = getDescriptors();
  for (const descriptor of descriptors) {
    addElementFile(project, {
      ...descriptor,
      functionName: toConstantCase(descriptor.tag),
    });
  }

  // Create the html file.
  const htmlFile = project.createSourceFile(
    "./src/html.ts",
    undefined,
    { overwrite: true },
  );
  for (const descriptor of descriptors) {
    if (descriptor.category === "html") {
      htmlFile.addStatements(
        `export * from "./elements/${descriptor.category}/${
          toSnakeCase(descriptor.tag)
        }.ts";`,
      );
    }
  }

  // Create the svg file.
  const svgFile = project.createSourceFile(
    "./src/svg.ts",
    undefined,
    { overwrite: true },
  );
  for (const descriptor of descriptors) {
    if (descriptor.category === "svg") {
      svgFile.addStatements(
        `export * from "./elements/${descriptor.category}/${
          toSnakeCase(descriptor.tag)
        }.ts";`,
      );
    }
  }

  // Create the mathml file.
  const mathmlFile = project.createSourceFile(
    "./src/mathml.ts",
    undefined,
    { overwrite: true },
  );
  for (const descriptor of descriptors) {
    if (descriptor.category === "mathml") {
      mathmlFile.addStatements(
        `export * from "./elements/${descriptor.category}/${
          toSnakeCase(descriptor.tag)
        }.ts";`,
      );
    }
  }

  // Create the mod file.
  const modFile = project.createSourceFile(
    "./src/mod.ts",
    undefined,
    { overwrite: true },
  );
  modFile.addStatements(`export * from "./html.ts";`);

  // Save all the files.
  await project.save();

  // Update the deno.json exports.
  const denoConfig = JSON.parse(await Deno.readTextFile("./deno.json"));
  denoConfig.exports = {
    ".": "./src/mod.ts",
    "./html": "./src/html.ts",
    "./svg": "./src/svg.ts",
    "./mathml": "./src/mathml.ts",
    "./codegen": "./src/cli/codegen.ts",
    "./render": "./src/render.ts",
    "./global-attributes": "./src/global_attributes.ts",
    ...Object.fromEntries(
      descriptors.map((descriptor) => [
        `./elements/${descriptor.category}/${toKebabCase(descriptor.tag)}`,
        `./src/elements/${descriptor.category}/${
          toSnakeCase(descriptor.tag)
        }.ts`,
      ]),
    ),
  };
  await Deno.writeTextFile("./deno.json", JSON.stringify(denoConfig, null, 2));

  // Run `deno fmt` on the generated files.
  const command = new Deno.Command(Deno.execPath(), {
    args: ["fmt", "./src"],
  });
  const output = await command.output();
  if (!output.success) {
    throw new Error(new TextDecoder().decode(output.stderr));
  }
}

/**
 * addElementFile adds a TypeScript file for the given HTML element descriptor.
 */
export function addElementFile(
  project: Project,
  descriptor: Descriptor,
): void {
  const sourceFile = project.createSourceFile(
    `./src/elements/${descriptor.category}/${toSnakeCase(descriptor.tag)}.ts`,
    undefined,
    { overwrite: true },
  );

  // Add file prelude.
  sourceFile.addStatements(generatedFilePreludeString);

  // Add the type imports.
  sourceFile.addImportDeclaration({
    isTypeOnly: true,
    moduleSpecifier: "../../global_attributes.ts",
    namedImports: ["GlobalAttributes"],
  });

  // Add the variable imports.
  sourceFile.addImportDeclaration({
    isTypeOnly: true,
    moduleSpecifier: "../../render.ts",
    namedImports: ["AnyProps"],
  });

  sourceFile.addImportDeclaration({
    moduleSpecifier: "../../render.ts",
    namedImports: ["renderElement"],
  });

  // Add the props interface.
  addPropsInterfaces(sourceFile, descriptor);

  // Add the element render function.
  const propsRenderTypeCast = descriptor.tag !== "input"
    ? " as AnyProps"
    : " as unknown as AnyProps";
  sourceFile.addFunction({
    name: descriptor.functionName,
    isExported: true,
    parameters: [
      {
        name: "props",
        type: descriptor.propsInterfaceName,
        hasQuestionToken: true,
      },
      ...(!descriptor.isVoid
        ? [{
          name: "children",
          type: "string[]",
          isRestParameter: true,
        }]
        : []),
    ],
    returnType: "string",
    docs: toDocs({
      description:
        `${descriptor.functionName} renders the [\`${descriptor.tag}\`](${descriptor.see}) element.`,
      isDeprecated: descriptor.isDeprecated,
      isExperimental: descriptor.isExperimental,
      see: descriptor.see,
    }),
    statements: descriptor.isVoid
      ? `return renderElement("${descriptor.tag}", props${propsRenderTypeCast}, true);`
      : `const { children: propsChildren, ...rest } = props ?? {};
        const childrenArray = Array.isArray(propsChildren) ? propsChildren : (propsChildren ? [propsChildren] : []);
        return renderElement(
          "${descriptor.tag}",
          rest${propsRenderTypeCast},
          false,
          [...childrenArray, ...children],
        );`,
  });
}

/**
 * addPropsInterfaces adds the interfaces to the given source file.
 */
export function addPropsInterfaces(
  sourceFile: SourceFile,
  descriptor: Descriptor,
): void {
  const properties: InterfaceProperties = descriptor.attrs.map((attr) => ({
    name: attr.includes("-") ? `'${attr}'` : attr,
    hasQuestionToken: true,
    type: booleanAttributes.has(attr)
      ? "string | boolean | undefined"
      : "string | undefined",
    docs: toDocs({
      see: `${descriptor.see}#${attr}`,
      description:
        `\`${attr}\` is an attribute of the [\`${descriptor.tag}\`](${descriptor.see}) element.`,
      isExperimental: bcd.html.elements[descriptor.tag]?.[attr]?.__compat
        ?.status?.experimental ??
        bcd.svg.elements[descriptor.tag]?.[attr]?.__compat?.status
          ?.experimental ??
        bcd.mathml.elements[descriptor.tag]?.[attr]?.__compat?.status
          ?.experimental,
      isDeprecated: bcd.html.elements[descriptor.tag]?.[attr]?.__compat
        ?.status?.deprecated ??
        bcd.svg.elements[descriptor.tag]?.[attr]?.__compat?.status
          ?.deprecated ??
        bcd.mathml.elements[descriptor.tag]?.[attr]?.__compat?.status
          ?.deprecated,
    }),
  }));

  switch (descriptor.tag) {
    case "input": {
      sourceFile.addTypeAlias({
        name: "InputElementType",
        isExported: true,
        type: getInputTypes().map((type) => `"${type}"`).join(" | "),
        docs: toDocs({
          description: "InputElementType is the type of the input element.",
          see: "https://developer.mozilla.org/docs/Web/HTML/Element/input#type",
        }),
      });

      sourceFile.addInterface({
        name: descriptor.propsInterfaceName,
        isExported: true,
        extends: ["GlobalAttributes"],
        properties: [
          ...properties,
          {
            name: "type",
            hasQuestionToken: true,
            type: "InputElementType | undefined",
            docs: toDocs({
              description: "`type` is the type of the input element.",
              see:
                "https://developer.mozilla.org/docs/Web/HTML/Element/input#type",
            }),
          },
          {
            name: "value",
            type: "string | undefined",
            hasQuestionToken: true,
            docs: toDocs({
              description: "`value` is the value of the input element.",
              see:
                "https://developer.mozilla.org/docs/Web/HTML/Element/input#value",
            }),
          },
        ],
        docs: toDocs({
          description:
            `${descriptor.propsInterfaceName} are the base props for the [\`${descriptor.tag}\`](${descriptor.see}) element.`,
          see: descriptor.see,
          isDeprecated: descriptor.isDeprecated,
          isExperimental: descriptor.isExperimental,
        }),
      });
      break;
    }

    default: {
      sourceFile.addInterface({
        name: descriptor.propsInterfaceName,
        isExported: true,
        extends: ["GlobalAttributes"],
        properties,
        docs: toDocs({
          description:
            `${descriptor.propsInterfaceName} are the props for the [\`${descriptor.tag}\`](${descriptor.see}) element.`,
          see: descriptor.see,
          isDeprecated: descriptor.isDeprecated,
          isExperimental: descriptor.isExperimental,
        }),
      });
    }
  }
}

type InterfaceProperties = Parameters<
  SourceFile["addInterface"]
>[number]["properties"];
