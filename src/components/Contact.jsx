"use client";

import { useEffect, useState } from "react";

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
                <div className="prop-value">
                  <a href="mailto:vikicanclini@gmail.com">
                    vikicanclini@gmail.com
                  </a>
                </div>
              </div>
              <div className="prop-row">
                <div className="prop-label">Ubicación</div>
                <div className="prop-value">Buenos Aires, Argentina</div>
              </div>
              <div className="prop-row">
                <div className="prop-label">Redes</div>
                <div className="prop-value">
                  <a
                    href="https://www.linkedin.com/in/victoriacanclini"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>{" "}
                  ·{" "}
                  <a
                    href="https://github.com/VictoriaCanclini"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>{" "}
                  ·{" "}
                  <a
                    href="https://www.instagram.com/victoria.canclini"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
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
