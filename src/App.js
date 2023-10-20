import React, {useState, useContext} from 'react';
import Navbar from "./components/Navbar"
import About from "./components/About"
import NoteState from './context/notes/NoteState';
import noteContext from './context/notes/noteConttext';
import Home from "./components/Home"

function App() {

  const [note, setNote] = useState('my name is ')
  // eslint-disable-next-line
const a = useContext(noteContext)
  const timeEvent =  ()=>{
    setTimeout(() => {
      setNote('my name is ')
    }, 5000);
  }
  timeEvent();

  return (
    <>
    <NoteState>
    <Navbar/>
   <About/>
   <Home/>
    </NoteState>
    </>
  );
}

export default App;
