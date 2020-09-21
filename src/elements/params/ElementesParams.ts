import { EdgeInsetsGeometry } from './EdgeInsetsGeometry';
import { elementype, targettype } from '../../core/resolvers/CoreResolvers';

export type ColorValue = string;

type AlignContent = 'space-around' | 'space-between' | 'space-evenly' | 'flex-start' | 'flex-end' | 'center';
type AlignItems = 'flex-end' | 'flex-start' | 'center';

type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
type FlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse';

type FontStyle = 'italic' | 'normal' | 'oblique' | 'inherit' | 'initial' | 'unset';
type FontWeight = 'bold' | 'bolder' | 'lighter' | 'normal' | 'inherit' | 'initial' | 'unset';

export type TextTag = 'label' | 'p' | 'b' | 'strong' | 'i' | 'em' | 'mark' | 'small' | 'del' | 'ins' | 'sub' | 'sup';
type TextDecoration = 'dotted' | 'dashed' | 'double' | 'line-through' | 'none' | 'overline' | 'solid' | 'underline' | 'wavy';
type TextDecorationStyle = 'dotted' | 'dashed' | 'double' | 'line-through' | 'none' | 'overline' | 'solid' | 'underline' | 'wavy';
type TextDecorationLine = 'line-through' | 'none' | 'overline' | 'underline' | 'inherit' | 'initial' | 'unset';
type TextAlign = 'center' | 'end' | 'justify' | 'left' | 'right' | 'start' | 'inherit' | 'initial' | 'unset';
type TextIndent = 'inherit' | 'initial' | 'unset';
type TextJustify = 'auto' | 'distribute' | 'distribute-all-lines' | 'inter-cluster' | 'inter-ideograph' | 'inter-word' | 'kashida' | 'newspaper' | 'inherit' | 'initial' | 'unset';
export type TextOverflow = 'clip' | 'ellipsis' | 'inherit' | 'initial' | 'unset';
type BackgroundOrigin = 'border-box' | 'content-box' | 'inherit' | 'initial' | 'padding-box' | 'unset';
type BackgroundPosition = 'bottom' | 'center' | 'inherit' | 'initial' | 'left' | 'right' | 'top' | 'unset';

type BbackgroundRepeat = 'inherit' | 'initial' | 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y' | 'round' | 'space' | 'unset';
type BackgroundSize = 'auto' | 'contain' | 'cover' | '100% 100%';

export type Cursor = 'alias' | 'all-scroll' | 'auto' | 'cell' | 'context-menu' | 'col-resize' | 'copy' | 'crosshair' | 'default' | 'e-resize' | 'ew-resize' | 'grab' | 'grabbing' | 'help' | 'move' | 'n-resize' | 'ne-resize' | 'nesw-resize' | 'ns-resize' | 'nw-resize' | 'nwse-resize' | 'no-drop' | 'none' | 'not-allowed' | 'pointer' | 'progress' | 'row-resize' | 's-resize' | 'se-resize' | 'sw-resize' | 'text' | 'url(myBall.cur),auto' | 'vertical-text' | 'w-resize' | 'wait' | 'zoom-in' | 'zoom-out' | 'initial';

export interface OnlyValues {
    top: string;
    bottom: string;
    left: string;
    right: string;
}

export interface SymmetricValues {
    horizontal: string;
    vertical: string;
}

export interface Size {
    width?: string;
    height?: string;
}

export interface ChildElement {
    child?: elementype;
}

export interface ChildElements {
    children?: elementype[];
}

export interface Alignment {
    alignContent?: AlignContent;
    alignItems?: AlignItems;
}

export interface ContainerMultipleParams extends Size, Margin, backgroundColor, Alignment, ChildElements { }

export interface Margin {
    margin?: EdgeInsetsGeometry;
}

export interface Padding {
    padding?: EdgeInsetsGeometry;
}

export interface Color {
    color?: ColorValue;
}

export interface backgroundColor {
    backgroundColor?: ColorValue;
}

export interface TextFontOption extends Color {
    fontFamily?: string;
    fontStyle?: FontStyle;
    fontWeight?: FontWeight;
    fontSize?: string;
}

export interface TextTagOtption {
    textTag?: TextTag;
}

export interface TextDecorationOption {
    textDecoration?: TextDecoration;
    textDecorationColor?: ColorValue;
    textDecorationLine?: TextDecorationLine;
    textDecorationStyle?: TextDecorationStyle;
}

export interface AlignTextOption {
    textAlign?: TextAlign;
    textIndent?: TextIndent;
    textJustify?: TextJustify;
    textOverflow?: TextOverflow;
}

export interface Flexbox {
    flexDirection?: FlexDirection;
    flexWrap?: FlexWrap;
    justifyContent?: AlignContent;
    alignItems?: AlignItems;
}

export interface TextRenderParams {
    textFontOption?: TextFontOption;
    textDecorationOption?: TextDecorationOption;
    alignTextOption?: AlignTextOption;
}

export interface Hover {

}

export interface ImageParams extends Size {
    src: string;
    alt?: string;
}

export interface ImageRenderParams extends Size {
    src: string;
    alt?: string;
}

export interface MarginAndPadding extends Margin, Padding { }

export interface ContainerParams extends Size, ChildElement, MarginAndPadding, backgroundColor, Alignment { }

export interface SingleChildRenderParams extends Size, ChildElement, MarginAndPadding, backgroundColor, Color { }

export interface BackgroundImageParams {
    image?: string;
    origin?: BackgroundOrigin;
    position?: BackgroundPosition;
    repeat?: BbackgroundRepeat;
    size?: BackgroundSize;
}



