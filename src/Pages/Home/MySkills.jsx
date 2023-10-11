import data from "../../data/index.json";
import htmlIcon from "../../icon/html.png";
import cssIcon from "../../icon/css.png";
import jsIcon from "../../icon/js.png";
import reactIcon from "../../icon/react.png";
import vueIcon from "../../icon/vue.png";
import nodeIcon from "../../icon/nodejs.png";
import expressIcon from "../../icon/express.png";
import mongoIcon from "../../icon/mongo.png";
import pythonIcon from "../../icon/python.png";
import postgreIcon from "../../icon/postgre.png";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title"> My Skills </p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt="product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <img src={htmlIcon} alt="HTML" />
          <span className="grid-text">HTML</span>
        </div>

        <div className="grid-item">
          <img src={cssIcon} alt="CSS" />
          <span className="grid-text">CSS</span>
        </div>

        <div className="grid-item">
          <img src={jsIcon} alt="JS" />
          <span className="grid-text">JavaScript</span>
        </div>

        <div className="grid-item">
          <img src={reactIcon} alt="React" />
          <span className="grid-text">React</span>
        </div>

        <div className="grid-item">
          <img src={vueIcon} alt="Vue" />
          <span className="grid-text">Vue</span>
        </div>

        <div className="grid-item">
          <img src={expressIcon} alt="Express" />
          <span className="grid-text">Express</span>
        </div>

        <div className="grid-item">
          <img src={nodeIcon} alt="Node" />
          <span className="grid-text">NodeJS</span>
        </div>

        <div className="grid-item">
          <img src={mongoIcon} alt="Mongo" />
          <span className="grid-text">Mongo</span>
        </div>

        <div className="grid-item">
          <img src={pythonIcon} alt="Python" />
          <span className="grid-text">Python</span>
        </div>

        <div className="grid-item">
          <img src={postgreIcon} alt="Postgre" />
          <span className="grid-text">Postgre</span>
        </div>
      </div>
    </section>
  );
}
