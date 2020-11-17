import React, { Component } from 'react';
import './app.css';
import ReactImage from './react.png';

export default class App extends Component {
  state = {
    username: null,
    forecastData: [],
  };

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));

    fetch('/api/weather?address=boston')
      .then(res => res.json())
      .then(data => this.setState({ forecastData: data.forecast }))
      .then((_) => console.log(this.state.forecastData));
  }

  render() {
    const { username, forecastData } = this.state;
    return (
      <div>
        {/* {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>} */}
        {forecastData && forecastData.length > 0 ? this.generateTable( forecastData) : <h1> No Found! </h1>}
      </div>
    );
  }

  generateTable = (arr) => {
    console.log(arr);
    if (!arr || arr.length === 0 || Object.getOwnPropertyNames(arr[0]).length === 0) {
      return null;
    }

    let headers = Object.getOwnPropertyNames(arr[0]);
  
    let elms = [(
      <>
        <span>hello table </span>
        <table>
          <tbody>
          <tr>{ headers.map((col) => <td> {col} </td>) }</tr>
          { 
            arr.map((row) => 
            (<tr> 
              { headers.map((field) => <td> { row[field] } </td> ) } 
            </tr>))
          }
          </tbody>
        </table>
      </>)];

    return elms
  }
}
