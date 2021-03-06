import React from 'react';
import ReactDOM from 'react-dom';
import Flashcard from './flashcard'; 
import FlashcardEvent from './flashcardEvent';
import ProvidedTasks from './providedTasks';
// import NewTaskForm from './newTaskForm'
// import AddedTasks from './addedTasks';

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
//Connect the list of tasks to firebase in separate json file


class App extends React.Component {
    constructor (props) { //props
      super (props);
      this.state = {
        tasks: [],
        displayedTask: {
          name: "Accessibility Flashcard: click below to draw a random card",
          description: "Find more information on the back"
        },
        task: ""
      }
      // this.handleChange = this.handleChange.bind(this);
      // this.addTask = this.addTask.bind(this);
      this.updateFlashcard = this.updateFlashcard.bind(this);  
      this.toggleCompleted = this.toggleCompleted.bind(this);
      
    }

    // handleChange(e){
    //   this.setState({
    //     // task: e.target.value
    //     [e.target.name]: e.target.value
    //   });
    // }


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
      this.setState({
        tasks: snapshot.val()
      })

    });
    }


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
      const checklistItemCompletion = this.state.tasks[id];
      console.log(checklistItemCompletion)

      const dbref = firebase.database().ref(`/tasks/${id}`);
      
      checklistItemCompletion.completed = checklistItemCompletion.completed === true ? false : true;
      delete checklistItemCompletion[id];
      dbref.set(checklistItemCompletion);
      console.log(checklistItemCompletion);
    }

  toggleConsidered(id) {
    const checklistItemCompletion = this.state.tasks[id];
    console.log(checklistItemCompletion)

    const dbref = firebase.database().ref(`/tasks/${id}`);

    checklistItemCompletion.completed = checklistItemCompletion.completed === true ? false : true;
    delete checklistItemCompletion[id];
    dbref.set(checklistItemCompletion);
    console.log(checklistItemCompletion);
  }


    render() {
      return (
        <div>
          <header>
            <h1> <span className="titleFont">Accessibility </span>Checklist</h1>
            <p className="subhead">A starter guide to creating a barrier-free experience</p>
            <div className="learning">
              <h3><span className="question">Still learning?  &nbsp;</span>Draw a random flashcard to practice</h3>
              <Flashcard name={this.state.displayedTask.name} description={this.state.displayedTask.description}/>
              <FlashcardEvent showFlashcard={this.updateFlashcard}/>
              <p className="cardNotes">Flashcard text adapted from the HackerYou Web Development notes. Accessibility does not end with these 18 tasks ... but it's a good place to start. </p>
            </div>
            <h3><span className="question">Project-Ready? </span> Check the tasks when complete</h3>
            <p className="taskNotes">Remember: accessibility isn't an afterthought. Plan with these principles in mind.</p>
          </header>
          <main className="wrapper">
              <ul className="providedTasks">
                {this.state.tasks.map((task) => {
                  return (
                    <ProvidedTasks data={task} key={task.id} toggleCompleted={this.toggleCompleted}/>
                  )
                })}
              </ul>
          </main>
          <footer>
            <p>&copy; 2018 Natalie Van Dine </p>
          </footer>
        </div>
      )
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
