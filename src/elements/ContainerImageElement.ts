import { ContainerParams, BackgroundImageParams } from "./ElementesParams";
import { SingleChildRender } from "./SingleChildRender";
import { resolverAlignment } from "./Resolver";
import { SingleChilImagedRender } from "./SingleChildImageRender";

export class ContainerImageElement extends SingleChilImagedRender {

    public constructor(params: ContainerParams, backgroundImage?: BackgroundImageParams) {
        super(params, resolverAlignment({ alignItems: params.alignItems, alignContent: params.alignContent }), backgroundImage);
    }
}
