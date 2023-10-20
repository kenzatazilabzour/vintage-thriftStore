import React, { useState } from 'react';

export default function NotesComponent() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim()) {
      setNotes([...notes, { text: newNote }]);
      setNewNote('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new note"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      />
      <button onClick={addNote}>Add Note</button>

      {notes.length === 0 ? (
        <div>No Notes Yet!</div>
      ) : (
        <ul>
          {notes.map((note, index) => (
            <li key={index}>{note.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
