import { MultiChildRender } from "./MultiChildRender";
import { ContainerMultipleParams } from "./ElementesParams";

export class Row extends MultiChildRender {

    public constructor(params: ContainerMultipleParams) {
        super({ p: params, direction: 'row' });
    };

}