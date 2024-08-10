import React from "react";
import ReactDOM from "react-dom";
import './index.css';

class Counter extends React.Component {
  state = {
    count: 0,
    lit: true
  }
  // constructor(props) {
    // super(props);
    // this.state = {
    //   count: 0 
    // }

    // this.increment = this.increment.bind(this)
    // this.decrement = this.decrement.bind(this)
  // }

  // arrow functions automatically bind "this" when the class is instantiated


// using callback functions to get immediate updates
  // decrement = () => {
  //   this.setState(prev => ({
  //     count: prev.count - 1
  //   }), () => {
  //     console.log(this.state)
  //   })
  // }

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

  toggle = () => {
    this.setState(prev => ({
      lit: !prev.lit
    }))
  }

  render() {
    const { lit, count } = this.state
    return (
      <div className={`counter ${lit ? ' ' : 'dark'}`}>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{count}</span>
          <button onClick={this.increment}>+</button>
        </div>

        <button onClick={this.toggle}>
          Light/Dark
        </button>

        <Status lit={lit} count={count} />
      </div>
    );
  };
};

class Status extends React.PureComponent {
  render() {
    const { count, lit } = this.props
    
    return <div>
      {count} {lit ? 'true' : 'false'}
    </div>
  }
}

// const Counter = () => (
//   <div className="counter">
//     <h2>Counter</h2>
//     <div>
//       <button>-</button>
//       <span className="count">0</span>
//       <button>+</button>
//     </div>
//   </div>
// );


ReactDOM.render(
  <Counter />,
  document.querySelector('#root')
)