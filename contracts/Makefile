-include .env

.PHONY: all test 

// 1. Update the module name
deploy-local:
	@echo "Deploying contracts..."
	@npx hardhat ignition deploy ./ignition/modules/<MODULENAME>.ts --network localhost