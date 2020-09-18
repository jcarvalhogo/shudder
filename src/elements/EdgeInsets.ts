import { EdgeInsetsGeometry } from './params/EdgeInsetsGeometry'
import { OnlyValues, SymmetricValues } from './params/ElementesParams';

export class EdgeInsets implements EdgeInsetsGeometry {

    private edge: string[];

    constructor() {
        this.edge = [];
    }

    public all(value: string): EdgeInsetsGeometry {
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

    public getEdge(): string[] {
        return this.edge;
    }
}