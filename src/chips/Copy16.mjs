import { ChipDef } from '../components/ChipDef.mjs';

export const Copy16 = new ChipDef(`
CHIP Copy16 {
  IN in[16];
  OUT out[16];
  PARTS:
  Copy(in=in[0], out=out[0]);
  Copy(in=in[1], out=out[1]);
  Copy(in=in[2], out=out[2]);
  Copy(in=in[3], out=out[3]);
  Copy(in=in[4], out=out[4]);
  Copy(in=in[5], out=out[5]);
  Copy(in=in[6], out=out[6]);
  Copy(in=in[7], out=out[7]);
  Copy(in=in[8], out=out[8]);
  Copy(in=in[9], out=out[9]);
  Copy(in=in[10], out=out[10]);
  Copy(in=in[11], out=out[11]);
  Copy(in=in[12], out=out[12]);
  Copy(in=in[13], out=out[13]);
  Copy(in=in[14], out=out[14]);
  Copy(in=in[15], out=out[15]);
}
`);
