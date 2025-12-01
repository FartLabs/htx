/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * ArticleElementProps are the props for the [`article`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/article) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/article>
 */
export interface ArticleElementProps extends GlobalAttributes {
}

/**
 * ARTICLE renders the [`article`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/article) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/article>
 */
export function ARTICLE(
  props?: ArticleElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "article",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
