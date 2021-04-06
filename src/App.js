import './App.scss';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { HomePage } from './pages/HomePage/HomePage';
import { ContactPage } from './pages/ContactPage/ContactPage';
import { StatisticPage } from './pages/StatisticPage/StatisticPage';
import { ContactDetailsPage } from './pages/ContactDetailsPage/ContactDetailsPage';
import { ContactPreview } from './cmps/ContactPreview';
import { ContactEditPage } from './pages/ContactEditPage/ContactEditPage';
import { AppHeader } from './cmps/AppHeader/AppHeader';


function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <div>
          <Switch>
            <Route path="/statistics" component={StatisticPage} />
            <Route path="/contacts/edit/:id?" component={ContactEditPage} />
            <Route path="/contacts/:id" component={ContactDetailsPage} />
            <Route path="/contacts" component={ContactPage} />
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
