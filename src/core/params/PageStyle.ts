import { ClassCss } from "./CoreParams";

export class PageStyle {
    public static styleName: string = '';
    public static cssClass: ClassCss[] = [];
    public static childCount = 0;
    public static sectionCount = 0;
    public static labelCount = 0;

    public static resetStyle() {
        this.styleName = '';
        this.cssClass = [];
        this.childCount = 0;
        this.sectionCount = 0;
        this.labelCount = 0;
    }

}