# Task List Application

A simple task management application built with Angular v18.

## Prerequisites

- Node.js (v18 or higher)
- npm (Node Package Manager)
- Angular CLI v18.2.12

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
ng serve
```

3. Open your browser and navigate to `http://localhost:4200/`

## Features

- Create new tasks with title and description
- View list of all tasks
- View task details
- Mark tasks as complete/incomplete
- Form validation
- Data persistence using localStorage
- Default demo tasks included

## Dependencies

The application uses:
- Angular v18.2.12
- Material Icons (included via CDN)
- Inter Font

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── checkbox/      # Custom checkbox component
│   │   ├── task-form/     # Task creation form
│   │   ├── task-list/     # List of all tasks
│   │   └── task-details/  # Individual task view
│   └── services/
│       └── task.service.ts # Task data management
└── assets/
    └── fonts/
        └── inter/         # Inter font files
```

## Build

To create a production build:
```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## Notes

- The application automatically includes some demo tasks on first run
- All data is stored in the browser's localStorage
- The application is responsive and works on both desktop and mobile devices