import { useState } from 'react'

const Search = ({getSearchValue}) => {
  const [searchValue, setSearchValue] = useState('');
  getSearchValue(searchValue)
return (
    <>
      <input 
        type='search' 
        className='search-field' 
        placeholder= 'Search for your notes'
        onChange={e => setSearchValue(e.target.value)} 
      />
    </>
  )
}
export default Search;