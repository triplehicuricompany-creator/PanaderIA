# PanaderIA™ Platform V3 Release

Paquete oficial de distribución para publicar PanaderIA™ como plataforma educativa estática: Curso Maestro de Bolillo, biblioteca técnica, buscador, Boly™, recursos descargables, tienda preparada, dashboard, certificación y panel de instructor.

## Requisitos del sistema

- Node.js 18 o superior para ejecutar pruebas y servidor local.
- Navegador moderno: Chrome, Edge, Firefox, Safari o navegadores móviles actuales.
- Hosting estático con HTTPS para producción.
- Acceso público de lectura a `data/`, `assets/`, `downloads/` y `videos/`.

## Instalación local

```bash
cd PANADERIA_PLATFORM_V3_RELEASE
npm install
npm run test:smoke
npm run serve
```

Abrir `http://localhost:8080/index.html#home`.

## Variables de configuración

La versión estática no requiere variables de entorno para funcionar. Para producción con pagos, autenticación o analítica, configurar esos servicios fuera de este paquete y conectar los hooks definidos en `data/platform-config.json`.

Variables recomendadas para el backend futuro:

- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `PAYPAL_CLIENT_ID`
- `PAYPAL_CLIENT_SECRET`
- `AUTH_PROVIDER_URL`
- `DATABASE_URL`
- `PUBLIC_ASSET_BASE_URL`

## Guía de desarrollo

1. Editar contenido educativo en `data/course-content.json`.
2. Editar recursos en `data/resources.json`.
3. Editar videos en `data/videos.json`.
4. Editar productos en `data/products.json`.
5. Ejecutar `npm run test:smoke`.
6. Ejecutar una revisión manual de navegación en Inicio, Curso, Biblioteca, Videos, Boly™, Dashboard, Tienda, Certificados e Instructor.

## Guía de producción

1. Ejecutar pruebas locales.
2. Subir todo el directorio `PANADERIA_PLATFORM_V3_RELEASE/` a hosting estático.
3. Configurar `index.html` como entrada principal.
4. Habilitar HTTPS.
5. Verificar rutas públicas de JSON, videos, assets y descargas.
6. Conectar backend de pagos antes de cobro automatizado.
7. Validar textos legales antes de venta pública.

## Actualización de futuras versiones

- Conservar IDs de módulos, recursos, productos y videos siempre que sea posible.
- Actualizar contenido en JSON antes que duplicar archivos.
- Reemplazar recursos manteniendo rutas cuando se desee evitar cambios en enlaces.
- Incrementar versión en `package.json`, `manifest.webmanifest` y `data/platform-config.json`.
- Ejecutar smoke test y auditoría de enlaces antes de publicar.

## Dependencias

- Runtime: navegador moderno.
- Desarrollo/test: Node.js, npm y Python 3 para `npm run serve`.
- Dependencias npm externas: ninguna obligatoria para la app estática actual.

## Archivos importantes

- `index.html`: shell principal y navegación.
- `src/app.js`: render de vistas, dashboard, tienda, certificados e instructor.
- `src/boly-engine.js`: buscador, detección de módulo/diagnóstico y respuesta de Boly™.
- `data/course-content.json`: contenido comercial del curso.
- `data/technical-library.json`: biblioteca técnica indexada.
- `data/resources.json`: descargas y recursos.
- `data/videos.json`: videos por módulo.
- `data/products.json`: productos comerciales.
- `data/platform-config.json`: versión, pagos, móvil y reemplazo de assets.
- `data/asset-replacement-map.json`: mapa para sustituir fotos, videos y descargas.
- `downloads/`: libros, certificados, guías y exámenes.
- `videos/`: páginas de referencia por módulo.
- `assets/reference/`: imágenes de referencia por módulo.

## Manuales incluidos

- `MANUAL_ADMINISTRADORES.md`
- `MANUAL_INSTRUCTORES.md`
- `MANUAL_ESTUDIANTES.md`
- `MANUAL_TECNICO_BOLY.md`
- `BACKUP_RECOVERY.md`
- `PRE_LAUNCH_CHECKLIST.md`
- `POST_LAUNCH_CHECKLIST.md`
