import { view, Controller, Application } from './lib';

class RootController extends Controller {
  count = 0;

  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.preventDefault();
    this.count++;
    this.index();
  }

  @view.render
  index() {
    return (
      <div>
        <button onclick={this.onClick}>Click Me</button>
        {this.counter()}
      </div>
    );
  }

  counter() {
    return <div>current count is {this.count}</div>;
  }
}

const app = new Application();

app.addController(RootController, 'root', document.getElementById('root'));
