import React from 'react';
import IssueList from './components/IssueList'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bulma/css/bulma.css'


function App() {
  return (
    <div className="App">
      <IssueList />
    </div>
  );
}

export default App;
