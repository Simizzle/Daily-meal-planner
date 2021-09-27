import React, { useState } from "react"
import './home.css'
import Datetime from 'react-datetime'
import moment from "moment";

function Home (){
    const [chooseDate, setChooseDate] = useState([])
    const newDate = moment(chooseDate).format("YYYY-MM-DD")
    console.log(newDate)

    return (
<div className="app">
Home
<Datetime 
          dateFormat="YYYY-MM-DD"
          strictParsing="true"
           onChange={setChooseDate}
            timeFormat={false}
            closeOnSelect="true"
          />
</div>
)
}

export default Home