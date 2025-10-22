# Repository Guidelines

## 语言

使用中文

## Project Structure & Module Organization
- `main.py` defines the FastAPI app and CLI entry point; extend routes by splitting into feature modules (e.g., `app/routes/library.py`) while keeping startup configuration here.
- `frontend/` is reserved for the Next.js + shadcn UI described in `readme.md`; keep generated assets (e.g., `.next/`) out of version control.
- `logs/` captures runtime artifacts (`logs/app.log` by default). Rotate or clear logs before committing.
- Python dependencies are pinned via `pyproject.toml` and `uv.lock`; update both with `uv add` or `uv remove`.

## Build, Test, and Development Commands
- `uv sync` installs backend dependencies and aligns with `uv.lock`.
- `uv run main.py` starts the FastAPI server through `fastapi_toolbox`, writing access logs to `logs/app.log`.
- Once the Next.js app lives in `frontend/`, run `pnpm dev` for local UI work and `pnpm lint` before pushing.

## Coding Style & Naming Conventions
- Target Python 3.12 with 4-space indentation, explicit type hints, and descriptive docstrings for public endpoints.
- Group routers, services, and schemas by domain (`app/routes/library.py`, `app/schemas/track.py`), and apply snake_case for modules and functions.
- Mirror frontend files by feature (e.g., `frontend/app/library/page.tsx`) and adopt PascalCase for React components.
- Configure formatters (e.g., Black or Next.js ESLint) in project configs and run them prior to commits.

## Testing Guidelines
- Create `tests/` alongside backend code; name modules `test_<feature>.py` and use pytest fixtures to exercise routes and logging.
- Aim for coverage of every public endpoint and critical error paths (missing files, access violations).
- Record sample playback metadata in fixtures to keep tests deterministic.

## Commit & Pull Request Guidelines
- Follow short, imperative commit subjects mirroring existing history (`add library scan route`).
- PRs should summarize scope, link issues, and document new endpoints or UI states; attach `uv run pytest` / `pnpm test` output and screenshots for UI updates.
- Ensure documentation (`readme.md`, `AGENTS.md`) reflects configuration changes before requesting review.
