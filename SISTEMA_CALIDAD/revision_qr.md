# Revisión de Códigos QR

## Objetivo

Validar que cada código QR asociado a futuras integraciones funcione, sea trazable y lleve al destino correcto.

## Puntos de revisión

- El QR escanea correctamente en dispositivos comunes.
- El destino digital coincide con el recurso prometido.
- El enlace no está roto, privado por error o sin permisos.
- El destino utiliza una URL estable o gestionada.
- El QR tiene ID, versión y ubicación registrada.
- Existe plan de reemplazo si el enlace cambia.
- La página o recurso destino está listo para usuarios finales.
- No se publica un QR hacia contenido incompleto o no aprobado.

## Prueba mínima

1. Escaneo con al menos dos dispositivos o lectores.
2. Apertura del enlace en navegador independiente.
3. Verificación de permisos de acceso.
4. Confirmación de correspondencia con capítulo, recurso o sección.
5. Registro de resultado y fecha.

## Dictámenes permitidos

- `qr_aprobado`
- `qr_observado`
- `qr_requiere_actualizacion`
- `qr_bloqueado`
