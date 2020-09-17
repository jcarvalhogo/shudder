import { elementype, targettype } from "core/resolvers/CoreResolvers";
import { reslverChild } from "../resolvers/Resolver";
import { SingleChildRenderMethods } from "./SingleChildRenderMethods";


export abstract class LinkRender implements SingleChildRenderMethods {

    public constructor(private params: {
        href?: string,
        type?: string,
        child?: elementype,
        target?: targettype
    }) { }

    public createElement(): string {
        return `
        <a target="${this.params.target || '_self'}" class="${this.params.type || 'link'}" href="${this.params.href || '#'}">
        ${reslverChild(this.params.child) || ''}
        </a>
        `;
    };

}