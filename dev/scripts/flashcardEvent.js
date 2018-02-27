import React from 'react';

class FlashcardEvent extends React.Component {
    constructor(props){
        super(props);

        this.showFlashcard = this.showFlashcard.bind(this);
    }

    showFlashcard () {
        this.props.showFlashcard()
    }

    render(props){
        return(
            <div>
                <button className="taskButton" onClick={this.showFlashcard}>Get Random Flashcard</button>
            </div>
        )
    }

}

export default FlashcardEvent