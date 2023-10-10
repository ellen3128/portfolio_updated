import linkedinIcon from "../../icon/linkedin.png";
import githubIcon from "../../icon/github.png";
import gmailIcon from "../../icon/gmail.png";

export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title2">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
        </p>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/hyunellenpark1/">
          <img
            style={{ width: "60px", height: "60px", margin: "10px" }}
            src={linkedinIcon}
            alt="LinkedIn Icon"
          />
        </a>
        <a href="https://github.com/ellen3128">
          <img
            style={{ width: "55px", height: "55px", margin: "10px" }}
            src={githubIcon}
            alt="Github Icon"
          />
        </a>
        <a
              href="https://mail.google.com/mail/?view=cm&source=mailto&to=hyunpark.ellen@gmail.com"
              target="_blank"
            >
              <img
                style={{ width: "55px", height: "55px", margin: "10px" }}
                src={gmailIcon}
                alt="Gmail Icon"
              />
            </a>
      </div>
    </section>
  );
}
