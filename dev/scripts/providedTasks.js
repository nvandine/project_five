import React from 'react';

const ProvidedTasks = (props) => (
    <li className="ProvidedTasksContainer">
        <div className="flashcardContainer">
            <div className="flashcard">
                <div className="cardname">
                    <div className="taskShort">{props.data.name}</div>
                </div>
                <div className="cardDescription">
                    <div className="taskLong">{props.data.description}</div>
                </div>
            </div>
        </div>
        <p>{props.data.name}
            <input type="checkbox"
            onChange={() => props.toggleCompleted(props.data.id)} 
            checked = {props.data.completed}
            />
        </p>

    </li>
)

export default ProvidedTasks