import { ChipDef } from '../components/ChipDef.mjs';

export const Mux4Way16 = new ChipDef(`
CHIP Mux4Way16 {
  IN sel[2], a[16], b[16], c[16], d[16];
  OUT out[16];

  PARTS:
  Mux16(a=a, b=b, sel=sel[0], out=x);
  Mux16(a=c, b=d, sel=sel[0], out=y);
  Mux16(a=x, b=y, sel=sel[1], out=out);
}`).test(`
|        a         |        b         |        c         |        d         | sel  |       out        |
| 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 |  00  | 0000000000000000 |
| 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 |  01  | 0000000000000000 |
| 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 |  10  | 0000000000000000 |
| 0000000000000000 | 0000000000000000 | 0000000000000000 | 0000000000000000 |  11  | 0000000000000000 |
| 0001001000110100 | 1001100001110110 | 1010101010101010 | 0101010101010101 |  00  | 0001001000110100 |
| 0001001000110100 | 1001100001110110 | 1010101010101010 | 0101010101010101 |  01  | 1001100001110110 |
| 0001001000110100 | 1001100001110110 | 1010101010101010 | 0101010101010101 |  10  | 1010101010101010 |
| 0001001000110100 | 1001100001110110 | 1010101010101010 | 0101010101010101 |  11  | 0101010101010101 |
`);
