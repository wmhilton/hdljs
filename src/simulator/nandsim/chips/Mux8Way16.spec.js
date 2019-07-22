import { Mux8Way16 } from "./index.js";
import { sim } from "../Gate.js";

describe("Mux8Way16", () => {
  // Define connections
  let mux = new Mux8Way16();

  // Define Inputs
  mux.in.name("input").input();
  mux.sel.name("sel").input();

  // Define Outputs
  mux.out.name("out").output();

  test.each`
    input                                                                                                                                                               | sel      | out
    ${["0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000"]} | ${"000"} | ${"0000000000000000"}
    ${["0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000"]} | ${"001"} | ${"0000000000000000"}
    ${["0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000"]} | ${"010"} | ${"0000000000000000"}
    ${["0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000"]} | ${"011"} | ${"0000000000000000"}
    ${["0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000"]} | ${"100"} | ${"0000000000000000"}
    ${["0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000"]} | ${"101"} | ${"0000000000000000"}
    ${["0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000"]} | ${"110"} | ${"0000000000000000"}
    ${["0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000", "0000000000000000"]} | ${"111"} | ${"0000000000000000"}
    ${["0001001000110100", "0010001101000101", "0011010001010110", "0100010101100111", "0101011001111000", "0110011110001001", "0111100010011010", "1000100110101011"]} | ${"000"} | ${"1000100110101011"}
    ${["0001001000110100", "0010001101000101", "0011010001010110", "0100010101100111", "0101011001111000", "0110011110001001", "0111100010011010", "1000100110101011"]} | ${"001"} | ${"0111100010011010"}
    ${["0001001000110100", "0010001101000101", "0011010001010110", "0100010101100111", "0101011001111000", "0110011110001001", "0111100010011010", "1000100110101011"]} | ${"010"} | ${"0110011110001001"}
    ${["0001001000110100", "0010001101000101", "0011010001010110", "0100010101100111", "0101011001111000", "0110011110001001", "0111100010011010", "1000100110101011"]} | ${"011"} | ${"0101011001111000"}
    ${["0001001000110100", "0010001101000101", "0011010001010110", "0100010101100111", "0101011001111000", "0110011110001001", "0111100010011010", "1000100110101011"]} | ${"100"} | ${"0100010101100111"}
    ${["0001001000110100", "0010001101000101", "0011010001010110", "0100010101100111", "0101011001111000", "0110011110001001", "0111100010011010", "1000100110101011"]} | ${"101"} | ${"0011010001010110"}
    ${["0001001000110100", "0010001101000101", "0011010001010110", "0100010101100111", "0101011001111000", "0110011110001001", "0111100010011010", "1000100110101011"]} | ${"110"} | ${"0010001101000101"}
    ${["0001001000110100", "0010001101000101", "0011010001010110", "0100010101100111", "0101011001111000", "0110011110001001", "0111100010011010", "1000100110101011"]} | ${"111"} | ${"0001001000110100"}
  `("[$input][$sel] == $out", ({ input, sel, out }) => {
    sim.setPins({ input, sel });
    expect(sim.readPins("input", "sel")).toEqual({ input, sel });
    sim.evalOutputs();
    expect(sim.readPins("out")).toEqual({ out });
  });
});