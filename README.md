# Red Clay Field Guide

This repository contains the monorepo for rebuilding **Red Clay Field Guide**, featuring a React frontend powered by Vite + Tailwind CSS and a PHP API backed by MySQL.

## Project Structure

```
/                    # Monorepo root (PNPM workspace)
├── docs/            # Design & planning documents
├── frontend/        # Vite + React application
└── api/             # PHP API (Composer project)
```

### Frontend (`frontend/`)
- React 18 + TypeScript
- Tailwind CSS with custom brand tokens
- Framer Motion for subtle motion design
- Workspace-ready structure for future features (components, features, hooks, lib)

### API (`api/`)
- PHP 8.1+ with Composer
- Dotenv bootstrap with JWT + migration scaffolding ready to extend
- Placeholder JSON response to verify the entry point

## Getting Started

### Requirements
- Node.js 20+
- PNPM 10+
- PHP 8.1+
- Composer 2+

### Install Dependencies

```bash
pnpm install --filter frontend
composer install --working-dir=api
```

> **Note:** Package installs require access to `https://registry.npmjs.org/` and `https://repo.packagist.org/`.

### Development Scripts

```bash
pnpm dev           # Start the Vite dev server
pnpm build         # Type-check and build the frontend
php -S localhost:8080 -t api/public  # Serve the API locally
```

Environment variables for the API can be configured by copying `api/.env.example` to `api/.env` and adjusting credentials.

## Documentation

See [`docs/implementation-plan.md`](docs/implementation-plan.md) for the detailed architecture and delivery roadmap.
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

