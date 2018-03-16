import React from 'react';


// class Flashcard extends React.Component {
//     constructor() {
//         super();

//     }

const Flashcard = (props) => (
    <div className="flashcardContainer">
        <div className="flashcard">
            <div className="cardName">
                <p className="taskShort">{props.name}</p>
            </div>
            <div className="cardDescription">
                <p className="taskLong">{props.description}</p>
            </div>
        </div>
    </div>
)

export default Flashcard

// ReactDOM.render(<App />, document.getElementById('app'));
