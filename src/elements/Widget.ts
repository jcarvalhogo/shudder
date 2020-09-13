import {
    TextFontOption,
    TextOverflow,
    AlignTextOption,
    ContainerParams,
    ContainerMultipleParams,
    Size,
    ImageParams,
    BackgroundImageParams
} from "./ElementesParams";

import {
    TextElement,
    ContainerElement,
    CenterElement,
    ColumnElement,
    RowElement,
    SizedBoxElement,
    ImageElement,
    PageElement,
    ContainerImageElement,
    PageBasicParams
} from './Widgets';

export function Text(value: string, p: { style?: TextFontOption, textOverflow?: TextOverflow, textAlign?: AlignTextOption }): string {
    return new TextElement(value, p.style, p.textOverflow, p.textAlign).createElement();
}

export function Container(params: ContainerParams) {
    return new ContainerElement(params).createElement();
}

export function Center(params: ContainerParams) {
    return new CenterElement(params).createElement();
}

export function Column(params: ContainerMultipleParams) {
    return new ColumnElement(params).createElement();
}

export function Row(params: ContainerMultipleParams) {
    return new RowElement(params || {}).createElement();
}

export function SizedBox(size: Size, child?: string) {
    return new SizedBoxElement(size, child || '').createElement();
}

export function Image(params: ImageParams): string {
    return new ImageElement(params).createElement();
}

export function PageBasic(params: PageBasicParams): string {
    return new PageElement(params).createElement();
}

export function ContainerImage(params: ContainerParams, backgroundImage?: BackgroundImageParams): string {
    return new ContainerImageElement(params, backgroundImage).createElement();
}
