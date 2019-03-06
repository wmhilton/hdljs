import { ChipDef } from '../components/ChipDef.mjs';

export const Or16 = new ChipDef(`
CHIP Or16 {
  IN a[16], b[16];
  OUT out[16];

  PARTS:
  Or(a=a[0], b=b[0], out=out[0]);
  Or(a=a[1], b=b[1], out=out[1]);
  Or(a=a[2], b=b[2], out=out[2]);
  Or(a=a[3], b=b[3], out=out[3]);
  Or(a=a[4], b=b[4], out=out[4]);
  Or(a=a[5], b=b[5], out=out[5]);
  Or(a=a[6], b=b[6], out=out[6]);
  Or(a=a[7], b=b[7], out=out[7]);
  Or(a=a[8], b=b[8], out=out[8]);
  Or(a=a[9], b=b[9], out=out[9]);
  Or(a=a[10], b=b[10], out=out[10]);
  Or(a=a[11], b=b[11], out=out[11]);
  Or(a=a[12], b=b[12], out=out[12]);
  Or(a=a[13], b=b[13], out=out[13]);
  Or(a=a[14], b=b[14], out=out[14]);
  Or(a=a[15], b=b[15], out=out[15]);
}`).test(`
|        a         |        b         |       out        |
| 0000000000000000 | 0000000000000000 | 0000000000000000 |
| 0000000000000000 | 1111111111111111 | 1111111111111111 |
| 1111111111111111 | 1111111111111111 | 1111111111111111 |
| 1010101010101010 | 0101010101010101 | 1111111111111111 |
| 0011110011000011 | 0000111111110000 | 0011111111110011 |
| 0001001000110100 | 1001100001110110 | 1001101001110110 |
`);
