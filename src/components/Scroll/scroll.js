import React from 'react';
import './scroll.css';

const Scroll = (props) => {
  return (
    <div className="scroll--div">
      {props.children}
    </div>
  )
}

export default Scroll;

// I pasted this from basically a ZTM-like project so it will 
// need to be modified from its current state.