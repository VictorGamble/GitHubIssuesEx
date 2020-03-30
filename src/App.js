import React from 'react';
import IssueList from './components/IssueList'
import Issue from './components/Issue'
import './App.css';

function App() {
  return (
    <div className="App">
      <IssueList />
      <Issue />
    </div>
  );
}

export default App;
