import React from "react";

function ProjectItem({ id, name, about, technologies }) {
  const technologiesArray = technologies.map((technology) => {
    return <span key={technology}>{technology}</span>;
  });
  return (
    <div className="project-item" key={id}>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technologiesArray}</div>
    </div>
  );
}

export default ProjectItem;
