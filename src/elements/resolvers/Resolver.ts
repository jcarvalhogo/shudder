import { EdgeInsetsGeometry } from '../params/EdgeInsetsGeometry'
import {
    Size,
    ContainerMultipleParams,
    SingleChildRenderParams,
    Flexbox,
    Alignment,
    TextRenderParams,
    TextFontOption,
    TextDecorationOption,
    AlignTextOption,
    ImageRenderParams,
    BackgroundImageParams
} from '../params/ElementesParams';
import { elementype } from '../../core/resolvers/CoreResolvers';

function resolverEdgeInsets(edge?: EdgeInsetsGeometry, prefix?: string): string {
    if (edge !== undefined && prefix !== undefined) {
        let egderVales = edge.getEdge();
        switch (egderVales.length) {
            case 1: return `${prefix}:${egderVales[0]}px;`;
            case 2: return `${prefix}:${egderVales[1]}px ${egderVales[0]}px;`;
            case 4: return `
            ${prefix}-top:${egderVales[0]}px; 
            ${prefix}-right:${egderVales[1]}px; 
            ${prefix}-bottom:${egderVales[2]}px;
            ${prefix}-left:${egderVales[3]}px; 
            `;
            default: return '';
        }
    } else return '';
}

export function resolverSize(size: Size): string {
    return `width:${size.width || '0px'};height:${size.height || '0px'};`;
}

export function resolverAlignment(alignment: Alignment): Flexbox {
    return {
        flexDirection: 'column',
        alignItems: alignment.alignItems,
        justifyContent: alignment.alignContent
    };
}

export function resolverFlex(flexbox: Flexbox) {
    let style: string = '';
    style += `${typeof flexbox.flexDirection !== 'undefined' ? `flex-direction:${flexbox.flexDirection};` : ';'}`;
    style += `${typeof flexbox.flexWrap !== 'undefined' ? `flex-wrap:${flexbox.flexWrap};` : ''}`;
    style += `${typeof flexbox.justifyContent !== 'undefined' ? `justify-content:${flexbox.justifyContent};` : ''}`;
    style += `${typeof flexbox.alignItems !== 'undefined' ? `align-items:${flexbox.alignItems};` : ''}`;
    return style;
}

export function resolveSingleChildRender(params: SingleChildRenderParams, flexbox: Flexbox): string {
    let style: string = '';
    if (params !== undefined) {
        style += resolverSize({ width: params.width, height: params.height });
        style += resolverEdgeInsets(params.padding, 'padding');
        style += resolverEdgeInsets(params.margin, 'margin');
        style += `${typeof params.backgroundColor !== 'undefined' ? `background-color:${params.backgroundColor};` : ''}`;
        style += `${typeof params.color !== 'undefined' ? `color:${params.color};` : ''}`;
    }

    style += resolverFlex(flexbox);

    return style;
}

export function resolveSingleImagedRender(params: BackgroundImageParams): string {
    let style: string = '';
    style += `background-image:url(${params.image});`;
    style += `${params.origin !== undefined ? `background-origin:${params.origin};` : ''}`;
    style += `${params.position !== undefined ? `background-position:${params.position};` : ''}`;
    style += `${params.repeat !== undefined ? `background-repeat:${params.repeat};` : ''}`;
    style += `${params.size !== undefined ? `background-size:${params.size};` : ''}`;
    return style;
}

export function resolverMultiChildRender(params: ContainerMultipleParams): string {
    let style: string = '';
    if (params !== undefined) {
        style += resolverSize({ width: params.width, height: params.height });
        style += `${resolverEdgeInsets((params.margin), 'margin')}`
        style += `${typeof params.backgroundColor !== 'undefined' ? `background-color:${params.backgroundColor};` : ''}`;
        style += `justify-content:${params.alignContent || 'flex-start'};`;
        style += `align-items:${params.alignItems || 'flex-start'};`;
    }
    return style;
}

export function resolverTextFontOption(option: TextFontOption) {
    let style = '';
    if (option !== undefined) {
        style += `font-family: ${option.fontFamily || 'Arial, Helvetica, sans-serif;'}`;
        style += `${option.fontSize !== undefined ? `font-size: ${option.fontSize};` : ''}`;
        style += `${option.fontStyle !== undefined ? `font-style: ${option.fontStyle};` : ''}`;
        style += `${option.fontWeight !== undefined ? `font-weight: ${option.fontWeight};` : ''}`;
        style += `${option.color !== undefined ? `color: ${option.color};` : ''}`;
    }

    return style;
}

export function resolverTextDecorationOption(option: TextDecorationOption): string {
    let style = '';
    if (option !== undefined) {
        style += `${option.textDecoration !== undefined ? `text-decoration: ${option.textDecoration};` : ''}`;
        style += `${option.textDecorationColor !== undefined ? `text-decoration-color: ${option.textDecorationColor};` : ''}`;
        style += `${option.textDecorationLine !== undefined ? `text-decoration-line: ${option.textDecorationLine};` : ''}`;
        style += `${option.textDecorationStyle !== undefined ? `text-decoration-style: ${option.textDecorationStyle};` : ''}`;
    } 5
    return style;
}

export function resolverAlignTextOption(option: AlignTextOption): string {
    let style = '';
    if (option !== undefined) {
        style += `${option.textAlign !== undefined ? `text-align:${option.textAlign};` : ''}`;
        style += `${option.textIndent !== undefined ? `text-indent:${option.textIndent};` : ''}`;
        style += `${option.textJustify !== undefined ? `text-justify:${option.textJustify};` : ''}`;
        style += `${option.textOverflow !== undefined ? `text-overflow:${option.textOverflow};` : ''}`;
    }
    return style;
}

export function resolverImageRender(params: ImageRenderParams): string {
    let values = '';

    values += `alt="${params.alt || "image"}"`;
    values += `${params.height === undefined ? '' : `height="${params.height}"`}`;
    values += `${params.width === undefined ? '' : `width="${params.width}"`}`;
    values += `src="${params.src}"`;

    return values;

}

export function resolverTextRenderParams(params: TextRenderParams): string {
    let style: string = '';
    if (params !== undefined) {
        style += resolverTextFontOption(params.textFontOption || {});
        style += resolverAlignTextOption(params.alignTextOption || {});
        style += resolverTextDecorationOption(params.textDecorationOption || {});
    }
    return style;
}

export function reslverChild(child?: elementype): string {
    return (child === undefined) ? '' : child.createElement();
}

