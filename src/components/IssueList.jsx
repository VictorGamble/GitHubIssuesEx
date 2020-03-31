import React, { Component } from "react";
import Issue from './Issue'


export default class IssueList extends Component {
  state = {
    data: [],
    isLoaded: false
  };
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
  async componentDidMount() {
    const data = await this.dataLoad();
    this.setState({
      isLoaded: true,
      data: data
    });
  }
  render() {
    const { data, isLoaded } = this.state;
    return !isLoaded ? (
      <div>Loading Data</div>
    ) : (
            <ul>
          {data.map((issue) => (  
            <li key={issue.id}>
              {issue.title}
              <br/>
            <Link to={`/issue/${issue.number}`}>Click for Issue Details</Link>
            </li>
          ))}
        </ul>
    );
  }
}
