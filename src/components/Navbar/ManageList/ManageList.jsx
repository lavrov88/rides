import React from "react"
import './ManageList.scss'
import FilterMenu from "./FilterMenu/FilterMenu"
import SortMenu from "./SortMenu/SortMenu"

const ManageList = (props) => {
   const filterMenuIsOpened = props.navbar.filterMenuIsOpened
   const sortMenuIsOpened = props.navbar.sortMenuIsOpened

   const toggleFilterMenu = () => {
      const action = {type: 'TOGGLE-FILTER-MENU'}
      props.dispatch(action)
   }
   const toggleSortMenu = () => {
      const action = {type: 'TOGGLE-SORT-MENU'}
      props.dispatch(action)
   }

   return (
      <>
         <div className="manage_list">
            <div className="manage_list__global_buttons">
               <button onClick={toggleFilterMenu} className="manage_list__btn filter_btn">Filter</button>
               <button onClick={toggleSortMenu} className="manage_list__btn sort_btn">Sort</button>
            </div>
            <div className="manage_list__submenu">
               <div className={"navbar_menu_popup filter_menu" + (filterMenuIsOpened ? " opened" : "")}>
                     { <FilterMenu
                        allBikers={props.bikers}
                        filteredBikers={props.navbar.output.filteredBikers}
                        dispatch={props.dispatch} />}
               </div>
               <div className={"navbar_menu_popup sort_menu" + (sortMenuIsOpened ? " opened" : "")}>
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