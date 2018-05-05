import React from 'react';
import TasksList from './TasksList';

class App extends React.Component {

  state = {
    tasks: {},
    completed: {}
  };

  addTask = (task) => {
    const tasks = {...this.state.tasks};
    

  }

  render() {
    return (
      <div>
        <h1>To-Do List</h1>

        <button>+ Add Task</button>

        <TasksList componentTitle="Backlogs"/>

        <TasksList componentTitle="Completed Tasks" />
      </div>
      
    )
  }
}

export default App;