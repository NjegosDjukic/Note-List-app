import { useState } from 'react';

const Search = ({getSearchValue}) => {
  const [searchValue, setSearchValue] = useState('');
  getSearchValue(searchValue)
  
return (
    <div style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
      <input 
        type='search' 
        className='search-field' 
        placeholder= 'Search for your notes'
        onChange={e => setSearchValue(e.target.value)} 
      />
    </div>
  )
}
export default Search;