import React, { useContext } from "react";
import noteContext from "../context/notes/noteConttext";

export default function NoteItem(props) {
    const {title, description, tag} = props
const {deleteNote} = useContext(noteContext)
    return(
        <>
        <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
        <i className="fa-solid fa-trash mx-4" onClick={()=>{deleteNote(props.noteId)}}></i>
        <i className="fa-solid fa-pen-to-square" style={{color: '#232d3e'}}></i>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text">{tag}</p>
  </div>
  </div>
        </>
    )
}