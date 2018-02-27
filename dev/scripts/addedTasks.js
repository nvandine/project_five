
    import React from 'react';

    const AddedTasks = (props) => (
        <form onSubmit={this.addTask} className="form1">
            <label htmlFor="task">Accessibility Task</label>
            <input type="text" name="task" value={this.state.name} onChange={this.handleCardChange} id="name" />
            <input type="submit" value="Add Accessibility Task" />
        </form>

    )

    export default AddedTasks