import { Size } from "./params/ElementesParams";
import { resolverSize } from "./resolvers/Resolver";
import { SingleChildRenderMethods } from "./renders/SingleChildRenderMethods";

export class SizedBox implements SingleChildRenderMethods{
    public constructor(private size: Size) { };

    createElement() {
        return `
        <div style="${resolverSize(this.size)}">
        </div>
        `;
    }
}