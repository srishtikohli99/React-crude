import React, {Component} from 'react';
import Login from './components/CrudApp/Login'
import TodoApp from './components/CrudApp/TodoApp'
import './App.css';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp />
      </div>
    );
  }
}

export default App;
