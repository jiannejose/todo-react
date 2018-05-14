import React from 'react';
import TasksList from './TasksList';
import axios from 'axios';

class App extends React.Component {

  state = {
    tasks: {}
  };

  // going to Add Task Page
  goToAddTask = (event) => {
    event.preventDefault();
    this.props.history.push('/add-task');
  }

  componentDidMount() {
    axios.get('http://todo.local/tasks/list')
      .then((response) => {
        this.setState({ tasks:response.data });

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>To-Do List</h1>

        <button onClick={this.goToAddTask}>+ Add Task</button>

        <TasksList componentTitle="Backlogs"/>

        <TasksList componentTitle="Completed Tasks" />
      </div>
      
    )
  }
}

export default App;