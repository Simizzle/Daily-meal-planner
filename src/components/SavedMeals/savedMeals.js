import { fetchMealsToCalendar, deleteMeal } from '../utils'
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap/'

export default function SavedMeals ({theDate}){
    const [meal, setMeal]= useState([])
    useEffect(() => {
        fetchMealsToCalendar(theDate, setMeal)
        
        }
    , [setMeal])
    // console.log(meal)

    // useEffect(() => {

    // })
return(
    <div>
   {meal.map((item, index)=>{
       return(
        <article key={index}>
        <h1>{item.title}</h1>
        <img src={item.imageUrl} alt="recipe" />
        <ul className="instructions">
            <li>Preparation time: {item.readyInMinutes} minutes</li>
            <li>Number of servings: {item.servings}</li>
        </ul>
        <a href={item.sourceUrl} target="_blank">Go To Recipe</a>
    <Button onClick={deleteMeal(item._id, index)}>Remove Meal</Button>
        </article>
     )})}
    </div>
    
)
}
