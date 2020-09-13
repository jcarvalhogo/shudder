import { Application, PageBasic } from "../src/core";
import { Center, Colors, Text, Container, Row, Column } from "../src/elements";

new Application({
    staticDirectory: { dirName: __dirname, directory: ['public','arquivos'] },
    home: new PageBasic({
        title: 'Pagina Pasica',
        child: new Column({
            alignContent: 'space-between',
            alignItems: 'center',
            backgroundColor: Colors.cyan(900),
            width: '80px',
            height: '260px',
            children: [
                new Container({
                    width: '48px',
                    height: '48px',
                    backgroundColor: Colors.blue(),
                }),
                new Container({
                    width: '48px',
                    height: '48px',
                    backgroundColor: Colors.blue(),
                }),
                new Container({
                    width: '48px',
                    height: '48px',
                    backgroundColor: Colors.blue(),
                })
            ]
        }),
    }),
});
