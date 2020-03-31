import React, {Component} from 'react'
import {Title} from 'bloomer';

export default class IssueDetails extends Component{
    state={
        issueDetails: []
    }

  dataLoad = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/repos/facebook/create-react-app/issues`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error", error);
      return error;
    }
  };

    async componentDidMount(){ 
       console.log("Props are =>", this.props)
        try {
            const {issue_number} = this.props.match.params;
            console.log("issue number is =>", issue_number);
            const issueDetails = await this.dataLoad(`https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`)
            console.log("IssueDetails1 are =>", issueDetails)

        this.setState({
         issueDetails: issueDetails
        })
        } catch (error) {
            console.error("Error", error)
            return error
        }
    }
    render(){
        const {issueDetails} = this.state
        console.log("issueDetails2 are =>", issueDetails)
        return(
            <div>
                <h1>
                    {issueDetails.title}
                </h1>
            <p>{issueDetails.body}</p>
            </div>
        )
    }
}