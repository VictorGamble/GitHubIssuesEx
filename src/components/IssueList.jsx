import React, { Component } from 'react';

export default class IssueList extends Component{
    state = {
        data: [],             
        isLoaded: false
    }
    
    dataLoad = async () => {
        try {
            const response = await fetch(`https://api.github.com/repos/facebook/create-react-app/issues`)
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error", error);
            return error;
        }
    }
    async componentDidMount() {
        const data = await this.dataLoad()
        console.log("Data is =>", data)
        this.setState({
            isLoaded: true,
            data: data
        })
    }
    render() {
        const {data, isLoaded} = this.state
        return (
            (!isLoaded) ? <div>Loading Data</div>
                : <div>
                    <ul>
                        {data.map(issue => <li key={issue.url}>
                            Title: | {issue.title} | Url: {issue.url} | Body: {issue.body}
                        </li>)}
                    </ul>
                </div>
        )
    }
}

