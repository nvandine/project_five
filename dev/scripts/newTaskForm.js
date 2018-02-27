import React from 'react';

class NewTaskForm extends React.Component {
    constructor(){
        super();
        
    }

    render(){
        return(
            <form>
                <input type="text" name="task" value={this.state.task}/>
                <button>Add New Accessibility Task</button>
            </form>
        )
    }
}

export default NewTaskForm