import React from 'react';
import ReactDOM from 'react-dom';
// import Title from "./components/Title";
import App from "./components/App";

// let element = React.createElement(Title)
ReactDOM.render(
  <React.StrictMode>
    <App user={{name : "salut", id : 0}}/>
  </React.StrictMode>,
  document.getElementById('root')
);