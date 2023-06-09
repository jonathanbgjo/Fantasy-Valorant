import logo from './logo.svg';
import './App.css';
import MyComponent from './test/test'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './components/home'
import About from './components/userProfile'
function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route exact path="/" component={Home}>
            {/* <Home /> */}
          </Route>
          <Route path="/about">
            {/* <About /> */}
          </Route>
          <Route path="/app">
            {/* <App /> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
