import React from 'react';
import IssueList from './components/IssueList'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bulma/css/bulma.css'


function App() {
  return (
    <div className="App">
     <Router>
       <Route path ="/" exact component={IssueList}/>
       <Route path="/issue/:issue_number?" component={IssueDetails}/>
     </Router>
    </div>
  );
}

export default App;
