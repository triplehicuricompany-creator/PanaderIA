# Nomenclatura Oficial de Descargables

## Convención de ID

Formato general:

```text
PAN-DESC-{CAPITULO}-{TIPO}-{NUMERO}-v{VERSION}
```

Ejemplo:

```text
PAN-DESC-CAP-03-CHK-001-v1.0.0
```

## Componentes

| Componente | Descripción | Ejemplo |
|---|---|---|
| `PAN` | Identificador de PanaderIA™. | `PAN` |
| `DESC` | Indica recurso descargable. | `DESC` |
| `{CAPITULO}` | Código de capítulo o alcance. | `CAP-03`, `CAP-GLOBAL` |
| `{TIPO}` | Abreviatura del tipo. | `CHK`, `PLA`, `FOR` |
| `{NUMERO}` | Consecutivo de tres dígitos. | `001` |
| `v{VERSION}` | Versión SemVer editorial. | `v1.0.0` |

## Abreviaturas oficiales

| Tipo | Código |
|---|---|
| Checklist | `CHK` |
| Plantilla | `PLA` |
| Formato | `FOR` |
| Hoja de trabajo | `HTR` |
| Evaluación | `EVA` |
| Certificado | `CER` |
| Guía auxiliar | `GUA` |
| Tabla de referencia | `TAB` |

## Nombre de archivo

Formato recomendado:

```text
{ID}_{slug-descriptivo}.{extension}
```

Ejemplo:

```text
PAN-DESC-CAP-03-CHK-001-v1.0.0_checklist-fermentacion.pdf
```

## Reglas

- Usar minúsculas en el slug descriptivo.
- Separar palabras con guiones medios.
- No usar espacios, acentos ni caracteres especiales en nombres de archivo.
- No reutilizar IDs obsoletos para recursos nuevos.
- El ID debe permanecer estable entre formatos del mismo recurso.
