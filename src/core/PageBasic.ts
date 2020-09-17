
import { SingleChildRenderMethods } from '../elements/renders/SingleChildRenderMethods';
import { PageBasicParams } from './params/CoreParams';
import { resolverPage } from './resolvers/CoreResolvers';

export class PageBasic implements SingleChildRenderMethods {

    public constructor(private params: PageBasicParams) { }

    public createElement(): string {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${this.params.title}</title>

            <link rel="stylesheet" href="style.css">
        </head>
        <body">
            ${resolverPage(this.params.child)}
        </body>
        </html>
        `;
    }

}