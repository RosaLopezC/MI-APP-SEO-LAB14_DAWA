import Head from 'next/head';

export default function Contacto() {
  return (
    <div>
      <Head>
        <title>Contacto - Soporte 24/7 | Mi Tienda Online</title>
        <meta name="description" content="Contáctanos para resolver tus dudas. Estamos disponibles 24/7 para ayudarte" />
        <meta property="og:title" content="Atención al Cliente - Contacto" />
        <meta property="og:description" content="Nuestro equipo está listo para responder tus preguntas" />
        <meta property="og:image" content="https://tudominio.com/og-image-contacto.jpg" />
        <meta property="og:url" content="https://tudominio.com/contacto" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="contacto, soporte, ayuda, preguntas frecuentes" />
      </Head>

      <main>
        <h1>Contáctanos</h1>
        <form>
          <div>
            <label>Nombre:</label>
            <input type="text" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" />
          </div>
          <div>
            <label>Mensaje:</label>
            <textarea rows="5"></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </main>
    </div>
  );
}