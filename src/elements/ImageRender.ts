import { ImageRenderParams } from "./ElementesParams";
import { resolverImageRender } from "./Resolver";
import { SingleChildRenderMethods } from "./SingleChildRenderMethods";

export abstract class ImageRender implements SingleChildRenderMethods {
    public constructor(private params: ImageRenderParams) { };

    createElement() {
        return `<img ${resolverImageRender(this.params)} />`;
    }
} 