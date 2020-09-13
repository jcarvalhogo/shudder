import { SingleChildRenderParams, Flexbox } from "../params/ElementesParams";
import { resolveSingleChildRender } from "../resolvers/Resolver";
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