import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

const IconButton = ({ children }) => (
  <button>
    <i className="fa fa-cloud"/> {children}
  </button>
);

const Alert = ({ children, title }) => (
  <div className="alert">
    <i className="fa fa-exclamation-triangle"></i>
    <h3>{title}</h3>
    {children}
  </div>
);

const App = () => (
  <>
    <IconButton>
      Awesome Stuff
    </IconButton>
    <Alert title={
      <>
        <em>Hey! Listen!</em>
        Yes,you!
      </>
    }> 
      Very <em>important</em> message!
    </Alert>
  </>
);

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)