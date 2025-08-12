# Patient Management API for Pohlig Traunstein

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


## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/paulkamdem/PatientManager.git
cd PatientManager

## Install dependencies:
npm install

## Set up the database
npx prisma generate
npx prisma migrate dev --name init

## Start the development server:
npm run dev


