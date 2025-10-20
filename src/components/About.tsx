import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About</h1>
      <div className="about-content">
        <div className="about-image">
          <img src="/Images/Profile.jpg" alt="Profile" />
        </div>
        <div className="about-text">
          <h2>Hi, I’m Shayan</h2>
          <p>
A Computer Engineering student at Khatam University, born in 2005.  
I’m passionate about **UI design** and enjoy creating clean, simple, and visually appealing interfaces.  
Before diving into UI, I worked with **graphic design** and developed a solid understanding of Photoshop, especially in poster design.  

Currently, I design in **Figma** and I’m also exploring front-end development to better understand how design turns into real products.  
My goal is to grow as a UI designer by working on diverse and creative projects.  



          </p>
          <p>
I enjoy **teamwork** and collaboration. During **Decode Cup 3**, I was responsible for designing the special entry cards for the participants.  
I also contributed to **poster design** for the *Tech Innovation Trip* and created several posters for the **Scientific Association of Khatam University**.  

 I began working on UI design for a student project, which helped me improve my skills and gain hands-on experience in UI projects.
          </p>
        </div>
      </div>
    </div>
  );
};
