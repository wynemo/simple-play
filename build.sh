#!/bin/bash

set -e

IMAGE_NAME="simple-play"
PLATFORM="${PLATFORM:-linux/amd64}"


docker build --platform $PLATFORM -t $IMAGE_NAME .
docker push $IMAGE_NAME

# docker run --env-file setting.env $IMAGE_NAME
