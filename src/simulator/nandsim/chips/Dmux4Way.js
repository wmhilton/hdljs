import { Bus, Gate } from '../Gate.js'
import { Dmux } from './index.js'

export class Dmux4Way extends Gate {
  constructor() {
    super()

    const layer1 = new Dmux()
    const layer2H = new Dmux()
    const layer2L = new Dmux()

    const sel = new Bus(layer1.sel, layer2H.sel)
    layer2H.sel = layer2L.sel
    sel.attach(this, 'sel')

    layer1.in.attach(this, 'in')
    
    layer2H.in = layer1.out[0]
    layer2L.in = layer1.out[1]

    const out = new Bus(...layer2H.out, ...layer2L.out)
    out.attach(this, 'out')
  }
}
