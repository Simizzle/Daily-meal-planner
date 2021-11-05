import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './navbar.css'


export const Navbar = ({
   setUser 
  }) => {
  const logOutHandler = (e) =>{
    e.preventDefault();
    localStorage.removeItem('MyToken');
   setUser ();
  }
    return (
    <div>
    <nav className="nav-bar">
      <ul>
        <li>
          <Link className="navText" to="/dailyplanner">Quick Planner</Link>
        </li>
        <li>
           <Link className="navText" to="/calendar">Calendar</Link>
        </li>
        <li>
          <Link className="navText" to="/recipies">Recipes</Link>
        </li>
        <li>
          <Link className="navText" onClick={(e) =>logOutHandler(e)} to="/">Logout</Link>
          </li>
      </ul>
    </nav>
    </div>
    )
};
