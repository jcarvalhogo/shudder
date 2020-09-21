import { StyleClass } from "./StyleClass";

export class LinkStyle {
    private hoverClass = '';
    private styleClass = '';
    private activeClass = '';

    constructor(private p: { className: string, style: StyleClass, hover?: StyleClass, active?: StyleClass }) {
        this.setHoverClass();
        this.setStyleClass();
        this.setActiveClass();
    }

    private setHoverClass() {
        this.hoverClass = `${this.p.hover?.getCssClass()}`;
    }

    private setStyleClass() {
        this.styleClass = `${this.p.style.getCssClass()}`;
    }

    private setActiveClass() {
        this.activeClass = `${this.p.active?.getCssClass()}`;
    }

    public getHoverClass() { return this.hoverClass }
    public getStyleClass() { return this.styleClass }
    public getClassName() { return this.p.className }
    public getActiveClass() { return this.activeClass }
}