import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Router, Route, browserHistory } from 'react-router';

const Root = () => {
  return (
    <div className="container">
      <Router history={browserHistory}>
        <Route path="/" component={App}/>
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
