# PanaderIA™

**Conocimiento • Técnica • Pasión**

PanaderIA™ es una academia digital profesional fundada por **Chef Juanote**. La Fase 5 reemplaza los datos genéricos por contenido real del **Curso Maestro de Bolillo**, manteniendo la arquitectura de academia digital, biblioteca, videos QR, certificación y Boly™ como asistente educativo futuro.

## Curso Maestro de Bolillo

Autor: **Chef Juanote**

Frases guía:

- "No hay mejor maestro que el error mismo"
- "Nunca has fracasado si ya has comenzado"

### Módulos reales

1. Introducción al Bolillo
2. Herramientas necesarias: balanza, taza medidora, bowl y batidora
3. Ingredientes
4. Amasado
5. Fermentación
6. División y boleado
7. Formado del bolillo
8. Corte correcto
9. Horneado y vapor
10. Enfriado
11. Bolillos especiales: arándano, nuez, romero, menta, ajo, cebolla e integral
12. Problemas comunes
13. Evaluación
14. Certificación

## Rutas principales

### Sitio comercial

- `/` — Inicio comercial premium con contenido real del Curso Maestro de Bolillo
- `/cursos` — Catálogo inicial y temario
- `/cursos/bolillo-estandar` — Curso Maestro de Bolillo Estándar
- `/cursos/bolillo-premium` — Curso Maestro de Bolillo Premium
- `/chef-juanote` — Sobre Chef Juanote
- `/boly` — Presentación del futuro asistente Boly™
- `/contacto` — Contacto comercial

### Usuarios y alumno

- `/registro` — Registro visual del alumno
- `/login` — Inicio de sesión visual
- `/alumno/dashboard` — Dashboard privado del alumno
- `/alumno/perfil` — Perfil del estudiante
- `/alumno/mis-cursos` — Cursos inscritos
- `/alumno/biblioteca` — Biblioteca digital con eBook, PDFs y materiales reales de bolillo
- `/alumno/videos` — Centro de videos privados organizado por los 14 módulos
- `/alumno/certificados` — Certificados del estudiante
- `/certificados/demo` — Certificado descargable demo

### Arquitectura futura

- `/qr/[code]` — Placeholder para QR dinámicos por módulo
- `/api/qr/resolve` — API preparada para resolver QR con permisos
- `/api/payments/stripe/webhook` — Webhook preparado para Stripe
- `/api/payments/paypal/webhook` — Webhook preparado para PayPal
- `/api/ai/boly/context` — API preparada para contexto de Boly™

## Estructura relevante

```text
app/                        Páginas, rutas privadas, APIs y SEO de Next.js
components/                 Componentes reutilizables comerciales, alumno y certificados
content/bolillo-course.ts   Fuente principal del contenido real del Curso Maestro de Bolillo
content/site.ts             Contenido comercial editable conectado al curso real
content/platform.ts         Datos de academia: alumno, biblioteca, videos QR, certificados
lib/auth/                   Tipos y rutas base de autenticación
lib/payments/               Arquitectura Stripe/PayPal sin conexión real
lib/ai/                     Configuración futura de Boly™ IA
lib/academies/              Catálogo escalable PanaderIA™, PastelerIA™, ChocolaterIA™
knowledge/boly/             Biblioteca de conocimiento futura por módulo
docs/qr-dinamicos.md        Códigos QR preparados para los 14 módulos
```

## Preparación de recursos

Cada módulo incluye estructura para:

- Fotografías técnicas
- Videos QR
- PDF descargable
- Material complementario
- Ayuda contextual de Boly™


## Demostración local Fase 6

La guía completa para ejecutar y probar PanaderIA™ en Pop!_OS Linux está en:

```text
docs/demo-local-popos.md
```

URL local esperada al ejecutar `npm run dev`:

```text
http://localhost:3000
```

Secciones a probar: Inicio, Cursos, Curso Estándar, Curso Premium, Chef Juanote, Contacto, Área del alumno, Biblioteca, Videos y Certificados.

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre `http://localhost:3000` en tu navegador.

## Build de producción

```bash
npm run build
npm run start
```

## No incluido todavía

- Base de datos real.
- Autenticación real.
- Pasarela de pagos activa.
- IA real de Boly™.
- Generación real de PDF.
- Panel administrativo.
