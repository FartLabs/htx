// import { Project } from "ts-morph";
import { getDescriptors } from "@fartlabs/ht/cli/codegen.ts";

if (import.meta.main) {
  // const project = new Project();
  const descriptors = getDescriptors();
  for (const descriptor of descriptors) {
    console.log(descriptor.tag);
  }
}
