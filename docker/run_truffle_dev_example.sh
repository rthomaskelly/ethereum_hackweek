#!/bin/bash

# cd to your project dir:
cd ../projects/my_project_dir

# Then run this command to launch the truffle dev container. Run your truffle commands inside of it.
sudo podman run -it -v $PWD:/workspace --entrypoint=/bin/bash --network=host truffle-dev
