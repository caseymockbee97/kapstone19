import React from 'react';
import Self_portrait from '../assets/Self_portrait.png';
import SebProfilePic from '../assets/SebProfilePic.png';
import DixonProfilePic from '../assets/DixonProfilePic.jpg';
import '../assets/about.css';

export default function About() {
  return (
    <div id="aboutbox">
      <div>
        <h1>About us </h1>
      </div>

      <img
        src="https://www.startupguys.net/wp-content/uploads/2018/12/lead-software-development-team.jpg"
        alt=""
        className="img2"
      />

      <div>
        <h2>Our mission is to get you on the right track</h2>
        <p id="if">
          If you are often overwhelmed by the amount of tasks, objectives and
          goals you have to complete, deadlines or other important items that
          you need to remember, a to-do list can help you put it all together.
          It's one of the best tools you can use. It'll help keep your
          management tasks organized and on track.
        </p>
      </div>

      <h1>Our team</h1>
      <div id="us">
        <div className="con">
          <div classname="img1">
            <img
              className="huh"
              src={Self_portrait}
              alt=""
              // className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
          </div>
          <h3 className="mb-0">Casey Mockbee</h3>
          <span>Product Owner</span>
          <br />

          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/casey-mockbee-9188741aa/"
          >
            LinkedIn
          </a>
          <br />

          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/caseymockbee97"
          >
            Github
          </a>
        </div>

        <div className="con">
          <div classname="img1">
            <img className="huh" src={SebProfilePic} alt="" />
          </div>
          <h3>Sebastian Caudill</h3>
          <span>Quality Assurance Tester</span>

          <br />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/SebastianCaudill"
          >
            Github
          </a>
        </div>

        <div className="con">
          <div classname="img1">
            <img id="jos" src={DixonProfilePic} alt="" />
          </div>
          <h3>Joshua Dixon</h3>

          <span>Software Development Student</span>

          <br />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/joshua.ty.dixon/"
          >
            Instagram
          </a>

          <br />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/joshtydixon"
          >
            GitHub
          </a>
        </div>
        <div className="con">
          <div classname="img1">
            <img className="huh" src={SebProfilePic} alt="" />
          </div>
          <h3>Chinelo Ike</h3>

          <span>SCRUM Master</span>
          <br />

          <a target="_blank" rel="noreferrer" href="https://github.com/Ike1990">
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
