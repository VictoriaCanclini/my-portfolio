import Image from "next/image";
import { EmailIcon } from "@/common/icons";

const Hero = () => {
  return (
    <div className="hero-panel" id="hero">
      <div className="inner">
        <div className="hero-heading">
          <h1 className="page-title">Victoria Canclini</h1>
          <p className="page-subtitle">
            Desarrolladora Full Stack &amp; Contadora Pública
          </p>
        </div>

        <div className="hero-photo">
          <Image
            src="/images/vic.jpg"
            width={264}
            height={264}
            alt="Foto de Victoria Canclini"
            priority
          />
        </div>

        <div className="properties properties-panel">
          <div className="prop-row">
            <div className="prop-label">Rol actual</div>
            <div className="prop-value">Desarrolladora Full Stack</div>
          </div>
          <div className="prop-row">
            <div className="prop-label">Formación previa</div>
            <div className="prop-value">Contadora Pública</div>
          </div>
          <div className="prop-row">
            <div className="prop-label">Formación reciente</div>
            <div className="prop-value">IA en Programación</div>
          </div>
          <div className="prop-row">
            <div className="prop-label">Stack principal</div>
            <div className="prop-value">
              <span className="tag-inline">React</span>
              <span className="tag-inline">Next.js</span>
              <span className="tag-inline">TypeScript</span>
            </div>
          </div>
          <div className="prop-row">
            <div className="prop-label">Contacto</div>
            <div className="prop-value icon-links">
              <a href="mailto:vikicanclini@gmail.com">
                <EmailIcon width="14" height="14" /> vikicanclini@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
