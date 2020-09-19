import { NavigationPage } from "../src/core/NavigationPage";
import { Colors, Column, Link, Text } from "../src/elements";

export function Produtos(): NavigationPage {
    return new NavigationPage({
        styleSheetName: 'produto',
        child: new Column({
            width: '100%',
            height: '200px',
            backgroundColor: Colors.pink(),
            alignItems: 'center',
            children: [
                new Text('Pagina Produtos', { color: '#FFFFFF', fontSize: '2rem' }),
                new Link({ child: new Text('HOME'), href: '/' }),
                new Link({ child: new Text('CONTATO'), href: '/contato' }),
            ]
        }),
        path: '/produto',
        title: 'Produto'
    });
}