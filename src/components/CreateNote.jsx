import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  const [note, setInput] = useState({
    title: "",
    content: "",
  });

  function handelChange(event) {
    const { value, name } = event.target;
    setInput((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function onClick(event) {
    props.addNote(note);
    setInput({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handelChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handelChange}
          value={note.content}
        />
        <button onClick={onClick}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
