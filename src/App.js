import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import DailyPlanner from './components/pages/dailyPlanner/DailyPlanner'
import Recipies from './components/pages/recipies/recipies'
import Calendar from './components/pages/Calendar/calendar'
import { Navbar } from './components/Navbar/navbar';
import { Landing } from './components/pages/landing/landing';
import * as ReactBootstrap  from 'react-bootstrap'


export default function App() {
  const [user, setUser] = useState();
  console.log(user)
  return (
    // <AppContainer>
    <div>
          <Router>
      {user ? <Redirect to="/dailyplanner" /> : <Redirect to="/" />}
      <Route exact path="/">
        <Landing setUser={setUser} />
      </Route>
        <Switch>
          <Route path="/dailyplanner">
          <Navbar setUser={setUser}/>
            <DailyPlanner user={user} />
          </Route>
          <Route path="/calendar">
          <Navbar setUser={setUser}/>
            <Calendar user={user} />
          </Route>
          <Route exact path="/recipies">
          <Navbar setUser={setUser}/>
        <Recipies user={user} />
      </Route>
        </Switch>
    </Router>
    </div>
    //  </AppContainer>
  );
}
