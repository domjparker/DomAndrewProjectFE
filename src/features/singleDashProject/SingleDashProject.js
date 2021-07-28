import React from "react";

const SingleDashProject = (props) => {

  return (
    <div>
      <h1>{props.projectName}</h1>
      <h3>{props.user}</h3>
      <h3>{props.id}</h3>
    </div>
  )
};

export default SingleDashProject;

