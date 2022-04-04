import React from "react"
import './SortMenu.scss'

const SortMenuItem = (props) => {
  return (
    <li>
      <div 
        data-sort-parameter={props.type} 
        className={`sort_menu_popup_item${props.isActive ? ' ' + props.isActive : ''}`}
      >
        <div className="sort_menu_popup_item__name">{props.name}</div>
        <button className="sort_menu_popup_item__btn smallest">{props.sort2}</button>
        <button className="sort_menu_popup_item__btn biggest">{props.sort1}</button>
      </div>
    </li>
  )
}

const SortMenu = (props) => {
  const sortParameter = props.sortParameter
  const sortFromBiggest = props.sortFromBiggest

  const changeSort = (e) => {
    if (e.target.classList.contains('sort_menu_popup_item__btn')) {
      const sortParameter = e.target.closest('.sort_menu_popup_item').dataset.sortParameter
      const sortFromBiggest = e.target.classList.contains('biggest')
      const action = {
        type: 'TOGGLE-RIDES-SORT',
        sortParameter: sortParameter,
        sortFromBiggest: sortFromBiggest
      }
      props.dispatch(action)
    }
  }

  const checkActive = (parameter) => {
    if (sortParameter === parameter) {
      if (sortFromBiggest) {
        return 'fromBiggest'
      } else {
        return 'fromSmallest'
      }
    } else {
      return false
    }
  }

  const sortArr = [
    {
      name: 'By date:',
      type: 'date',
      sort1: 'Latest',
      sort2: 'Oldest',
      isActive: checkActive('date')
    },
    {
      name: 'By distance:',
      type: 'distance',
      sort1: 'Longest',
      sort2: 'Shortest',
      isActive: checkActive('distance')
    },
    {
      name: 'By average speed:',
      type: 'speed',
      sort1: 'Fastest',
      sort2: 'Slowest',
      isActive: checkActive('speed')
    },
    {
      name: 'By riding time:',
      type: 'time',
      sort1: 'Longest',
      sort2: 'Shortest',
      isActive: checkActive('time')
    },
  ]

  return (
    <ul onClick={changeSort} >
      {sortArr.map(s => <SortMenuItem key={s.type} name={s.name} type={s.type}
        sort1={s.sort1} sort2={s.sort2} isActive={s.isActive} />)}
    </ul>
  )
}

export default SortMenu