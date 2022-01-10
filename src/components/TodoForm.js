import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type='text' name='todo' />
          <button>Add Todo</button>
          <button>Clear Completed</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;