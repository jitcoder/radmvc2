import { Controller, Application } from './lib';
import view, { render } from './lib/view'; // eslint-disable-line

class TodoController extends Controller {
  items = [];
  itemValue = ''; 

  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }

  onInputChange(e) {
    this.itemValue = e.target.value;
  }

  onAddClick(e) {
    e.preventDefault();
    this.items.push(this.itemValue);
    this.index();
  }

  @render
  index() {
    return (
      <div>
        <input type="text" onchange={this.onInputChange} placeholder="Enter item here" value={this.itemValue} />
        <button onclick={this.onAddClick}>Add</button>
        <br />
        {this.todos()}
      </div>
    );
  }

  todos() {
    const results = [];
    for (const item of this.items) {
      results.push(<li>{item}</li>);
    }

    return <ul>{results}</ul>;
  }
}

const app = new Application();

app.addController(TodoController, 'root', document.getElementById('root'));
