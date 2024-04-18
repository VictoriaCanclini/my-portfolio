import Image from "next/image";
import { Email, Location } from "@/common/icons";

const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="about-img">
          <Image
            src="/images/compu.jpeg"
            width={400}
            height={250}
            alt="personal"
            priority={true}
          />
        </div>
        <h2>Contacto</h2>
        <p>
          No dudes en conectarte conmigo a vikicanclini@gmail.com. Estoy
          emocionada por lo que depara el futuro en el mundo de la tecnología!
          🚀
        </p>

        <a href="mailto:vikicanclini@gmail.com">
          <Email color="#c9a4e8" />
        </a>
        <div>
          <Location color="#9b9c9d" />
          Buenos Aires, Argentina
        </div>
      </div>
    </>
  );
};

export default Contact;
