import { EdgeInsetsValues } from "./EdgeInsetsValues";

export class BorderRadius extends EdgeInsetsValues {

    public create(): string {

        let v = this.getValues();

        switch (v.length) {
            case 1: return `border-radius: ${v[0]}px;`;
            case 2: return `border-radius: ${v[0]}px ${v[1]}px;`;
            case 4: return `border-radius: ${v[0]}px ${v[1]}px ${v[2]}px ${v[3]}px;`;
            default: return '';
        }
    }

}