const { ethers, upgrades } = require('hardhat')

async function main() {
  const VendingMachineV1 = await ethers.getContractFactory('VendingMachineV1')
  const proxy = await upgrades.deployProxy(VendingMachineV1, [100])
  await proxy.deployed()

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxy.address
  )

  console.log('Proxy contract address: ' + proxy.address)

  console.log('Implementation contract address: ' + implementationAddress)
}

main()

// Proxy contract address: 0x4C8603dC88D53ff2E181A505f8B4B9C3f0be726c
// Implementation contract address: 0x97E2aDD862DD2d1679A61D1D7B70aA54220536eC
