import { ChipDef } from '../components/ChipDef.mjs';

export const IICStop = new ChipDef(`
CHIP IICStop {
  IN clock0, reset;
  OUT sda, scl, done;

  PARTS:
  HalfClock(
    clockIn=clock0,
    reset=reset,
    clockOut=clock1
  );
  // |        | clock0 | clock1 | scl | sda |
  // | phase0 |    0   |    0   |  1  |  0  |
  // | phase1 |    1   |    0   |  1  |  0  |
  // | phase2 |    0   |    1   |  1  |  1  |
  // | phase3 |    1   |    1   |  1  |  1  |

  // Generate the IIC "stop" condition
  Not(in=doneInternal, out=ndone);
  And(a=true, b=ndone, out=scl);
  And(a=clock1, b=ndone, out=sda);
  
  // Done-ness logic
  Not(in=reset, out=nreset);
  And(a=clock0, b=clock1, out=clock01);
  Blop(in=clock01, out=rollover);
  Or(a=reset, b=rollover, out=setDone);
  FastBit(in=nreset, load=setDone, out=done, slowOut=doneInternal);
}
`);
