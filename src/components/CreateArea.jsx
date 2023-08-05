import { Fab } from "@mui/material";
import React, { useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(name, value);

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />

        <textarea
          name="content"
          rows="3"
          placeholder="Take a note .... "
          onChange={handleChange}
          value={note.content}
        />
        <Fab onClick={submitNote}>
          <AddRoundedIcon />
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;
