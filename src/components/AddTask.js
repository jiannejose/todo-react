import React from 'react';

class AddTask extends React.Component {

  nameRef = React.createRef();
  detailsRef = React.createRef();
  deadlineRef = React.createRef();

  saveTask = (event) => {
    event.preventDefault();

    const task = {
      name: this.nameRef.value.value,
    }
    
  }

  render() {
    return (
      <div>
        <h2>Adding Task</h2>

        <form action="post" onSubmit={this.saveTask}>
          <label htmlFor="task_name">Task Name</label> <br/>
          <input type="text" name="task_name" placeholder="Task Name" ref={this.nameRef}/> <br/>

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