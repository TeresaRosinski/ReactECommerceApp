import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      meaningOfLife: 47,
    };
  }
  handleClick = () => {
    this.setState({ meaningOfLife: this.state.meaningOfLife + 1 });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.meaningOfLife}</p>
          <button onClick={this.handleClick}>Update State</button>
        </header>
      </div>
    );
  }
}

export default App;
