const BN = require("bn.js");

/**
 * Will artificially add the blocks number to evm `blocknumber` (0x43) opcode handling,
 * instead of mining blocks one by one.
 * Useful for testing contract states that depend on blocknumber far in the future (for example Compound.finance).
 *
 * @param n : number - blocks to jump
 */
module.exports = {
   jumpBlocks: (n) => {
     global['EVM_HOOKS_JUMP_BLOCKS'] = new BN(n);
   }
}
