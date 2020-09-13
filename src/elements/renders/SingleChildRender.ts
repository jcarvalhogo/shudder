import { SingleChildRenderParams, Flexbox } from "../params/ElementesParams";
import { resolveSingleChildRender, reslverChild } from "../resolvers/Resolver";
import { SingleChildRenderMethods } from "./SingleChildRenderMethods";

export abstract class SingleChildRender implements SingleChildRenderMethods {

    public constructor(private params: SingleChildRenderParams, private flexbox: Flexbox) { }

    public createElement(): string {
        return `
            <div style="display:flex;${resolveSingleChildRender(this.params, this.flexbox)};">
                ${reslverChild(this.params.child)}
            </div>
        `;
    };

}