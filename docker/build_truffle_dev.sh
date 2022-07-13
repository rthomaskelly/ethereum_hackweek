#!/bin/bash

sudo podman build --no-cache --format docker --rm -t truffle-dev -f ./truffle-dev/
