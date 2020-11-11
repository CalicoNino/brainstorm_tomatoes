import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navbar";
import Home from "./components/home";
import Feed from "./components/feed";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Feed/>
    </div>
  );
}

export default App;
