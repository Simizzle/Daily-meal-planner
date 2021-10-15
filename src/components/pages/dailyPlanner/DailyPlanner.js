import React, { useState } from 'react';
import MealList from "../../MealList"
import './dailyplanner.css'
import Dropdown from '../../Dropdown'

function DailyPlanner({user}) {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  const [selected, setSelected] = useState("")
  const [exclude, setExclude] = useState("")
  
  function getMealData() {
    fetch (
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${calories}&diet=${selected}&exclude="alcohol,"${exclude}&veryHealthy=true`
    )
      .then(response => response.json())
      .then(data =>{
        setMealData(data)
      })
      .catch(() => {
        console.log("error")
      })
  }
  function handleChange(e) {
    setCalories(e.target.value)
  }
  function handleExclude(e) {
    setExclude(e.target.value)
  }
  console.log(exclude, calories, selected)
  
  return (
    <div className="container">
    <div className = "DailyPlanner">
      <section className = "controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
          />
           <input
          type="string"
          placeholder="Exclude ingredients (comma seperated)"
          onChange={handleExclude}
          />
          <Dropdown selected={selected} setSelected={setSelected} />
          <button onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} user={user}/>}
    </div>
    </div>
    
  )
}

export default DailyPlanner;