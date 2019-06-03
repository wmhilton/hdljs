import { ChipDef } from '../components/ChipDef.mjs';

export const IICByte = new ChipDef(`
CHIP IICByte {
  IN clock0, in[8], reset, start;
  OUT sda, scl, done;

  PARTS:
  // |           | clock0 | clock1 | scl | sda |
  // | substate0 |    0   |    0   |  0  |  b  |
  // | substate1 |    1   |    0   |  1  |  b  |
  // | substate2 |    0   |    1   |  1  |  b  |
  // | substate3 |    1   |    1   |  0  |  b  |

  // Start logic
  Blip(in=start, out=startRise);
  Not(in=startRise, out=nstartRise);
  FastBit(
    in=startRise,
    load=startRise,
    reset=reset,
    out=active
  );
  // Reset logic
  Or(a=reset, b=startRise, out=resetClock);
  SixteenthClock(
    clockIn=clock0,
    reset=resetClock,
    half=clock1,
    quarter=clock2,
    eigth=clock3,
    sixteenth=clock4
  );
  
  // Generate SCL
  Xor(a=clock0, b=clock1, out=sclInternal);
  And(a=ndone, b=sclInternal, out=scl);

  // Generate SDA
  // Since we want to send them in MSB -> LSB order,
  // we need to reverse them
  // 000 -> 111
  // 001 -> 110
  // 010 -> 101
  // 011 -> 100
  // 100 -> 011
  // 101 -> 010
  // 110 -> 001
  // 111 -> 000
  Not(in=clock2, out=bit0);
  Not(in=clock3, out=bit1);
  Not(in=clock4, out=bit2);
  Mux8Way(
    sel[0]=bit0,
    sel[1]=bit1,
    sel[2]=bit2,
    in=in,
    out=sdaInternal
  );
  And(a=active, b=ndone, out=reallyActive);
  And(a=sdaInternal, b=reallyActive, out=sda);

  // Done-ness logic
  And(a=clock0, b=clock1, out=clock01);
  And(a=clock2, b=clock3, out=clock23);
  And(a=clock01, b=clock23, out=clock0123);
  And(a=clock0123, b=clock4, out=finalPhase);
  Blop(in=finalPhase, out=finalPhaseFall);
  Or(a=finalPhaseFall, b=startRise, out=loadDone);
  FastBit(
    in=nstartRise,
    load=loadDone,
    reset=reset,
    out=doneInternal
  );
  Copy(in=doneInternal, out=done);
  Not(in=doneInternal, out=ndone);
}
`).test(`
| time | clock0 | reset | start |    in    | sda | scl | done  |
| 1    |    0   |   1   |   0   | 00000000 |  0  |  0  |   0   |
| 2    |    0   |   0   |   1   | 00000000 |  0  |  0  |   0   |
| 3    |    1   |   0   |   0   | 00000000 |  0  |  1  |   0   |
| 4    |    0   |   0   |   0   | 00000000 |  0  |  1  |   0   |
| 5    |    1   |   0   |   0   | 00000000 |  0  |  0  |   0   |
| 6    |    0   |   0   |   0   | 00000000 |  0  |  0  |   0   |
| 7    |    1   |   0   |   0   | 00000000 |  0  |  1  |   0   |
| 8    |    0   |   0   |   0   | 00000000 |  0  |  1  |   0   |
| 9    |    1   |   0   |   0   | 00000000 |  0  |  0  |   0   |
| 10   |    0   |   0   |   0   | 00000000 |  0  |  0  |   0   |
| 11   |    1   |   0   |   0   | 00000000 |  0  |  1  |   0   |
| 12   |    0   |   0   |   0   | 00000000 |  0  |  1  |   0   |
| 13   |    1   |   0   |   0   | 00000000 |  0  |  0  |   0   |
| 14   |    0   |   0   |   0   | 00000000 |  0  |  0  |   0   |
| 15   |    1   |   0   |   0   | 00000000 |  0  |  1  |   0   |
| 16   |    0   |   0   |   0   | 00000000 |  0  |  1  |   0   |
| 17   |    1   |   0   |   0   | 00000000 |  0  |  0  |   0   |
| 18   |    0   |   0   |   0   | 00000000 |  0  |  0  |   0   |
| 19   |    1   |   0   |   0   | 00000000 |  0  |  1  |   0   |
| 20   |    0   |   0   |   0   | 00000000 |  0  |  1  |   0   |
| 21   |    1   |   0   |   0   | 00000000 |  0  |  0  |   0   |
| 22   |    0   |   0   |   0   | 00000000 |  0  |  0  |   0   |
| 23   |    1   |   0   |   0   | 00000000 |  0  |  1  |   0   |
| 24   |    0   |   0   |   0   | 00000000 |  0  |  1  |   0   |
| 25   |    1   |   0   |   0   | 00000000 |  0  |  0  |   0   |
| 26   |    0   |   0   |   0   | 00000000 |  0  |  0  |   0   |
| 27   |    1   |   0   |   0   | 00000000 |  0  |  1  |   0   |
| 28   |    0   |   0   |   0   | 00000000 |  0  |  1  |   0   |
| 29   |    1   |   0   |   0   | 00000000 |  0  |  0  |   0   |
| 30   |    0   |   0   |   0   | 00000000 |  0  |  0  |   0   |
| 31   |    1   |   0   |   0   | 00000000 |  0  |  1  |   0   |
| 32   |    0   |   0   |   0   | 00000000 |  0  |  1  |   0   |
| 33   |    1   |   0   |   0   | 00000000 |  0  |  0  |   0   |
| 34   |    0   |   0   |   0   | 00000000 |  0  |  0  |   1   |
| 35   |    1   |   0   |   0   | 00000000 |  0  |  0  |   1   |
| 36   |    0   |   0   |   0   | 00000000 |  0  |  0  |   1   |
| 37   |    0   |   0   |   1   | 10000001 |  1  |  0  |   0   |
| 38   |    1   |   0   |   0   | 10000001 |  1  |  1  |   0   |
| 39   |    1   |   0   |   0   | 10000001 |  1  |  1  |   0   |
| 40   |    0   |   0   |   0   | 10000001 |  1  |  1  |   0   |
| 41   |    0   |   0   |   0   | 10000001 |  1  |  1  |   0   |
| 42   |    1   |   0   |   0   | 10000001 |  1  |  0  |   0   |
| 43   |    1   |   0   |   0   | 10000001 |  1  |  0  |   0   |
| 44   |    0   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 45   |    0   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 46   |    1   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 47   |    1   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 48   |    0   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 49   |    0   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 50   |    1   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 51   |    1   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 52   |    0   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 53   |    0   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 54   |    1   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 55   |    1   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 56   |    0   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 57   |    0   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 58   |    1   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 59   |    1   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 60   |    0   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 61   |    0   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 62   |    1   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 63   |    1   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 64   |    0   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 65   |    0   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 66   |    1   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 67   |    1   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 68   |    0   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 69   |    0   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 70   |    1   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 71   |    1   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 72   |    0   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 73   |    0   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 74   |    1   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 75   |    1   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 76   |    0   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 77   |    0   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 78   |    1   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 79   |    1   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 80   |    0   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 81   |    0   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 82   |    1   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 83   |    1   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 84   |    0   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 85   |    0   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 86   |    1   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 87   |    1   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 88   |    0   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 89   |    0   |   0   |   0   | 10000001 |  0  |  1  |   0   |
| 90   |    1   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 91   |    1   |   0   |   0   | 10000001 |  0  |  0  |   0   |
| 92   |    0   |   0   |   0   | 10000001 |  1  |  0  |   0   |
| 93   |    0   |   0   |   0   | 10000001 |  1  |  0  |   0   |
| 94   |    1   |   0   |   0   | 10000001 |  1  |  1  |   0   |
| 95   |    1   |   0   |   0   | 10000001 |  1  |  1  |   0   |
| 96   |    0   |   0   |   0   | 10000001 |  1  |  1  |   0   |
| 97   |    0   |   0   |   0   | 10000001 |  1  |  1  |   0   |
| 98   |    1   |   0   |   0   | 10000001 |  1  |  0  |   0   |
| 99   |    1   |   0   |   0   | 10000001 |  1  |  0  |   0   |
| 100  |    0   |   0   |   0   | 10000001 |  0  |  0  |   1   |
| 101  |    0   |   0   |   0   | 10000001 |  0  |  0  |   1   |
| 102  |    0   |   0   |   1   | 01010101 |  0  |  0  |   0   |
| 103  |    1   |   0   |   0   | 01010101 |  0  |  1  |   0   |
| 104  |    0   |   0   |   0   | 01010101 |  0  |  1  |   0   |
| 105  |    1   |   0   |   0   | 01010101 |  0  |  0  |   0   |
| 106  |    0   |   0   |   0   | 01010101 |  1  |  0  |   0   |
| 107  |    1   |   0   |   0   | 01010101 |  1  |  1  |   0   |
| 108  |    0   |   0   |   0   | 01010101 |  1  |  1  |   0   |
| 109  |    1   |   0   |   0   | 01010101 |  1  |  0  |   0   |
| 110  |    0   |   0   |   0   | 01010101 |  0  |  0  |   0   |
| 111  |    1   |   0   |   0   | 01010101 |  0  |  1  |   0   |
| 112  |    0   |   0   |   0   | 01010101 |  0  |  1  |   0   |
| 113  |    1   |   0   |   0   | 01010101 |  0  |  0  |   0   |
| 114  |    0   |   0   |   0   | 01010101 |  1  |  0  |   0   |
| 115  |    1   |   0   |   0   | 01010101 |  1  |  1  |   0   |
| 116  |    0   |   0   |   0   | 01010101 |  1  |  1  |   0   |
| 117  |    1   |   0   |   0   | 01010101 |  1  |  0  |   0   |
| 118  |    0   |   0   |   0   | 01010101 |  0  |  0  |   0   |
| 119  |    1   |   0   |   0   | 01010101 |  0  |  1  |   0   |
| 120  |    0   |   0   |   0   | 01010101 |  0  |  1  |   0   |
| 121  |    1   |   0   |   0   | 01010101 |  0  |  0  |   0   |
| 122  |    0   |   0   |   0   | 01010101 |  1  |  0  |   0   |
| 123  |    1   |   0   |   0   | 01010101 |  1  |  1  |   0   |
| 124  |    0   |   0   |   0   | 01010101 |  1  |  1  |   0   |
| 125  |    1   |   0   |   0   | 01010101 |  1  |  0  |   0   |
| 126  |    0   |   0   |   0   | 01010101 |  0  |  0  |   0   |
| 127  |    1   |   0   |   0   | 01010101 |  0  |  1  |   0   |
| 128  |    0   |   0   |   0   | 01010101 |  0  |  1  |   0   |
| 129  |    1   |   0   |   0   | 01010101 |  0  |  0  |   0   |
| 130  |    0   |   0   |   0   | 01010101 |  1  |  0  |   0   |
| 131  |    1   |   0   |   0   | 01010101 |  1  |  1  |   0   |
| 132  |    0   |   0   |   0   | 01010101 |  1  |  1  |   0   |
| 133  |    1   |   0   |   0   | 01010101 |  1  |  0  |   0   |
| 134  |    0   |   0   |   0   | 01010101 |  0  |  0  |   1   |
`);
