import { NavigationPage } from "../src/core/NavigationPage";
import { Colors, Column, Link, Text } from "../src/elements";

export function Contato(): NavigationPage {
    return new NavigationPage({
        child: new Column({
            width: '100%',
            height: '200px',
            backgroundColor: Colors.pink(),
            alignItems: 'center',
            children: [
                new Text('Pagina contato', { color: '#FFFFFF', fontSize: '2rem' }),
                new Link({ child: new Text('HOME'), href: '/' }),
                new Link({ child: new Text('PRODUTO'), href: '/produto' }),
            ]
        }),
        path: '/contato',
        title: 'Contato'
    });
}