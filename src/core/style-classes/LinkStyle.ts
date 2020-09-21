import { StyleClass } from "./StyleClass";

export class LinkStyle {
    private hoverClass = '';
    private styleClass = '';

    constructor(private p: { className: string, style: StyleClass, hover: StyleClass }) {
        this.setHoverClass();
        this.setStyleClass();
    }

    private setHoverClass() {
        this.hoverClass = `${this.p.hover.getCssClass()}`;
    }

    private setStyleClass() {
        this.styleClass = `${this.p.style.getCssClass()}`;
    }

    public getHoverClass() { return this.hoverClass }
    public getStyleClass() { return this.styleClass }
    public getClassName() { return this.p.className }
}