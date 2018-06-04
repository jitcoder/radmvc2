import { patch, mount } from 'petit-dom';

export default class Controller {
  $view = null;
  $element = null;

  render(newNode) {
    if (this.$view) patch(newNode, this.$view, this.$element);
    if (!this.$view) this.$element.appendChild(mount(newNode));

    this.$view = newNode;
  }
}
