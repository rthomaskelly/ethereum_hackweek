#!/bin/bash

sudo podman build --no-cache --format docker --rm -t ganache -f ./ganache/

## example run command:
# sudo podman run -it --network=host ganache
