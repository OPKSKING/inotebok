import React,{useContext, useEffect} from "react";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote"
import noteContext from "../context/notes/noteConttext";

export default function Home(props) {
useEffect(()=>{
    getAllNotes()
},[])

    const {notes, getAllNotes} = useContext(noteContext)
    return (

        <>
        <div className="container">

        <AddNote/>
            <div className="row">
            { notes.map((note) => {
                return(     <div className="col-md-4 my-3" key={note._id}>
                 <NoteItem title={note.title} description={note.description} tag={note.tag} noteId={note._id}/>
                </div>)
            }) }
            </div>
            </div>
        </>
    )
}