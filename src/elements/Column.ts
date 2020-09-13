import { MultiChildRender } from "./renders/MultiChildRender";
import { ContainerMultipleParams } from "./params/ElementesParams";

export class Column extends MultiChildRender {

    public constructor(params: ContainerMultipleParams) {
        super({ p: params, direction: 'column' });
    };

}