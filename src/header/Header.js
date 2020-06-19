import React from 'react'
import './header.css'
import { NavLink } from 'react-router-dom';


export default function Header() {
  return (
    <div className="header">
      <ul className ="ulul">
        <li><NavLink exact to="/Home" className="menu">Home</NavLink></li>
        <li><NavLink exact to="/Notice" className="menu">Notice</NavLink></li>
        <li><NavLink to="/News" className="menu">News</NavLink> </li>
        <li><NavLink to="/Infection" className="menu">Infection</NavLink> </li>
        <li><NavLink to="/Hospital" className="menu">Hospital</NavLink> </li>
        <li><NavLink to="/Mask" className="menu">Mask</NavLink> </li>
      </ul>
      </div>
  )
}
