import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

import { ApplicationParams } from './CoreParams';
import { Routes } from './RoutesUri';

//app.set('port', process.env.PORT || 3000)

export class Application {

    private express: express.Application;

    public constructor(private params: ApplicationParams) {
        this.express = express();
        this.initServer();
    }

    private initServer(): void {
        this.setStaticFolder();

        this.middlewares();
        this.setRouter();
        this.run();
    }

    private setStaticFolder() {
        this.params
            .staticDirectory?.directory || []
                .forEach((d) => this.express
                    .use(express.static(path.join(this.params.staticDirectory?.dirName || '', d)
                    ))
                );
    }


    private middlewares(): void {
        this.express.use(cors());
        this.express.use(express.json());
    }

    private setRouter(): void {
        this.express.get('/', (req: Request, res: Response) => {
            res.send(this.params.home);
        });

        if (this.params.router !== undefined) {
            this.params.router.router.forEach(r => this.express.get(r.path, (req: Request, res: Response) => {
                res.send(r.handle(req));
            }));
        }
    }


    private run(): void {
        let port = this.params.port || 5300;
        this.express.listen(port, () => {
            console.log(`SERVER RUN IN PORT: ${port}`);
        });
    }

}