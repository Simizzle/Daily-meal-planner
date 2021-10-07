import { deleteMeal, fetchMealsToCalendar } from '../utils'
import { useState, useEffect } from 'react'

export default function SavedMeals ({ theDate }){
    const [meal, setMeal]= useState([])
    useEffect(() => {
        fetchMealsToCalendar(theDate, setMeal)
        
        }
    , [setMeal, meal])
    
return(
    <div>
   {meal.map((item, index)=>{
   function clickHandler(){
    deleteMeal(item._id);
}
       return(
        <article key={index}>
        <h1>{item.title}</h1>
        <img src={item.imageUrl} alt="recipe" />
        <ul className="instructions">
            <li>Preparation time: {item.readyInMinutes} minutes</li>
            <li>Number of servings: {item.servings}</li>
        </ul>
        <a href={item.sourceUrl} target="_blank">Go To Recipe</a>
    <button onClick={()=>clickHandler(item._id)}>Remove Meal</button>
        </article>
     )})}
    </div> 
)
};
