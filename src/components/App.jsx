import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";

function App() {
  const [note, setNotes] = useState([]);
  function addNote(note) {
    setNotes((prevNotes) => [...prevNotes, note]);
    console.log(note);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateNote addNote={addNote} />
      {note.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
        />
      ))}
      {/* {notes.map((createNote) => (
        <Note
          key={createNote.id}
          title={createNote.title}
          content={createNote.content}
        />
      ))} */}
      <Footer />
    </div>
  );
}
export default App;
