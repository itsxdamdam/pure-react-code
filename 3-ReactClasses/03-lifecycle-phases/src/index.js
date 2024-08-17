import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 1. Mount
// 2. Render
// 3. Commit
// 4. Unmount

// if you are using function component instead of class you can wrap it in React.memo() to not rerender existing props.

class OldValue extends React.PureComponent {
  
  // Alternative to shouldComponentUpdate is using React.PureComponent instead of React.Component

  // PureComponent has a built in shouldComponentUpdate that will compare all props with the previous ones and only rerender when those props change

  // shouldComponentUpdate ensures that we don't re-render existing elements without need


  // shouldComponentUpdate(nextProps, nextState) {
  //   if(nextProps.value === this.props.value) {
  //     return false;
  //   } 
  //   return true;
  // }
  render() {
    return (
      <div>{this.props.value}</div>
    )
  }
}

class Counter extends React.Component {

  state = {
    count: 0,
    oldValues: []
  };


  // lifecycle methods
  componentDidMount() {
    console.log('[componentDidMount]', 'Mounted.');
    // good time to fetch data, event listeners, DOM nodes
    // at this point component is at rest nothing is running just waiting.
  } 
  // happens after the component first appears, after the first commit

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[componentDidUpdate]', 'Updated.');
    // re-sync data
    // component is at rest at this point nothing is changing and dom is stable.
  }
  // runs on every subsequent render runs after every state change

  componentWillUnmount() {
    console.log('[componentWillUnmount]', 'Goodbye cruel world');
    // cleanup - timers, subscriptions or anything else you set up earlier.
  }
  // gets called right before the unmount happens. gets called before unmount cos after unmount means component does not exist anymore

  increment = () => {
    this.setState({
      count: this.state.count + 1,
      oldValues: [
        ...this.state.oldValues,
        this.state.count
      ]
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
      oldValues: [
        ...this.state.oldValues,
        this.state.count
      ]
    })
  }


  render() {

    console.log('[render]', this.state.count)
    return (
      <div>
        <div className='counter'>
          <h2>Counter</h2>
          <div>
            <button onClick={this.decrement}>-</button>
            <span className="count">
              {this.state.count}
            </span>
            <button onClick={this.increment}>+</button>
          </div>
        </div>
        <ul>
          {this.state.oldValues.map((value, index) => (
            <li key={index}>
              <OldValue value={value} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <Counter />,
  document.querySelector("#root")
);
