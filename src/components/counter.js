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
        this.setState((prevState)=>{
            counter : prevState.counter + 1
        });
    }
    decrementCounter(){
        this.setState((prevState)=>{
            counter: prevState.counter -1
        });

    }
    render(){
        return(
            <div>
                <button>Increment</button>
                <button>Decrement</button>
            </div>
        )
    }
}
export default Counter;