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
  TSicon,
  ViteIcon,
  SupabaseIcon,
  VueIcon,
  PHPIcon,
} from "@/common/icons";

const Skills = () => {
  return (
    <section className="section white reveal" id="skills">
      <div className="inner">
        <div className="block-head">
          <h2>Habilidades</h2>
        </div>

        <div className="skill-group">
          <h4>Frontend</h4>
          <div className="pill-row">
            <span className="pill">
              <HTMLIcon />
              HTML
            </span>
            <span className="pill">
              <CSSicon />
              CSS
            </span>
            <span className="pill">
              <JSicon />
              JavaScript
            </span>
            <span className="pill">
              <TSicon />
              TypeScript
            </span>
            <span className="pill">
              <ReactIcon color="#61DAFB" />
              React
            </span>
            <span className="pill">
              <NextIcon />
              Next.js
            </span>
            <span className="pill">
              <VueIcon />
              Vue.js
            </span>
            <span className="pill">
              <ViteIcon />
              Vite
            </span>
            <span className="pill">
              <ReduxIcon />
              Redux
            </span>
            <span className="pill">
              <TailwindIcon />
              Tailwind CSS
            </span>
          </div>
        </div>

        <div className="skill-group">
          <h4>Backend</h4>
          <div className="pill-row">
            <span className="pill">
              <NodeIcon color="#339933" />
              Node.js
            </span>
            <span className="pill">
              <ExpressIcon />
              Express
            </span>
            <span className="pill">
              <PHPIcon />
              PHP
            </span>
          </div>
        </div>

        <div className="skill-group">
          <h4>Bases de datos</h4>
          <div className="pill-row">
            <span className="pill">
              <PostgreSQLicon />
              PostgreSQL
            </span>
            <span className="pill">
              <SequelizeIcon />
              Sequelize
            </span>
            <span className="pill">
              <MongoDBicon />
              MongoDB
            </span>
            <span className="pill">
              <SupabaseIcon />
              Supabase
            </span>
          </div>
        </div>

        <div className="skill-group">
          <h4>Herramientas &amp; Cloud</h4>
          <div className="pill-row">
            <span className="pill">
              <DockerIcon />
              Docker
            </span>
            <span className="pill">AWS</span>
            <span className="pill">
              <GitHub />
              GitHub
            </span>
            <span className="pill">
              <PostmanIcon />
              Postman
            </span>
            <span className="pill">
              <TrelloIcon />
              Trello
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
