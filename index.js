import { view } from './lib';


const Hello = function () {
  return view.createElement('div', null, 'Hello World');
}

const helloWorld = view.createElement(Hello, null, null);
view.render(helloWorld, document.getElementById('root'));
