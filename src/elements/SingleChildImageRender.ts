import { SingleChildRenderParams, Flexbox, BackgroundImageParams } from "./ElementesParams";
import { resolveSingleChildRender, resolveSingleImagedRender } from "./Resolver";
import { SingleChildRender } from "./SingleChildRender";
import { SingleChildRenderMethods } from "./SingleChildRenderMethods";

export abstract class SingleChilImagedRender extends SingleChildRender implements SingleChildRenderMethods {

    public constructor(private renderParams: SingleChildRenderParams, private flex: Flexbox, private backgroundImage?: BackgroundImageParams) {
        super(renderParams, flex);
    }

    public createElement(): string {
        return `
            <div style="display:flex;${resolveSingleChildRender(this.renderParams, this.flex)} ${resolveSingleImagedRender(this.backgroundImage || {})}">
                ${this.renderParams.child || ''}
            </div>
        `;
    };
}