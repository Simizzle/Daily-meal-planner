import { fetchMealsToCalendar } from '../utils'

export default function SavedMeals ({theDate}) {
   const meal = fetchMealsToCalendar(theDate)
//    .then(meal => meal)
    console.log(meal)

//    {meal.meals.map(meal => {
//     return <Meal key={meal.id} meal={meal} />
// })}
return(
    <article>
    <h1>{meal.title}</h1>
    <img src={meal.imageUrl} alt="recipe" />
    <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
    </ul>

    <a href={meal.sourceUrl} target="_blank">Go To Recipe</a>
    </article>
)}