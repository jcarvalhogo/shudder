import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

import { ApplicationParams } from './params/CoreParams';
import { resolverPage } from './resolvers/CoreResolvers';
import { NavigationPage } from './NavigationPage';
import { PageBasic } from 'core';
import { PageStyle } from './params/PageStyle';
import { CreateCssStyleApp } from './CssCreate';

//app.set('port', process.env.PORT || 3000)

export class Application {

    private app: express.Application;

    public constructor(private params: ApplicationParams) {
        this.app = express();
        this.initServer();
    }

    private initServer(): void {
        PageStyle.resetStyle();

        this.setStaticFolder();
        this.middlewares();
        this.setRouter();
        this.run();
    }

    private setStaticFolder() {
        this.app.use(express.static(path.join(__dirname, 'shared/css')));
        this.app.use(express.static(path.join(__dirname, 'shared/js')));
        this.app.use(express.static(path.join(__dirname, 'shared/fontes/Teko')));
        this.app.use(express.static(path.join(__dirname, 'shared/fontes/Roboto')));

        if (this.params.staticDirectory !== undefined) {
            let dirName = this.params.staticDirectory.dirName || '';
            this.params
                .staticDirectory.directory
                .forEach((d) => this.app
                    .use(express.static(path.join(dirName, d)
                    ))
                );
        }
    }

    private middlewares(): void {
        this.app.use(cors());
        this.app.use(express.json());
    }

    private setRouter(): void {
        this.app.get('/', (req: Request, res: Response) => {
            let webpage = resolverPage(this.params.home);
            CreateCssStyleApp();
            res.send(webpage);
        });

        if (this.params.pages !== undefined) {
            this.params.pages.forEach((page) => {
                this.app.get(page.getNavigationParams().path, (req: Request, res: Response) => {
                    let webpages = page.createElement(); 
                    CreateCssStyleApp();
                    res.send(webpages);
                });
            });
        }
    }


    private run(): void {
        let port = process.env.PORT || this.params.port || 5300;
        this.app.listen(port, () => {
            console.log(`SERVER RUN IN PORT: ${port}`);
        });
    }

}