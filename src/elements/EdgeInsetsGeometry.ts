import { OnlyValues, SymmetricValues } from './ElementesParams'

export interface EdgeInsetsGeometry {

    all(value: number): any;

    only(values: OnlyValues): any;

    symmetric(values: { "horizontal": number, "vertical": number }): any;

    getEdge(): number[];
}
