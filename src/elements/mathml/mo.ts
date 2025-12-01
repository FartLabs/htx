/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * MoElementProps are the props for the [`mo`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo>
 */
export interface MoElementProps extends GlobalAttributes {
  /**
   * `accent` is an attribute of the [`mo`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo#accent>
   */
  accent?: string | undefined;
  /**
   * `form` is an attribute of the [`mo`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo#form>
   */
  form?: string | undefined;
  /**
   * `largeop` is an attribute of the [`mo`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo#largeop>
   */
  largeop?: string | undefined;
  /**
   * `lspace` is an attribute of the [`mo`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo#lspace>
   */
  lspace?: string | undefined;
  /**
   * `maxsize` is an attribute of the [`mo`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo#maxsize>
   */
  maxsize?: string | undefined;
  /**
   * `minsize` is an attribute of the [`mo`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo#minsize>
   */
  minsize?: string | undefined;
  /**
   * `movablelimits` is an attribute of the [`mo`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo#movablelimits>
   */
  movablelimits?: string | undefined;
  /**
   * `rspace` is an attribute of the [`mo`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo#rspace>
   */
  rspace?: string | undefined;
  /**
   * `stretchy` is an attribute of the [`mo`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo#stretchy>
   */
  stretchy?: string | undefined;
  /**
   * `symmetric` is an attribute of the [`mo`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo) element.
   * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo#symmetric>
   */
  symmetric?: string | undefined;
}

/**
 * MO renders the [`mo`](https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo) element.
 * @see <https://developer.mozilla.org/docs/Web/MathML/Reference/Element/mo>
 */
export function MO(props?: MoElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "mo",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
