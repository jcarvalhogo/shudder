import { ContainerParams } from "./params/ElementesParams";
import { SingleChildRender } from "./renders/SingleChildRender";


export class Center extends SingleChildRender {

    public constructor(params: ContainerParams) {
        super(params, { flexDirection: 'column', alignItems: 'center', justifyContent: 'center' })
    }
}
