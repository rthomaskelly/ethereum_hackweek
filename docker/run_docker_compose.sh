#!/bin/bash

sudo DOCKER_HOST=unix:///run/podman/podman.sock docker-compose down

sudo DOCKER_HOST=unix:///run/podman/podman.sock docker-compose up \
     --build || true
