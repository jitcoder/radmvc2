/**
 * Fork of https://github.com/yelouafi/petit-dom.git (MIT)
 */

import { h } from "./h";
export { mount, patch, unmount, diffChildren } from "./vdom";

export function render(target, key, descriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args) { // eslint-disable-line
    const result = original.apply(this, ...args);
    this.render(result);
  };

  target[key].view = true; // eslint-disable-line
  return descriptor;
}

const createElement = (type, props, contentArg) => {
  debugger;
  return h(type, props, contentArg);
}

export default { createElement };