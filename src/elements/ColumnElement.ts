import { MultiChildRender } from "./MultiChildRender";
import { ContainerMultipleParams } from "./ElementesParams";

export class ColumnElement extends MultiChildRender {

    public constructor(params: ContainerMultipleParams) {
        super({ p: params, direction: 'column' });
    };

}