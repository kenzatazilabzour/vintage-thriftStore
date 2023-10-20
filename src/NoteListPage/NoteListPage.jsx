import React, { useState, useEffect } from 'react';
import Note from '../../components/Note/Note';


export default function NoteListPage() {
  const [notes, setNotes] = useState([]);
  const [ascendingOrder, setAscendingOrder] = useState(true);

  useEffect(() => {

  }, []);

  function addNote(note) {
    setNotes([...notes, note]);
  }


  const toggleOrder = () => {
    setAscendingOrder(!ascendingOrder);
  };


  const sortedNotes = [...notes].sort((a, b) => {
    if (ascendingOrder) {
      return new Date(a.createdAt) - new Date(b.createdAt);
    } else {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
  });

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={toggleOrder}>
        Toggle Order ({ascendingOrder ? 'Ascending' : 'Descending'})
      </button>
      {!sortedNotes.length ? <p>No Notes Yet!</p> : null}
      <Note addNote={addNote} />
      {sortedNotes.length > 0 && (
        <ul>
          {sortedNotes.map((note, index) => (
            <li key={index}>{note.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
