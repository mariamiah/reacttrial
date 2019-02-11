import React from 'react';


export const Increment =(prevState)=>({
        counter: prevState +1,

});
export const Decrement = (prevState) =>({
        counter : prevState -1,

});
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
        this.setState(Increment);
    }
    decrementCounter(){
        this.setState(Decrement);
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