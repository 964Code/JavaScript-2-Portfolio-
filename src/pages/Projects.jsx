import React from 'react';
import './Project.css';
import Card from '../components/Card';

function Projects() {
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

      <Card
        title='E-Comerce'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis
          neque excepturi sapiente saepe nulla ad enim adipisci ex, tenetur
          commodi possimus consequuntur praesentium, eligendi atque est cumque
          eius quisquam.'
        link='https://github.com/'
      />

      <Card
        title='To-do List'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis
          neque excepturi sapiente saepe nulla ad enim adipisci ex, tenetur
          commodi possimus consequuntur praesentium, eligendi atque est cumque
          eius quisquam.'
        link='https://github.com/'
      />

      <Card
        title='Hotel Website'
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis
          neque excepturi sapiente saepe nulla ad enim adipisci ex, tenetur
          commodi possimus consequuntur praesentium, eligendi atque est cumque
          eius quisquam.'
        link='https://github.com/'
      />
    </div>
  );
}

export default Projects;
