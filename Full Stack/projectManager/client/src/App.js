import {BrowserRouter,Route,Switch} from "react-router-dom"

import Home from "./views/home";
import OneProduct from "./views/OneProduct";


function App() {
  return (
    <BrowserRouter>
      <Switch>

        <div className="App">
          <Route path="/product/edit/:id">
            
          </Route>
          <Route path="/product/:id">
            <OneProduct />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </div>

      </Switch>
    </BrowserRouter>
  );
}

export default App;