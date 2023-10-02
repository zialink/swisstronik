const { ethers } = require("hardhat");

async function main() {
  // Get contract owner
  const contractOwner = await ethers.getSigners();
  console.log(`Deploying contract from: ${contractOwner[0].address}`);

  // Hardhat helper to get the ethers contractFactory object
  const ZialinkToken = await ethers.getContractFactory("ZialinkToken");

  // Deploy the contract
  console.log("Deploying ZialinkToken...");
  const zialinkToken = await ZialinkToken.deploy();
  await zialinkToken.waitForDeployment();
  console.log(`ZialinkToken deployed to: ${zialinkToken.target}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
