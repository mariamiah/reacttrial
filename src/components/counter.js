import React from 'react';


class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter : 0
        }
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    }
    incrementCounter(){
        this.setState((prevState)=>({
            counter : prevState.counter + 1
        }));
    }
    decrementCounter(){
        this.setState((prevState)=>({
            counter: prevState.counter -1
        }));

    }
    render(){
        const { counter }=this.state;
        return(
            <div>
            <h1>My Counter</h1>
            {counter}
                <button onClick={this.incrementCounter}>Increment</button>
                <button onClick={this.decrementCounter}>Decrement</button>
            </div>
        )
    }
}
export default Counter;