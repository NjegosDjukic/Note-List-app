const Header = ({handleDarkMode}) => {
  
  return (
    <header>
      <h1><span style={{color: 'green'}}>React</span> Notes</h1>
        <div>
          <button className='toggle-button' onClick={handleDarkMode}>Toggle mode</button>
      </div>
    </header>
  )
}
export default Header;