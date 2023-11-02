import linkedinIcon from "../../icon/linkedin.png";
import githubIcon from "../../icon/github.png";
import gmailIcon from "../../icon/gmail.png";
import resumeFile from "../../files/Resume.pdf";
import resumeIcon from "../../icon/resume.png";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Ellen</p>
          <h1 classname="hero--section--title">
            <span className="hero--section-title--color">Full-Stack</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            ▪️ Highly creative and results-oriented developer
            <br />
            ▪️ Former corporate consultant and registered lobbyist 
            <br />
            ▪️ Passionate about web applications with impactful designs!
          </p>

          <div className="contact--link--icons">
            <a
              href="https://www.linkedin.com/in/hyunellenpark1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ width: "50px", height: "50px", margin: "10px" }}
                src={linkedinIcon}
                alt="LinkedIn Icon"
              />
            </a>
            <a
              href="https://github.com/ellen3128"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ width: "46px", height: "46px", margin: "10px" }}
                src={githubIcon}
                alt="Github Icon"
              />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&source=mailto&to=ellenpark3128@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ width: "46px", height: "46px", margin: "10px" }}
                src={gmailIcon}
                alt="Gmail Icon"
              />
            </a>
            <a
              href={resumeFile} 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ width: "45px", height: "45px", margin: "10px" }}
                src={resumeIcon}
                alt="Resume"
              />
            </a>
          </div>
        </div>
        <button className="btn btn-primary" style={{ marginLeft: "11px"}}>Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img4.png" alt="Hero Section" />
      </div>
    </section>
  );
}
