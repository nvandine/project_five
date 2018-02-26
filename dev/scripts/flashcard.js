import React from 'react';


// class Flashcard extends React.Component {
//     constructor() {
//         super();

//     }

const Flashcard = (props) => (
    <div className="flashcardContainer">
        <div className="flashcard">
            <div className="cardname">
                <div className="taskShort">{props.name}</div>
            </div>
            <div className="cardDescription">
                <div className="taskLong">{props.description}</div>
            </div>
        </div>
    </div>
)

export default Flashcard

// ReactDOM.render(<App />, document.getElementById('app'));
