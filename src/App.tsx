import React from 'react';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from './components/Common/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <ProtectedRoute path="/">
            <Home />
          </ProtectedRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
