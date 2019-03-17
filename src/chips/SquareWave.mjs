import { ChipDef } from '../components/ChipDef.mjs';
export const SquareWave = new ChipDef(`
CHIP SquareWave {
  IN reset;
  OUT out;
  PARTS:
  ClockDivider(reset=reset, max[6]=1, out=out);
}
`)
// .test(`
// |reset|out|
// |  1  | 0 |
// |  0  | 0 |
// |  0  | 0 |
// |  0  | 0 |
// |  0  | 0 |
// |  0  | 0 |
// |  0  | 0 |
// |  0  | 0 |
// |  0  | 0 |
// |  0  | 0 |
// |  0  | 0 |
// |  0  | 0 |
// |  0  | 0 |
// |  0  | 0 |
// |  0  | 0 |
// |  0  | 0 |
// |  0  | 1 |
// |  0  | 1 |
// |  0  | 1 |
// |  0  | 1 |
// |  0  | 1 |
// |  0  | 1 |
// |  0  | 1 |
// |  0  | 1 |
// |  0  | 1 |
// |  0  | 1 |
// |  0  | 1 |
// |  0  | 1 |
// |  0  | 1 |
// |  0  | 1 |
// |  0  | 1 |
// |  0  | 1 |
// |  0  | 0 |
// |  0  | 0 |
// |  0  | 0 |
// |  0  | 0 |
// |  0  | 0 |
// |  0  | 0 |
// |  0  | 0 |
// |  0  | 0 |
// |  0  | 0 |
// |  0  | 0 |
// `);