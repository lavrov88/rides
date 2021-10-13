import React from "react"
import './InfobarCollapseBtn.scss'

const CollapseInfobarBtn = (props) => {

   const toggleInfobarCollapse = (e) => {

      console.dir(document.querySelector('.infobar'));
      if (props.isMobile) {
         document.querySelector('.infobar').scrollTop = 0
      }


      const action = {
         type: 'TOOGLE-INFOBAR-COLLAPSE'
      }
      props.dispatch(action)
   }

   return (
      <button onClick={toggleInfobarCollapse} 
         className={'collapse_btn' + (props.isCollapsed ? ' collapsed' : '')}>
         <div className="collapse_arrow"></div>
      </button>
   )
}

export default CollapseInfobarBtn