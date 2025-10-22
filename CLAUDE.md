# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 语言

使用中文

## Project Overview

This is a music player application that supports adding local music folders for playback. The architecture consists of:
- **Frontend**: Next.js with shadcn/ui components (planned, directory exists but not yet implemented)
- **Backend**: FastAPI server
- **Communication**: RESTful API between frontend and backend

## Development Commands

### Backend (FastAPI)
- `uv sync` - Install/update Python dependencies from uv.lock
- `uv run main.py` - Start the FastAPI server (logs to logs/app.log)
- `uv add <package>` - Add a new Python dependency
- `uv remove <package>` - Remove a Python dependency

### Frontend (Next.js - when implemented)
- `cd frontend && pnpm dev` - Start the Next.js development server
- `cd frontend && pnpm lint` - Run ESLint on frontend code
- `cd frontend && pnpm build` - Build the frontend for production

## Architecture

### Backend Structure
- `main.py` - FastAPI application entry point and server configuration via fastapi_toolbox
- Future modular structure should follow: `app/routes/<feature>.py`, `app/schemas/<model>.py`, `app/services/<domain>.py`
- Python 3.12+ with explicit type hints required
- Logging configured through fastapi_toolbox, outputs to `logs/app.log`

### Planned Features (from readme.md)
1. **OpenAPI/Interface Contract** - Define API contract early for parallel frontend/backend development
2. **Player Core Components** - Playback queue, progress bar, volume control, hotkeys
3. **Library Management** - Async file scanning with APScheduler, metadata storage in SQLite/PostgreSQL
4. **Streaming** - Support Range requests for chunked/streaming playback of large files
5. **Metadata Management** - Track metadata with pagination and filtering APIs

### Module Organization
- Group code by feature/domain, not by type
- Backend: snake_case for modules and functions
- Frontend: PascalCase for React components, feature-based file structure (`frontend/app/<feature>/page.tsx`)

## Code Style

### Python (Backend)
- Python 3.12 target
- 4-space indentation
- Explicit type hints for all function signatures
- Descriptive docstrings for public API endpoints
- Format with Black (configure in pyproject.toml before committing)

### TypeScript/React (Frontend)
- Follow Next.js conventions
- Use shadcn/ui for consistent UI components
- Configure ESLint and run before commits
- Server Actions/Route Handlers for long-running operations

## Git Workflow

### Commit Messages
- Use short, imperative subjects (e.g., "add library scan route", "update main.py")
- Follow existing commit history style

### Pull Requests
- Summarize scope and link related issues
- Document new API endpoints or UI components
- Include test output (`pytest` for backend, `pnpm test` for frontend)
- Attach screenshots for UI changes
- Update documentation (readme.md, AGENTS.md) for configuration changes
