import { ChipDef } from '../components/ChipDef.mjs';

export const Clock8 = new ChipDef(`
CHIP Clock8 {
  IN pulseClock, reset, begin;
  OUT state0, state1, state2, state3, state4, state5, state6, state7, carry;

  PARTS:
  // State machine
  Clock4(
    pulseClock=pulseClock,
    reset=reset,
    begin=begin,
    state0=state0,
    state1=state1,
    state2=state2,
    state3=s3,
    carry=carry1
  );
  Copy(in=s3, out=state3);
  Clock4(
    pulseClock=pulseClock,
    reset=reset,
    begin=s3,
    state0=state4,
    state1=state5,
    state2=state6,
    state3=state7,
    carry=carry
  );
}`).test(`| time |pulseClock|reset|begin|state0|state1|state2|state3|state4|state5|state6|state7|carry|
| 1    |     1    |   1 |   0 |   0  |   0  |   0  |   0  |   0  |   0  |   0  |   0  |  0  |
| 2    |     1    |   0 |   0 |   0  |   0  |   0  |   0  |   0  |   0  |   0  |   0  |  0  |
| 3    |     1    |   0 |   0 |   0  |   0  |   0  |   0  |   0  |   0  |   0  |   0  |  0  |
| 4    |     1    |   0 |   0 |   0  |   0  |   0  |   0  |   0  |   0  |   0  |   0  |  0  |
| 5    |     1    |   0 |   1 |   1  |   0  |   0  |   0  |   0  |   0  |   0  |   0  |  0  |
| 6    |     1    |   0 |   0 |   0  |   1  |   0  |   0  |   0  |   0  |   0  |   0  |  0  |
| 7    |     1    |   1 |   0 |   0  |   0  |   0  |   0  |   0  |   0  |   0  |   0  |  0  |
| 8    |     1    |   0 |   0 |   0  |   0  |   0  |   0  |   0  |   0  |   0  |   0  |  0  |
| 9    |     1    |   0 |   0 |   0  |   0  |   0  |   0  |   0  |   0  |   0  |   0  |  0  |
| 10   |     1    |   0 |   0 |   0  |   0  |   0  |   0  |   0  |   0  |   0  |   0  |  0  |
| 11   |     1    |   0 |   1 |   1  |   0  |   0  |   0  |   0  |   0  |   0  |   0  |  0  |
| 12   |     1    |   0 |   0 |   0  |   1  |   0  |   0  |   0  |   0  |   0  |   0  |  0  |
| 13   |     1    |   0 |   0 |   0  |   0  |   1  |   0  |   0  |   0  |   0  |   0  |  0  |
| 14   |     1    |   0 |   0 |   0  |   0  |   0  |   1  |   0  |   0  |   0  |   0  |  0  |
| 15   |     1    |   0 |   0 |   0  |   0  |   0  |   0  |   1  |   0  |   0  |   0  |  0  |
| 16   |     1    |   0 |   0 |   0  |   0  |   0  |   0  |   0  |   1  |   0  |   0  |  0  |
| 17   |     1    |   0 |   0 |   0  |   0  |   0  |   0  |   0  |   0  |   1  |   0  |  0  |
| 18   |     1    |   0 |   0 |   0  |   0  |   0  |   0  |   0  |   0  |   0  |   1  |  0  |
| 19   |     1    |   0 |   1 |   1  |   0  |   0  |   0  |   0  |   0  |   0  |   0  |  1  |
| 20   |     1    |   0 |   0 |   0  |   1  |   0  |   0  |   0  |   0  |   0  |   0  |  0  |
| 21   |     1    |   0 |   0 |   0  |   0  |   1  |   0  |   0  |   0  |   0  |   0  |  0  |
| 22   |     1    |   0 |   0 |   0  |   0  |   0  |   1  |   0  |   0  |   0  |   0  |  0  |
| 23   |     1    |   0 |   0 |   0  |   0  |   0  |   0  |   1  |   0  |   0  |   0  |  0  |
| 24   |     1    |   0 |   0 |   0  |   0  |   0  |   0  |   0  |   1  |   0  |   0  |  0  |
| 25   |     1    |   0 |   0 |   0  |   0  |   0  |   0  |   0  |   0  |   1  |   0  |  0  |
| 26   |     1    |   0 |   1 |   1  |   0  |   0  |   0  |   0  |   0  |   0  |   1  |  0  |
| 27   |     0    |   0 |   0 |   1  |   0  |   0  |   0  |   0  |   0  |   0  |   1  |  0  |
| 28   |     0    |   0 |   0 |   1  |   0  |   0  |   0  |   0  |   0  |   0  |   1  |  0  |
| 29   |     0    |   0 |   0 |   1  |   0  |   0  |   0  |   0  |   0  |   0  |   1  |  0  |
| 30   |     1    |   0 |   0 |   0  |   1  |   0  |   0  |   0  |   0  |   0  |   0  |  1  |
| 31   |     0    |   0 |   0 |   0  |   1  |   0  |   0  |   0  |   0  |   0  |   0  |  1  |
| 32   |     0    |   0 |   0 |   0  |   1  |   0  |   0  |   0  |   0  |   0  |   0  |  1  |
| 33   |     0    |   0 |   0 |   0  |   1  |   0  |   0  |   0  |   0  |   0  |   0  |  1  |
| 34   |     1    |   0 |   0 |   0  |   0  |   1  |   0  |   0  |   0  |   0  |   0  |  0  |
| 35   |     0    |   0 |   0 |   0  |   0  |   1  |   0  |   0  |   0  |   0  |   0  |  0  |
| 36   |     0    |   0 |   0 |   0  |   0  |   1  |   0  |   0  |   0  |   0  |   0  |  0  |
| 37   |     0    |   0 |   0 |   0  |   0  |   1  |   0  |   0  |   0  |   0  |   0  |  0  |
| 38   |     1    |   0 |   0 |   0  |   0  |   0  |   1  |   0  |   0  |   0  |   0  |  0  |
| 39   |     0    |   0 |   0 |   0  |   0  |   0  |   1  |   0  |   0  |   0  |   0  |  0  |
| 40   |     0    |   0 |   0 |   0  |   0  |   0  |   1  |   0  |   0  |   0  |   0  |  0  |
| 41   |     0    |   0 |   0 |   0  |   0  |   0  |   1  |   0  |   0  |   0  |   0  |  0  |
| 42   |     1    |   0 |   0 |   0  |   0  |   0  |   0  |   1  |   0  |   0  |   0  |  0  |
| 43   |     0    |   0 |   0 |   0  |   0  |   0  |   0  |   1  |   0  |   0  |   0  |  0  |
| 44   |     0    |   0 |   0 |   0  |   0  |   0  |   0  |   1  |   0  |   0  |   0  |  0  |
| 45   |     0    |   0 |   0 |   0  |   0  |   0  |   0  |   1  |   0  |   0  |   0  |  0  |
| 46   |     1    |   0 |   0 |   0  |   0  |   0  |   0  |   0  |   1  |   0  |   0  |  0  |
| 47   |     0    |   0 |   0 |   0  |   0  |   0  |   0  |   0  |   1  |   0  |   0  |  0  |
| 48   |     0    |   0 |   0 |   0  |   0  |   0  |   0  |   0  |   1  |   0  |   0  |  0  |
| 49   |     0    |   0 |   0 |   0  |   0  |   0  |   0  |   0  |   1  |   0  |   0  |  0  |
`);
