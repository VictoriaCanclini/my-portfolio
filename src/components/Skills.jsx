import {
  HTML,
  CSS,
  JS,
  React,
  Next,
  Node,
  Express,
  PostgreSQL,
  MongoDB,
  Redux,
  Tailwind,
  Docker,
  GitHub,
  Postman,
  Trello,
  Sequelize,
} from "../common/icons";

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Habilidades</h2>
      <div className="grid-skills">
        <div className="skill-card global">
          <HTML />
          <p>HTML</p>
        </div>
        <div className="skill-card global">
          <CSS />
          <p>CSS</p>
        </div>
        <div className="skill-card global">
          <JS />
          <p>JavaScript</p>
        </div>
        {/* <div className="skill-card typescript">
          <p>TypeScript</p>
        </div> */}
        <div className="skill-card global">
          <React />
          <p>React</p>
        </div>
        <div className="skill-card global">
          <Next />
          <p>Next.js</p>
        </div>
        <div className="skill-card global">
          <Node />
          <p>Node.js</p>
        </div>
        <div className="skill-card global">
          <Express />
          <p>Express</p>
        </div>
        <div className="skill-card global">
          <PostgreSQL />
          <p>PostgreSQL</p>
        </div>
        <div className="skill-card global">
          <Sequelize />
          <p>Sequelize</p>
        </div>
        <div className="skill-card global">
          <MongoDB />
          <p>MongoDB</p>
        </div>
        <div className="skill-card global">
          <Redux />
          <p>Redux</p>
        </div>
        <div className="skill-card global">
          <Tailwind />
          <p>Tailwind CSS</p>
        </div>
        <div className="skill-card global">
          <Docker />
          <p>Docker</p>
        </div>
        <div className="skill-card global">
          <GitHub />
          <p>GitHub</p>
        </div>
        <div className="skill-card global">
          <Postman />
          <p>Postman</p>
        </div>
        <div className="skill-card global">
          <Trello />
          <p>Trello</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
