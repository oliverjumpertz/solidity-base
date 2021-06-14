const { expect } = require("chai");

describe("MyContract", () => {
  it("should return its name", async () => {
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy("My Contract");
    
    await myContract.deployed();
    expect(await myContract.getName()).to.equal("My Contract");
  });
  it("should change its name when requested", async () => {
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy("My Contract");

    await myContract.changeName("Another Contract");
    expect(await myContract.getName()).to.equal("Another Contract");
  });
});
