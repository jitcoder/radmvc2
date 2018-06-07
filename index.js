import 'todomvc-app-css/index.css';

import { Controller, Application } from './lib';
import view, { render } from './lib/view'; // eslint-disable-line

class TodoController extends Controller {
  todos = [];
  newTodo = '';

  constructor() {
    super();

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onKeyDown(e) {
    if (e.keyCode !== 13) {
      return;
    }

    e.preventDefault();

    this.todos.push(this.newTodo);
    this.newTodo = '';

    this.index();
  }

  onChange(e) {
    this.newTodo = e.target.value;
  }

  todoItems() {
    const items = [];
    for (let i = 0; i < this.todos.length; i++) {
      items.push(
        <li class="">
          <div class="view">
            <input class="toggle" type="checkbox" />
            <label>{this.todos[i]}</label>
            <button class="destroy"></button>
          </div>
        </li>
      )
    }

    return (
      <ul class="todo-list">
        {items}
      </ul>
    );
  }

  main() {
    if (!this.todos.length) {
      return null;
    } else {
      return <section class="main">
        <input
          id="toggle-all"
          class="toggle-all"
          type="checkbox"
          onchange={this.toggleAll}
          checked={this.todos.length === 0}
        />
        <label htmlfor="toggle-all" />
        {this.todoItems()}
      </section>;
    }
  }

  @render
  index() {
    return (
      <view>
        <header class="header">
          <h1>todos</h1>
          <input
            class="new-todo"
            placeholder="What needs to be done?"
            value={this.newTodo}
            onkeydown={this.onKeyDown}
            onchange={this.onChange}
          />
        </header>
        {this.main()}
      </view>
    );
  }
}

const app = new Application();

app.addController(TodoController, 'root', document.getElementsByClassName('todoapp')[0]);
