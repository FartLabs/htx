/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * FeCompositeElementProps are the props for the [`feComposite`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComposite) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComposite>
 */
export interface FeCompositeElementProps extends GlobalAttributes {
  /**
   * `in` is an attribute of the [`feComposite`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComposite) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComposite#in>
   */
  in?: string | undefined;
  /**
   * `in2` is an attribute of the [`feComposite`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComposite) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComposite#in2>
   */
  in2?: string | undefined;
  /**
   * `k1` is an attribute of the [`feComposite`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComposite) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComposite#k1>
   */
  k1?: string | undefined;
  /**
   * `k2` is an attribute of the [`feComposite`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComposite) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComposite#k2>
   */
  k2?: string | undefined;
  /**
   * `k3` is an attribute of the [`feComposite`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComposite) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComposite#k3>
   */
  k3?: string | undefined;
  /**
   * `k4` is an attribute of the [`feComposite`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComposite) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComposite#k4>
   */
  k4?: string | undefined;
  /**
   * `operator` is an attribute of the [`feComposite`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComposite) element.
   * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComposite#operator>
   */
  operator?: string | undefined;
}

/**
 * FE_COMPOSITE renders the [`feComposite`](https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComposite) element.
 * @see <https://developer.mozilla.org/docs/Web/SVG/Reference/Element/feComposite>
 */
export function FE_COMPOSITE(
  props?: FeCompositeElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "feComposite",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
