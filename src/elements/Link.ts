import { LinkRenderParams } from './params/ElementesParams';
import { LinkRender } from './renders/LinkRender';

export class Link extends LinkRender {
    public constructor(params: LinkRenderParams) {
        super(params);
    }
}