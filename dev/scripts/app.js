import React from 'react';
import ReactDOM from 'react-dom';
import Flashcard from './flashcard'; //is this the right path?? folder??
import FlashcardEvent from './flashcardEvent';
import ProvidedTasks from './providedTasks'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBdPqLlw1Q-oyHclEM6C4BEH6VOiMugobI",
  authDomain: "acessibility-cl.firebaseapp.com",
  databaseURL: "https://acessibility-cl.firebaseio.com",
  projectId: "acessibility-cl",
  storageBucket: "",
  messagingSenderId: "81664691711"
};
firebase.initializeApp(config);

//Create a checklist that helps users doing an HTML/CSS project track how accessible it is
//Use flashcards to show description of task in more detail (firebase)
//Create inputs for users to add their own notes/checklist items
//Allow users to delete the added notes/checklist items
//Connect the list of tasks to firebase in separate json file


class App extends React.Component {
    constructor (props) { //props
      super (props);
      this.state = {
        tasks: [],
        displayedTask: {}
      }
      this.updateFlashcard = this.updateFlashcard.bind(this);  
      this.toggleCompleted = this.toggleCompleted.bind(this);
      
    }

    handleCardChange(e){
    this.setState({
      tasks: displayedTasks,
      displayedTask: this.clickedTask(displayedTasks)
      // method to have the clicked task on checklist appear in flashcards vs random task
      }
    )
  }

    componentDidMount() {
    const displayedTasks = this.state.tasks;
    const dbref = firebase.database().ref('/tasks');

    dbref.on('value', (snapshot) => {
      // console.log(snapshot.val());
      this.setState({
        tasks: snapshot.val()
      })

    });
    }

    // dbref.on()
  
    
    // event handler?
    // Do I need a different method here. on click?
    clickedTask(displayedTasks) {
      const task = displayedTasks[Math.floor(Math.random()*displayedTasks.length)];
      console.log(task);
      return(task);
    } 

    updateFlashcard(){
      console.log("Show Card!")
      const displayedTasks = this.state.tasks;
      this.setState({
        displayedTask: this.clickedTask(displayedTasks)
      })
    }

    toggleCompleted(id){
      // console.log(id);
      const checklistItemCompletion = this.state.tasks[id];
      console.log(checklistItemCompletion)

      const dbref = firebase.database().ref(`/tasks/${id}`);
      
    }

    render() {
      return (
        <div>
          <header>
            <h1>Natalie Tries Things</h1>
            <Flashcard name={this.state.displayedTask.name} description={this.state.displayedTask.description}/>
            <FlashcardEvent showFlashcard={this.updateFlashcard}/>
          </header>
          <main>
              <ul className="providedTasks">
                {this.state.tasks.map((task) => {
                  return (
                    <ProvidedTasks data={task} key={task.id} toggleCompleted={this.toggleCompleted}/>
                  )

                })}
              </ul>
              <ul className="addedTasks">

              </ul>
          </main>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
