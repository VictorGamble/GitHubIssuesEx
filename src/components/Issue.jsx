import React from 'react';




 const Issue = props => {
    const {Issues}= props; 
    console.log("Issues are =>", Issues);
return(
<h2>{Issues.id}</h2>
)
}
export default Issue;