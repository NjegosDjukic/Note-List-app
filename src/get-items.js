export const getNotesFromLocalStorage = () => {
    const notes = localStorage.getItem('note');
    if(notes) {
      return JSON.parse(localStorage.getItem('note'));
    } else {
      return [];
    }
  }
  export const getDarkModeFromLocalStorage = () => {
    const darkMode = localStorage.getItem('dark-mode');
    if(darkMode) {
      return JSON.parse(localStorage.getItem('dark-mode'));
    }
  }