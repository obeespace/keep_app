import React, { useState } from "react";
import "../index.css";
import {BsFillPlusSquareFill} from "react-icons/bs"
// import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [hold, sethold] = useState(false)
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function twick(){
    sethold(function(prev){
      return !prev
    })
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {hold && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onChange={handleChange}
          onMouseDown={twick}
          value={note.content}
          placeholder="Take a note..."
          rows = {hold ? "3":"1"}
        />
        {hold && <button onClick={submitNote}><BsFillPlusSquareFill /></button>}
      </form>
    </div>
  );
}

export default CreateArea;
