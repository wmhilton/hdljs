import { ChipDef } from '../components/ChipDef.mjs';

export const RAM16K = new ChipDef(`
CHIP RAM16K {
  IN load, address[14], in[16];
  OUT out[16];
  
  PARTS:
  DMux4Way(sel=address[0..1], in=load, a=la, b=lb, c=lc, d=ld);
  RAM4K(in=in, load=la, address=address[2..13], out=a);
  RAM4K(in=in, load=lb, address=address[2..13], out=b);
  RAM4K(in=in, load=lc, address=address[2..13], out=c);
  RAM4K(in=in, load=ld, address=address[2..13], out=d);
  Mux4Way16(sel=address[0..1], a=a, b=b, c=c, d=d, out=out);
}
`).test(`
| time |   in   |load | address |  out   |
| 0+   |      0 |  0  |      0  |      0 |
| 1    |      0 |  0  |      0  |      0 |
| 1+   |      0 |  1  |      0  |      0 |
| 2    |      0 |  1  |      0  |      0 |
| 2+   |   4321 |  0  |      0  |      0 |
| 3    |   4321 |  0  |      0  |      0 |
| 3+   |   4321 |  1  |   4321  |      0 |
| 4    |   4321 |  1  |   4321  |   4321 |
| 4+   |   4321 |  0  |      0  |      0 |
| 5    |   4321 |  0  |      0  |      0 |
| 5+   |  12345 |  0  |  12345  |      0 |
| 6    |  12345 |  0  |  12345  |      0 |
| 6+   |  12345 |  1  |  12345  |      0 |
| 7    |  12345 |  1  |  12345  |  12345 |
| 7+   |  12345 |  0  |  12345  |  12345 |
| 8    |  12345 |  0  |  12345  |  12345 |
| 8    |  12345 |  0  |   4321  |   4321 |
| 8+   |  16383 |  0  |   4321  |   4321 |
| 9    |  16383 |  0  |   4321  |   4321 |
| 9+   |  16383 |  1  |  16383  |      0 |
| 10   |  16383 |  1  |  16383  |  16383 |
| 10+  |  16383 |  0  |  16383  |  16383 |
| 11   |  16383 |  0  |  16383  |  16383 |
| 11   |  16383 |  0  |  12345  |  12345 |
| 11   |  16383 |  0  |  16383  |  16383 |
| 11+  |  16383 |  0  |  10920  |      0 |
| 12   |  16383 |  0  |  10920  |      0 |
| 12   |  16383 |  0  |  10921  |      0 |
| 12   |  16383 |  0  |  10922  |      0 |
| 12   |  16383 |  0  |  10923  |      0 |
| 12   |  16383 |  0  |  10924  |      0 |
| 12   |  16383 |  0  |  10925  |      0 |
| 12   |  16383 |  0  |  10926  |      0 |
| 12   |  16383 |  0  |  10927  |      0 |
| 12+  |  21845 |  1  |  10920  |      0 |
| 13   |  21845 |  1  |  10920  |  21845 |
| 13+  |  21845 |  1  |  10921  |      0 |
| 14   |  21845 |  1  |  10921  |  21845 |
| 14+  |  21845 |  1  |  10922  |      0 |
| 15   |  21845 |  1  |  10922  |  21845 |
| 15+  |  21845 |  1  |  10923  |      0 |
| 16   |  21845 |  1  |  10923  |  21845 |
| 16+  |  21845 |  1  |  10924  |      0 |
| 17   |  21845 |  1  |  10924  |  21845 |
| 17+  |  21845 |  1  |  10925  |      0 |
| 18   |  21845 |  1  |  10925  |  21845 |
| 18+  |  21845 |  1  |  10926  |      0 |
| 19   |  21845 |  1  |  10926  |  21845 |
| 19+  |  21845 |  1  |  10927  |      0 |
| 20   |  21845 |  1  |  10927  |  21845 |
| 20+  |  21845 |  0  |  10920  |  21845 |
| 21   |  21845 |  0  |  10920  |  21845 |
| 21   |  21845 |  0  |  10921  |  21845 |
| 21   |  21845 |  0  |  10922  |  21845 |
| 21   |  21845 |  0  |  10923  |  21845 |
| 21   |  21845 |  0  |  10924  |  21845 |
| 21   |  21845 |  0  |  10925  |  21845 |
| 21   |  21845 |  0  |  10926  |  21845 |
| 21   |  21845 |  0  |  10927  |  21845 |
| 21+  | -21846 |  1  |  10920  |  21845 |
| 22   | -21846 |  1  |  10920  | -21846 |
| 22+  | -21846 |  0  |  10920  | -21846 |
| 23   | -21846 |  0  |  10920  | -21846 |
| 23   | -21846 |  0  |  10921  |  21845 |
| 23   | -21846 |  0  |  10922  |  21845 |
| 23   | -21846 |  0  |  10923  |  21845 |
| 23   | -21846 |  0  |  10924  |  21845 |
| 23   | -21846 |  0  |  10925  |  21845 |
| 23   | -21846 |  0  |  10926  |  21845 |
| 23   | -21846 |  0  |  10927  |  21845 |
| 23+  |  21845 |  1  |  10920  | -21846 |
| 24   |  21845 |  1  |  10920  |  21845 |
| 24+  | -21846 |  1  |  10921  |  21845 |
| 25   | -21846 |  1  |  10921  | -21846 |
| 25+  | -21846 |  0  |  10920  |  21845 |
| 26   | -21846 |  0  |  10920  |  21845 |
| 26   | -21846 |  0  |  10921  | -21846 |
| 26   | -21846 |  0  |  10922  |  21845 |
| 26   | -21846 |  0  |  10923  |  21845 |
| 26   | -21846 |  0  |  10924  |  21845 |
| 26   | -21846 |  0  |  10925  |  21845 |
| 26   | -21846 |  0  |  10926  |  21845 |
| 26   | -21846 |  0  |  10927  |  21845 |
| 26+  |  21845 |  1  |  10921  | -21846 |
| 27   |  21845 |  1  |  10921  |  21845 |
| 27+  | -21846 |  1  |  10922  |  21845 |
| 28   | -21846 |  1  |  10922  | -21846 |
| 28+  | -21846 |  0  |  10920  |  21845 |
| 29   | -21846 |  0  |  10920  |  21845 |
| 29   | -21846 |  0  |  10921  |  21845 |
| 29   | -21846 |  0  |  10922  | -21846 |
| 29   | -21846 |  0  |  10923  |  21845 |
| 29   | -21846 |  0  |  10924  |  21845 |
| 29   | -21846 |  0  |  10925  |  21845 |
| 29   | -21846 |  0  |  10926  |  21845 |
| 29   | -21846 |  0  |  10927  |  21845 |
| 29+  |  21845 |  1  |  10922  | -21846 |
| 30   |  21845 |  1  |  10922  |  21845 |
| 30+  | -21846 |  1  |  10923  |  21845 |
| 31   | -21846 |  1  |  10923  | -21846 |
| 31+  | -21846 |  0  |  10920  |  21845 |
| 32   | -21846 |  0  |  10920  |  21845 |
| 32   | -21846 |  0  |  10921  |  21845 |
| 32   | -21846 |  0  |  10922  |  21845 |
| 32   | -21846 |  0  |  10923  | -21846 |
| 32   | -21846 |  0  |  10924  |  21845 |
| 32   | -21846 |  0  |  10925  |  21845 |
| 32   | -21846 |  0  |  10926  |  21845 |
| 32   | -21846 |  0  |  10927  |  21845 |
| 32+  |  21845 |  1  |  10923  | -21846 |
| 33   |  21845 |  1  |  10923  |  21845 |
| 33+  | -21846 |  1  |  10924  |  21845 |
| 34   | -21846 |  1  |  10924  | -21846 |
| 34+  | -21846 |  0  |  10920  |  21845 |
| 35   | -21846 |  0  |  10920  |  21845 |
| 35   | -21846 |  0  |  10921  |  21845 |
| 35   | -21846 |  0  |  10922  |  21845 |
| 35   | -21846 |  0  |  10923  |  21845 |
| 35   | -21846 |  0  |  10924  | -21846 |
| 35   | -21846 |  0  |  10925  |  21845 |
| 35   | -21846 |  0  |  10926  |  21845 |
| 35   | -21846 |  0  |  10927  |  21845 |
| 35+  |  21845 |  1  |  10924  | -21846 |
| 36   |  21845 |  1  |  10924  |  21845 |
| 36+  | -21846 |  1  |  10925  |  21845 |
| 37   | -21846 |  1  |  10925  | -21846 |
| 37+  | -21846 |  0  |  10920  |  21845 |
| 38   | -21846 |  0  |  10920  |  21845 |
| 38   | -21846 |  0  |  10921  |  21845 |
| 38   | -21846 |  0  |  10922  |  21845 |
| 38   | -21846 |  0  |  10923  |  21845 |
| 38   | -21846 |  0  |  10924  |  21845 |
| 38   | -21846 |  0  |  10925  | -21846 |
| 38   | -21846 |  0  |  10926  |  21845 |
| 38   | -21846 |  0  |  10927  |  21845 |
| 38+  |  21845 |  1  |  10925  | -21846 |
| 39   |  21845 |  1  |  10925  |  21845 |
| 39+  | -21846 |  1  |  10926  |  21845 |
| 40   | -21846 |  1  |  10926  | -21846 |
| 40+  | -21846 |  0  |  10920  |  21845 |
| 41   | -21846 |  0  |  10920  |  21845 |
| 41   | -21846 |  0  |  10921  |  21845 |
| 41   | -21846 |  0  |  10922  |  21845 |
| 41   | -21846 |  0  |  10923  |  21845 |
| 41   | -21846 |  0  |  10924  |  21845 |
| 41   | -21846 |  0  |  10925  |  21845 |
| 41   | -21846 |  0  |  10926  | -21846 |
| 41   | -21846 |  0  |  10927  |  21845 |
| 41+  |  21845 |  1  |  10926  | -21846 |
| 42   |  21845 |  1  |  10926  |  21845 |
| 42+  | -21846 |  1  |  10927  |  21845 |
| 43   | -21846 |  1  |  10927  | -21846 |
| 43+  | -21846 |  0  |  10920  |  21845 |
| 44   | -21846 |  0  |  10920  |  21845 |
| 44   | -21846 |  0  |  10921  |  21845 |
| 44   | -21846 |  0  |  10922  |  21845 |
| 44   | -21846 |  0  |  10923  |  21845 |
| 44   | -21846 |  0  |  10924  |  21845 |
| 44   | -21846 |  0  |  10925  |  21845 |
| 44   | -21846 |  0  |  10926  |  21845 |
| 44   | -21846 |  0  |  10927  | -21846 |
| 44+  |  21845 |  1  |  10927  | -21846 |
| 45   |  21845 |  1  |  10927  |  21845 |
| 45+  |  21845 |  0  |  10920  |  21845 |
| 46   |  21845 |  0  |  10920  |  21845 |
| 46   |  21845 |  0  |  10921  |  21845 |
| 46   |  21845 |  0  |  10922  |  21845 |
| 46   |  21845 |  0  |  10923  |  21845 |
| 46   |  21845 |  0  |  10924  |  21845 |
| 46   |  21845 |  0  |  10925  |  21845 |
| 46   |  21845 |  0  |  10926  |  21845 |
| 46   |  21845 |  0  |  10927  |  21845 |
| 46+  |  21845 |  0  |   1365  |      0 |
| 47   |  21845 |  0  |   1365  |      0 |
| 47   |  21845 |  0  |   3413  |      0 |
| 47   |  21845 |  0  |   5461  |      0 |
| 47   |  21845 |  0  |   7509  |      0 |
| 47   |  21845 |  0  |   9557  |      0 |
| 47   |  21845 |  0  |  11605  |      0 |
| 47   |  21845 |  0  |  13653  |      0 |
| 47   |  21845 |  0  |  15701  |      0 |
| 47+  |  21845 |  1  |   1365  |      0 |
| 48   |  21845 |  1  |   1365  |  21845 |
| 48+  |  21845 |  1  |   3413  |      0 |
| 49   |  21845 |  1  |   3413  |  21845 |
| 49+  |  21845 |  1  |   5461  |      0 |
| 50   |  21845 |  1  |   5461  |  21845 |
| 50+  |  21845 |  1  |   7509  |      0 |
| 51   |  21845 |  1  |   7509  |  21845 |
| 51+  |  21845 |  1  |   9557  |      0 |
| 52   |  21845 |  1  |   9557  |  21845 |
| 52+  |  21845 |  1  |  11605  |      0 |
| 53   |  21845 |  1  |  11605  |  21845 |
| 53+  |  21845 |  1  |  13653  |      0 |
| 54   |  21845 |  1  |  13653  |  21845 |
| 54+  |  21845 |  1  |  15701  |      0 |
| 55   |  21845 |  1  |  15701  |  21845 |
| 55+  |  21845 |  0  |   1365  |  21845 |
| 56   |  21845 |  0  |   1365  |  21845 |
| 56   |  21845 |  0  |   3413  |  21845 |
| 56   |  21845 |  0  |   5461  |  21845 |
| 56   |  21845 |  0  |   7509  |  21845 |
| 56   |  21845 |  0  |   9557  |  21845 |
| 56   |  21845 |  0  |  11605  |  21845 |
| 56   |  21845 |  0  |  13653  |  21845 |
| 56   |  21845 |  0  |  15701  |  21845 |
| 56+  | -21846 |  1  |   1365  |  21845 |
| 57   | -21846 |  1  |   1365  | -21846 |
| 57+  | -21846 |  0  |   1365  | -21846 |
| 58   | -21846 |  0  |   1365  | -21846 |
| 58   | -21846 |  0  |   3413  |  21845 |
| 58   | -21846 |  0  |   5461  |  21845 |
| 58   | -21846 |  0  |   7509  |  21845 |
| 58   | -21846 |  0  |   9557  |  21845 |
| 58   | -21846 |  0  |  11605  |  21845 |
| 58   | -21846 |  0  |  13653  |  21845 |
| 58   | -21846 |  0  |  15701  |  21845 |
| 58+  |  21845 |  1  |   1365  | -21846 |
| 59   |  21845 |  1  |   1365  |  21845 |
| 59+  | -21846 |  1  |   3413  |  21845 |
| 60   | -21846 |  1  |   3413  | -21846 |
| 60+  | -21846 |  0  |   1365  |  21845 |
| 61   | -21846 |  0  |   1365  |  21845 |
| 61   | -21846 |  0  |   3413  | -21846 |
| 61   | -21846 |  0  |   5461  |  21845 |
| 61   | -21846 |  0  |   7509  |  21845 |
| 61   | -21846 |  0  |   9557  |  21845 |
| 61   | -21846 |  0  |  11605  |  21845 |
| 61   | -21846 |  0  |  13653  |  21845 |
| 61   | -21846 |  0  |  15701  |  21845 |
| 61+  |  21845 |  1  |   3413  | -21846 |
| 62   |  21845 |  1  |   3413  |  21845 |
| 62+  | -21846 |  1  |   5461  |  21845 |
| 63   | -21846 |  1  |   5461  | -21846 |
| 63+  | -21846 |  0  |   1365  |  21845 |
| 64   | -21846 |  0  |   1365  |  21845 |
| 64   | -21846 |  0  |   3413  |  21845 |
| 64   | -21846 |  0  |   5461  | -21846 |
| 64   | -21846 |  0  |   7509  |  21845 |
| 64   | -21846 |  0  |   9557  |  21845 |
| 64   | -21846 |  0  |  11605  |  21845 |
| 64   | -21846 |  0  |  13653  |  21845 |
| 64   | -21846 |  0  |  15701  |  21845 |
| 64+  |  21845 |  1  |   5461  | -21846 |
| 65   |  21845 |  1  |   5461  |  21845 |
| 65+  | -21846 |  1  |   7509  |  21845 |
| 66   | -21846 |  1  |   7509  | -21846 |
| 66+  | -21846 |  0  |   1365  |  21845 |
| 67   | -21846 |  0  |   1365  |  21845 |
| 67   | -21846 |  0  |   3413  |  21845 |
| 67   | -21846 |  0  |   5461  |  21845 |
| 67   | -21846 |  0  |   7509  | -21846 |
| 67   | -21846 |  0  |   9557  |  21845 |
| 67   | -21846 |  0  |  11605  |  21845 |
| 67   | -21846 |  0  |  13653  |  21845 |
| 67   | -21846 |  0  |  15701  |  21845 |
| 67+  |  21845 |  1  |   7509  | -21846 |
| 68   |  21845 |  1  |   7509  |  21845 |
| 68+  | -21846 |  1  |   9557  |  21845 |
| 69   | -21846 |  1  |   9557  | -21846 |
| 69+  | -21846 |  0  |   1365  |  21845 |
| 70   | -21846 |  0  |   1365  |  21845 |
| 70   | -21846 |  0  |   3413  |  21845 |
| 70   | -21846 |  0  |   5461  |  21845 |
| 70   | -21846 |  0  |   7509  |  21845 |
| 70   | -21846 |  0  |   9557  | -21846 |
| 70   | -21846 |  0  |  11605  |  21845 |
| 70   | -21846 |  0  |  13653  |  21845 |
| 70   | -21846 |  0  |  15701  |  21845 |
| 70+  |  21845 |  1  |   9557  | -21846 |
| 71   |  21845 |  1  |   9557  |  21845 |
| 71+  | -21846 |  1  |  11605  |  21845 |
| 72   | -21846 |  1  |  11605  | -21846 |
| 72+  | -21846 |  0  |   1365  |  21845 |
| 73   | -21846 |  0  |   1365  |  21845 |
| 73   | -21846 |  0  |   3413  |  21845 |
| 73   | -21846 |  0  |   5461  |  21845 |
| 73   | -21846 |  0  |   7509  |  21845 |
| 73   | -21846 |  0  |   9557  |  21845 |
| 73   | -21846 |  0  |  11605  | -21846 |
| 73   | -21846 |  0  |  13653  |  21845 |
| 73   | -21846 |  0  |  15701  |  21845 |
| 73+  |  21845 |  1  |  11605  | -21846 |
| 74   |  21845 |  1  |  11605  |  21845 |
| 74+  | -21846 |  1  |  13653  |  21845 |
| 75   | -21846 |  1  |  13653  | -21846 |
| 75+  | -21846 |  0  |   1365  |  21845 |
| 76   | -21846 |  0  |   1365  |  21845 |
| 76   | -21846 |  0  |   3413  |  21845 |
| 76   | -21846 |  0  |   5461  |  21845 |
| 76   | -21846 |  0  |   7509  |  21845 |
| 76   | -21846 |  0  |   9557  |  21845 |
| 76   | -21846 |  0  |  11605  |  21845 |
| 76   | -21846 |  0  |  13653  | -21846 |
| 76   | -21846 |  0  |  15701  |  21845 |
| 76+  |  21845 |  1  |  13653  | -21846 |
| 77   |  21845 |  1  |  13653  |  21845 |
| 77+  | -21846 |  1  |  15701  |  21845 |
| 78   | -21846 |  1  |  15701  | -21846 |
| 78+  | -21846 |  0  |   1365  |  21845 |
| 79   | -21846 |  0  |   1365  |  21845 |
| 79   | -21846 |  0  |   3413  |  21845 |
| 79   | -21846 |  0  |   5461  |  21845 |
| 79   | -21846 |  0  |   7509  |  21845 |
| 79   | -21846 |  0  |   9557  |  21845 |
| 79   | -21846 |  0  |  11605  |  21845 |
| 79   | -21846 |  0  |  13653  |  21845 |
| 79   | -21846 |  0  |  15701  | -21846 |
| 79+  |  21845 |  1  |  15701  | -21846 |
| 80   |  21845 |  1  |  15701  |  21845 |
| 80+  |  21845 |  0  |   1365  |  21845 |
| 81   |  21845 |  0  |   1365  |  21845 |
| 81   |  21845 |  0  |   3413  |  21845 |
| 81   |  21845 |  0  |   5461  |  21845 |
| 81   |  21845 |  0  |   7509  |  21845 |
| 81   |  21845 |  0  |   9557  |  21845 |
| 81   |  21845 |  0  |  11605  |  21845 |
| 81   |  21845 |  0  |  13653  |  21845 |
| 81   |  21845 |  0  |  15701  |  21845 |
`).addBuiltin('js', `

class RAM16K {
  constructor () {
    this.memory = new Array(16 * 1024);
    this.memory.fill(0);
  }
  tick () {
    let index =
      this.address_0 +
      this.address_1 * 2 +
      this.address_2 * 4 +
      this.address_3 * 8 +
      this.address_4 * 16 +
      this.address_5 * 32 +
      this.address_6 * 64 +
      this.address_7 * 128 +
      this.address_8 * 256 +
      this.address_9 * 512 +
      this.address_10 * 1024 +
      this.address_11 * 2048 +
      this.address_12 * 4096 +
      this.address_13 * 8192;
    let result = this.memory[index];
    this.out_0 = Number(!!(result & 1)); // 1
    this.out_1 = Number(!!(result & 2));
    this.out_2 = Number(!!(result & 4));
    this.out_3 = Number(!!(result & 8)); // 4
    this.out_4 = Number(!!(result & 16));
    this.out_5 = Number(!!(result & 32));
    this.out_6 = Number(!!(result & 64));
    this.out_7 = Number(!!(result & 128)); // 8
    this.out_8 = Number(!!(result & 256));
    this.out_9 = Number(!!(result & 512));
    this.out_10 = Number(!!(result & 1024));
    this.out_11 = Number(!!(result & 2048)); // 12
    this.out_12 = Number(!!(result & 4096));
    this.out_13 = Number(!!(result & 8192));
    this.out_14 = Number(!!(result & 16384));
    this.out_15 = Number(!!(result & 32768)); // 16
  }
  tock () {
    if (this.load_0) {
      let index =
        this.address_0 +
        this.address_1 * 2 +
        this.address_2 * 4 +
        this.address_3 * 8 +
        this.address_4 * 16 +
        this.address_5 * 32 +
        this.address_6 * 64 +
        this.address_7 * 128 +
        this.address_8 * 256 +
        this.address_9 * 512 +
        this.address_10 * 1024 +
        this.address_11 * 2048 +
        this.address_12 * 4096 +
        this.address_13 * 8192;
      let input =
        this.in_0 +
        this.in_1 * 2 +
        this.in_2 * 4 +
        this.in_3 * 8 +
        this.in_4 * 16 +
        this.in_5 * 32 +
        this.in_6 * 64 +
        this.in_7 * 128 +
        this.in_8 * 256 +
        this.in_9 * 512 +
        this.in_10 * 1024 +
        this.in_11 * 2048 +
        this.in_12 * 4096 +
        this.in_13 * 8192 +
        this.in_14 * 16384 +
        this.in_15 * 32768;
      this.memory[index] = input;
    }
    this.tick();
  }
}`).addBuiltin('verilog', `
module RAM16K (
  input clock,
  input load_0,
  input address_0,
  input address_1,
  input address_2,
  input address_3,
  input address_4,
  input address_5,
  input address_6,
  input address_7,
  input address_8,
  input address_9,
  input address_10,
  input address_11,
  input address_12,
  input address_13,
  input in_0,
  input in_1,
  input in_2,
  input in_3,
  input in_4,
  input in_5,
  input in_6,
  input in_7,
  input in_8,
  input in_9,
  input in_10,
  input in_11,
  input in_12,
  input in_13,
  input in_14,
  input in_15,
  output out_0,
  output out_1,
  output out_2,
  output out_3,
  output out_4,
  output out_5,
  output out_6,
  output out_7,
  output out_8,
  output out_9,
  output out_10,
  output out_11,
  output out_12,
  output out_13,
  output out_14,
  output out_15
);
  wire [15:0] din = {
    in_15,
    in_14,
    in_13,
    in_12,
    in_11,
    in_10,
    in_9,
    in_8,
    in_7,
    in_6,
    in_5,
    in_4,
    in_3,
    in_2,
    in_1,
    in_0
  };

  wire [13:0] address = {
    address_13,
    address_12,
    address_11,
    address_10,
    address_9,
    address_8,
    address_7,
    address_6,
    address_5,
    address_4,
    address_3,
    address_2,
    address_1,
    address_0
  };

  reg [15:0] dout; // Register for output.
  reg [15:0] mem [0:100];

  always @(posedge clock)
  begin
    if (load_0)
      mem[(address_0)] <= din;
    dout = mem[address_0]; // Output register controlled by clock.
  end

  assign out_0 = dout[0];
  assign out_1 = dout[1];
  assign out_2 = dout[2];
  assign out_3 = dout[3];
  assign out_4 = dout[4];
  assign out_5 = dout[5];
  assign out_6 = dout[6];
  assign out_7 = dout[7];
  assign out_8 = dout[8];
  assign out_9 = dout[9];
  assign out_10 = dout[10];
  assign out_11 = dout[11];
  assign out_12 = dout[12];
  assign out_13 = dout[13];
  assign out_14 = dout[14];
  assign out_15 = dout[15];

  assign o_LED_1 = out_0;
  assign o_LED_2 = out_1;
  assign o_LED_3 = out_2;
  assign o_LED_4 = out_3;
endmodule
`);
