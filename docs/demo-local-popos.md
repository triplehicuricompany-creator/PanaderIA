# Demostración local PanaderIA™ — Pop!_OS Linux

Este documento valida las rutas construidas y explica cómo levantar la plataforma en una máquina local Pop!_OS Linux.

## Requisitos

- Pop!_OS 22.04 o superior
- Node.js 20 LTS o superior
- npm 10 o superior
- Git
- Navegador moderno: Firefox, Chrome o Brave

## Instalación en Pop!_OS

```bash
sudo apt update
sudo apt install -y git curl
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node --version
npm --version
```

## Ejecutar PanaderIA™ localmente

Desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

URL local esperada:

```text
http://localhost:3000
```

Abre esa URL en tu navegador para ver la plataforma.

## Cómo probar cada sección

| Sección | URL local | Qué validar |
|---|---|---|
| Inicio | `http://localhost:3000/` | Hero premium, CTA, frases de Chef Juanote y temario real |
| Cursos | `http://localhost:3000/cursos` | Catálogo y módulos del Curso Maestro de Bolillo |
| Curso Estándar | `http://localhost:3000/cursos/bolillo-estandar` | Herramientas, ingredientes, PDF y temario |
| Curso Premium | `http://localhost:3000/cursos/bolillo-premium` | 14 módulos, QR, fotografías, Boly™ y bolillos especiales |
| Chef Juanote | `http://localhost:3000/chef-juanote` | Presentación del fundador |
| Contacto | `http://localhost:3000/contacto` | Formulario visual y enfoque comercial |
| Dashboard alumno | `http://localhost:3000/alumno/dashboard` | Progreso del curso y siguiente lección |
| Biblioteca | `http://localhost:3000/alumno/biblioteca` | eBook, PDFs y material complementario |
| Videos | `http://localhost:3000/alumno/videos` | Videos privados por módulo, QR y Boly™ contextual |
| Certificados | `http://localhost:3000/alumno/certificados` | Certificado PanaderIA™ demo |
| Certificado demo | `http://localhost:3000/certificados/demo` | Vista previa del certificado descargable |
| Boly™ | `http://localhost:3000/boly` | Presentación futura del asistente educativo |
| QR demo | `http://localhost:3000/qr/BOL-M01-INTRO` | Placeholder de QR dinámico |

## Checklist terminado

- [x] Sitio comercial premium en negro, dorado y blanco.
- [x] Curso Maestro de Bolillo con 14 módulos reales.
- [x] Autor Chef Juanote y frases oficiales.
- [x] Rutas de Curso Estándar y Curso Premium.
- [x] Área privada visual del alumno.
- [x] Dashboard con progreso.
- [x] Biblioteca digital con eBook, PDFs y material complementario preparado.
- [x] Centro de videos organizado por módulos con códigos QR.
- [x] Certificado visual con marca PanaderIA™ y firma Chef Juanote.
- [x] Preparación de Boly™ por módulo.
- [x] Preparación de QR dinámicos.
- [x] Arquitectura futura para pagos Stripe y PayPal.
- [x] Estructura multiacademia: PanaderIA™, PastelerIA™ y ChocolaterIA™.

## Falta para lanzamiento comercial

- [ ] Instalar dependencias en un entorno con acceso correcto a npm.
- [ ] Ejecutar `npm run build` exitosamente en entorno local o CI.
- [ ] Conectar autenticación real.
- [ ] Conectar base de datos productiva.
- [ ] Conectar pagos reales Stripe/PayPal.
- [ ] Subir PDFs, fotografías y videos reales.
- [ ] Implementar URLs firmadas para recursos premium.
- [ ] Generar certificados PDF reales.
- [ ] Agregar panel administrativo.
- [ ] Activar Boly™ con IA, base de conocimiento y guardrails.
- [ ] Configurar dominio, hosting, analítica, monitoreo y backups.

## Resultado de validación en este entorno

Las rutas principales existen en el árbol de archivos, pero no fue posible levantar el servidor porque las dependencias no pudieron instalarse: el registry npm respondió `403 Forbidden` al intentar descargar paquetes.
