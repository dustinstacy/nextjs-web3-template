import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ContractModule = buildModule("ProcessorModule", (m) => {
  // 1. Update the contract name.
  const processor = m.contract("<CONTRACTNAME>");

  return { processor };
});

export default ContractModule;
