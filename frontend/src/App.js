import './App.css';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <React.StrictMode>
          <Switch>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </React.StrictMode>
      </div>
    </Router>
  );
}

export default App;
