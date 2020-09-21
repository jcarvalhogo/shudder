import { elementype, targettype } from 'core/resolvers/CoreResolvers';
import { LinkRender } from './renders/LinkRender';
import { LinkStyle } from '../core/style-classes/LinkStyle'

export interface LinkRenderParams {
    href?: string,
    type?: string,
    child?: elementype,
    target?: targettype,
    linkStyle: LinkStyle;
}


export class Link extends LinkRender {
    public constructor(params: LinkRenderParams) {
        super(params);
    }
}