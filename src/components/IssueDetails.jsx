import React, {Component} from 'react'
import {Title} from 'bloomer';

export default class IssueDetails extends Component{
    state={
        issueDetails: []
    }

  dataLoad = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error", error);
      return error;
    }
  };

    async componentDidMount(){ 
        try {
            const {issue_number} = this.props.match.params;
            const issueDetails = await this.dataLoad(`https://api.github.com/repos/facebook/create-react-app/issues/${issue_number}`)
        
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
        console.log("issueDetails are =>", issueDetails)
        return(
            <div>
                <Card>
                    <CardHeader>
                        {issueDetails.title}
                    </CardHeader>
                    <CardContent>
                        <ReactMarkdown source={issueDetails.body} escapeHtml={false}/>
                    </CardContent>
                </Card>
            </div>
        )
    }
}