import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import NoteList from './components/NoteList';
import { getDarkModeFromLocalStorage, getNotesFromLocalStorage } from './get-items';

const App = () => {
  const [notes, setNotes] = useState(getNotesFromLocalStorage());
  const [darkMode, setDarkMode] = useState(getDarkModeFromLocalStorage());
  const [searchValue, setSearchValue] = useState();
  
  const getSearchValue = (value) => {
    setTimeout(() => setSearchValue(value),0 )
  }
  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  useEffect(() => localStorage.setItem('dark-mode',JSON.stringify(darkMode)), [darkMode] )
  useEffect(() => localStorage.setItem('note', JSON.stringify(notes)), [notes]);

  return (
    <div className='body' style={{backgroundColor: darkMode ? '#293045' : '#fff'}}>
      <div className='wrapper'>
        <Header handleDarkMode={handleDarkMode} />
        <Search getSearchValue={getSearchValue} />
        <NoteList 
          notes={notes} 
          setNotes={setNotes} 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
        />
      </div>
    </div>
  );
}
export default App;
