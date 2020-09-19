import { ClassCss } from "core/params/CoreParams";
import { PageStyle } from "core/params/PageStyle";
import { SingleChildRenderParams, Flexbox } from "../params/ElementesParams";
import { resolveSingleChildRender, reslverChild } from "../resolvers/Resolver";
import { SingleChildRenderMethods } from "./SingleChildRenderMethods";

export abstract class SingleChildRender implements SingleChildRenderMethods {

    public constructor(private params: SingleChildRenderParams, private flexbox: Flexbox) { }

    public createElement(): string {
        PageStyle.childCount++;
        let className = `child_${PageStyle.childCount}`;
        let att = `display:flex;${resolveSingleChildRender(this.params, this.flexbox)};`;
        PageStyle.cssClass.push({ name: `.${className}`, atributos: att });

        return `
            <div class="${className}">
                ${reslverChild(this.params.child)}
            </div>
        `;
    };

}