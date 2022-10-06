import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';

const getLocalItems = () => {
  const notes = localStorage.getItem('note');
  if(notes) {
    return JSON.parse(localStorage.getItem('note'));
  } else {
    return [];
  }
}

const App = () => {
  const [notes, setNotes] = useState(getLocalItems());
  const [darkMode, setDarkMode] = useState(false);
  const [searchValue, setSearchValue] = useState();
  
  const getSearchValue = (value) => {
    setTimeout(() => setSearchValue(value),0 )
    
  }
  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

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
