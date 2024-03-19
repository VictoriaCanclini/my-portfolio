import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>Acerca de mi</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            Soy Victoria Canclini, una desarrolladora Full Stack para
            aplicaciones web. Inicialmente comencé mi carrera como Contadora
            pública, pero mi búsqueda de desafíos y mi deseo de crecimiento
            profesional me llevaron a descubrir el fascinante mundo de la
            tecnología. Me motiva mucho desarrollar mis habilidades y crecer
            profesionalmente. Estoy en constante búsqueda de oportunidades para
            colaborar con nuevos equipos y adquirir experiencia en las últimas
            tecnologías. Cada desafío es una oportunidad para aprender y estoy
            decidida a enfrentarlos con entusiasmo y determinación.
          </p>
        </div>
        <div className="about-img">
          <Image
            src="/public/images/vic.jpg"
            className="profile-img"
            width={300}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
