import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  toggleCompleted = (selectedTodo) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if(todo.id === selectedTodo.id) {
          return({
            ...todo,
            completed: !todo.completed
          })
        } else {
          return todo;
        }
      })
    })
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList toggleCompleted={this.toggleCompleted} todos={this.state.todos}/>
        <TodoForm />
      </div>
    );
  }
}

export default App;
