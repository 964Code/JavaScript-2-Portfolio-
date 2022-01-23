import React from 'react';
import './Skills.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiSass } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiNodedotjs } from 'react-icons/si';
import skills from '../resources/skills';

function Skills() {
  document.title = 'Skills';
  console.log(skills[0]['icon']);
  return (
    <div className='skills' id='skills'>
      <div className='skills-text-container'>
        <h2>Skills & Implementation</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
          architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Delectus sapiente voluptatibus consectetur. Itaque nesciunt adipisci
          alias possimus ipsum accusantium obcaecati aut vel magni, nam porro
          laudantium? Ea sequi incidunt laborum! Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Quam obcaecati totam quis dolor
          consequuntur, minus ipsa. Ex beatae recusandae eligendi!
        </p>
      </div>

      <div className='skill-container'>
        {skills.map((skill) => {
          return (
            <div className='skill-list card'>
              <div></div>
              <p>{skill.icon.contact}</p>
            </div>
          );
        })}

        {/* <div className='skill-list'>
          <DiCss3 className='skill-icon css' />
          <p>CSS3</p>
        </div>
        <div className='skill-list'>
          <DiSass className='skill-icon sass' />
          <p>SaSS</p>
        </div>
        <div className='skill-list'>
          <SiJavascript className='skill-icon javascript' />
          <p>JavaScript</p>
        </div>
        <div className='skill-list react'>
          <FaReact className='skill-icon react' />
          <p>React</p>
        </div>
        <div className='skill-list'>
          <SiNodedotjs className='skill-icon node' />
          <p>Node.JS</p>
        </div> */}
      </div>
    </div>
  );
}

export default Skills;
