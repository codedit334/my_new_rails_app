// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client';
import { Routes, Route, Outlet, Link, BrowserRouter as Router } from "react-router-dom";
// import MyComponent from "./components/MyComponent";
import Home from "./components/Home";
import Random from "./components/Random";
function App() {
  return (
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/random">Random</Link>
            </li>
          </ul>
        </nav>
       <Routes>
          <Route path="random" element={<Random />} />
          <Route path="/" element={<Home />} />
      </Routes>
    </div>
    );
}


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <App />
  </Router>
);

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root'),
// );
