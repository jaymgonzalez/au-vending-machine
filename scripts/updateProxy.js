const { ethers, upgrades } = require('hardhat')
// GOERLI
const proxyAddress = '0x4C8603dC88D53ff2E181A505f8B4B9C3f0be726c'

// HARDHAT
// const proxyAddress = '0x22753E4264FDDc6181dc7cce468904A80a363E44'

async function main() {
  const VendingMachineV2 = await ethers.getContractFactory('VendingMachineV2')
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2)

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  )

  // console.log(await upgraded.owner())

  console.log('The current contract owner is: ' + (await upgraded.owner()))
  console.log('Implementation contract address: ' + implementationAddress)
}

main()

// Implementation contract address: 0x97E2aDD862DD2d1679A61D1D7B70aA54220536eC
