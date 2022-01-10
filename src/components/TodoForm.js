import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type='text' name='todo' />
          <button>Add Todo</button>
        </form>
      </div>
    )
  }
}

export default TodoForm;