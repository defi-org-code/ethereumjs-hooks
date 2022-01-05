declare module "@defi.org/ethereumjs-hooks" {
  /**
   * Modifies EVM opcode 0x43 (block.number) to return `block.number + n`. Does not affect web3, only solidity/evm runtime.
   *
   * Effect remains globally until evmJumpBlocks(0) is called.
   *
   * @param n number of blocks to jump
   */
  export function evmJumpBlocks(n: number);
}
