import { deleteMeal, fetchMealsToCalendar } from '../utils'
import { useState, useEffect } from 'react'
import ToggleFavourite from '../FavBtn/FavBtn'

export default function SavedMeals ({ theDate, user }){

    const [meal, setMeal]= useState([])
    useEffect(() => {
        fetchMealsToCalendar(theDate, setMeal, user)
        }
    , [setMeal, meal])
return(
    <div className="article">
   {meal.map((item, index)=>{
   function clickHandler(){
    deleteMeal(item._id);
}
       return(
        <article key={index}>
        <h1>{item.title}</h1>
        <div className="recipie-img">
        <ToggleFavourite itemFavourite={item.favourite} itemId={item._id} />
        <img src={item.imageUrl} alt="recipe" />
        </div>
        <ul className="instructions">
            <li>Preparation time: {item.readyInMinutes} minutes</li>
            <li>Number of servings: {item.servings}</li>
        </ul>
        <a href={item.sourceUrl} target="_blank">Go To Recipe</a>
    <button className="btn-primary" onClick={()=>clickHandler(item._id)}>Remove Meal</button>
        </article>
     )})}
    </div> 
)
};
