import React from 'react'
import './introduction.css'
import Image from '../../src/Farhan Qazi.jpg'
import mumbai from '../../src/mumbai.jpg'
import computer from '../../src/computer.png'
import tennis from '../../src/tennis.png'

const Home = () => {
  return (
    <body>
      <div class="top-container">
        <h1 id="header">I'm Farhan!</h1>
        <p id="bio">a Full-Stack web developer from Mumbai!</p>
        <img src={mumbai} alt="sphinx" id="showcase" />
        <a href="https://pngtree.com/so/egypt" class="license">
          egypt png from pngtree.com
        </a>
      </div>
      <div class="greeting-container">
        <img src={Image} alt="profile" id="portfolio-img" />
        <h1>Hello!</h1>
        <p>
          My name is Mo'men Alaswad, a Computer scientist and engineer 💻🙇‍♂️.
        </p>
        <p>
          That specialises in Front-end web development, and has a passion for
          creating engaging UI designs 🧡
        </p>
      </div>
      <hr />
      <div class="skills-container">
        <h2>My Skills</h2>
        <div class="skill-row">
          <img src={computer} alt="computer" class="coding-img" />
          <div class="development-skill-bio">
            <h3>Design & Development</h3>
            <p>
              I have a passion for creating engaging UI designs that are
              visually stunning and unique.
            </p>
          </div>
        </div>
        <div class="skill-row">
          <img src={tennis} alt="tennis" class="tennis-img" />
          <h3>Tennis</h3>
          <p>
            I have a mean serve and there is nothing I enjoy more than a good
            game on clay on a quiet afternoon.
          </p>
        </div>
      </div>
      <hr />
      <div class="contact-me-container">
        <h1>Get In Touch</h1>
        <h3>
          For a freelancing offer, or if you want to get together for a quick
          tennis match.
        </h3>
        <p>
          I accept freelance job offers, and I'm always up to meet new tennis
          play mates!
        </p>
        <a class="contact-me-btn" href="mailto:faberdash55@gmail.com">
          Contact Me
        </a>
      </div>
      <footer class="footer">
        <a
          href="https://www.linkedin.com/in/mo-men-alaswad/"
          class="footer-link"
        >
          LinkedIn
        </a>
        <a href="https://github.com/Faberdash" class="footer-link">
          Github
        </a>
        <a
          href="https://faberdash.github.io/personal-website/"
          class="footer-link"
        >
          Website
        </a>{' '}
        <br />
        <p>&copy 2020 Faberdash</p>
      </footer>
    </body>
  )
}

export default Home
