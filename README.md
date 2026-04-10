# 🎮 VideoGames API Documentation

The VideoGames API is a RESTful API based on the iconic video games of all time. You will have access to data about games, genres, and platforms.

**Base URL:** `http://localhost:3000/api`

---

## 📖 Introduction

This documentation will help you get familiar with the resources of the VideoGames API and show you how to make different queries.

---

## 📋 Info

The API root contains information about all available resources and the total count of each.

**Endpoint:** `/api`

**Example Response:**
```json
{
  "info": {
    "games": 51,
    "genres": 15,
    "platforms": 22
  },
  "endpoints": {
    "games": "http://localhost:3000/api/game",
    "genres": "http://localhost:3000/api/genre",
    "platforms": "http://localhost:3000/api/platform"
  }
}
```

---

## 🎮 Game

There are 50+ games in the database.

### Game Schema

| Key | Type | Description |
| --- | --- | --- |
| id | int | The id of the game. |
| name | string | The name of the game. |
| year | int | The release year of the game. |
| description | string | A short description of the game. |
| image | string | Link to the game's image. |
| genre | string | The name of the genre. |
| platform | string | The name of the platform. |
| created_at | string | Time at which the game was created in the database. |

### Get all games
You can access the list of games by using the `/game` endpoint.

**Endpoint:** `/api/game`

### Get a single game
You can get a single game by adding the id as a parameter: `/api/game/1`

**Endpoint:** `/api/game/:id`

### Get multiple games
You can get multiple games by adding an array of ids as a parameter: `/api/game/1,2,3`

**Endpoint:** `/api/game/:ids`

---

## 🏷️ Genre

There are 15 genres in the database.

### Genre Schema

| Key | Type | Description |
| --- | --- | --- |
| id | int | The id of the genre. |
| name | string | The name of the genre. |
| description | string | The description of the genre. |

### Get all genres
**Endpoint:** `/api/genre`

---

## 🕹️ Platform

There are 20+ platforms in the database.

### Platform Schema

| Key | Type | Description |
| --- | --- | --- |
| id | int | The id of the platform. |
| name | string | The name of the platform. |
| manufacturer | string | The company that manufactured the platform. |
| year | int | The launch year of the platform. |

### Get all platforms
**Endpoint:** `/api/platform`

---

## 📄 Pagination

The API includes pagination by default. All list responses include an `info` object with the following keys:

- `count`: The total amount of resources.
- `pages`: The amount of pages.
- `next`: Link to the next page (if it exists).
- `prev`: Link to the previous page (if it exists).

You can use the `page` parameter to access different pages: `/api/game?page=2`

---

## 🔍 Filters

You can filter games by the following parameters:

- `name`: Filter by name (case-insensitive, partial match).
- `year`: Filter by release year.
- `genre`: Filter by genre name.
- `platform`: Filter by platform name.

**Example:** `http://localhost:3000/api/game?name=zelda&year=1998`

---

## ⚠️ Errors

The API uses standard HTTP status codes.

- **400 Bad Request**: Invalid parameters.
- **404 Not Found**: Resource not found.
- **500 Internal Server Error**: Something went wrong on our end.

**Error Response Example:**
```json
{
  "error": {
    "message": "Game not found",
    "status": 404
  }
}
```
