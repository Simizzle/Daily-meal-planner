import React, { useState, useEffect } from "react";
import { Button, Modal } from 'react-bootstrap/'; 
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import moment from "moment"
import './calendar.css' 
import SavedMeals from "../../SavedMeals/savedMeals";
// import { fetchEvents } from "../../utils"

export default function Calendar() {
  // const events = [{title: "today's event", date: new Date() }]
 
  const today = new Date(),
  date = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)) + '-' + today.getDate();
  const [show, setShow] = useState(false);
  const [theDate, setDate] = useState(date);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const fullDate = moment(theDate).format("Do MMM YYYY");
//   const [meal, setMeal]= useState({targetMeal:[]})

//   function GetEvents() {
//     useEffect(() => {
//     fetch (
//       `${process.env.REACT_APP_REST_API}meals/`
//     )
//       .then(response => response.json())
//       .then(data =>{
//         setMeal(data)
//       })
//       .catch(() => {
//         console.log("error")
//       })
//   },[])}
//   console.log(meal)
 


//  const [dayColor, setDayColor] = useState()
  
//    function setEventColor() { 
//      return(
       
//     meal.targetMeal.map((item)=>
//     {
//      return(
//        [{
//     start: item.date,
//     end: item.date,
//     overlap: false,
//     display: 'background',
//     color: '#81bb29'}]
//      )}))}

//    setDayColor(setEventColor)
//    console.log(meal)
//   ;
//  GetEvents()
return (
 <div className="app">
<FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'today',
          center: 'title',
          right: 'prevYear,prev,next,nextYear',
        }}
        timeZone='local'
        selectable="true"
        // events={dayColor}
        dateClick = {
        function(info){
         setDate(info.dateStr)}} 
      />
     <div> 
     <button className ="modalButton" variant="primary" onClick={handleShow} >
        Show Meals
      </button>
      <Modal className="modalClass" 
            show={show} 
            onHide={handleClose} 
            animation="true" 
            size="md"
           >
            
        <Modal.Header>
          <Modal.Title><h1>Your Saved Meals For {fullDate}</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SavedMeals theDate={theDate} />
        </Modal.Body>
        <Modal.Footer>
          <Button className="modalButton" variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
 </div>     
)}