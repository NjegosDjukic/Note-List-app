import React from 'react';
import { AiFillDelete } from 'react-icons/ai';

const Note = ({noteBody,date, id, setNotes, notes}) => {
  
  const handleDeleteNote = () => {
   setNotes(notes.filter(note => note.id !== id));
  }
  return (
    <div className='note' style={{flexGrow: (notes.length === 0 || notes.length === 1 )  && '1'}}>
      <div className='note-header'>
        <span>{noteBody}</span>
      </div>
      <div className='note-footer'>
        <span>{date}</span>
        <AiFillDelete onClick={handleDeleteNote} className='icon' />
      </div>
    </div>
  )
}
export default Note;