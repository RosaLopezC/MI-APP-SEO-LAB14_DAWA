import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Inicio - Mi Tienda Online | Los mejores productos</title>
        <meta name="description" content="Encuentra los mejores productos al mejor precio en nuestra tienda online" />
        <meta property="og:title" content="Ofertas Especiales - Mi Tienda" />
        <meta property="og:description" content="Descuentos exclusivos solo por tiempo limitado" />
        <meta property="og:image" content="https://mi-app-seo-lab-14-dawa.vercel.app/og-image-home.jpg" />
        <meta property="og:url" content="https://mi-app-seo-lab-14-dawa.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="tienda online, productos, ofertas, compras" />
      </Head>

      <main>
        <h1>Bienvenido a nuestra tienda</h1>
        <p>Encuentra los mejores productos a precios increíbles</p>
        {/* Resto del contenido */}
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
          max-width: 500px;
          margin: 60px auto;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          padding: 40px 30px;
          text-align: center;
        }
        h1 {
          color: #0070f3;
          margin-bottom: 18px;
        }
        p {
          font-size: 1.1rem;
        }
      `}</style>
    </div>
  );
}