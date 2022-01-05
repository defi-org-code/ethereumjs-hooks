# ethereumjs-hooks

Test utilities that hook into ethereumjs evm.

> For testing purposes only, use at your own risk

## Installation

in `package.json`:

```json
"devDependencies": {
  "@defi.org/ethereumjs-hooks": "latest"
}
...
"scripts": {
  "postinstall": "ethereumjs-hooks"
}
```

## evmJumpBlocks(number, fn)

Modifies EVM opcode `0x43` (`block.number`) to return `block.number + n`. Does not affect web3, only solidity/evm runtime.

Effect remains globally until `evmJumpBlocks(0)` is called.

Useful for testing contract states that depend on blocknumber far in the future (for example Compound.finance).

Usage example:

```typescript
import { evmJumpBlocks } from "@defi.org/ethereumjs-hooks";

afterEach(() => evmJumpBlocks(0));

it(async () => {
  const currentBlockNumber = await someContract.methods.getBlockNumber().call(); // solidity 'block.number'

  evmJumpBlocks(100_000);

  await someContract.methods.getBlockNumber().call(); // currentBlockNumber + 100,000
});
```
