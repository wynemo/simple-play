from fastapi import FastAPI
from fastapi_toolbox import run_server, logger


app = FastAPI()


@app.get("/")
async def read_root():
    logger.info("Hello World访问")
    return {"Hello": "World"}


def main():
    print("Hello from simple-play!")


if __name__ == "__main__":
    run_server(
        "main:app",
        log_file="logs/app.log",
    )
