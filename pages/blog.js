import Head from 'next/head';

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog - Consejos y Novedades | Mi Tienda Online</title>
        <meta name="description" content="Artículos sobre tecnología, SEO y desarrollo web. Aprende con nuestros expertos" />
        <meta property="og:title" content="Últimos Artículos - Blog de Mi Tienda" />
        <meta property="og:description" content="Descubre las últimas tendencias en desarrollo web y SEO" />
        <meta property="og:image" content="https://tudominio.com/og-image-blog.jpg" />
        <meta property="og:url" content="https://tudominio.com/blog" />
        <meta property="og:type" content="article" />
        <meta name="keywords" content="blog, SEO, desarrollo web, tutoriales, optimización" />
      </Head>

      <main>
        <h1>Nuestro Blog</h1>
        <p>Artículos recientes sobre desarrollo web y SEO</p>
        {/* Resto del contenido */}
      </main>
    </div>
  );
}