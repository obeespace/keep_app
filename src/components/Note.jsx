import React from "react";
import {ImBin2} from "react-icons/im"
// import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><ImBin2 /></button>
    </div>
  );
}

export default Note;