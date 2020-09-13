import { ImageParams } from "./params/ElementesParams";
import { ImageRender } from "./renders/ImageRender";

export class Image extends ImageRender {

    constructor(params: ImageParams) {
        super(params);
    }
}