import React, {Component} from 'react'


export default class IssueDetails extends Component{
    state={
        data: []
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
            console.log("IssueNumber is=>",{issue_number})
            console.log("issue number is =>", issue_number);
            const issueDetails = await this.dataLoad(`https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`)
            console.log("IssueDetails are =>", issueDetails)

        this.setState({
            data: issueDetails
        })
        } catch (error) {
            console.error("Error", error)
            return error
        }
    }
    render(){
        const {data} = this.state
        console.log(data)
        return(
        <p>{data.body}</p>
        )
    }
}