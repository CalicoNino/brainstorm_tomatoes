import './App.css';
import Home from "./components/home";
import Feed from "./components/feed";
import CreatePost from "./components/createPost";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/feed' exact component={Feed}/>
        <Route path='/createpost' exact component={CreatePost}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
