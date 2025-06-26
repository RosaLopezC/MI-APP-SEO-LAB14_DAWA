import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Inicio - Mi Tienda Online | Los mejores productos</title>
        <meta name="description" content="Encuentra los mejores productos al mejor precio en nuestra tienda online" />
        <meta property="og:title" content="Ofertas Especiales - Mi Tienda" />
        <meta property="og:description" content="Descuentos exclusivos solo por tiempo limitado" />
        <meta property="og:image" content="https://tudominio.com/og-image-home.jpg" />
        <meta property="og:url" content="https://tudominio.com" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="tienda online, productos, ofertas, compras" />
      </Head>

      <main>
        <h1>Bienvenido a nuestra tienda</h1>
        <p>Encuentra los mejores productos a precios increíbles</p>
        {/* Resto del contenido */}
      </main>
    </div>
  );
}