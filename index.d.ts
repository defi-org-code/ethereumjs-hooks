declare module "ethereumjs-hooks" {
    /**
     * Will artificially add the blocks number to evm `blocknumber` (0x43) opcode handling,
     * instead of mining blocks one by one.
     * Useful for testing contract states that depend on blocknumber far in the future (for example Compound.finance).
     *
     * @param blocks : number - blocks to jump
     */
    export function jumpBlocks(blocks: number);
}
