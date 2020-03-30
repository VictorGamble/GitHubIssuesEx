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
            console.log("Data Is ", data);
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
            data: data
        })
        console.log("Data is ", data);
    }

    render() {
        const {data, isLoaded} = this.state
        return (
            
        )
    }
}


