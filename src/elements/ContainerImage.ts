import { ContainerParams, BackgroundImageParams } from "./params/ElementesParams";
import { SingleChildRender } from "./renders/SingleChildRender";
import { resolverAlignment } from "./resolvers/Resolver";
import { SingleChilImagedRender } from "./renders/SingleChildImageRender";

export class ContainerImage extends SingleChilImagedRender {

    public constructor(params: ContainerParams, backgroundImage?: BackgroundImageParams) {
        super(params, resolverAlignment({ alignItems: params.alignItems, alignContent: params.alignContent }), backgroundImage);
    }
}
