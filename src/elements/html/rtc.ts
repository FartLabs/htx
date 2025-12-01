/**
 * @fileoverview
 *
 * This file was generated. Do not modify this file directly.
 */
import type { GlobalAttributes } from "../../global_attributes.ts";
import type { AnyProps } from "../../render.ts";
import { renderElement } from "../../render.ts";

/**
 * RtcElementProps are the props for the [`rtc`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rtc) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rtc>
 * @deprecated
 */
export interface RtcElementProps extends GlobalAttributes {
}

/**
 * RTC renders the [`rtc`](https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rtc) element.
 * @see <https://developer.mozilla.org/docs/Web/HTML/Reference/Elements/rtc>
 * @deprecated
 */
export function RTC(props?: RtcElementProps, ...children: string[]): string {
  const { children: propsChildren, ...rest } = props ?? {};
  const childrenArray = Array.isArray(propsChildren)
    ? propsChildren
    : (propsChildren ? [propsChildren] : []);
  return renderElement(
    "rtc",
    rest as AnyProps,
    false,
    [...childrenArray, ...children],
  );
}
