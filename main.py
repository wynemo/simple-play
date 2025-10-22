import argparse
import os.path

from fastapi import FastAPI
from fastapi_toolbox import StaticFilesCache, run_server

app = FastAPI()


front_folder = os.path.join(os.path.dirname(__file__), "frontend/dist")
app.mount("/", StaticFilesCache(directory=front_folder), name="static")


def main():
    print("Hello from simple-play!")


if __name__ == "__main__":
    # 创建命令行参数解析器
    parser = argparse.ArgumentParser()
    # 添加workers参数,默认为1个worker
    parser.add_argument("--workers", type=int, default=1, help="Number of workers")
    # 添加port参数,默认端口为8000
    parser.add_argument("--port", type=int, default=8080, help="Port number")
    # 添加host参数,默认host为0.0.0.0
    parser.add_argument("--host", type=str, default="0.0.0.0", help="Host address")
    # 添加reload参数,默认启用自动重载
    parser.add_argument("--reload", action="store_true", default=False, help="Enable auto-reload")
    # 解析命令行参数
    args = parser.parse_args()
    workers = args.workers
    port = args.port
    host = args.host
    reload = args.reload
    run_server(
        "main:app",
        log_file="logs/app.log",
        reload=reload
    )
