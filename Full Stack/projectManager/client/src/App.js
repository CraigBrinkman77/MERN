import {BrowserRouter,Route,Switch} from "react-router-dom"
import Edit from "./views/Edit";

import Home from "./views/home";
import OneProduct from "./views/OneProduct";


function App() {
  return (
    <BrowserRouter>
      <Switch>

        <div className="App">
          <Route exact path="/edit/:id">
            <Edit />
          </Route>
          <Route exact path="/:id">
            <OneProduct />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </div>

      </Switch>
    </BrowserRouter>
  );
}

export default App;