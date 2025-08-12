# Backend Rest API 

A simple RESTful API built with Node.js, Express, TypeScript, Prisma, and SQLite. It allows you to manage patients with full CRUD functionality.

## 🚀 Features

- Create, Read, Update, Delete patients
- Type-safe database access with Prisma
- Lightweight SQLite database
- Modular structure with controllers and services
- Easy to extend with other models

## 🛠️ Tech Stack

- Node.js
- Express
- TypeScript
- Prisma ORM
- SQLite

## API-Endpunkte

- GET	/patients	  **Get all patients**
- GET	/patients/:id	  **Retrieve details of a specific patient**
- POST	/patients	**Create a new patient**
- PUT	/patients/:id	**Update patient infos**
- DELETE	/patients/:id	**Delete patient**

## 🏗️ Architecture Overview

The application is structured with clear separation of concerns:

- **Express Router**: Defines the API endpoints.
- **Controller Layer**: Handles HTTP requests and delegates to services.
- **Service Layer**: Contains business logic and interacts with the database.
- **Prisma ORM**: Provides type-safe access to the SQLite database.
- **TypeScript**: Ensures type safety and maintainable code.

## 📐 Database Schema: PatientCharacteristic

| Field              | Type       | Description                          |
|-------------------|------------|--------------------------------------|
| `id`              | `Int`      | Unique identifier (UUID)             |
| `name`            | `String`   | Name of patient                      |
| `email`           | `String`      | Unique identifier (UUID)             |
| `age`             | `Int`      | Patient's age                        |
| `gender`          | `Enum`     | `male`, `female`, or `other`         |
| `heightCm`        | `Float?`   | Height in centimeters (optional)     |
| `weightKg`        | `Float?`   | Weight in kilograms (optional)       |
| `bloodType`       | `Enum?`    | `A`, `B`, `AB`, or `O` (optional)    |
| `smoker`          | `Boolean`  | Whether the patient smokes           |
| `pregnant`        | `Boolean`  | Whether the patient is pregnant      |
| `createdAt`       | `DateTime` | Timestamp of creation                |

### 🧬 Enums

**Gender**
- `male`
- `female`
- `other`
- `not_specified

**BloodType**
- `A`
- `B`
- `AB`
- `O`
- 'not_specified'




