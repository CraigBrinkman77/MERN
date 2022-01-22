import logo from './logo.svg';
import './App.css';


import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Search from './components/Search';
import { Route, Switch } from 'react-router-dom';
import People from './components/People';
import Starships from './components/Starships';
import Planets from './components/Planets';

function App() {
  return (
    <BrowserRouter>
      <Search />
      <Switch>
        <Route path='/people/:id'>
          <People />
        </Route>
        <Route path='/planets/:id'>
          <Planets />
        </Route>
        <Route path='/starships/:id'>
          <Starships />
        </Route>
      </Switch>

    
    </BrowserRouter>
    
  );
}

export default App;
