export const addMealToCalendar = async (
    id, imageType, readyInMinutes, servings, sourceUrl, title, date
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
        title: title,
        date: date
      }),
    });
   };

   export const fetchMealsToCalendar = async ( 
    date
  ) => {
    const response =
    await fetch(`${process.env.REACT_APP_REST_API}meals/${date}`
    );
    const data = await response.json();
    
    // data.map()
    console.log(data)
  };

