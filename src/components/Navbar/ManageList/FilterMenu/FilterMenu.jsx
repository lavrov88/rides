import React from "react"
import './FilterMenu.scss'

const FilterMenuItem = (props) => {
  return (
    <li data-biker-id={props.id} className={"filter_menu_item" + (props.isActive ? ' active' : '')}>
      <div className="filter_menu_item__img">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="filter_menu_item__name">Mr. {props.name}</div>
    </li>
  )
}

const FilterMenu = (props) => {
  const changeFilter = (e) => {
    if (!e.target.closest('.filter_menu_item')) {
      return
    }
    const clickedBiker = e.target.closest('.filter_menu_item').dataset.bikerId
    const action = {
      type: 'TOGGLE-FILTERED-BIKER',
      bikerId: clickedBiker
    }
    props.dispatch(action)
  }
  const checkActive = (id) => {
    if (props.filteredBikers.find(b => b === id)) {
      return true
    } else {
      return false
    }
  }

  const filterMenuItems = props.allBikers
    .map(b => <FilterMenuItem id={b.id} key={b.id} isActive={checkActive(b.id)}
      name={b.name} img={b.photoSmall} />)

  return (
    <ul onClick={changeFilter} className="filter_menu_items" >
      {filterMenuItems}
    </ul>
  )
}

export default FilterMenu