# ethereumjs-hooks
Test utilities that hook into ethereumjs evm.

> This is a hack for testing purposes only, use at own risk

## Installation
in `package.json`:
```json
"devDependencies": {
  "ethereumjs-hooks": "git+https://github.com/defi-org-code/ethereumjs-hooks.git"
}
...
"scripts": {
  "postinstall": "ethereumjs-hooks" 
}
```

## jumpBlocks(number)
Will just add the `number` of blocks to evm `blocknumber` (`0x43`) opcode handling,
instead of mining blocks one by one.
Useful for testing contract states that depend on blocknumber far in the future (for example Compound.finance).

```typescript
  import { jumpBlocks } from "ethereumjs-hooks";

  const currentBlockNumber = await someContract.methods.getBlockNumber().call(); // solidity 'block.number'

  jumpBlocks(100000);

  await someContract.methods.getBlockNumber().call(); // currentBlockNumber + 100,000 
```
