import { ChipDef } from '../components/ChipDef.mjs';

export const Add16 = new ChipDef(`
CHIP Add16 {
  IN a[16], b[16];
  OUT out[16], overflow;

  PARTS:
  HalfAdder(a=a[0], b=b[0], sum=out[0], carry=c1);
  FullAdder(a=a[1], b=b[1], c=c1, sum=out[1], carry=c2);
  FullAdder(a=a[2], b=b[2], c=c2, sum=out[2], carry=c3);
  FullAdder(a=a[3], b=b[3], c=c3, sum=out[3], carry=c4);
  FullAdder(a=a[4], b=b[4], c=c4, sum=out[4], carry=c5);
  FullAdder(a=a[5], b=b[5], c=c5, sum=out[5], carry=c6);
  FullAdder(a=a[6], b=b[6], c=c6, sum=out[6], carry=c7);
  FullAdder(a=a[7], b=b[7], c=c7, sum=out[7], carry=c8);
  FullAdder(a=a[8], b=b[8], c=c8, sum=out[8], carry=c9);
  FullAdder(a=a[9], b=b[9], c=c9, sum=out[9], carry=c10);
  FullAdder(a=a[10], b=b[10], c=c10, sum=out[10], carry=c11);
  FullAdder(a=a[11], b=b[11], c=c11, sum=out[11], carry=c12);
  FullAdder(a=a[12], b=b[12], c=c12, sum=out[12], carry=c13);
  FullAdder(a=a[13], b=b[13], c=c13, sum=out[13], carry=c14);
  FullAdder(a=a[14], b=b[14], c=c14, sum=out[14], carry=c15);
  FullAdder(a=a[15], b=b[15], c=c15, sum=out[15], carry=overflow);
}`).test(`
|        a         |        b         |       out        | overflow |
| 0000000000000000 | 0000000000000000 | 0000000000000000 |     0    |
| 0000000000000000 | 1111111111111111 | 1111111111111111 |     0    |
| 1111111111111111 | 1111111111111111 | 1111111111111110 |     1    |
| 1010101010101010 | 0101010101010101 | 1111111111111111 |     0    |
| 0011110011000011 | 0000111111110000 | 0100110010110011 |     0    |
| 0001001000110100 | 1001100001110110 | 1010101010101010 |     0    |
`);
