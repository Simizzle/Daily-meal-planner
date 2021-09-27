import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap/'; 
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import './calendar.css' 
export default function Calendar() {
  // const events = [{title: "today's event", date: new Date() }]
 
  const today = new Date(),
  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const [show, setShow] = useState(false);
  const [theDate, setDate] = useState(date)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//   console.log(date)
//  console.log(theDate)
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
          <Modal.Title><h1>Your Saved Meals For {theDate}</h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>Saved Meals Show Here</Modal.Body>
        <Modal.Footer>
          <Button className="modalButton" variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
 </div>     
)}