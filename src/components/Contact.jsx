import { Email, Location } from "@/common/icons";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h2>Contacto</h2>
      <p>
        No dudes en conectarte conmigo a vikicanclini@gmail.com. Estoy
        emocionada por lo que depara el futuro en el mundo de la tecnología! 🚀
      </p>

      <a href="mailto:vikicanclini@gmail.com">
        <Email color="#c9a4e8" />
      </a>
      <div>
        <Location color="#9b9c9d" />
        Buenos Aires, Argentina
      </div>
    </div>
  );
};

export default Contact;
