declare module "ethereumjs-hooks" {
  /**
   * Modifies EVM opcode 0x43 (block.number) to return `block.number + n`. Does not affect web3, only solidity/evm runtime during execution of `fn`.
   *
   * @param n number of n to
   * @param fn the function to execute, during which `block.number` will return `block.number + n`
   */
  export function evmJumpBlocks<T>(n: number, fn: () => T): T;
}
