# Basic Solidity Project
## What Is This?
This is a basic Solidity project that can act as a base for further development.

It is ready to use and doesn't need much more setup to get started even with complex projects.

## What's In This?
This project comes with Hardhat, Waffle, and ethers. This makes up a solid development stack for smart contracts on Ethereum.

## Usage
Use `npm install` to pull in all dependencies.

Contracts/Solidity files go into `contracts/`, tests (Waffle/mocha/chai) go into `test/`, Hardhat scripts go into `scripts/`.

Use `npm run build` to compile your contracts.

Use `npm run test:light` to run all tests without a coverage report.

Use `npm run test` to run all tests including a coverage report.

Use `npm run local-testnet` to spin up a local Hardhat testnet (Best run this in a separate terminal. It's a long-running process).

Use `npm run deploy:local` to run `scripts/deployMyContract.js` which deploys the example contract to your local testnet, previously started with `npm run local-testnet`.
