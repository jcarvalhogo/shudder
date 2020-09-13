import { ImageRenderParams } from "../params/ElementesParams";
import { resolverImageRender } from "../resolvers/Resolver";
import { SingleChildRenderMethods } from "./SingleChildRenderMethods";

export abstract class ImageRender implements SingleChildRenderMethods {
    public constructor(private params: ImageRenderParams) { };

    createElement() {
        return `<img ${resolverImageRender(this.params)} />`;
    }
} 