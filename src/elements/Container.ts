import { ContainerParams } from "./params/ElementesParams";
import { SingleChildRender } from "./renders/SingleChildRender";
import { resolverAlignment } from "./resolvers/Resolver";

export class Container extends SingleChildRender {

    public constructor(params: ContainerParams) {
        super(params, resolverAlignment({ alignItems: params.alignItems, alignContent: params.alignContent }));
    }
}
