import linkedinIcon from "../../icon/linkedin.png";
import githubIcon from "../../icon/github.png";
import gmailIcon from "../../icon/gmail.png";
import resumeFile from "../../files/Resume.pdf";
import resumeIcon from "../../icon/resume.png";

export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title2">Get In Touch</p>
        <h2 className="contact--me--text">Contact Me</h2>
        <p className="text-lg">
          Please feel free to reach out or connect!
        </p>
      </div>
      <div className="contact--img--container">
        <a href="https://www.linkedin.com/in/hyunellenpark1/" target="_blank" rel="noopener noreferrer">
          <img
            style={{ width: "50px", height: "50px", margin: "10px" }}
            src={linkedinIcon}
            alt="LinkedIn Icon"
          />
        </a>
        <a href="https://github.com/ellen3128" target="_blank" rel="noopener noreferrer">
          <img
            style={{ width: "45px", height: "45px", margin: "10px" }}
            src={githubIcon}
            alt="Github Icon"
          />
        </a>
        <a
              href="https://mail.google.com/mail/?view=cm&source=mailto&to=ellenpark3128@gmail.com"
              target="_blank" rel="noopener noreferrer"
            >
              <img
                style={{ width: "45px", height: "45px", margin: "10px" }}
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
    </section>
  );
}
