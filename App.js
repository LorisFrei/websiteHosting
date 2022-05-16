import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Connections from "./Komponente/Connections";
import StationBoard from "./Komponente/Station-Board";
import TakeMeHome from "./Komponente/TakeMeHome";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/connections">Connections</Link>
            </li>
            <li>
              <Link to="/stationBoard">StationBoard</Link>
            </li>
            <li>
              <Link to="/takeMeHome">Take me Home</Link>
            </li>
          </ul>
          <hr/>


          <Switch>
            <Route path="/connections">
              <Connections/>
            </Route>
            <Route path="/stationBoard">
              <StationBoard/>
            </Route>
            <Route path="/takeMeHome">
              <TakeMeHome/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
