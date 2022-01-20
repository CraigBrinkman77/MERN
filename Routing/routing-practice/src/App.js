import React from "react";
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import Display from "./compents/Display";
import Home from "./compents/Home";
    

function App() {
  return (
    <BrowserRouter>
      
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/:word">
          <Display />
        </Route>
        <Route path="/:input/:textcolor/:color">
          <Display />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}
    
export default App;

