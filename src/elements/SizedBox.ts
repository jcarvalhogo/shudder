import { Size } from "./ElementesParams";
import { resolverSize } from "./Resolver";
import { SingleChildRenderMethods } from "./SingleChildRenderMethods";

export class SizedBox implements SingleChildRenderMethods{
    public constructor(private size: Size, child: string) { };

    createElement() {
        return `
        <div style="${resolverSize(this.size)}">
        </div>
        `;
    }
}