import Head from 'next/head';

export default function Contacto() {
  return (
    <div className="container">
      <Head>
        <title>Contacto - Soporte 24/7 | Mi Tienda Online</title>
        <meta name="description" content="Contáctanos para resolver tus dudas. Estamos disponibles 24/7 para ayudarte" />
        <meta property="og:title" content="Atención al Cliente - Contacto" />
        <meta property="og:description" content="Nuestro equipo está listo para responder tus preguntas" />
        <meta property="og:image" content="https://mi-app-seo-lab-14-dawa.vercel.app/og-image-contacto.jpg" />
        <meta property="og:url" content="https://mi-app-seo-lab-14-dawa.vercel.app/contacto" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="contacto, soporte, ayuda, preguntas frecuentes" />
      </Head>

      <main>
        <h1>Contáctanos</h1>
        <form>
          <div className="form-group">
            <label>Nombre:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" />
          </div>
          <div className="form-group">
            <label>Mensaje:</label>
            <textarea rows="5"></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </main>
      <style jsx>{`
        .container {
          min-height: 100vh;
          background: #f7f7f7;
          color: #222;
          font-family: 'Segoe UI', Arial, sans-serif;
          padding: 40px 0;
        }
        main {
          max-width: 420px;
          margin: 60px auto;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          padding: 40px 30px;
        }
        h1 {
          color: #0070f3;
          margin-bottom: 18px;
          text-align: center;
        }
        form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .form-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        label {
          margin-bottom: 6px;
          font-weight: 500;
        }
        input, textarea {
          width: 100%;
          padding: 8px 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
        }
        button {
          background: #0070f3;
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 12px 0;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        button:hover {
          background: #005bb5;
        }
      `}</style>
    </div>
  );
}