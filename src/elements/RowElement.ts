import { MultiChildRender } from "./MultiChildRender";
import { ContainerMultipleParams } from "./ElementesParams";

export class RowElement extends MultiChildRender {

    public constructor(params: ContainerMultipleParams) {
        super({ p: params, direction: 'row' });
    };

}