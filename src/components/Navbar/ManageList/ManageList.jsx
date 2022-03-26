import React from "react"
import './ManageList.scss'
import FilterMenu from "./FilterMenu/FilterMenu"
import SortMenu from "./SortMenu/SortMenu"
import SearchBar from "./SearchBar/SearchBar"

const ManageList = (props) => {
  const filterMenuIsOpened = props.navbar.filterMenuIsOpened
  const searchMenuIsOpened = props.navbar.searchMenuIsOpened
  const sortMenuIsOpened = props.navbar.sortMenuIsOpened

  const filterAdditionalInfo = () => {
    const bikers = props.bikers
    const filteredBikers = props.navbar.output.filteredBikers
    
    if (filteredBikers.length === bikers.length
      || filteredBikers.length === 0
      || props.navbar.filterMenuIsOpened) {
      return null
    }
    if (props.navbar.output.filteredBikers.length === 1) {
      return `(Mr. ${props.navbar.output.filteredBikers[0]} only)`
    }
    return `(${filteredBikers.length}/${bikers.length})`
  }

  const toggleButton = (type) => {
    return () => {
      const action = { type: `TOGGLE-${type}-MENU` }
      props.dispatch(action)
    }
  }
  const toggleFilterMenu = toggleButton('FILTER')
  const toggleSearchMenu = toggleButton('SEARCH')
  const toggleSortMenu = toggleButton('SORT')

  return (
    <>
      <div className="manage_list">
        <div className="manage_list__global_buttons">
          <button
            onClick={toggleSearchMenu}
            className="manage_list__btn search_btn">
            <img src="./img/magnifying-glass.png" className="manage_list__btn__search_icon" alt="S" />
          </button>
          <button
            onClick={toggleFilterMenu}
            className="manage_list__btn filter_btn">
            <div className="manage_list_btn__text">Filter{filterAdditionalInfo() && ':'}</div>
            <div className="filter_btn__description">{filterAdditionalInfo()}</div>
          </button>
          <button
            onClick={toggleSortMenu}
            className="manage_list__btn sort_btn">
            <div className="manage_list_btn__text">Sort</div>
          </button>
        </div>
        <div className="manage_list__submenu">
          <div className={"navbar_menu_popup search_menu" + (searchMenuIsOpened && " opened")}>
            <SearchBar
              searchValue={props.navbar.output.searchValue}
              dispatch={props.dispatch}
            />
          </div>
          <div className={"navbar_menu_popup filter_menu" + (filterMenuIsOpened && " opened")}>
            {<FilterMenu
              allBikers={props.bikers}
              filteredBikers={props.navbar.output.filteredBikers}
              dispatch={props.dispatch} />}
          </div>
          <div className={"navbar_menu_popup sort_menu" + (sortMenuIsOpened && " opened")}>
            <SortMenu
              sortParameter={props.navbar.output.sortParameter}
              sortFromBiggest={props.navbar.output.sortFromBiggest}
              dispatch={props.dispatch} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ManageList