import React from "react";
import {
  GitHub,
  ReactIcon,
  HTMLIcon,
  CSSicon,
  JSicon,
  NextIcon,
  NodeIcon,
  ExpressIcon,
  PostgreSQLicon,
  MongoDBicon,
  ReduxIcon,
  TailwindIcon,
  DockerIcon,
  PostmanIcon,
  TrelloIcon,
  SequelizeIcon,
} from "../../common/icons";

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Habilidades</h2>
      <div className="grid-skills">
        <div className="skill-card global">
          <HTMLIcon />
          <p>HTML</p>
        </div>
        <div className="skill-card global">
          <CSSicon />
          <p>CSS</p>
        </div>
        <div className="skill-card global">
          <JSicon />
          <p>JavaScript</p>
        </div>
        <div className="skill-card global">
          <ReactIcon />
          <p>React</p>
        </div>
        <div className="skill-card global">
          <NextIcon />
          <p>Next.js</p>
        </div>
        <div className="skill-card global">
          <NodeIcon />
          <p>Node.js</p>
        </div>
        <div className="skill-card global">
          <ExpressIcon />
          <p>Express</p>
        </div>
        <div className="skill-card global">
          <PostgreSQLicon />
          <p>PostgreSQL</p>
        </div>
        <div className="skill-card global">
          <SequelizeIcon />
          <p>Sequelize</p>
        </div>
        <div className="skill-card global">
          <MongoDBicon />
          <p>MongoDB</p>
        </div>
        <div className="skill-card global">
          <ReduxIcon />
          <p>Redux</p>
        </div>
        <div className="skill-card global">
          <TailwindIcon />
          <p>Tailwind CSS</p>
        </div>
        <div className="skill-card global">
          <DockerIcon />
          <p>Docker</p>
        </div>
        <div className="skill-card global">
          <GitHub />
          <p>GitHub</p>
        </div>
        <div className="skill-card global">
          <PostmanIcon />
          <p>Postman</p>
        </div>
        <div className="skill-card global">
          <TrelloIcon />
          <p>Trello</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
