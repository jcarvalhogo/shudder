import { Color } from "elements/params/ElementesParams";

export type BorderType = 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | 'none' | 'hidden';
export type BorderPositon = 'border-top' | 'border-left' | 'border-bottom' | 'border-right';

export class Border {

    constructor(private b: { size: number, color: Color, style: BorderType, position?: BorderPositon }) { }

    public create() {
        return `${this.b.position || 'border'}: ${this.b.size}px ${this.b.color} ${this.b.style};`;
    }
}