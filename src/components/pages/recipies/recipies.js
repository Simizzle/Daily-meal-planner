import React, { useState, useEffect } from "react"
import './tablebootstrap.min.css'
import './recipies.css'
import { Table } from 'react-bootstrap'
import {fetchMealsToTable} from '../../utils'
import ToggleFavourite from "../../FavBtn/FavBtn"


function Recipies ({user}){

  const [meal, setMeal]= useState([])
  useEffect(() => {
      fetchMealsToTable(setMeal, user)
      }
  , [setMeal])
console.log(meal)

  return(
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Recipie Name</th>
        <th>Image</th>
        <th>Servings</th>
        <th>Preparation time</th>
        <th>Recipie Link</th>
        <th>Favourite</th>
      </tr>
    </thead>
    <tbody>
    {meal.map((item)=>(
      <tr>
        <td>{item.title}</td>
        <td> <img className="tableImage" src={item.imageUrl} alt="recipe" /></td>
        <td>{item.servings} servings</td>
        <td>{item.readyInMinutes} mins</td>
        <td><a href={item.sourceUrl} target="_blank">Go To Recipe</a></td>
        <td><ToggleFavourite itemFavourite={item.favourite} itemId={item._id} /></td>
      </tr>
  ))}
    </tbody>
    
  </Table>
  )}

export default Recipies