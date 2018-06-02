import { view } from './lib';

class RootController {
  constructor() {
    this.username = 'bob';
  }

  index() {
    return view.createElement('div', null, 'Hello World');
  }
}

view.mount(RootController, document.getElementById('root'));
