import { MultiChildRender } from "./MultiChildRender";
import { ContainerMultipleParams } from "./ElementesParams";

export class Column extends MultiChildRender {

    public constructor(params: ContainerMultipleParams) {
        super({ p: params, direction: 'column' });
    };

}