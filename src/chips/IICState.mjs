import { ChipDef } from '../components/ChipDef.mjs';

export const IICState = new ChipDef(`
CHIP IICState {
  IN inc, reset, jump, addr[16];
  OUT out[16];

  PARTS:
  Or(a=inc, b=reset, out=load0);
  Or(a=load0, b=jump, out=load);

  Mux16(
    a[0]=true,
    b=addr,
    sel=jump,
    out=val
  );

  Or(a=reset, b=jump, out=resetOrJump);

  Mux16(
    a[0]=false,
    a[1]=b0,
    a[2]=b1,
    a[3]=b2,
    a[4]=b3,
    a[5]=b4,
    a[6]=b5,
    a[7]=b6,
    a[8]=b7,
    a[9]=b8,
    a[10]=b9,
    a[11]=b10,
    a[12]=b11,
    a[13]=b12,
    a[14]=b13,
    a[15]=b14,
    b=val,
    sel=resetOrJump,
    out=inRegister
  );

  Register(
    in=inRegister,
    load=load,
    out[0]=b0,
    out[1]=b1,
    out[2]=b2,
    out[3]=b3,
    out[4]=b4,
    out[5]=b5,
    out[6]=b6,
    out[7]=b7,
    out[8]=b8,
    out[9]=b9,
    out[10]=b10,
    out[11]=b11,
    out[12]=b12,
    out[13]=b13,
    out[14]=b14,
    out[15]=b15
  );

  Copy16(
    in[0]=b0,
    in[1]=b1,
    in[2]=b2,
    in[3]=b3,
    in[4]=b4,
    in[5]=b5,
    in[6]=b6,
    in[7]=b7,
    in[8]=b8,
    in[9]=b9,
    in[10]=b10,
    in[11]=b11,
    in[12]=b12,
    in[13]=b13,
    in[14]=b14,
    in[15]=b15,
    out=out
  );
}
`)