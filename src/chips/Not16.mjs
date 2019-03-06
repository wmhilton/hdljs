import { ChipDef } from '../components/ChipDef.mjs';

export const Not16 = new ChipDef(`
CHIP Not16 {
  IN in[16];
  OUT out[16];

  PARTS:
  Not(in=in[0], out=out[0]);
  Not(in=in[1], out=out[1]);
  Not(in=in[2], out=out[2]);
  Not(in=in[3], out=out[3]);
  Not(in=in[4], out=out[4]);
  Not(in=in[5], out=out[5]);
  Not(in=in[6], out=out[6]);
  Not(in=in[7], out=out[7]);
  Not(in=in[8], out=out[8]);
  Not(in=in[9], out=out[9]);
  Not(in=in[10],out=out[10]);
  Not(in=in[11],out=out[11]);
  Not(in=in[12],out=out[12]);
  Not(in=in[13],out=out[13]);
  Not(in=in[14],out=out[14]);
  Not(in=in[15],out=out[15]);
}`).test(`
|        in        |       out        |
| 0000000000000000 | 1111111111111111 |
| 1111111111111111 | 0000000000000000 |
| 1010101010101010 | 0101010101010101 |
| 0011110011000011 | 1100001100111100 |
| 0001001000110100 | 1110110111001011 |
`)
