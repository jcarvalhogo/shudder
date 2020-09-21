import { PageStyle } from "core/params/PageStyle";
import { ContainerMultipleParams } from "../params/ElementesParams";
import { resolverMultiChildRender } from "../resolvers/Resolver";
import { SingleChildRenderMethods } from "./SingleChildRenderMethods";


export class MultiChildRender implements SingleChildRenderMethods {

    public constructor(public params: { p: ContainerMultipleParams, direction: string }) { };


    createElement(): string {
        PageStyle.sectionCount++;
        let className = `section_${PageStyle.sectionCount}`;
        let att = `display:flex;flex-direction:${this.params.direction};${resolverMultiChildRender(this.params.p)}`;
        PageStyle.cssClass.set(className, { name: `.${className}`, atributos: att });

        let children: string = '';
        if (this.params.p.children !== undefined) {
            this.params.p.children.forEach((child) => {
                children += child.createElement();
            });
        }

        return `<section class="${className}">
            ${children}
</section>`;
    }
}