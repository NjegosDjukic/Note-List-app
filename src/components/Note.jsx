import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const Note = ({noteBody,date, id, setNotes, notes}) => {
  
  const handleDeleteNote = () => {
   setNotes(notes.filter(note => note.id !== id));
  }
  return (
    <div className='note'>
        <div className='note-header'>
            <span>{noteBody}</span>
        </div>
        <div className='note-footer'>
            <span>{date}</span>
            <AiFillDelete onClick={handleDeleteNote} style={{cursor: 'pointer'}} />
        </div>
    </div>
  )
}
export default Note;