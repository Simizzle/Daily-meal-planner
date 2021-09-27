import moment from "moment";
import React, { useState, useEffect } from "react"
import { Button, Modal } from 'react-bootstrap'; 
// import 'bootstrap/dist/css/bootstrap.min.css';
import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime.css";
import './modalStyles.css'

export default function Meal({ meal }) {
    const [imageUrl, setImageUrl] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [chooseDate, setChooseDate] = useState([])

    const newDate = moment(chooseDate).format("YYYY-MM-DD")
    console.log(newDate)

    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${process.env.REACT_APP_API_KEY}includeNutrition=false`
        )
        .then(response => response.json())
        .then(data =>{ 
            setImageUrl(data.image)
            // console.log(data)
    })
    .catch(() => {
        console.log("error")
    })
}, [meal.id])

// console.log(data.image)
return (
    <article>
        <h1>{meal.title}</h1>
        <img src={imageUrl} alt="recipe" />
        <ul className="instructions">
            <li>Preparation time: {meal.readyInMinutes} minutes</li>
            <li>Number of servings: {meal.servings}</li>
        </ul>

        <a href={meal.sourceUrl} target="_blank">Go To Recipe</a>
        
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
          // open="true"
          // initialViewMode="days"
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
          <Button variant="primary" onClick={handleClose}>
            Save To Calendar
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </article>
)
};