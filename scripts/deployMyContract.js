async function main() {
  // We get the contract to deploy
  const MyContract = await ethers.getContractFactory("MyContract");
  const myContract = await MyContract.deploy("My Contract");

  console.log("My Contract deployed to:", myContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
