import { EdgeInsetsGeometry } from './EdgeInsetsGeometry'
import { OnlyValues, SymmetricValues } from './ElementesParams';

export class EdgeInsets implements EdgeInsetsGeometry {

    private edge: number[];

    constructor() {
        this.edge = [];
    }

    public all(value: number): EdgeInsetsGeometry {
        this.edge = [value]
        return this;
    }

    public only(values: OnlyValues): EdgeInsetsGeometry {
        this.edge = [values.top, values.right, values.bottom, values.left];
        return this;
    }

    public symmetric(symmetric: SymmetricValues): EdgeInsetsGeometry {
        this.edge = [symmetric.horizontal, symmetric.vertical];
        return this;
    }

    public getEdge(): number[] {
        return this.edge;
    }
}