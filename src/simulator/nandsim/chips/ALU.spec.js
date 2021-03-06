import { ALU } from "./index.js";
import { sim } from "../Gate.js";

describe("ALU", () => {
  // Define connections
  let gate = new ALU();

  // Define Inputs
  gate.x.name("x").input();
  gate.y.name("y").input();
  gate.zx.name("zx").input();
  gate.nx.name("nx").input();
  gate.zy.name("zy").input();
  gate.ny.name("ny").input();
  gate.f.name("f").input();
  gate.no.name("no").input();

  // Define Outputs
  gate.out.name("out").output();
  gate.zr.name("zr").output();
  gate.ng.name("ng").output();

  test.each`
    x                     | y                     | zx     | nx     | zy     | ny     | f      | no     | out                   | zr     | ng
    ${"0000000000000000"} | ${"1111111111111111"} | ${"1"} | ${"0"} | ${"1"} | ${"0"} | ${"1"} | ${"0"} | ${"0000000000000000"} | ${"1"} | ${"0"}
    ${"0000000000000000"} | ${"1111111111111111"} | ${"1"} | ${"1"} | ${"1"} | ${"1"} | ${"1"} | ${"1"} | ${"0000000000000001"} | ${"0"} | ${"0"}
    ${"0000000000000000"} | ${"1111111111111111"} | ${"1"} | ${"1"} | ${"1"} | ${"0"} | ${"1"} | ${"0"} | ${"1111111111111111"} | ${"0"} | ${"1"}
    ${"0000000000000000"} | ${"1111111111111111"} | ${"0"} | ${"0"} | ${"1"} | ${"1"} | ${"0"} | ${"0"} | ${"0000000000000000"} | ${"1"} | ${"0"}
    ${"0000000000000000"} | ${"1111111111111111"} | ${"1"} | ${"1"} | ${"0"} | ${"0"} | ${"0"} | ${"0"} | ${"1111111111111111"} | ${"0"} | ${"1"}
    ${"0000000000000000"} | ${"1111111111111111"} | ${"0"} | ${"0"} | ${"1"} | ${"1"} | ${"0"} | ${"1"} | ${"1111111111111111"} | ${"0"} | ${"1"}
    ${"0000000000000000"} | ${"1111111111111111"} | ${"1"} | ${"1"} | ${"0"} | ${"0"} | ${"0"} | ${"1"} | ${"0000000000000000"} | ${"1"} | ${"0"}
    ${"0000000000000000"} | ${"1111111111111111"} | ${"0"} | ${"0"} | ${"1"} | ${"1"} | ${"1"} | ${"1"} | ${"0000000000000000"} | ${"1"} | ${"0"}
    ${"0000000000000000"} | ${"1111111111111111"} | ${"1"} | ${"1"} | ${"0"} | ${"0"} | ${"1"} | ${"1"} | ${"0000000000000001"} | ${"0"} | ${"0"}
    ${"0000000000000000"} | ${"1111111111111111"} | ${"0"} | ${"1"} | ${"1"} | ${"1"} | ${"1"} | ${"1"} | ${"0000000000000001"} | ${"0"} | ${"0"}
    ${"0000000000000000"} | ${"1111111111111111"} | ${"1"} | ${"1"} | ${"0"} | ${"1"} | ${"1"} | ${"1"} | ${"0000000000000000"} | ${"1"} | ${"0"}
    ${"0000000000000000"} | ${"1111111111111111"} | ${"0"} | ${"0"} | ${"1"} | ${"1"} | ${"1"} | ${"0"} | ${"1111111111111111"} | ${"0"} | ${"1"}
    ${"0000000000000000"} | ${"1111111111111111"} | ${"1"} | ${"1"} | ${"0"} | ${"0"} | ${"1"} | ${"0"} | ${"1111111111111110"} | ${"0"} | ${"1"}
    ${"0000000000000000"} | ${"1111111111111111"} | ${"0"} | ${"0"} | ${"0"} | ${"0"} | ${"1"} | ${"0"} | ${"1111111111111111"} | ${"0"} | ${"1"}
    ${"0000000000000000"} | ${"1111111111111111"} | ${"0"} | ${"1"} | ${"0"} | ${"0"} | ${"1"} | ${"1"} | ${"0000000000000001"} | ${"0"} | ${"0"}
    ${"0000000000000000"} | ${"1111111111111111"} | ${"0"} | ${"0"} | ${"0"} | ${"1"} | ${"1"} | ${"1"} | ${"1111111111111111"} | ${"0"} | ${"1"}
    ${"0000000000000000"} | ${"1111111111111111"} | ${"0"} | ${"0"} | ${"0"} | ${"0"} | ${"0"} | ${"0"} | ${"0000000000000000"} | ${"1"} | ${"0"}
    ${"0000000000000000"} | ${"1111111111111111"} | ${"0"} | ${"1"} | ${"0"} | ${"1"} | ${"0"} | ${"1"} | ${"1111111111111111"} | ${"0"} | ${"1"}
    ${"0000000000010001"} | ${"0000000000000011"} | ${"1"} | ${"0"} | ${"1"} | ${"0"} | ${"1"} | ${"0"} | ${"0000000000000000"} | ${"1"} | ${"0"}
    ${"0000000000010001"} | ${"0000000000000011"} | ${"1"} | ${"1"} | ${"1"} | ${"1"} | ${"1"} | ${"1"} | ${"0000000000000001"} | ${"0"} | ${"0"}
    ${"0000000000010001"} | ${"0000000000000011"} | ${"1"} | ${"1"} | ${"1"} | ${"0"} | ${"1"} | ${"0"} | ${"1111111111111111"} | ${"0"} | ${"1"}
    ${"0000000000010001"} | ${"0000000000000011"} | ${"0"} | ${"0"} | ${"1"} | ${"1"} | ${"0"} | ${"0"} | ${"0000000000010001"} | ${"0"} | ${"0"}
    ${"0000000000010001"} | ${"0000000000000011"} | ${"1"} | ${"1"} | ${"0"} | ${"0"} | ${"0"} | ${"0"} | ${"0000000000000011"} | ${"0"} | ${"0"}
    ${"0000000000010001"} | ${"0000000000000011"} | ${"0"} | ${"0"} | ${"1"} | ${"1"} | ${"0"} | ${"1"} | ${"1111111111101110"} | ${"0"} | ${"1"}
    ${"0000000000010001"} | ${"0000000000000011"} | ${"1"} | ${"1"} | ${"0"} | ${"0"} | ${"0"} | ${"1"} | ${"1111111111111100"} | ${"0"} | ${"1"}
    ${"0000000000010001"} | ${"0000000000000011"} | ${"0"} | ${"0"} | ${"1"} | ${"1"} | ${"1"} | ${"1"} | ${"1111111111101111"} | ${"0"} | ${"1"}
    ${"0000000000010001"} | ${"0000000000000011"} | ${"1"} | ${"1"} | ${"0"} | ${"0"} | ${"1"} | ${"1"} | ${"1111111111111101"} | ${"0"} | ${"1"}
    ${"0000000000010001"} | ${"0000000000000011"} | ${"0"} | ${"1"} | ${"1"} | ${"1"} | ${"1"} | ${"1"} | ${"0000000000010010"} | ${"0"} | ${"0"}
    ${"0000000000010001"} | ${"0000000000000011"} | ${"1"} | ${"1"} | ${"0"} | ${"1"} | ${"1"} | ${"1"} | ${"0000000000000100"} | ${"0"} | ${"0"}
    ${"0000000000010001"} | ${"0000000000000011"} | ${"0"} | ${"0"} | ${"1"} | ${"1"} | ${"1"} | ${"0"} | ${"0000000000010000"} | ${"0"} | ${"0"}
    ${"0000000000010001"} | ${"0000000000000011"} | ${"1"} | ${"1"} | ${"0"} | ${"0"} | ${"1"} | ${"0"} | ${"0000000000000010"} | ${"0"} | ${"0"}
    ${"0000000000010001"} | ${"0000000000000011"} | ${"0"} | ${"0"} | ${"0"} | ${"0"} | ${"1"} | ${"0"} | ${"0000000000010100"} | ${"0"} | ${"0"}
    ${"0000000000010001"} | ${"0000000000000011"} | ${"0"} | ${"1"} | ${"0"} | ${"0"} | ${"1"} | ${"1"} | ${"0000000000001110"} | ${"0"} | ${"0"}
    ${"0000000000010001"} | ${"0000000000000011"} | ${"0"} | ${"0"} | ${"0"} | ${"1"} | ${"1"} | ${"1"} | ${"1111111111110010"} | ${"0"} | ${"1"}
    ${"0000000000010001"} | ${"0000000000000011"} | ${"0"} | ${"0"} | ${"0"} | ${"0"} | ${"0"} | ${"0"} | ${"0000000000000001"} | ${"0"} | ${"0"}
    ${"0000000000010001"} | ${"0000000000000011"} | ${"0"} | ${"1"} | ${"0"} | ${"1"} | ${"0"} | ${"1"} | ${"0000000000010011"} | ${"0"} | ${"0"}
  `("ALU test", ({ x, y, zx, nx, zy, ny, f, no, out, zr, ng }) => {
    sim.setPins({ x, y, zx, nx, zy, ny, f, no });
    expect(sim.readPins("x", "y", "zx", "nx", "zy", "ny", "f", "no")).toEqual({ x, y, zx, nx, zy, ny, f, no });
    sim.evalOutputs();
    expect(sim.readPins("out", "zr", "ng")).toEqual({ out, zr, ng });
  });
});
