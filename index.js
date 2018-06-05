import 'todomvc-app-css/index.css';

import { Controller, Application } from './lib';
import view, { render } from './lib/view'; // eslint-disable-line

class TodoController extends Controller {

  onKeyDown(e) {
    if (e.keyCode !== 13) {
      return;
    }

    event.preventDefault();

  }

  @render
  index() {
    return (
      <div>
        <header className="header">
          <h1>todos</h1>
          <input
            class="new-todo"
            placeholder="What needs to be done?"
            value={this.newTodo}
            onkeydown={this.handleNewTodoKeyDown}
            onchange={this.handleChange}
          />
        </header>
      </div>
    );
  }
}

const app = new Application();

app.addController(TodoController, 'root', document.getElementsByClassName('todoapp')[0]);
