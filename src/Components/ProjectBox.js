import React from 'react';

// ProjectBox Component: Renders individual project details
const ProjectBox = ({ projectName, projectDesc }) => {
  return (
    <div className="projectBox">
      <h3>{projectName}</h3>
      <p>{projectDesc}</p>
    </div>
  );
};

// Projects Component: Renders the list of projects
const Projects = () => {
  const projects = [
    {
      projectName: 'Smart Vehicle Parking System',
      projectDesc:
        'Created a smart parking system that uses IoT devices and sensors to collect real-time data on parking lot occupancy and transmits this information to the cloud or local network.',
    },
    {
      projectName: 'Simple Water Level Indicator',
      projectDesc:
        'Created a simple water level indicator circuit consisting of a transistor element and a buzzer which indicates the overflow of water or excessive water in the container. When the water reaches its maximum limit, it shows and blinks the LED with a buzzer sound to stop pouring or filling water.',
    },
  ];

  return (
    <div className="projectsSection">
      <h2></h2>
      <div className="projectsGrid">
        {projects.map((project, index) => (
          <ProjectBox
            key={index}
            projectName={project.projectName}
            projectDesc={project.projectDesc}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;