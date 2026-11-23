# tiny-stack-vm-01

A complete interpreter of make.fun's tiny stack ISA v1 for the
`tiny-stack-vm-01-run-20261122` bounty. Node 22, built-in modules only, no
network, deterministic.

```sh
MAKEFUN_INPUT_DIR=practice/input MAKEFUN_OUTPUT_DIR=out node main.ts
```

Implements every rule in `generator/subject/ISA.md` (`vm.mjs` is the authority):
wrapping 32-bit arithmetic, `Math.imul` for MUL, signed DIV/MOD, unsigned
DIVU/MODU/LTU, shifts masked to 31, PUSH8 sign extension, EXIT masked to a byte,
IN answering -1 when spent, and all ten traps with their own exit codes. A trap
keeps the output written before it.

Licence: MIT, see `LICENSE`.
