import os.path

from fastapi import FastAPI
from fastapi_toolbox import StaticFilesCache, run_server

app = FastAPI()


front_folder = os.path.join(os.path.dirname(__file__), "frontend/dist")
app.mount("/", StaticFilesCache(directory=front_folder), name="static")


def main():
    print("Hello from simple-play!")


if __name__ == "__main__":
    run_server(
        "main:app",
        log_file="logs/app.log",
        reload=True
    )
