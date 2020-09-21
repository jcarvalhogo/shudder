export abstract class EdgeInsetsValues {

    private values: number[];

    constructor() {
        this.values = [];
    }

    public all(value: number) {
        this.values = [value];
        return this;
    }

    public symmetric(values: { "horizontal": number, "vertical": number }) {
        this.values = [values.vertical, values.vertical]
        return this;
    }

    public only(values: { top: number, bottom: number, left: number, right: number }) {
        this.values = [values.top, values.right, values.bottom, values.left];
        return this;
    }

    public getValues() { return this.values };
}