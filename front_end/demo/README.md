# Front End for Ethereum Demo
Display some information actively queried for a live Smart Contract running on the Goerli test net.

## Setup: nvm for npm and node
This project uses `node.js` and `npm (Node Package Manager)`. If you're running on CTC computers, then you first need to be able to use a recent version of `node`.

Use [nvm, the Node Version Manager](https://github.com/nvm-sh/nvm) to install new `node` and `npm` versions which will be available for your user only.

After `nvm` install, you may need to make sure the installed `node` is ahead of CTC's `node` on your path. In your `.bashrc`:

    # .bashrc
    PATH=~/.nvm/versions/node/v16.16.0/bin/node:$PATH 

The `16.16.0` version listed above may be different than the one you install.


## Installing node package dependencies
Installing all dependencies should be as simple as:

    $ npm install

However, this may have errors on CTC computers because it doesn't play nice with our nfs home drives. If the above doesn't work, then try:

    $ npm install --cache /tmp/temp-cache

`npm` makes a temporary cache to keep files. `/tmp` will be a local, non-nfs mount and should solve any problems from a regular install.


## Running the server
Simply type:

    $ node index.js

And the server starts up on port 3000. You can access it in a browser using your VDI as the hostname:

    Browser| ch12ldvdi312:3000


