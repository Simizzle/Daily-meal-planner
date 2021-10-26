import moment from "moment";
import React, { useState, useEffect } from "react"
import { Button, Modal } from 'react-bootstrap'; 
import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime.css";
import './modalStyles.css'
import { addMealToCalendar } from "./utils";

export default function Meal({ meal, user }) {
  console.log(user)
    const [imageUrl, setImageUrl] = useState("");
    const favourite = "false";

    function newClick() {
      addMealToCalendar 
      (meal.id, 
      meal.imageType, 
      meal.readyInMinutes, 
      meal.servings,
      meal.sourceUrl,
      imageUrl,
      meal.title,
      newDate,
      user,
      favourite,); 
      setButtonText("Meal Added To Calendar");
      // setDisableButton(true);
      // console.log(imageUrl)
    }
    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${process.env.REACT_APP_API_KEY}includeNutrition=false`
        )
        .then(response => response.json())
        .then(data =>{ 
            setImageUrl(data.image)
    })
    .catch(() => {
        console.log("error")
    })
}, [meal.id])

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [chooseDate, setChooseDate] = useState([])
const [buttonText, setButtonText] = useState("Save To Calendar")
const newDate = moment(chooseDate).format("YYYY-MM-DD")


return (
    <article>
        <h1>{meal.title}</h1>
        <img src={imageUrl} alt="recipe" />
        <ul className="instructions">
            <li>Preparation time: {meal.readyInMinutes} minutes</li>
            <li>Number of servings: {meal.servings}</li>
        </ul>

        <a href={meal.sourceUrl} target="_blank" rel="noreferrer">Go To Recipe</a>
        
        <Button variant="primary" onClick={handleShow}>
       Save to Calendar
      </Button>
    
    <div className="modalClass">
      <Modal show={show} 
            onHide={handleClose}
            >
        <Modal.Header>
          <Modal.Title><h1>{meal.title}</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body >
        
          <div className="datePicker">
          <h2>Pick a Date</h2>
          <Datetime 
          dateFormat="YYYY-MM-DD"
          strictParsing="true"
          onChange={setChooseDate}
          timeFormat={false}
          closeOnSelect="true"
          />
        
          </div>
          <img src={imageUrl} alt="recipe" width="33%" justify-content="right"/>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>newClick()} 
          >
            {buttonText}
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </article>
)
};