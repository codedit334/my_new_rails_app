// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from "./components/MyComponent";
function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <MyComponent />
    </div>
    );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
