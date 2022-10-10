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
    const letterCounter = 350 - inputValue.length;

    const handleAddNote = (e) => {
        e.preventDefault();
        if(newNote.noteBody !== ''){
            setNotes([...notes,newNote]);
            setInputValue('');
            e.target.reset();
        }
    }
  return (
    <div className='add-note'>
        <form onSubmit={handleAddNote}>
            <textarea 
                placeholder='Type to add a new note' 
                maxLength={350} 
                onChange={(e) => setInputValue(e.target.value)} 
            />
            <div className='add-note-footer'>
                <span style={{fontSize: '14px'}}>{letterCounter} remaining</span>
                <button style={{borderRadius: '20px'}} >Save</button>
            </div>
        </form>
    </div>
  )
}
export default AddNote;