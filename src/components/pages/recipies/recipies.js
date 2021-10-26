import React, { useState, useEffect } from "react"
import './tablebootstrap.min.css'
import './recipies.css'
import { Table } from 'react-bootstrap'
import {fetchMealsToTable, deleteMeal} from '../../utils'
import ToggleFavourite from "../../FavBtn/FavBtn"

function Recipies ({user}){

  const [meal, setMeal]= useState([])
  const [refresh, setRefresh] = useState()
  useEffect(() => {
      fetchMealsToTable(setMeal, user)
      }
  , [setMeal, refresh])
console.log(meal)

  return(
    
    <Table responsive="lg" striped bordered hover size="sm" variant="dark" >
    <thead>
      <tr>
        <th filterControl="true">Recipe Name</th>
        <th>Image</th>
        <th>Date</th>
        <th>Servings</th>
        <th>Preparation time</th>
        <th>Recipe Link</th>
        <th>Favourite</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {meal.map((item)=>{
      function clickHandler(){
        deleteMeal(item._id)
        setRefresh(!refresh)
      window.alert("Meal removed")};
 
        return(
      <tr>
        <td>{item.title}</td>
        <td> <img className="tableImage" src={item.imageUrl} alt="recipe" /></td>
        <td>{item.date}</td>
        <td>{item.servings} servings</td>
        <td>{item.readyInMinutes} mins</td>
        <td><a href={item.sourceUrl} target="_blank">Go To Recipe</a></td>
        <td><ToggleFavourite itemFavourite={item.favourite} itemId={item._id} /></td>
        <td><button className="btn-primary" onClick={()=>clickHandler(item._id)}>Remove Meal</button></td>
      </tr>
// }
    )})}
    </tbody>
   
  </Table>
  )}

export default Recipies