import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super()
    this.state = {
      input: ''
    }
  }

  handleChanges = e => {
    this.setState({
      ...this.state,
      input: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    // this.props.addTask(this.state.input)
    console.log(e);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChanges} type='text' name='todo' />
          <button>Add Todo</button>
        </form>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>
      </div>
    )
  }
}

export default TodoForm;