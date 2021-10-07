import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar () {

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
          <Link className="navText" to="/">Recipies</Link>
        </li>
      </ul>
    </nav>
    </div>
    )
}

export default Navbar