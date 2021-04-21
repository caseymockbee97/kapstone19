import React from "react";
import Self_portrait from "../assets/Self_portrait.png";
import SebProfilePic from "../assets/SebProfilePic.png";
import DixonProfilePic from "../assets/DixonProfilePic.jpg";

export default function About() {
  return (
    <div>
      <div>
        <h1>About us </h1>
      </div>

      <div>
        <img
          src="https://www.startupguys.net/wp-content/uploads/2018/12/lead-software-development-team.jpg"
          width="600"
          height="300"
          alt=""
          className="img-fluid"
        />
      </div>

      <div>
        <h2>Our mission is to get you on the right track</h2>
        <p>
          If you are often overwhelmed by the amount of tasks, objectives and
          goals you have to complete, deadlines or other important items that
          you need to remember, a to-do list can help you put it all together.
          It's one of the best tools you can use. It'll help keep your
          management tasks organized and on track.
        </p>
      </div>

      <h1>Our team</h1>
      <div>
        <img
          src={Self_portrait}
          alt=""
          width="300"
          className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
        />
        <h3 className="mb-0">Casey Mockbee</h3>
        <span>Product Owner</span>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/casey-mockbee-9188741aa/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/caseymockbee97"
            >
              Github
            </a>
          </li>
        </ul>
      </div>

      <div>
        <img src={SebProfilePic} alt="" width="300" />
        <h3>Sebastian Caudill</h3>
        <span>Quality Assurance Tester</span>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/SebastianCaudill"
            >
              Github
            </a>
          </li>
        </ul>
      </div>

      <div>
        <img
          src="https://www.previewsworld.com/SiteImage/MainImage/STL163590.jpg"
          alt=""
          width="300"
        />
        <h3>Chinelo Ike</h3>
        <span>SCRUM Master</span>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Ike1990"
            >
              Github
            </a>
          </li>
        </ul>
      </div>

      <div>
        <img src={DixonProfilePic} alt="" width="300" />
        <h3>Joshua Dixon</h3>
        <span>Software Development Student</span>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/joshua.ty.dixon/"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/joshtydixon"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
