import './App.scss';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { HomePage } from './pages/HomePage/HomePage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { StatisticPage } from './pages/StatisticPage/StatisticPage';
import { ContactDetailsPage } from './pages/ContactDetailsPage/ContactDetailsPage';
import { ContactEditPage } from './pages/ContactEditPage/ContactEditPage';
import { AppHeader } from './cmps/AppHeader/AppHeader';
import { SignupPage } from './pages/SignupPage/SignupPage';


function App() {
  const PrivateRoute = (props) => {
    const isLoggedin = sessionStorage.getItem('loggedinUser') || false;
    return isLoggedin ? <Route component={props.component} path={props.path} /> : <Redirect to="/signup" />
  }
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <div>
          <Switch>
            <Route path="/statistics" component={StatisticPage} />
            <PrivateRoute component={ContactEditPage} path='/contacts/edit/:id?' />
            {/* <Route path="/contacts/edit/:id?" component={ContactEditPage} /> */}
            <PrivateRoute component={ContactDetailsPage} path='/contacts/:id' />
            {/* <Route path="/contacts/:id" component={ContactDetailsPage} /> */}
            <PrivateRoute component={ContactPage} path='/contacts' />
            {/* <Route path="/contacts" component={ContactPage} /> */}
            <Route path="/signup" component={SignupPage} />
            <PrivateRoute exact component={HomePage} path='/' />
            {/* <Route exact path="/" component={HomePage} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
