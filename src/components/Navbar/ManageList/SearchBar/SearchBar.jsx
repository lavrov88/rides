import React from "react"
import './SearchBar.scss'

const SearchBar = (props) => {

  const handleSearchValueChange = (e) => {
    const action = {
      type: 'SET-SEARCH-VALUE',
      payload: e.target.value
    }    
    props.dispatch(action)
  }

  const handleSearchClearBtn = () => {
    const action = {
      type: 'SET-SEARCH-VALUE',
      payload: ''
    }    
    props.dispatch(action)
  }

  return (
    <div className="search_input__wrapper">
      <input
        autoFocus
        className="search_input__input"
        type="text"
        placeholder="Place, road, rider, year, etc."
        value={props.searchValue}
        onChange={handleSearchValueChange} />
      <div className="search_input__clear_btn_wrapper">
        <button 
          onClick={handleSearchClearBtn} 
          className="search_input__clear_btn">
        </button>
      </div>
    </div>
  )
}

export default SearchBar