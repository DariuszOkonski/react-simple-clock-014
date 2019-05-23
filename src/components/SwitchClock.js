import React from 'react';

const SwitchClock = (props) => {
  return (
    <div>
      <button
        onClick={props.click}
      >{props.clockOn ? 'Clock Off' : 'Clock On'}</button>
    </div>
  );
}

export default SwitchClock;