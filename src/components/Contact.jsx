"use client";

import { Email, Location } from "@/common/icons";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mensaje: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xpzvkbvl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("¡El mensaje se envió correctamente!");
        setFormData({
          name: "",
          email: "",
          mensaje: "",
        });
      } else {
        alert(
          "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo."
        );
      }
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      alert(
        "Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo."
      );
    }
  };

  return (
    <div className="contact-container" id="contact">
      <h2>Contacto</h2>
      <div className="contact-container form">
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Nombre:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Mensaje:
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                required
              />
            </label>
          </div>
          <button>Enviar</button>
        </form>
      </div>
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
