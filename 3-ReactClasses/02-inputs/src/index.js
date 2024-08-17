import React from "react";
import ReactDOM from "react-dom";
import './index.css'

class Demo extends React.Component {
  // state = {
  //   name: " "
  // }

  // handleChange = event => {
  //   this.setState({
  //     name: event.target.value
  //   })
  // }

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleSubmit = event => {
    event.preventDefault();
    alert(this.inputRef.current.value)
  }

  render() {  
    return (

      // UNcontrolled input
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
            <br/>
            <input ref={this.inputRef}/>
        </label>
        <button type="submit">Submit</button>
      </form>

      // Controlled input
      // <div>
      //   <h1>Hello {this.state.name}</h1>
      //   <label>
      //     Name<br />
      //     <input 
      //       type="text" value={this.state.name}
      //       onChange={this.handleChange}
      //     />
      //   </label>
      // </div>
    )
  }
}

ReactDOM.render(
  <Demo />,
  document.querySelector('#root')
)