import Note from './Note';
import AddNote from './AddNote';

const NoteList = ({notes, setNotes, searchValue}) => {
 
  return (
    <div className='notes-wrap'>
      {notes.filter((note) => note.noteBody.toLowerCase().includes(searchValue))
        .map((note) => (
          <Note 
            key={note.id} 
            noteBody={note.noteBody} 
            date={note.date} 
            id={note.id} 
            notes={notes}
            setNotes={setNotes}
          />
        ))}
        <AddNote notes={notes} setNotes={setNotes}  />
    </div>
    
  )
}
export default NoteList;