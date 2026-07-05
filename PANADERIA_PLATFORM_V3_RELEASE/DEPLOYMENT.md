# Instalación y despliegue — PanaderIA™ Platform V3 Release

## Requisitos
- Node.js 18 o superior.
- Servidor estático local o hosting estático (Netlify, Vercel static, Cloudflare Pages, S3, Nginx).

## Instalación local
```bash
cd PANADERIA_PLATFORM_V3_RELEASE
npm install
npm run test:smoke
npm run serve
```

Abrir la URL local que muestre el servidor y navegar por: Inicio, Curso, Biblioteca, Videos, Boly™, Dashboard, Tienda, Certificados e Instructor.

## Despliegue estático
1. Subir todo el contenido de `PANADERIA_PLATFORM_V3_RELEASE/` al hosting estático.
2. Configurar `index.html` como documento principal.
3. Habilitar HTTPS.
4. Verificar que `data/*.json`, `downloads/**`, `videos/**` y `assets/**` sean servidos públicamente.
5. Ejecutar smoke test antes de publicar.

## Sustitución de assets
- Fotografías: actualizar `assets/reference/` o `data/course-content.json`.
- Videos: actualizar `videos/` o `data/videos.json`.
- PDFs/libros: actualizar `downloads/`, `data/resources.json` y `data/products.json`.

## Producción comercial
Antes de cobro real, conectar los hooks indicados en `data/platform-config.json`: `createStripeCheckoutSession(cart)` y `createPayPalOrder(cart)`.
