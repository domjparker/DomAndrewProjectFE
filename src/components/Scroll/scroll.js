import React from 'react';
import './scrollFeature.css';

const ScrollFeature = (props) => {
  return (
    <div className="scroll-feature-div">
      {props.children}
    </div>
  )
}

export default ScrollFeature;

// I pasted this from basically a ZTM-like project so it will 
// need to be modified from its current state.