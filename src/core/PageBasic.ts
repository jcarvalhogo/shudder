
import { SingleChildRenderMethods } from '../elements/renders/SingleChildRenderMethods';
import { PageBasicParams } from './params/CoreParams';

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
        </head>
        <body style="margin:0px;padding:0px;">
            ${this.params.child}
            <script src="/reload/reload.js"></script>
        </body>
        </html>
        `;
    }

}