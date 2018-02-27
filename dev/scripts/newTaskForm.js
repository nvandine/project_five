import React from 'react';

class NewTaskForm extends React.Component {
    constructor(){
        super();
        
    }

    render(){
        return(
            <form onSubmit={this.addTask}>
                <input type="text" name="task" value={this.state.task} onChange={this.handleChange}/>
                <button>Add New Accessibility Task</button>
            </form>
        )
    }
}

export default NewTaskForm