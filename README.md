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

Will just add the `number` of blocks to evm `blocknumber` (`0x43`) opcode handling,
instead of mining blocks one by one.
Useful for testing contract states that depend on blocknumber far in the future (for example Compound.finance).

```typescript
import { evmJumpBlocks } from "@defi.org/ethereumjs-hooks";

const currentBlockNumber = await someContract.methods.getBlockNumber().call(); // solidity 'block.number'

await evmJumpBlocks(100_000, async () => {
  await someContract.methods.getBlockNumber().call(); // currentBlockNumber + 100,000
});
```
