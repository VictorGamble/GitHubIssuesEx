import React from 'react';
import IssueList from './components/IssueList'
import Issue from './components/Issue'
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
      <IssueList />
      <Issue />
    </div>
  );
}

export default App;
