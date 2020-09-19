import { PageBasic } from "../../src/core";
import { Column, Container, ContainerImage, Row, SizedBox, Text } from "../../src/elements";
import { ContatoBar } from "./ContatoBar";
import { NavBar } from "./NavBar";

export function Home() {
    return new PageBasic({
        title: 'Home',
        styleSheetName: 'homepage',
        child: new Column({
            width: '100%',
            height: '1000px',
            children: [
                new ContainerImage({ //container banner
                    width: '100%',
                    height: '720px',
                    backgroundColor: '#cccccc',
                    child: new Column({
                        width: '100%',
                        height: '200px',
                        children: [
                            new SizedBox({ width: '10%' }),
                            ContatoBar(), // cotatos no topo da pagina
                            new Container({ width: '100%', height: '2px', backgroundColor: '#003817' }),
                            NavBar(),
                        ],
                    }),
                }, {
                    image: 'fundo.png',
                    position: 'center',
                    size: 'cover',
                    repeat: 'no-repeat'
                }),
            ]
        }),
    });
}