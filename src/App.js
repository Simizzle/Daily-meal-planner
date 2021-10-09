import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from "styled-components";
import DailyPlanner from './components/pages/dailyPlanner/DailyPlanner'
import Home from './components/pages/Home/home'
import Calendar from './components/pages/Calendar/calendar'
import Navbar from './components/Navbar/navbar';
import { Landing } from './components/pages/landing/landing';

export default function App() {
  const [user, setUser] = useState();
  return (
    // <AppContainer>
    <div>
          <Router>
      {user ? <Redirect to="/dailyplanner" /> : <Redirect to="/" />}
      <Route exact path="/">
        <Landing setUser={setUser} />
      </Route>
      <Navbar />
        <Switch>
          <Route path="/dailyplanner">
            <DailyPlanner user={user} />
          </Route>
          <Route path="/calendar">
            <Calendar user={user} />
          </Route>
          <Route exact path="/recipies">
        <Home user={user} />
      </Route>
        </Switch>
    </Router>
    </div>
    //  </AppContainer>
  );
}