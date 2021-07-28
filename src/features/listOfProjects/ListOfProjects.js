import React from "react";
import SingleDashProject from '../singleDashProject/SingleDashProject';

const ListOfProjects = () => {

  const fakeProjectDataArr = [
      {
        id: 1,
        user: "Dom",
        projectName: "Cool Project 1",
      },
      {
        id: 2,
        user: "Andrew",
        projectName: "Cool Project 2",
      },
      {
        id: 3,
        user: "Sandra",
        projectName: "Cool Project 3",
      },
      {
        id: 4,
        user: "Lindsay",
        projectName: "Cool Project 4",
      },
  ]


  return (
    <>
    <div className="list-of-projects">
      {
        fakeProjectDataArr.map(project => {
          return (
            <SingleDashProject 
              id={project.id}
              user={project.user}
              projectName={project.projectName}
            />
          )
        })
      }
    </div>
    </>
  )
}

export default ListOfProjects;