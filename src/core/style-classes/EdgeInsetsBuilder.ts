import { EdgeInsetsValues } from "./EdgeInsetsValues";

export class EdgeInsetsBuilder extends EdgeInsetsValues {

    constructor(private prefix: string) {
        super();
    }

    public create(): string {

        let v = this.getValues();

        switch (v.length) {
            case 1: return `${this.prefix}: ${v[0]}px;`;
            case 2: return `${this.prefix}: ${v[0]}px ${v[1]}px;`;
            case 4: return `${this.prefix}: ${v[0]}px ${v[1]}px ${v[2]}px ${v[3]}px;`;
            default: return '';
        }
    }

}