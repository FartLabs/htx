/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * IframeElementProps are the props for the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe>
 */
export interface IframeElementProps extends GlobalAttributes {
  /**
   * `align` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#align>
   * @deprecated
   */
  align?: string | undefined;
  /**
   * `allow` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#allow>
   */
  allow?: string | undefined;
  /**
   * `allowfullscreen` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#allowfullscreen>
   */
  allowfullscreen?: string | boolean | undefined;
  /**
   * `allowpaymentrequest` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#allowpaymentrequest>
   * @deprecated
   */
  allowpaymentrequest?: string | undefined;
  /**
   * `browsingtopics` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#browsingtopics>
   * @experimental
   */
  browsingtopics?: string | undefined;
  /**
   * `credentialless` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#credentialless>
   * @experimental
   */
  credentialless?: string | undefined;
  /**
   * `cross-origin-top-navigation-by-user-activation` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#cross-origin-top-navigation-by-user-activation>
   */
  "cross-origin-top-navigation-by-user-activation"?: string | undefined;
  /**
   * `csp` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#csp>
   * @experimental
   */
  csp?: string | undefined;
  /**
   * `frameborder` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#frameborder>
   * @deprecated
   */
  frameborder?: string | undefined;
  /**
   * `height` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#height>
   */
  height?: string | undefined;
  /**
   * `loading` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#loading>
   */
  loading?: string | undefined;
  /**
   * `longdesc` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#longdesc>
   * @deprecated
   */
  longdesc?: string | undefined;
  /**
   * `marginheight` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#marginheight>
   * @deprecated
   */
  marginheight?: string | undefined;
  /**
   * `marginwidth` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#marginwidth>
   * @deprecated
   */
  marginwidth?: string | undefined;
  /**
   * `name` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#name>
   */
  name?: string | undefined;
  /**
   * `privateToken` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#privateToken>
   * @experimental
   */
  privateToken?: string | undefined;
  /**
   * `referrerpolicy` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#referrerpolicy>
   */
  referrerpolicy?: string | undefined;
  /**
   * `sandbox` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#sandbox>
   */
  sandbox?: string | undefined;
  /**
   * `scrolling` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#scrolling>
   * @deprecated
   */
  scrolling?: string | undefined;
  /**
   * `src` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#src>
   */
  src?: string | undefined;
  /**
   * `srcdoc` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#srcdoc>
   */
  srcdoc?: string | undefined;
  /**
   * `width` is an attribute of the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
   * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe#width>
   */
  width?: string | undefined;
}

/**
 * IFRAME renders the [`iframe`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/iframe>
 */
export function IFRAME(
  props?: IframeElementProps,
  ...children: string[]
): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "iframe",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
