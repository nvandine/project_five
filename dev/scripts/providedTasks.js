import React from 'react';
import Flashcard from './flashcard'

const ProvidedTasks = (props) => (
    <li className="providedTasksContainer">
        <Flashcard name={props.data.name} description={props.data.description}/>
        <p>{props.data.name}
            <input type="checkbox"
            onChange={() => props.toggleCompleted(props.data.id)} 
            checked = {props.data.completed}
            />
        </p>

    </li>
)

export default ProvidedTasks