/**
 * TextNode component renders a text node. A text node is a string of text that is not an element.
 */
export function TextNode(props: { children?: string[] } = {}): string {
  return props.children?.join("") ?? "";
}
