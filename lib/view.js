import { isClass } from './util/is-class';

const anElement = (element, props, children) => {
  if (typeof (element) === 'function') {
    return element(props);
  } else {
    const e = document.createElement(element);
    for (let i = 0, len = children.length; i < len; i++) {
      const child = children[i];

      if (typeof (child) === 'object') {
        e.appendChild(child);
      } else {
        e.innerHTML += child;
      }
    }
    return e;
  }
};

const createElement = (element, props, ...children) => {
  return anElement(element, props, children);
};

const controllers = [];

const bind = (viewMethod, domElement) => {
  const element = createElement(c.index);
  domElement.appendChild(element);
};

export default { bind, createElement };

