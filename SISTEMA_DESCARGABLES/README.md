# Sistema Maestro de Descargables de PanaderIA™

Este sistema define la administración oficial de todos los recursos descargables del Libro Maestro Premium PanaderIA™. Su función es establecer reglas, categorías, nomenclatura, control de calidad y flujo de integración para descargables futuros.

> Estado: sistema de planeación y control. No contiene archivos descargables finales.

## Alcance

El sistema aplica a recursos complementarios vinculados con capítulos del Libro Maestro Premium PanaderIA™:

- Checklists operativos.
- Plantillas editables.
- Formatos de registro.
- Hojas de trabajo.
- Evaluaciones.
- Certificados.
- Guías técnicas auxiliares.
- Tablas de referencia.

## Principios oficiales

1. Todo descargable debe estar asociado a un capítulo, módulo o sección autorizada.
2. Todo recurso debe tener propósito pedagógico, técnico u operativo claro.
3. Ningún recurso debe duplicar contenido sin aportar uso práctico adicional.
4. Ningún descargable se considera oficial hasta pasar control de calidad.
5. La nomenclatura debe ser uniforme para facilitar búsqueda, actualización y publicación.
6. Los recursos editables deben conservar una versión fuente y una versión exportada cuando corresponda.
7. Este sistema no modifica capítulos existentes ni genera descargables finales por sí mismo.

## Estructura del sistema

| Archivo | Función |
|---|---|
| `manifest.json` | Registro maestro del sistema, categorías, formatos y reglas base. |
| `checklists.md` | Normas para listas de verificación descargables. |
| `plantillas.md` | Normas para plantillas editables y reutilizables. |
| `formatos.md` | Normas para formatos de registro y documentación. |
| `hojas_trabajo.md` | Normas para actividades guiadas del alumno. |
| `evaluaciones.md` | Normas para exámenes, rúbricas y autoevaluaciones. |
| `certificados.md` | Normas para constancias y certificados descargables. |
| `nomenclatura.md` | Convención oficial de nombres, IDs y versiones. |
| `control_calidad.md` | Checklist maestro de validación antes de publicar. |

## Organización por capítulos

Cada recurso debe registrarse bajo una clave de capítulo:

- `CAP-00` para recursos introductorios o globales.
- `CAP-01`, `CAP-02`, etc. para capítulos específicos.
- `CAP-GLOBAL` para recursos transversales usados en varios capítulos.
- `CAP-ANEXO` para anexos técnicos o complementarios.

La relación entre capítulos y recursos debe documentarse en el manifiesto del futuro repositorio de descargables o en el índice que se cree para la integración final.

## Flujo oficial para agregar nuevos descargables

1. Detectar la necesidad pedagógica u operativa dentro de un capítulo.
2. Asignar tipo de descargable y código de capítulo.
3. Crear ficha del recurso con objetivo, audiencia, formato y estado.
4. Redactar o diseñar la versión fuente.
5. Exportar a los formatos permitidos.
6. Aplicar el control de calidad de `control_calidad.md`.
7. Registrar versión, fecha y responsable editorial.
8. Integrar el recurso al índice del capítulo o plataforma correspondiente.

## Estados permitidos

- `propuesto`: idea validable, aún sin producción.
- `borrador`: contenido en desarrollo.
- `revision`: listo para revisión técnica/editorial.
- `aprobado`: validado para integración.
- `publicado`: disponible para alumnos o usuarios finales.
- `obsoleto`: reemplazado o retirado.

## Restricciones

- No se deben modificar capítulos existentes desde este sistema.
- No se deben generar archivos descargables finales en esta fase.
- No se deben publicar recursos sin trazabilidad de capítulo, versión y control de calidad.
