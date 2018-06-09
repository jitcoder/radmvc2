import { patch, mount } from './view';

export default class Controller {
  $view = null;
  $element = null;

  render(content) {
    const nodes = Array.isArray(content) ? content : [content];

    for (let i = 0; i < nodes.length; i++) {
      const newNode = nodes[i];
      const view = this.$view && Array.isArray(this.$view) ? this.$view[i] : null;

      if (view) patch(newNode, view, this.$element);
      if (!view) this.$element.appendChild(mount(newNode));
    }

    this.$view = content;
  }
}
