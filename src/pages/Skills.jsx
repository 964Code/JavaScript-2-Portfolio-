import React from 'react';
import './Skills.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiSass } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiNodedotjs } from 'react-icons/si';
import skills from '../resources/skills';

function Skills() {
  const icons = [
    <AiFillHtml5 />,
    <DiCss3 />,
    <DiSass />,
    <SiJavascript />,
    <FaReact />,
    <SiNodedotjs />,
  ];

  return (
    <div className='skills' id='skills'>
      <div className='skills-text-container'>
        <h2>Skills & Implementation</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum,
          odit deleniti. Atque alias minus, tenetur obcaecati exercitationem
          natus cumque illum unde, magni laudantium qui eos minima iusto
          temporibus, error accusantium! Vel dignissimos ducimus eius, eligendi
          laborum voluptates, labore voluptatum blanditiis quos rerum facere id
          ea pariatur minus obcaecati delectus enim! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ab quaerat numquam debitis quis neque
          voluptatum aliquid blanditiis, perferendis qui eos dolorum sed placeat
          aspernatur, veritatis earum id cum distinctio quisquam.
        </p>
      </div>

      <div className='grid-container'>
        {skills.map((skill, index) => {
          return (
            <div className={`grid-item grid-item-${skill.id}`} key={skill.id}>
              <div className='card-icon-container'>{icons[index]}</div>

              <div className='card-text'>{skill.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
