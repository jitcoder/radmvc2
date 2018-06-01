const anElement = (element, children) => {
  if (typeof (element) === 'function') {
    return element();
  } else {
    const e = document.createElement(element);
    for (let i = 0, len = children.length; i < len; i++) {

    }
    return e;

  }
};

const createElement = (element, props, ...children) => {
  return anElement(element, children);
};

const render = (element, domElement) => {
  domElement.appendChild(element);
};

export default { render, createElement };

