# Organización de códigos QR

## Propósito

Los códigos QR conectan el Libro Maestro Premium PanaderIA™ con recursos digitales como videos, descargas, evaluaciones, fichas técnicas, audios, formularios y actualizaciones.

## Tipos oficiales

- **QR de video:** dirige a demostraciones o cápsulas educativas.
- **QR de descarga:** entrega plantillas, fichas o listas de verificación.
- **QR de evaluación:** conecta con autoevaluaciones o cuestionarios.
- **QR de actualización:** dirige a recursos vivos o versiones actualizadas.
- **QR comercial:** lleva a página de venta, comunidad, soporte o registro.
- **QR interno:** usado para pruebas, revisión editorial o control de producción.

## Organización recomendada

```text
MULTIMEDIA_ACTIVOS/codigos_qr/
├── videos/
├── descargas/
├── evaluaciones/
├── actualizaciones/
├── comerciales/
└── internos/
```

## Reglas oficiales

1. Preferir QR dinámico cuando el destino pueda cambiar.
2. No publicar QR sin prueba de lectura en móvil.
3. Mantener margen de seguridad alrededor del código.
4. No deformar, rotar ni comprimir excesivamente el QR.
5. Probar el QR impreso al tamaño final.
6. Registrar URL destino, fecha de prueba y responsable.
7. Usar nombres canónicos que indiquen capítulo, destino y versión.

## Especificaciones recomendadas

- **Impresión:** SVG, PDF o PNG mínimo 1000 x 1000 px.
- **Pantalla:** PNG o SVG.
- **Color:** preferir negro sobre fondo blanco para máxima lectura.
- **Tamaño impreso mínimo:** 2.5 cm x 2.5 cm, salvo pruebas que validen otro tamaño.
- **Corrección de errores:** nivel Q o H para piezas impresas con mayor riesgo de desgaste.

## Registro mínimo futuro

- Nombre canónico.
- URL destino.
- Tipo de QR.
- Capítulo o recurso asociado.
- Fecha de generación.
- Fecha de última prueba.
- Estado: prueba, aprobado, publicado o reemplazado.
