import { SingleChildRenderParams, Flexbox } from "./ElementesParams";
import { resolveSingleChildRender } from "./Resolver";
import { SingleChildRenderMethods } from "./SingleChildRenderMethods";

export abstract class SingleChildRender implements SingleChildRenderMethods {

    public constructor(private params: SingleChildRenderParams, private flexbox: Flexbox) { }

    public createElement(): string {
        return `
            <div style="display:flex;${resolveSingleChildRender(this.params, this.flexbox)};">
                ${this.params.child || ''}
            </div>
        `;
    };

}