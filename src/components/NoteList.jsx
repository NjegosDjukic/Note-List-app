import Note from './Note';

const NoteList = ({notes, setNotes, searchValue}) => {
 
  return (
    <>
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
    </>
  )
}
export default NoteList;