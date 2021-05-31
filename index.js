const BN = require("bn.js");

module.exports = {
   jumpBlocks: (n) => {
     global['EVM_HOOKS_JUMP_BLOCKS'] = new BN(n);
   }
}
