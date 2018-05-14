import React from 'react';
import axios from 'axios';

class AddTask extends React.Component {

  nameRef = React.createRef();
  detailsRef = React.createRef();
  deadlineRef = React.createRef();

  saveTask = (event) => {
    event.preventDefault();

    const task = new FormData();
    task.append('title', this.nameRef.current.value);
    task.append('details', this.detailsRef.current.value);
    task.append('deadline_at', this.deadlineRef.current.value);

    axios.post('http://todo.local/tasks/create', task)
      .then((response) => {
        this.props.history.push('/');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h2>Adding Task</h2>

        <form onSubmit={this.saveTask}>
          <label htmlFor="task_name">Task Name</label> <br/>
          <input type="text" ref={this.nameRef} name="task_name" placeholder="Task Name" /> <br/>

          <br/>
          <br/>
          <label htmlFor="task_details">Details</label> <br/>
          <textarea name="task_details" cols="30" rows="10" placeholder="Add details here..." ref={this.detailsRef}></textarea> <br/>

          <br/>
          <br/>
          <label htmlFor="task_deadline">Deadline</label> <br/>
          <input type="date" name="task_deadline" ref={this.deadlineRef}/>
        
          <br/>
          <br/>
          <button type="submit">Save Task</button>
        </form>
      </div>
    )
  }
}

export default AddTask;