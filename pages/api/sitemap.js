export default async function handler(req, res) {
  const baseUrl = "https://mi-app-seo-lab-14-dawa.vercel.app";
  
  // URLs estáticas
  const staticUrls = [
    { url: baseUrl, lastmod: new Date().toISOString() },
    { url: `${baseUrl}/blog`, lastmod: new Date().toISOString() },
    { url: `${baseUrl}/contacto`, lastmod: new Date().toISOString() },
  ];
  
  // URLs dinámicas (ejemplo desde base de datos)
  // En un caso real, esto vendría de una base de datos o API
  const productos = [
    { id: 1, updatedAt: '2023-10-01' },
    { id: 2, updatedAt: '2023-10-05' },
  ];
  
  const dynamicUrls = productos.map(producto => ({
    url: `${baseUrl}/productos/${producto.id}`,
    lastmod: producto.updatedAt
  }));

  const allUrls = [...staticUrls, ...dynamicUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls.map(page => `
    <url>
      <loc>${page.url}</loc>
      <lastmod>${page.lastmod}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();
}