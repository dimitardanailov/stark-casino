# Casino Stark App

## Project Overview

This project is a "Coming Soon" landing page for a casino, featuring a hero image, informational sections, and a registration form for users to receive updates. The project is built using **React** for the front-end and **Node.js** for the back-end, with data stored in **MongoDB**.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [Conclusion](#conclusion)

## Project Structure

```bash
/casino-stark-app
│
├── /apps/frontend
│   ├── /public
│   ├── /src
│   ├── .eslintrc.json
│   ├── next.config.js
│   ├── package.json
│   ├── tsconfig.json
│
└── /apps/backend
    ├── /src
    ├── docker-compose.yml
    ├── package.json
    ├── tsconfig.json
```

#### Front-end

The front-end is a **React** application utilizing Next.js for server-side rendering and routing. It provides a responsive UI with a focus on user interaction and experience.

#### Backend

The back-end is a **Node.js** application using **Express.js** as the framework. It handles API requests, data validation, and user data management with MongoDB as the database.

## Installation

#### Prerequisites

- Node.js and npm installed;
- Docker installed for container management;

#### Front-End Setup

Navigate to the front-end directory:

```bash
cd apps/frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

#### Back-End Setup

Navigate to the back-end directory:

```bash
cd apps/backend
```

Install dependencies:

```bash
npm install
```

Set up Docker containers (for MongoDB):

```bash
npm run docker:setup
```

Start the development server:

```bash
npm run dev
```

## Usage

Once both the front-end and back-end servers are running, visit http://localhost:3000 in your browser to view the landing page. Users can scroll through the sections to learn more about the casino and fill out the form to get updates.

## Scripts

#### Front-End Scripts

- `npm run dev`: Starts the development server;
- `npm run build`: Builds the application for production;
- `npm run start`: Starts the production server;
- `npm run lint`: Runs ESLint to check for code quality issues;

#### Back-End Scripts

- `npm run build`: Compiles TypeScript to JavaScript;
- `npm run start`: Starts the server in production mode;
- `npm run dev`: Starts the server in development mode with hot-reloading;
- `npm run docker:setup`: Sets up Docker containers for the back-end services;
- `npm run test:integration`: Runs integration tests;

## Testing

#### Front-End

End-to-end tests are set up using Playwright. Run tests with:

```bash
npm run test
```

#### Back-End

Integration tests are conducted using Jest and Supertest. Run tests with:

```bash
npm run test:integration
```

## Technologies Used

#### Front-End

- React with Next.js for server-side rendering;
- Material-UI for UI components;
- React Hook Form and Joi for form handling and validation;
- TypeScript for type safety;

#### Back-End

- Node.js with Express.js for the API;
- MongoDB with Mongoose for database management;
- Docker for containerization;
- Jest and Supertest for testing;

## Conclusion

This project demonstrates a complete full-stack implementation using modern JavaScript frameworks. The landing page is designed to be user-friendly and responsive, while the back-end ensures data is securely handled and stored. Please feel free to reach out with any questions or suggestions.
