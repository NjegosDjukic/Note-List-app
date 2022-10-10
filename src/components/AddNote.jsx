import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddNote = ({notes, setNotes}) => {
    const date = new Date();
    const currentDate = date.getDate()+"/"+(date.getMonth()+1)+"/"+ date.getFullYear();
    const [inputValue, setInputValue] = useState('');
    
    const newNote = {
        id: uuidv4(),
        noteBody: inputValue,
        date : currentDate
    }
    const letterCounter = 300 - inputValue.length;

    const handleAddNote = (e) => {
        e.preventDefault();
        if(newNote.noteBody !== ''){
            setNotes([...notes,newNote]);
            setInputValue('');
            e.target.reset();
        }
    }
  return (
    <div className='add-note' style={{flexGrow: notes.length === 0 || notes.length ===1  ? '1' : '0'}}>
        <form onSubmit={handleAddNote}>
            <textarea 
                placeholder='Type to add a new note' 
                maxLength={300} 
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <div className='add-note-footer'>
                <span style={{fontSize: '14px'}}>{letterCounter} remaining</span>
                <button type='submit'>Save</button>
            </div>
        </form>
    </div>
  )
}
export default AddNote;