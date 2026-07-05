# Plan de respaldo y recuperación

## Qué respaldar

- Carpeta completa `PANADERIA_PLATFORM_V3_RELEASE/`.
- Copia versionada de `data/`.
- Copia versionada de `downloads/`.
- Copia versionada de `assets/` y `videos/`.
- Configuración del hosting y dominio.

## Frecuencia

- Antes de cada publicación.
- Después de actualizar contenido importante.
- Semanalmente durante operación activa.

## Recuperación rápida

1. Detener publicación nueva o revertir deploy.
2. Restaurar última carpeta estable completa.
3. Ejecutar `npm run test:smoke`.
4. Verificar navegación y descargas.
5. Registrar causa y corrección.

## Recuperación de contenido

Si falla un JSON, restaurar solo el archivo afectado desde respaldo y probar nuevamente. Si falla un recurso descargable, restaurar archivo en `downloads/` y revisar su referencia en `data/resources.json` o `data/products.json`.
