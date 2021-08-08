import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react'
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'Doctors Appointment',
        day:'Feb 5th at 2:20pm',
        reminder:true
    },
    {
        id:2,
        text:'Buy coca-cola',
        day:'Feb 6th at 12:50am',
        reminder:false
    }
  ])






  //Delete Task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
  }


  //Toggle reminder

  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=>
      task.id === id ? {...task, reminder : !task.reminder}:
      task    
    ))
  }



  return (
    <div className="container">
      <Header title='This is a props title'/>
      <AddTask/>
      {tasks.length > 0 ? <Tasks 
        tasks={tasks}
        onDelete = {deleteTask} 
        onToggle = {toggleReminder}
      />:
      "No Tasks To Show"}
    </div>
  );
}

export default App;
