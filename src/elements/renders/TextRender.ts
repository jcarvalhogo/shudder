import { PageStyle } from "core/params/PageStyle";
import { TextRenderParams, TextTag } from "../params/ElementesParams";
import { resolverTextRenderParams } from "../resolvers/Resolver";
import { SingleChildRenderMethods } from "./SingleChildRenderMethods";


export abstract class TextRender implements SingleChildRenderMethods {

    public constructor(
        private value: string,
        private params: TextRenderParams,
        private tag: TextTag
    ) { }

    public createElement(): string {
        PageStyle.labelCount++;
        let calssName = `label_${PageStyle.labelCount}`;
        let att = resolverTextRenderParams(this.params);
        PageStyle.cssClass.set(calssName, { name: `.${calssName}`, atributos: att });

        return `
            <${this.tag} class="${calssName}">${this.value}</${this.tag}>`;
    };

}