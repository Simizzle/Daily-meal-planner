import React, { useState, useEffect } from "react";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../../components/pages/dailyPlanner/dailyplanner.css";
import { editFavouriteMeal } from "../utils";

function ToggleFavourite({itemFavourite, itemId}) {

  const [favourite, setFavourite] = useState(itemFavourite)
    function handleChangeFavourite() {
        setFavourite((previousHeart) => {
          return !previousHeart
        });
      };
      editFavouriteMeal(favourite, itemId)
      
  return (
    <>
      <div>
        {favourite ? (
        <FontAwesomeIcon
          title="Remove from favourites"
          className="favourite-btn"
          icon={faHeart}
          size="lg"
          onClick={() => handleChangeFavourite()}
        />
        ) : (
        <FontAwesomeIcon
          title="Add to favourites"
          className="favourite-btn-active"
          icon={farHeart}
          size="lg"
          onClick={() => handleChangeFavourite()}
        />
        )}
      </div>
    </>
  );

}

export default ToggleFavourite;
