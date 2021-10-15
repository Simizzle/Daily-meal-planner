export const addMealToCalendar = async (
  id,
  imageType,
  readyInMinutes,
  servings,
  sourceUrl,
  imageUrl,
  title,
  date,
  user,
  favourite,
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
      user: user,
      favourite: favourite,
    }),
  });
};

export const fetchMealsToCalendar = async (date, setMeal, user) => {
  const response = await fetch(
    `${process.env.REACT_APP_REST_API}meals/${date}&${user}`
  );
  const data = await response.json();
  setMeal(data.targetMeal);
};

export const fetchMealsToTable = async (setMeal, user) => {
  const response = await fetch(
    `${process.env.REACT_APP_REST_API}meals/${user}`
  );
  const data = await response.json();
  setMeal(data.targetMeal);
};

// export const fetchEvents = async (setEvent) => {
//   const response = await fetch(
//     `${process.env.REACT_APP_REST_API}meals/`
//   );
//   const data = await response.json();
//   setEvent(data.targetMeal);
// };

export const editFavouriteMeal = async (favourite, itemId) => {
  // preventDefault();
  try {
    await fetch(`${process.env.REACT_APP_REST_API}meals/${itemId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        favourite: favourite,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteMeal = async (_id) => {
    await fetch(`${process.env.REACT_APP_REST_API}meals/${_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
       _id: _id,
      }),
    });
  };

  export const fetchUsers = async (e, email, username, pass, setUser) => {
    e.preventDefault();
    try {
      let response;
      if (email) {
        response = await fetch(`${process.env.REACT_APP_REST_API}users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email,
            username: username,
            password: pass,
          }),
        });
      } else {
        response = await fetch(
          `${process.env.REACT_APP_REST_API}users/${username}`
        );
      }
      const data = await response.json();
      setUser(data.user.username);
    } catch (error) {
      console.log(error);
    }
  };
  
  // export const editUsername = async (e, oldUsername, newUsername) => {
  //   e.preventDefault();
  //   try {
  //     await fetch(`${process.env.REACT_APP_REST_API}users`, {
  //       method: "Put",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         oldUsername: oldUsername,
  //         newUsername: newUsername,
  //       }),
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  
  export const editPassword = async (
    e,
    oldUsername,
    oldPassword,
    newPassword
  ) => {
    e.preventDefault();
    try {
      await fetch(`${process.env.REACT_APP_REST_API}users`, {
        method: "Put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          oldUsername: oldUsername,
          oldPassword: oldPassword,
          newPassword: newPassword,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const editEmail = async (e, oldUsername, oldPassword, newEmail) => {
    e.preventDefault();
    try {
      await fetch(`${process.env.REACT_APP_REST_API}users`, {
        method: "Put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          oldUsername: oldUsername,
          oldPassword: oldPassword,
          email: newEmail,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const deleteUser = async (e, oldUsername, oldPassword) => {
    e.preventDefault();
    await fetch(`${process.env.REACT_APP_REST_API}deleteUsers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: oldUsername,
        password: oldPassword,
      }),
    });
  };