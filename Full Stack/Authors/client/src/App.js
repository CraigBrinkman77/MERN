import {BrowserRouter, Switch, Routes, Route} from 'react-router-dom'
import Home from './views/Home';

function App() {
  return (
    <div className="">
      <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path = "/home">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
