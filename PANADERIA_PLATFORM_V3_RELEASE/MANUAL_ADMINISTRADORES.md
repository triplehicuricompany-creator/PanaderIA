# Manual para administradores

## Responsabilidades

- Publicar la carpeta `PANADERIA_PLATFORM_V3_RELEASE/` en hosting estático con HTTPS.
- Validar que `data/`, `assets/`, `downloads/` y `videos/` se sirvan correctamente.
- Proteger llaves de Stripe, PayPal, base de datos y autenticación en un backend separado.
- Mantener una copia respaldada antes de actualizar contenido.

## Operación diaria

1. Revisar que la página principal cargue.
2. Probar búsqueda en biblioteca con términos: `amasado`, `fermentación`, `corte`, `certificación`.
3. Verificar una descarga de guía y una descarga de certificado.
4. Probar Boly™ con una pregunta de diagnóstico.
5. Revisar que el carrito agregue y limpie productos.

## Publicación de contenido

- Actualizar JSON de datos con editor de texto o pipeline controlado.
- Evitar cambiar IDs si existen alumnos o enlaces externos.
- Guardar evidencia de cambios: fecha, archivo, responsable y motivo.

## Incidentes

- Si falla navegación: restaurar `index.html` y `src/app.js` desde respaldo.
- Si falla contenido: validar JSON con `npm run test:smoke`.
- Si fallan descargas: revisar rutas en `data/resources.json` y `data/products.json`.
