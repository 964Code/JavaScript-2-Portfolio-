import React from 'react';
import './Project.css';
import Card from '../components/Card';

function Projects() {
  const projectList = [
    {
      title: 'E-Commerce',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est magni eos nam consequatur. Expedita quas ut quasi temporibus voluptas ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam voluptate, sint nisi nemo autem dolores reprehenderit neque velit, voluptatem aliquam vero architecto? Pariatur delectus error dignissimos laboriosam excepturi molestiae!',
      link: 'https://github.com/964Code',
    },
    {
      title: 'To-Do List',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est magni eos nam consequatur. Expedita quas ut quasi temporibus voluptas ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam voluptate, sint nisi nemo autem dolores reprehenderit neque velit, voluptatem aliquam vero architecto? Pariatur delectus error dignissimos laboriosam excepturi molestiae!',
      link: 'https://github.com/964Code',
    },
    {
      title: 'Hotel Website',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est magni eos nam consequatur. Expedita quas ut quasi temporibus voluptas ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ipsam voluptate, sint nisi nemo autem dolores reprehenderit neque velit, voluptatem aliquam vero architecto? Pariatur delectus error dignissimos laboriosam excepturi molestiae!',
      link: 'https://github.com/964Code',
    },
  ];
  return (
    <div className='projects' id='projects'>
      <div className='projects-text'>
        <h3>Projects</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis
          neque excepturi sapiente saepe nulla ad enim adipisci ex, tenetur
          commodi possimus consequuntur praesentium, eligendi atque est cumque
          eius quisquam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Odit laudantium quaerat consequatur dicta nemo laboriosam
          sapiente doloribus commodi quibusdam suscipit. Sunt, dolore doloribus
          repellendus ab veniam velit. Animi, sint non.
        </p>
      </div>

      {projectList.map((project, index) => {
        return (
          <Card
            title={project.title}
            content={project.content}
            link={project.link}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Projects;
