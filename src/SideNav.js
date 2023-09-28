import React from 'react'

export default function SideNav(props) {
  return (
    <ul>
      <li onClick={()=>{props.change("INBOX")}}>
        <div>Inbox</div>
      </li>
      <li>
        <div onClick={()=>{props.change("TODAY")}}>Today</div>
      </li>
      <li>
        <div onClick={()=>{props.change("NEXT")}}>Next 7 Days</div>
      </li>
    </ul>
  )
}
