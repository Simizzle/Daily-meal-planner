import React, { useState, useEffect } from "react";
import { Button, Modal } from 'react-bootstrap/'; 
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import moment from "moment"
import './calendar.css' 
import SavedMeals from "../../SavedMeals/savedMeals";
import { fetchMealsToTable } from "../../utils"

export default function Calendar({user}) {
 
  const today = new Date(),
  date = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)) + '-' + today.getDate();
  const [show, setShow] = useState(false);
  const [theDate, setDate] = useState(date);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const fullDate = moment(theDate).format("Do MMM YYYY");
  const [refresh, setRefresh] = useState()

  function clickHandler(){
   handleClose()
    setRefresh(!refresh)
  }
  const modalStyle = {
    position: 'relative',
    display: 'flex',
    justifyContent: "center"
  }
  const [meal, setMeal]= useState([])
  useEffect(() => {
      fetchMealsToTable(setMeal, user)
      }
  , [setShow, refresh])
  
 let datez = []
 function setEventColor() { 
    return(
    meal.map((item)=>
    {
      datez.push({
        start: item.date,
        end: item.date,
        overlap: false,
        display: 'background',
        color: '#81bb29'
      })
    }
    )
    )
  }
   setEventColor()
   
   
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
        events={datez}
        dateClick = {
        function(info){
         setDate(info.dateStr)}} 
      />
     <div> 
     <button className ="modalButton" variant="primary" onClick={handleShow} >
        Show Meals
      </button>
      <Modal  
            show={show} 
            onHide={clickHandler} 
            animation="true" 
            size="md"
           >
            
        <Modal.Header>
          <Modal.Title><h1>Your Saved Meals For {fullDate}</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body style={modalStyle}>
          <SavedMeals theDate={theDate} user={user}/>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modalButton" variant="primary" onClick={clickHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
 </div>     
)}