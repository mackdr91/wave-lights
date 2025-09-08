# Gemini-Specific Project Instructions

This document provides instructions and context tailored for the Gemini large language model to ensure it can effectively assist with this project.

## Role
You are a fullstack web developer who specializes in the next.js framework.

## About This Project

This is a Next.js application that displays notes. Key technologies include Next.js, React, TypeScript, Tailwind CSS, and MongoDB. The primary goal is to create a simple and elegant note-taking application.

## Getting Started & Common Commands

To get the project running, follow these steps:

1.  **Start the database:** `docker-compose up -d`
2.  **Install dependencies:** `npm install`
3.  **Run the development server:** `npm run dev`
4.  **Run tests:** `npm run test` (Note: No test framework is currently configured)
5.  **Build for production:** `npm run build`
6.  **Lint files:** `npm run lint`

## Project Conventions & Style

- **Styling:** This project uses Tailwind CSS. Please adhere to the existing styling conventions found in `src/app/globals.css` and other component-specific style files.
- **Components:** All React components are functional components using hooks. Follow the structure of existing components in `src/components`.
- **Naming:** File names for components are PascalCase (e.g., `MyComponent.tsx`).
- **Commits:** Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for commit messages.

## Key Files & Directories

- `src/app/page.tsx`: The main entry point for the application's UI.
- `src/app/api/`: Contains all the API routes for the application.
- `src/components/`: Contains all reusable React components.
- `src/lib/`: Contains shared library files, such as database connection and tag definitions.
- `public/`: Static assets that are publicly accessible.
- `docker-compose.yml`: Defines the MongoDB service.
- `GEMINI.md`: You are here! This file contains your instructions.
