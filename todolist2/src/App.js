import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import img from './pencil.png';

class App extends Component {

  constructor() {
    super();
    this.state = {
      todo: [
        "this is my first todo",
        "this is my 2nd todo",
        "this is 3rd todo",
        "this is 4th"

      ]
    }
  }

  handleaddtodo = () => {
    const entry = prompt('enter ToDo');
    let todo = [...this.state.todo];
    todo.push(entry);
    this.setState({ todo });
  }


  render() {
    return (
      <div className="App">
        <button onClick={() => this.handleaddtodo()} className="Add-button">+</button>
        <div className="container App-header">

          <ul className="App-list">
            <img src={img} alt="my todo app" />
            {this.state.todo.map(todo =>
              <div className="row">
                <li>
                  <div class="col-lg">
                    {todo.length < 20 ? todo : todo.substr(0, 20) + '...'}
                  </div>
                </li>
                <div class="col-lg">
                  <button >
                    X
                  {/* <i class="far fa-times-circle"></i> */}
                  </button>
                </div>

              </div>

            )}

          </ul>
          <button onClick={() => this.handleaddtodo()} id="Add-button btn btn-lg">+ ADD</button>
        </div>
      </div >
    );
  }
}

export default App;
