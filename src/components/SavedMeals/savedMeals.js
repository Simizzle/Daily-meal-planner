



    <article>
    <h1>{meal.title}</h1>
    <img src={imageUrl} alt="recipe" />
    <ul className="instructions">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
    </ul>

    <a href={meal.sourceUrl} target="_blank">Go To Recipe</a>
    </article>