
import { PageBasic } from 'core';
import { SingleChildRenderMethods } from '../elements/renders/SingleChildRenderMethods';
import { Navigation } from './Navigation';
import { NavigationParams, PageBasicParams } from './params/CoreParams';
import { PageStyle } from './params/PageStyle';
import { resolverPage } from './resolvers/CoreResolvers';

export class NavigationPage {

    public constructor(private paramas: NavigationParams) {

    }

    public getNavigationParams(): NavigationParams {
        return this.paramas;
    }

    public createElement(): string {
        PageStyle.resetStyle();
        PageStyle.styleName = this.paramas.styleSheetName.trim() || 'basic';
        PageStyle.cssClass.set('body', { name: 'body', atributos: this.paramas.bodyInit || 'padding: 0px; margin: 0px;' })

        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${this.paramas.title}</title>

            <link rel="stylesheet" href="${PageStyle.styleName}.css">
        </head>
        <body>
            ${resolverPage(this.paramas.child)}
        </body>
        </html>
        `;
    }

}