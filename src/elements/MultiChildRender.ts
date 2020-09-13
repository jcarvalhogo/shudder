import { ContainerMultipleParams } from "./ElementesParams";
import { resolverMultiChildRender } from "./Resolver";
import { SingleChildRenderMethods } from "./SingleChildRenderMethods";


export class MultiChildRender implements SingleChildRenderMethods {

    public constructor(public params: { p: ContainerMultipleParams, direction: string }) { };


    createElement(): string {

        let children: string = '';
        if (this.params.p.children !== undefined) {
            this.params.p.children.forEach((child) => {
                children += child;
            });
        }

        return `<section style="display:flex;flex-direction:${this.params.direction};${resolverMultiChildRender(this.params.p)}">
            ${children}
</section>`;
    }
}