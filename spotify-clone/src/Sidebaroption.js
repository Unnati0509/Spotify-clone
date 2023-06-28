import React from 'react'
import "./sidebarOption.css";
function Sidebaroption({title,Icon}) {
  return (
    <div className='sidebarOption'>
      {/* <p>{title}</p> */}
    {Icon && <Icon className='sidebarOption__icon'></Icon>}
    {Icon ? <h4>{title}</h4> : <p>{title}</p> }
    </div>
  )
}

export default Sidebaroption
