import { elementype, targettype } from "core/resolvers/CoreResolvers";
import { reslverChild } from "../resolvers/Resolver";
import { SingleChildRenderMethods } from "./SingleChildRenderMethods";
import { LinkStyle } from '../../core/style-classes/LinkStyle';
import { PageStyle } from "core/params/PageStyle";


export abstract class LinkRender implements SingleChildRenderMethods {
    private cn = '';
    public constructor(private params: {
        href?: string,
        type?: string,
        child?: elementype,
        target?: targettype,
        linkStyle?: LinkStyle;
    }) {
    }

    public createElement(): string {

        if (this.params.linkStyle !== undefined) {
            this.cn = this.params.linkStyle.getClassName();
            PageStyle.cssClass.set(this.cn, {
                name: `.${this.cn}`,
                atributos: this.params.linkStyle.getStyleClass()
            });

            PageStyle.cssClass.set(`${this.cn}:hover`, {
                name: `.${this.cn}:hover`,
                atributos: this.params.linkStyle.getHoverClass()
            });
        }

        return `
        <a class="${this.cn}" target="${this.params.target || '_self'}" class="${this.params.type || 'link'}" href="${this.params.href || '#'}">
        ${reslverChild(this.params.child) || ''}
        </a>
        `;
    };

}