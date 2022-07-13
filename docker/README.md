# Containerized Development
CTC has adopted `podman` as a container runtime. Use `podman` to run truffle build suite.

The files in this dir were modified from [this solid tutorial.](https://medium.com/coinmonks/ethereum-development-in-docker-a6bd11d00ef2)

## Building the truffle container
A script holds the `podman` incantation to build the truffle Dockerfile.

    $ ./build_truffle_dev.sh

It will take a moment to run. The beauty is all of your dependencies: node; npm; truffle, are now controlled by the Docker Image. You also will have full control of those dependencies from within the container.

## Running the truffle container
A script in this directory shows an example of how to run truffle from a container for your project.

    $ cat run_truffle_dev_example.sh

    # cd to your project dir:
    cd ../projects/my_project_dir

    # Then run this command to launch the truffle dev container. Run your truffle commands inside of it.
    sudo podman run -it -v $PWD:/workspace --entrypoint=/bin/bash --network=host truffle-dev

## An example. Inbox project.

### Run the container
Copy that `podman run` command listed above. `cd` into the `projects/Inbox` directory where a very simple example project lives and run the command:

    $ cd ../projects/Inbox
    $ sudo podman run -it -v $PWD:/workspace --entrypoint=/bin/bash --network=host truffle-dev

Your shell is now inside the container. Type `ls` and you will see all the files from the Inbox project. We have made those files accessible in the `/workspace` mount of the container.

### Run truffle commands
Try running `truffle test` from your container. The project should build, the tests should run and pass.

Try running `truffle migrate --network <YOUR NETWORK CHOICE>`. This container has access to the network of your box. IPs and ports that you can hit from your commandline can still be reached from the container.


## Running Ganache from a container
Just like we can run truffle from a container, we can run Ganache. A script much like the truffle build script exists for ganache:

    $ ./build_ganache_dev.sh

That build script contains an example command to run podman container spinning up ganache:

    $ sudo podman run -it --network=host ganache

Try connecting to it with a `truffle` container!

## Docker Compose
You can ignore the docker compose files for now. They do work. Read the link for more details.
