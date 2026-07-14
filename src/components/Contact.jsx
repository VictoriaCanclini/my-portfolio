"use client";

import { useEffect, useState } from "react";
import { EmailIcon, GitHub, Instagram, LinkedIn, Location } from "@/common/icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mensaje: "",
  });
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(timer);
  }, [toast]);

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
        setToast({
          type: "success",
          message: "¡Tu mensaje se envió correctamente! Te voy a responder a la brevedad.",
        });
        setFormData({
          name: "",
          email: "",
          mensaje: "",
        });
      } else {
        setToast({
          type: "error",
          message: "Hubo un problema al enviar el mensaje. Probá de nuevo.",
        });
      }
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      setToast({
        type: "error",
        message: "Hubo un problema al enviar el mensaje. Probá de nuevo.",
      });
    }
  };

  return (
    <section className="section white reveal" id="contact">
      <div className="inner">
        <div className="block-head">
          <h2>Contacto</h2>
        </div>
        <div className="contact-grid">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Nombre</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="tu nombre"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="msg">Mensaje</label>
              <textarea
                id="msg"
                name="mensaje"
                placeholder="contame sobre tu proyecto"
                value={formData.mensaje}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="btn-submit">
              Enviar mensaje
            </button>
          </form>
          <div className="prose">
            <p>
              No dudes en conectarte conmigo. Estoy emocionada por lo que
              depara el futuro en el mundo de la tecnología 🚀
            </p>
            <div className="properties" style={{ marginTop: "20px" }}>
              <div className="prop-row">
                <div className="prop-label">Email</div>
                <div className="prop-value icon-links">
                  <a href="mailto:vikicanclini@gmail.com">
                    <EmailIcon width="14" height="14" /> vikicanclini@gmail.com
                  </a>
                </div>
              </div>
              <div className="prop-row">
                <div className="prop-label">Ubicación</div>
                <div className="prop-value icon-text">
                  <Location width="14" height="14" /> Buenos Aires, Argentina
                </div>
              </div>
              <div className="prop-row">
                <div className="prop-label">Redes</div>
                <div className="prop-value icon-links">
                  <a
                    href="https://www.linkedin.com/in/victoriacanclini"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedIn width="14" height="14" /> LinkedIn
                  </a>{" "}
                  ·{" "}
                  <a
                    href="https://github.com/VictoriaCanclini"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub width="14" height="14" /> GitHub
                  </a>{" "}
                  ·{" "}
                  <a
                    href="https://www.instagram.com/victoria.canclini"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram width="14" height="14" /> Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {toast && (
        <div className={`toast toast-${toast.type}`} role="status">
          <span>{toast.message}</span>
          <button
            className="toast-close"
            onClick={() => setToast(null)}
            aria-label="Cerrar notificación"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};

export default Contact;
