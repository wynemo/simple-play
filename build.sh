#!/bin/bash

set -e

IMAGE_NAME="simple-play"


docker build --platform linux/amd64 -t $IMAGE_NAME .
docker push $IMAGE_NAME

# docker run --env-file setting.env $IMAGE_NAME
