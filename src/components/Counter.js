import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
        console.log("Counter.js constructor");
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        console.log("Counter.js componentDidMount");
    }

    componentDidUpdate(){
        console.log("Counter.js componentDidUpdate")
    }

    //   componentWillUnmount(){
    //       console.log("Counter.js componentWillUnmount")
    //   }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    reset =( )=>{
        this.setState({
            count : 0
        })
    }


    render() {
        console.log("Counter.js render");
        return (
            <div>
                <h2>Counter</h2>
                <h3>{this.state.count}</h3>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}
