/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * AnnotationXmlElementProps are the props for the [`annotation-xml`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/annotation-xml) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/annotation-xml>
 */
export interface AnnotationXmlElementProps extends GlobalAttributes {
}

/**
 * ANNOTATION_XML renders the [`annotation-xml`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/annotation-xml) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/annotation-xml>
 */
export function ANNOTATION_XML(
  props?: AnnotationXmlElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "annotation-xml",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
