import Head from 'next/head';

export default function Blog() {
  return (
    <div className="container">
      <Head>
        <title>Blog - Consejos y Novedades | Mi Tienda Online</title>
        <meta name="description" content="Artículos sobre tecnología, SEO y desarrollo web. Aprende con nuestros expertos" />
        <meta property="og:title" content="Últimos Artículos - Blog de Mi Tienda" />
        <meta property="og:description" content="Descubre las últimas tendencias en desarrollo web y SEO" />
        <meta property="og:image" content="https://mi-app-seo-lab-14-dawa.vercel.app/og-image-blog.jpg" />
        <meta property="og:url" content="https://mi-app-seo-lab-14-dawa.vercel.app/blog" />
        <meta property="og:type" content="article" />
        <meta name="keywords" content="blog, SEO, desarrollo web, tutoriales, optimización" />
      </Head>

      <main>
        <h1>Nuestro Blog</h1>
        <p>Artículos recientes sobre desarrollo web y SEO</p>
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
          max-width: 600px;
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