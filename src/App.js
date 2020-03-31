import React from 'react';
import IssueList from './components/IssueList'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import IssueDetails from './components/IssueDetails'
import {Container} from 'bloomer'
import 'bulma/css/bulma.css'


function App() {
  return (
    <div className="App">
     <Container>
     <Router>
       <Route path ="/" exact component={IssueList}/>
       <Route path="/issue/:issue_number?" component={IssueDetails}/>
     </Router>
     </Container>
    </div>
  );
}

export default App;
