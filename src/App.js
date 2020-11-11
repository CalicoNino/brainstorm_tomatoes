import logo from './logo.svg';
import './App.css';
import Home from "./components/home";
import Feed from "./components/feed";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/feed' exact component={Feed}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
