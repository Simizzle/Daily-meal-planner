import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import DailyPlanner from './pages/dailyPlanner/DailyPlanner'
import Home from './pages/Home/home'
import Calendar from './pages/Calendar/calendar'
import Navbar from './components/Navbar/navbar';

export default function App() {
  return (
  
    <Router>
      <Navbar />
        <Switch>
          <Route path="/dailyplanner">
            <DailyPlanner />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}