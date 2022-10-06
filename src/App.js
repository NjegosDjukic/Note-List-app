import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';

const getNotesFromLocalStorage = () => {
  const notes = localStorage.getItem('note');
  if(notes) {
    return JSON.parse(localStorage.getItem('note'));
  } else {
    return [];
  }
}
const getDarkModeFromLocalStorage = () => {
  const darkMode = localStorage.getItem('dark-mode');
  if(darkMode) {
    return JSON.parse(localStorage.getItem('dark-mode'));
  }
}
const App = () => {
  const [notes, setNotes] = useState(getNotesFromLocalStorage());
  const [darkMode, setDarkMode] = useState(getDarkModeFromLocalStorage());
  const [searchValue, setSearchValue] = useState();
  
  const getSearchValue = (value) => {
    setTimeout(() => setSearchValue(value),0 )
  }
  const handleDarkMode = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('dark-mode',JSON.stringify(darkMode))
  }
  useEffect(() => localStorage.setItem('dark-mode',JSON.stringify(darkMode)), [darkMode] )
  useEffect(() => localStorage.setItem('note', JSON.stringify(notes)), [notes]);

  return (
    <div className='body' style={{backgroundColor: darkMode ? '#293045' : '#fff'}}>
      <div className='wrapper'>
        <Header handleDarkMode={handleDarkMode} />
        <Search getSearchValue={getSearchValue} />
        <div className='notes-wrap'>
          <NoteList 
            notes={notes} 
            setNotes={setNotes} 
            searchValue={searchValue} 
            setSearchValue={setSearchValue}
          />
          <AddNote notes={notes} setNotes={setNotes}  />
        </div>
      </div>
    </div>
  );
}
export default App;
