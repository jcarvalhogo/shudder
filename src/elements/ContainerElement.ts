import { ContainerParams } from "./ElementesParams";
import { SingleChildRender } from "./SingleChildRender";
import { resolverAlignment } from "./Resolver";

export class ContainerElement extends SingleChildRender {

    public constructor(params: ContainerParams) {
        super(params, resolverAlignment({ alignItems: params.alignItems, alignContent: params.alignContent }));
    }
}
