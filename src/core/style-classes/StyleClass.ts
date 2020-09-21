import { Padding } from "./Padding";
import { Margin } from "./Margin";
import { Border } from "./Border";
import { BorderRadius } from "./BorderRadius";

export class StyleClass {

    private cssClass = '';

    constructor(private s: {
        color?: string,
        width?: string,
        height?: string,
        backgroundColor?: string,
        padding?: Padding,
        margin?: Margin,
        border?: Border,
        borderRadius?: BorderRadius
    }) {
        this.make();
    }

    private make() {
        this.cssClass += 'text-decoration: none;';
        this.cssClass += this.s.color === undefined ? '' : `color: ${this.s.color};`;
        this.cssClass += this.s.backgroundColor === undefined ? '' : `background-color: ${this.s.backgroundColor};`;
        this.cssClass += this.s.width === undefined ? '' : `width: ${this.s.width};`
        this.cssClass += this.s.height === undefined ? '' : `height: ${this.s.height};`;
        this.cssClass += this.s.padding === undefined ? '' : this.s.padding?.create()
        this.cssClass += this.s.margin === undefined ? '' : this.s.margin?.create();
        this.cssClass += this.s.border === undefined ? '' : this.s.border?.create();
        this.cssClass += this.s.borderRadius === undefined ? '' : this.s.borderRadius?.create();
    }

    public getCssClass() {
        return this.cssClass;
    }
}