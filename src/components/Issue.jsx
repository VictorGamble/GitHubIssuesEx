import React from 'react';
import IssueList from './IssueList'
 

const Issue = props => {
    const {data} = props; 
    console.log("Issues are =>", data);
return(
<h2> Title:{data.title}</h2>
)
}
export default Issue;