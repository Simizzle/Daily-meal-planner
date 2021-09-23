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
  
    
    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${process.env.REACT_APP_API_KEY}includeNutrition=false`
        )
        .then(response => response.json())
        .then(data =>{ 
            setImageUrl(data.image)
            console.log(data)
    })
    .catch(() => {
        console.log("error")
    })
}, [meal.id])
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
            dialogClassName="modal-90w">
        <Modal.Header>
          <Modal.Title><h1>{meal.title}</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
          <Datetime 
          dateFormat="YYYY-MM-DD"
          open="true"
          initialViewMode="days"
          closeOnSelect="true"
          />
          </div>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </article>
)
};