export const addMealToCalendar = async (
  id,
  imageType,
  readyInMinutes,
  servings,
  sourceUrl,
  imageUrl,
  title,
  date
) => {
  await fetch(`${process.env.REACT_APP_REST_API}meals`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: id,
      imageType: imageType,
      readyInMinutes: readyInMinutes,
      servings: servings,
      sourceUrl: sourceUrl,
      imageUrl: imageUrl,
      title: title,
      date: date,
    }),
  });
};

export const fetchMealsToCalendar = async (date, setMeal) => {
  const response = await fetch(
    `${process.env.REACT_APP_REST_API}meals/${date}`
  );
  const data = await response.json();
  setMeal(data.targetMeal);
};

export const deleteMeal = async (_id) => {
    // e.preventDefault();
    await fetch(`${process.env.REACT_APP_REST_API}meals/${_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
       _id: _id,
      }),
    });
  };