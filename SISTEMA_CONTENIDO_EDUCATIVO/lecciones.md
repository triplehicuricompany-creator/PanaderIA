# Lecciones — Organización Didáctica

## Propósito

Establecer la estructura oficial para administrar lecciones futuras sin redactar contenidos, guiones, clases, videos ni materiales finales.

## Definición

Una lección es una unidad didáctica controlada que conecta un capítulo o tema canónico con objetivos de aprendizaje, práctica, evaluación y recursos de apoyo.

## Ficha estructural por lección

| Campo | Descripción |
|---|---|
| `id_leccion` | Identificador único de la lección futura. |
| `capitulo_referencia` | Capítulo o tema canónico relacionado. |
| `objetivo_principal` | Objetivo de aprendizaje vinculado. |
| `duracion_estimada` | Tiempo previsto, sujeto a validación futura. |
| `formato_previsto` | Texto, clase, práctica, demo o acompañamiento. |
| `estado` | Estado documental de la lección. |
| `dependencias` | Capítulos, recursos o evaluaciones requeridas. |
| `restricciones` | Control para impedir producción no autorizada. |

## Reglas de organización

1. Toda lección debe derivarse de contenido canónico aprobado.
2. Ninguna lección debe redactarse dentro de este sistema.
3. Las lecciones no sustituyen capítulos ni módulos existentes.
4. Las lecciones deben tener objetivos medibles antes de avanzar a producción.
5. Cualquier material multimedia asociado debe gestionarse fuera de esta carpeta.

## Estados de lección

- `pendiente_diseno`
- `pendiente_objetivos`
- `pendiente_revision_academica`
- `aprobada_para_produccion_futura`
- `bloqueada`
