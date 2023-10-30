import linkedinIcon from "../../icon/linkedin.png";
import githubIcon from "../../icon/github.png";
import gmailIcon from "../../icon/gmail.png";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Ellen</p>
          <h1 classname="hero--section--title">
            <span className="hero--section-title--color">Front-End</span> <br />
            Developer
          </h1>
          <p className="hero--section-description">
            ▪️ Highly creative and results-oriented front-end developer
            <br />
            ▪️ Former corporate consultant and registered lobbyist 
            <br />
            ▪️ Knowledge and experience with backend services
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
                style={{ width: "60px", height: "60px", margin: "10px" }}
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
                style={{ width: "55px", height: "55px", margin: "10px" }}
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
                style={{ width: "55px", height: "55px", margin: "10px" }}
                src={gmailIcon}
                alt="Gmail Icon"
              />
            </a>
          </div>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img4.png" alt="Hero Section" />
      </div>
    </section>
  );
}
