import { ContainerParams } from "./ElementesParams";
import { SingleChildRender } from "./SingleChildRender";


export class CenterElement extends SingleChildRender {

    public constructor(params: ContainerParams) {
        super(params, { flexDirection: 'column', alignItems: 'center', justifyContent: 'center' })
    }

    public build(): string {
        return this.createElement();
    };

}
