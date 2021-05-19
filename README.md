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

```javascript
  import { jumpBlocks } from "ethereumjs-hooks";

  expect(await someContract.methods.getBlockNumber().call()).to.eq(123);

  jumpBlocks(100000);

  expect(await someContract.methods.getBlockNumber().call()).to.eq(100123);
```
