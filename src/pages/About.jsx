import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import './About.css';
import profilePic from '../resources/JohnWick.png';

function About() {
  return (
    <div className='about' id='about'>
      <div className='about-media-container'>
        <div className='about-title'>
          <h3>John Wick - About</h3>
        </div>

        <img src={profilePic} />
        <div className='about-text'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex esse
            quis illo eius nobis, quo pariatur optio voluptatibus officiis
            debitis maiores consequatur tenetur nam reiciendis, minus tempora
            necessitatibus modi eum ipsum nisi voluptate dicta temporibus veniam
            quibusdam! Placeat, autem unde magni laborum possimus sunt incidunt
            eos vitae ipsum accusamus maiores doloribus vel vero. Molestiae,
            fugiat voluptate? Corporis nulla labore consequatur vel commodi quas
            magni, officia adipisci quisquam expedita? Ipsa enim voluptatem
            accusantium, eum deleniti culpa error ea est ex officia sed.
            Inventore ut cupiditate et maxime, voluptate odit ducimus, eveniet,
            impedit vitae totam ipsum velit veniam nesciunt deserunt ipsam nemo.
          </p>
          <ul>
            <li>Fast</li>
            <li>Effective</li>
            <li>Professional</li>
            <li>I am a ghost</li>
          </ul>
          <br />
          <span className='quote'>
            “WELL, JOHN WASN’T EXACTLY ‘THE BOOGEYMAN.’ HE WAS THE ONE YOU SENT
            TO KILL THE F***KIN’ BOOGEYMAN.”
          </span>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa
            harum fugiat ut quidem dicta vero laboriosam ex corporis, enim
            dolore perferendis consequatur voluptatum facilis autem animi
            reprehenderit eveniet illum recusandae dolor pariatur doloremque.
            Eaque amet doloribus reiciendis assumenda dicta id autem est!
            Incidunt, tempore dignissimos at laboriosam facere nulla obcaecati
            qui nam minima quam adipisci neque, dolores ea omnis labore sapiente
            nemo! Esse, iste. Tempora quisquam quia sapiente hic illo!
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            suscipit, mollitia voluptates magnam consequuntur recusandae illo
            doloremque quisquam. Provident cum aspernatur iusto optio ipsum
            atque doloribus, itaque dicta illo veniam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. A expedita natus ab itaque
            deleniti numquam autem adipisci, possimus tenetur similique quod
            maiores quam voluptate ratione nesciunt doloremque sed perferendis
            soluta?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
