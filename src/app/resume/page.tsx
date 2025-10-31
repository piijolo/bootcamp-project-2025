// src/app/resume/page.tsx
export default function Resume() {
  return (
      <main>
        <h1 className="resume"> My Resume </h1>
        <div className="resume-body"> 
          <section className="section"><h2 className="Education"> Education</h2> </section>
          <div className="entry"> 
          <h3 className="entry-title"> Bachelor Degree in Computer Engineering </h3> 
          <p className="entry-info"> California Polytechnic University, San Luis Obispo </p>
          <p className="entry-description"> Expected Graduation: June 2029 </p>
        </div> 
        <div className="entry"> 
          <h3 className="entry-title"> Adolfo Camarillo High School | Camarillo, CA </h3> 
          <p className="entry-info"> GPA 3.92 UW 4.45W | Scholar Athlete 2021-2025 </p>
          <p className="entry-description"> Graduated 2025 </p>
        </div> 
        <section className="section"><h2 className="Experience"> Experience</h2></section>
        <div className="entry">
          <h3 className="entry-title"> PVRPD | Pleasant Valley Recreation and Park District </h3>
          <p className="entry-info"> Lifeguard & Lessons Instructor </p>
          <p className="entry-description"> Maintained aquatic facility safety and cleanliness <br /> Communicated effectively with parents about swim development <br /> Scorekeeper and monitor for Adult Softball and Adult Basketball leagues </p>
        </div>
        <div className="entry">
          <h3 className="entry-title"> Congressional App Challenge </h3>
          <p className="entry-info"> Computer Programming June 2021 </p>
          <p className="entry-description"> Designed and developed a "time management" web application using JavaScript. <br /> Collaborated with peers to brainstorm and refine features.</p>
        </div>
        <section className="section"><h2 className="Skills"> Skills</h2></section>
        <ul>
          <li>JavaScript</li>
          <li>Proficient in Google Suite and Microsoft Suite</li>
          <li>Certification: CPR/AED & First Aid </li>
          <li>Strong communication, time management, and teamwork skills</li>
        </ul>
        <section className="section"><h2 className="Projects"> Projects</h2></section>
        <div className="entry">
          <h3 className="entry-title"> Personal Website </h3>
          <p className="entry-info"> A personal website built using Git, HTML, and CSS to showcase my resume, portfolio, and blog. </p>
        </div>
        <section className="section"><h2 className="Coursework"> Coursework</h2></section>
        <ul>
          <li> Intro to Computing CSC123 </li>
          <li> Fundamentals of Computer Science CSC101 </li>
        </ul>
        </div>
        </main>
  );
}