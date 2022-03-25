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


   return (
     <div className="search_input__wrapper">
       <input 
        className="search_input__input" 
        type="text" 
        placeholder="Place, road, rider, year, etc."
        value={props.searchValue}
        onChange={handleSearchValueChange} />
     </div>
   )
}

export default SearchBar