import React from 'react';
import './App.css';
import SwitchClock from './SwitchClock';
import Clock from './Clock';

class App extends React.Component {
  state = {
    clockOn: true
  }

  handleClick = () => {
    this.setState({
      clockOn: !this.state.clockOn,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Simple Clock</h1>
        <SwitchClock
          clockOn={this.state.clockOn}
          click={this.handleClick}
        />
        {this.state.clockOn && <Clock />}
      </div>
    );
  }
}

export default App;