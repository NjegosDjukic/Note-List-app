import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Search = ({getSearchValue}) => {
  const [searchValue, setSearchValue] = useState('');
  
  useEffect(() => getSearchValue(searchValue),[searchValue])
  
return (
      <div className='search-wrap' >
        <div style={{display: 'flex', alignItems: 'center'}}>
          <AiOutlineSearch className='icon'/>
        </div>
        <input
          type='text' 
          placeholder='Search for your notes' 
          onChange={e => setSearchValue(e.target.value)}
        />
      </div>
  )
}
export default Search;