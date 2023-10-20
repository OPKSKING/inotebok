import React,{useState} from "react";
import NoteContext from "./noteConttext";
import { response } from "express";

const NoteState = (props)=>{

 
  const f1 = []
const getAllNotes = async ()=>{
 const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: "GET",
     headers: {
      "Content-Type": "application/json",
      "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNzQ1YWExYWVmMjUyOWU4M2VjYjcyIn0sImlhdCI6MTY5MzY0OTQ4NH0.zqv6K_KW4_Y57kdb4ToQP40acaxfch_iBbA_D_UlGVY"
    },
  });
const json = await response.json()
  console.log(json)
  setNotes(json)
  }

  const host = 'http://localhost:5000'

  const addNote = async(title, description, tag)=>{
  const response = await fetch(`${host}/api/notes/addnotes`, {
    method: "POST",
     headers: {
      "Content-Type": "application/json",
      "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNzQ1YWExYWVmMjUyOWU4M2VjYjcyIn0sImlhdCI6MTY5MzY0OTQ4NH0.zqv6K_KW4_Y57kdb4ToQP40acaxfch_iBbA_D_UlGVY"
    },
    body: JSON.stringify({title, description, tag})
  });
  }
  const json = response.json()
  setNotes(json)
  const [notes, setNotes] = useState(f1)
const deleteNote = (id)=>{
const newNotes = notes.filter((note)=>{return note._id!==id})
setNotes(newNotes)
}

    return(
        <NoteContext.Provider value={{notes,addNote, getAllNotes, deleteNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState