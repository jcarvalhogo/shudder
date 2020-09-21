import { PageStyle } from "core/params/PageStyle";
import { SingleChildRenderParams, Flexbox, BackgroundImageParams } from "../params/ElementesParams";
import { reslverChild, resolveSingleChildRender, resolveSingleImagedRender } from "../resolvers/Resolver";
import { SingleChildRender } from "./SingleChildRender";
import { SingleChildRenderMethods } from "./SingleChildRenderMethods";

export abstract class SingleChilImagedRender extends SingleChildRender implements SingleChildRenderMethods {

    public constructor(private renderParams: SingleChildRenderParams, private flex: Flexbox, private backgroundImage?: BackgroundImageParams) {
        super(renderParams, flex);
    }

    public createElement(): string {
        PageStyle.childImageCount++;
        let className = `child-image_${PageStyle.childImageCount}`;
        let att = `display:flex;${resolveSingleChildRender(this.renderParams, this.flex)} ${resolveSingleImagedRender(this.backgroundImage || {})}`;
        PageStyle.cssClass.set(className, { name: `.${className}`, atributos: att });

        return `
            <div class="${className}">
            ${reslverChild(this.renderParams.child) || ''}
            </div>
        `;
    };
}