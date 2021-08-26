import React, { Component } from 'react'
import "./App.css";
import Counter from './components/Counter';


export default class App extends Component {

  constructor(props) {
    console.log("App.js constructor");
    super(props);
    this.state = {
      mount: true
    }
  }

  componentDidMount() {
    console.log("App.js componentDidMount");
  }

  // switch = () => {
  //   this.setState({
  //     mount: !this.state.mount
  //   })
  // }


  render() {
    console.log("App.js render");
    return (
      <div className="App">
        <h1>WS React LifeCycle methods</h1>
        {/* <button onClick={this.switch}>switch</button>
        {this.state.mount ? <Counter /> : null} */}
        <Counter />
      </div>
    )
  }
}

