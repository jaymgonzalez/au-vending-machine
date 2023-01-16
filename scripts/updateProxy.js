const { ethers, upgrades } = require('hardhat')

const proxyAddress = '0x4C8603dC88D53ff2E181A505f8B4B9C3f0be726c'

async function main() {
  const VendingMachineV2 = await ethers.getContractFactory('VendingMachineV2')
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2)

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  )

  console.log('The current contract owner is: ' + upgraded.owner())
  console.log('Implementation contract address: ' + implementationAddress)
}

main()
