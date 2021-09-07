import { useState } from 'react'

function Dropdown({selected, setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const options = ['','Vegan', 'Vegitarian', 'Ketogenic', 'Lacto-Vegitarian', 'Ovo-Vegetarian', 'Pescetarian', 'Paleo', 'Primal', 'Whole30']
    return (
        <div className="dropdown"><h3>Dietary Requirements</h3>
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                {selected}
        <span className="fas fa-caret-down"></span>
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