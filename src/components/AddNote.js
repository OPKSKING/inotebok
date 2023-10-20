import React, { useContext, useState} from "react";
import noteContext from "../context/notes/noteConttext";

export default function Home(props) {
    const context = useContext(noteContext)

    const [note, setNote] = useState({ title: "", description: "", tag: "default" })
    const handleClick = (event) => {
        event.preventDefault()
        context.addNote(note.title, note.description, note.tag);
    }
    const onChange = (e) => {
        e.preventDefault()
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <>
        <div>

                <div className="mx-5">
                <div className="mx-5">
            <form>
                    <div className="mb-3">
                        <label onChange={onChange} htmlFor="exampleInputEmail1" className="form-label">Title</label>
                        <input name="title" type="text"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onSubmit={(e) => e.preventDefault()}/>
                    </div>
                    <div className="mb-3">
                        <label  htmlFor="exampleInputPassword1" className="form-label">Description</label>
                        <input name="description" onChange={onChange} type="text" className="form-control" id="exampleInputPassword1" onSubmit={(e) => e.preventDefault()}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
                        <input name="tag" onChange={onChange} type="text" className="form-control" id="exampleInputPassword1" onSubmit={(e) => e.preventDefault()}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleClick} onSubmit={(e) => e.preventDefault()}>Submit</button>
            </form>
            </div>
            </div>
        </div>
            </>
    )
}