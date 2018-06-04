import { h } from 'petit-dom';

function render(target, key, descriptor) {
  const original = descriptor.value;
  descriptor.value = function(...args) { // eslint-disable-line
    const result = original.apply(this, ...args);
    this.render(result);
  };

  target[key].view = true; // eslint-disable-line
  return descriptor;
}

export default { createElement: h, render };
