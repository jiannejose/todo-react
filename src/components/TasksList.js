import React from 'react';
import Task from './TasksList/Task';

class TasksList extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.componentTitle}</h3>

        <ol>
          <Task />
        </ol>
      </div>
    )
  }
}

export default TasksList;