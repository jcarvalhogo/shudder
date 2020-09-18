import { OnlyValues, SymmetricValues } from './ElementesParams'

export interface EdgeInsetsGeometry {

    all(value: string): any;

    only(values: OnlyValues): any;

    symmetric(values: { "horizontal": string, "vertical": string }): any;

    getEdge(): string[];
}
