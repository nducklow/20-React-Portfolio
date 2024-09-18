import React from 'react';
import Project from './Project'


const projects = [
  {
    title: 'Project 1',
    description: 'This is project 1',
    image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  },
  {
    title: 'Project 2',
    description: 'This is project 2',
    image: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  },
  // Add more projects here...
];

const Portfolio = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '250px' }}>
      {projects.map((project, index) => (
      <Project key={index} {...project} />
      ))}
    </div>

  )
}



export default Portfolio