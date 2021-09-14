import { useState } from 'react'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css'
function Dropdown({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const options = ['None', 'Vegan', 'Vegetarian', 'Ketogenic', 'Lacto-Vegetarian', 'Ovo-Vegetarian', 'Pescetarian', 'Paleo', 'Primal', 'Whole30']
    return (
        <div className="dropdown"><h3>Dietary Requirements (select from list)</h3>
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                {selected}
        <span className="downarrow"><FontAwesomeIcon icon={faCaretDown} /></span>
         </div>
        {isActive && (
             <div className="dropdown-content">
                 {options.map((option) => (
                    <div onClick={(e) => {setSelected(option) 
                        setIsActive(false)}
                    }className="dropdown-item">
                    {option}
                     </div> 
                 ))}
            </div> 
            )}
        </div>
    )
}

export default Dropdown