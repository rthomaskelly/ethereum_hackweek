#!/bin/bash

solc --combined-json bin,abi,metadata --output-dir build "$1"
