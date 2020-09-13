import { TextRenderParams, TextTag } from "./ElementesParams";
import { resolverTextRenderParams } from "./Resolver";
import { SingleChildRenderMethods } from "./SingleChildRenderMethods";


export abstract class TextRender implements SingleChildRenderMethods{

    public constructor(
        private value: string,
        private params: TextRenderParams,
        private tag: TextTag
    ) { }

    public createElement(): string {
        return `
            <${this.tag} style="${resolverTextRenderParams(this.params)}">
                ${this.value}
            </${this.tag}>
        `;
    };

}