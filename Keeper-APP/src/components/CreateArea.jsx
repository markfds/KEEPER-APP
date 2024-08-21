import React, { useState } from "react";
import Note from "./Note";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function trackNote(event) {
    const { name, value } = event.target;
    setNote((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={trackNote}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={trackNote}
          cols={3}
          placeholder="Add Content"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.onAdd(note);
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
