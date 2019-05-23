import React from 'react';

// let interval = 0;

class Clock extends React.Component {
  state = {
    seconds: new Date().getSeconds(),
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
  }

  interval = 0;

  componentDidMount() {
    this.interval = setInterval(() => {
      let date = new Date();
      this.setState({
        seconds: date.getSeconds(),
        minutes: date.getMinutes(),
        hours: date.getHours(),
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { hours, minutes, seconds } = this.state;

    const displayHours = hours < 10 ? `0${hours}` : `${hours}`;
    const displayMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const displaySeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return (
      <div>
        <h2>{`${displayHours} : ${displayMinutes} : ${displaySeconds}`}</h2>
      </div>
    );
  }
}

export default Clock;