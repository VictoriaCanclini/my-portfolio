import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>Acerca de mí</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            Inicialmente comencé mi carrera como Contadora pública, pero mi
            búsqueda de desafíos y mi deseo de crecimiento profesional me
            llevaron a descubrir el fascinante mundo de la tecnología. Mi camino
            en el mundo de la programación comienza de manera autodidacta, para
            luego, con el fin de acelerar mi curva de aprendizaje inicié un
            coding bootcamp en plataforma 5 Full Stack. Me motiva mucho
            desarrollar mis habilidades y crecer profesionalmente. Estoy en
            constante búsqueda de oportunidades para colaborar con nuevos
            equipos y adquirir experiencia en las últimas tecnologías, tengo
            sólidas aptitudes para la resolución de problemas, trabajo en
            equipo, planificación y cumplimiento de objetivos producto de mis
            años de experiencia como auditora en una big four. Cada desafío es
            una oportunidad para aprender y estoy decidida a enfrentarlos con
            entusiasmo y determinación.
          </p>
        </div>
        <div className="about-img">
          <Image
            src="/images/compu.jpeg"
            className="profile-img"
            width={300}
            height={500}
            alt="personal"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
