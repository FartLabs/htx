/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * ThElementProps are the props for the [`th`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th>
 */
export interface ThElementProps extends GlobalAttributes {
  /**
   * `abbr` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th#abbr>
   */
  abbr?: string | undefined;
  /**
   * `align` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `axis` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th#axis>
   * @deprecated
   */
  axis?: string | undefined;
  /**
   * `bgcolor` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th#bgcolor>
   * @deprecated
   */
  bgcolor?: string | undefined;
  /**
   * `char` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th#char>
   * @deprecated
   */
  char?: string | undefined;
  /**
   * `charoff` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th#charoff>
   * @deprecated
   */
  charoff?: string | undefined;
  /**
   * `colspan` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th#colspan>
   */
  colspan?: string | undefined;
  /**
   * `headers` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th#headers>
   */
  headers?: string | undefined;
  /**
   * `rowspan` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th#rowspan>
   */
  rowspan?: string | undefined;
  /**
   * `scope` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th#scope>
   */
  scope?: string | undefined;
  /**
   * `valign` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th#valign>
   * @deprecated
   */
  valign?: string | undefined;
  /**
   * `width` is an attribute of the [`th`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th#width>
   * @deprecated
   */
  width?: string | undefined;
}

/**
 * TH renders the [`th`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/th>
 */
export function TH(props?: ThElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "th",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
