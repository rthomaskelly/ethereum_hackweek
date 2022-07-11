#!/bin/bash

geth --sepolia --syncmode=snap --datadir data/geth --signer=data/clef/clef.ipc --http
  # --signer # Must match the ipc file printed while running clef
  # --sepolia # Connect to the Development Network
  # --syncmode=light # "Light" - faster sync mode
  # --goerli # Connect to the Goerli Development Network

## Interact with geth:
# geth attach http://127.0.0.1:8545


## Other examples
# geth accounts # Manage geth accounts
# geth init # Create a new genesis block
# geth help # Display help
# geth attach # Interactive JavaScript session. Can run JavaScript commands to control Geth.
