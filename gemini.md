# 🎮 VideoGames API — Arquitectura del Proyecto

## Descripción General

API REST pública construida con **Node.js** y **Express** para gestionar información de videojuegos. Incluye datos reales de juegos, géneros, plataformas y años de creación. Inspirada en el estilo de la Rick and Morty API.

---

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| Runtime | Node.js 20+ |
| Framework | Express 4.x |
| Base de datos | SQLite (via better-sqlite3) |
| ORM/Query Builder | Knex.js |
| Documentación | README.md estilo Rick and Morty API |
| Herramienta de seed | Script JS con datos reales |

---

## Estructura de Carpetas

```
videogames-api/
├── src/
│   ├── config/
│   │   └── database.js          # Configuración de la base de datos
│   ├── controllers/
│   │   ├── gameController.js    # Lógica de juegos
│   │   ├── genreController.js   # Lógica de géneros
│   │   └── platformController.js# Lógica de plataformas
│   ├── routes/
│   │   ├── index.js             # Router principal
│   │   ├── games.js             # Rutas /api/game
│   │   ├── genres.js            # Rutas /api/genre
│   │   └── platforms.js         # Rutas /api/platform
│   ├── models/
│   │   ├── Game.js
│   │   ├── Genre.js
│   │   └── Platform.js
│   ├── middlewares/
│   │   └── errorHandler.js      # Manejo global de errores
│   └── app.js                   # Instancia de Express
├── db/
│   ├── migrations/              # Definición de tablas
│   └── seeds/                   # Datos reales de videojuegos
├── .env
├── package.json
├── knexfile.js
├── server.js                    # Entry point
└── README.md                    # Documentación estilo Rick and Morty API
```

---

## Modelos de Datos

### 🎮 Game
```json
{
  "id": 1,
  "name": "The Legend of Zelda: Ocarina of Time",
  "year": 1998,
  "genre_id": 3,
  "platform_id": 2,
  "description": "Aventura de acción en mundo 3D.",
  "image": "https://...",
  "created_at": "2024-01-01"
}
```

### 🏷️ Genre
```json
{
  "id": 1,
  "name": "Action-Adventure",
  "description": "Juegos que combinan acción y exploración."
}
```

### 🕹️ Platform
```json
{
  "id": 1,
  "name": "Nintendo 64",
  "manufacturer": "Nintendo",
  "year": 1996
}
```

---

## Endpoints de la API

### Base URL
```
http://localhost:3000/api
```

### Info general
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api` | Info general de la API |

### Juegos
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/game` | Lista paginada de juegos |
| GET | `/api/game/:id` | Juego por ID |
| GET | `/api/game/:id,:id2` | Múltiples juegos por ID |

### Géneros
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/genre` | Lista de géneros |
| GET | `/api/genre/:id` | Género por ID |
| GET | `/api/genre/:id,:id2` | Múltiples géneros por ID |

### Plataformas
| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/platform` | Lista de plataformas |
| GET | `/api/platform/:id` | Plataforma por ID |
| GET | `/api/platform/:id,:id2` | Múltiples plataformas por ID |

### Filtros disponibles (query params)
- `/api/game?name=zelda`
- `/api/game?year=1998`
- `/api/game?genre=Action`
- `/api/game?platform=Nintendo`
- `/api/game?page=2`

---

## Paginación

Todas las listas devuelven el siguiente formato:
```json
{
  "info": {
    "count": 120,
    "pages": 6,
    "next": "http://localhost:3000/api/game?page=2",
    "prev": null
  },
  "results": [ ... ]
}
```

---

## Datos Reales Incluidos (Seeds)

- **+50 juegos icónicos**: Zelda, Mario, GTA, Dark Souls, Minecraft, etc.
- **15+ géneros**: RPG, FPS, Platformer, Strategy, etc.
- **20+ plataformas**: NES, SNES, PS1, PS2, Xbox, PC, Switch, etc.

---

## Variables de Entorno

```env
PORT=3000
NODE_ENV=development
DB_PATH=./db/videogames.sqlite
```

---

---

## ✅ Tareas Realizadas

## ✅ Tareas Realizadas

- **Tarea 1 — Inicialización del Proyecto** ✅
- **Tarea 2 — Base de Datos y Migraciones** ✅
- **Tarea 3 — Seeds con Datos Reales** ✅
- **Tarea 4 — Modelos** ✅
- **Tarea 5 — Controladores y Rutas** ✅
- **Tarea 6 — Paginación y Filtros** ✅
- **Tarea 7 — Endpoint Info General (`/api`)** ✅
- **Tarea 8 — Middleware de Errores y Validaciones** ✅
- **Tarea 9 — Pruebas de la API** ✅
- **Tarea 10 — Documentación (README.md estilo Rick and Morty API)** ✅
  - Documentar todos los endpoints con ejemplos de respuesta reales
  - Sección de introducción, paginación, filtros
  - Ejemplos de respuesta JSON para cada recurso
  - Tabla de atributos por recurso

---

## 📋 Tareas a Realizar

> ¡Proyecto completado con éxito! 🎉 Todas las tareas han sido realizadas.

---

> 💡 **Instrucciones para Claude:** Al terminar cada tarea, moverla al apartado **Tareas Realizadas** con una marca ✅, actualizar este archivo, y preguntar al usuario si desea continuar con la siguiente tarea.
