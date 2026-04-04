# Guía de edición de contenido

Esta guía explica cómo editar el contenido del sitio web sin necesidad de conocimientos técnicos. Todo se edita directamente desde GitHub.

## Estructura de contenido

Todo el contenido editable está en la carpeta `src/content/`:

```
src/content/
├── bio/            → Biografía (texto principal)
├── trayectoria/    → Hitos de la trayectoria profesional
├── logros/         → Tarjetas de logros destacados
├── roles/          → Perfil profesional (áreas de especialización)
├── alimapu/        → Sección del proyecto Alimapu
└── contacto/       → Redes sociales y contacto
```

## Cómo editar un archivo

1. Ve a GitHub y navega a la carpeta `src/content/`
2. Haz clic en el archivo que quieres editar
3. Haz clic en el ícono del lápiz (editar)
4. Modifica el texto entre las comillas `"..."`
5. Haz clic en **"Commit changes"**
6. El sitio se actualiza automáticamente en 1-2 minutos

## Formato de los archivos

Cada archivo tiene una sección entre `---` llamada "frontmatter". Solo debes editar el texto entre comillas.

**Importante**: No borres las líneas `---` ni cambies los nombres de los campos (lo que está antes de `:`).

## Editar la biografía

Archivo: `src/content/bio/data.md`

```yaml
---
quote_es: "La música como puente entre el arte y la comunidad."
quote_en: "Music as a bridge between art and community."
p1_es: "Primer párrafo en español..."
p1_en: "First paragraph in English..."
p2_es: "Segundo párrafo en español..."
p2_en: "Second paragraph in English..."
p3_es: "Tercer párrafo en español..."
p3_en: "Third paragraph in English..."
photo: "/img/mi_historia.png"
---
```

Para cambiar la foto: sube la nueva imagen a `public/img/` y cambia el valor de `photo`.

## Agregar un hito a la trayectoria

1. Ve a `src/content/trayectoria/`
2. Haz clic en **"Add file"** → **"Create new file"**
3. Nombra el archivo: `YYYY-nombre-corto.md` (ej: `2026-nuevo-proyecto.md`)
4. Copia esta plantilla:

```yaml
---
year: 2026
order: 13
title_es: "Título del hito en español"
title_en: "Milestone title in English"
desc_es: "Descripción del hito en español."
desc_en: "Milestone description in English."
---
```

**Nota**: El campo `order` determina el orden de aparición. Usa un número mayor que el último existente (actualmente 12).

## Agregar un logro

1. Ve a `src/content/logros/`
2. Crea un nuevo archivo `.md`
3. Usa esta plantilla:

```yaml
---
order: 7
icon: "🎵"
tag_es: "2026"
tag_en: "2026"
title_es: "Título del logro"
title_en: "Achievement title"
desc_es: "Descripción del logro en español."
desc_en: "Achievement description in English."
---
```

**Íconos disponibles**: Puedes usar cualquier emoji. Algunos sugeridos:
- 🎻 violín
- 🎼 partitura
- 🌎 mundo
- 🏆 trofeo
- 🌐 global
- 🎸 guitarra
- 🎵 nota musical

## Editar roles profesionales

Archivos en `src/content/roles/`:
- `direccion.md` → Dirección de orquesta
- `violinista.md` → Violinista
- `gestion.md` → Gestión cultural y docencia

Los items son una lista. Para agregar uno nuevo, agrega una línea con `  - "Nuevo item"` (con 2 espacios antes del guión):

```yaml
items_es:
  - "Item existente"
  - "Nuevo item en español"
items_en:
  - "Existing item"
  - "New item in English"
```

## Editar la sección Alimapu

Archivo: `src/content/alimapu/data.md`

Edita los párrafos y estadísticas. Las estadísticas tienen este formato:

```yaml
stats:
  - value: "500+"
    label_es: "músicos dirigidos en una sola función"
    label_en: "musicians conducted in a single performance"
```

## Agregar una red social

1. Ve a `src/content/contacto/`
2. Crea un nuevo archivo `.md`
3. Usa esta plantilla:

```yaml
---
order: 4
platform: "YouTube"
url: "https://www.youtube.com/@canal"
handle: "@canal"
icon: "facebook"
---
```

**Nota**: El campo `icon` solo acepta: `instagram`, `linkedin`, `facebook`. Para otras redes, usa el más similar.

## Cambiar imágenes

1. Ve a la carpeta `public/img/` en GitHub
2. Haz clic en **"Add file"** → **"Upload files"**
3. Sube la nueva imagen
4. Actualiza la referencia en el archivo `.md` correspondiente

## Eliminar contenido

Para eliminar un hito, logro o contacto, simplemente borra el archivo `.md` correspondiente en GitHub.

## Preguntas frecuentes

**¿Cuánto tarda en actualizarse el sitio?**
Entre 1 y 2 minutos después de hacer commit.

**¿Puedo deshacer un cambio?**
Sí, GitHub guarda el historial. Ve al archivo, haz clic en "History" y puedes revertir a una versión anterior.

**¿Qué pasa si cometo un error en el formato?**
El build fallará y el sitio seguirá mostrando la última versión correcta. Revisa que no hayas borrado las líneas `---` ni los nombres de los campos.
