// This file is part of www.nand2tetris.org
// and the book "The Elements of Computing Systems"
// by Nisan and Schocken, MIT Press.
// File name: projects/03/a/Bit.tst

load IICByte.hdl,
output-file IICByte.out,
compare-to IICByte.cmp,
output-list time%S1.4.1 clock0%B4.1.3 reset%B3.1.3 start%B3.1.3 in%B1.8.1 sda%B2.1.2 scl%B2.1.2 done%B3.1.3;

set reset 1, tick, tock, output;
set reset 0,
set start 1,
set in %B00000000,
set clock0 0, tick, tock, output;
set start 0,
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;

set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;

set start 1,
set in %B10000001,
set clock0 0, tick, tock, output;
set start 0,
set clock0 1, tick, tock, output; tick, tock, output;
set clock0 0, tick, tock, output; tick, tock, output;
set clock0 1, tick, tock, output; tick, tock, output;
set clock0 0, tick, tock, output; tick, tock, output;
set clock0 1, tick, tock, output; tick, tock, output;
set clock0 0, tick, tock, output; tick, tock, output;
set clock0 1, tick, tock, output; tick, tock, output;
set clock0 0, tick, tock, output; tick, tock, output;
set clock0 1, tick, tock, output; tick, tock, output;
set clock0 0, tick, tock, output; tick, tock, output;
set clock0 1, tick, tock, output; tick, tock, output;
set clock0 0, tick, tock, output; tick, tock, output;
set clock0 1, tick, tock, output; tick, tock, output;
set clock0 0, tick, tock, output; tick, tock, output;
set clock0 1, tick, tock, output; tick, tock, output;
set clock0 0, tick, tock, output; tick, tock, output;
set clock0 1, tick, tock, output; tick, tock, output;
set clock0 0, tick, tock, output; tick, tock, output;
set clock0 1, tick, tock, output; tick, tock, output;
set clock0 0, tick, tock, output; tick, tock, output;
set clock0 1, tick, tock, output; tick, tock, output;
set clock0 0, tick, tock, output; tick, tock, output;
set clock0 1, tick, tock, output; tick, tock, output;
set clock0 0, tick, tock, output; tick, tock, output;
set clock0 1, tick, tock, output; tick, tock, output;
set clock0 0, tick, tock, output; tick, tock, output;
set clock0 1, tick, tock, output; tick, tock, output;
set clock0 0, tick, tock, output; tick, tock, output;
set clock0 1, tick, tock, output; tick, tock, output;
set clock0 0, tick, tock, output; tick, tock, output;
set clock0 1, tick, tock, output; tick, tock, output;
set clock0 0, tick, tock, output; tick, tock, output;

set start 1,
set in %B01010101,
set clock0 0, tick, tock, output;
set start 0,
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
set clock0 1, tick, tock, output;
set clock0 0, tick, tock, output;
