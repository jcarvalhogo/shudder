import { text } from 'express';
import { Application, PageBasic, NavigationPage } from '../src/core'
import { Center, Colors, Column, Container, Link, Text } from '../src/elements'


import { Contato } from './Contato';
import { Produtos } from './Produtos';


new Application({
    staticDirectory: { dirName: __dirname, directory: ['shared/images'] },
    pages: [
        Contato(),
        Produtos(),
    ],
    home: new PageBasic({
        title: 'Page Basic',
        styleSheetName: 'home',
        child: new Center({
            width: '100%',
            height: '80px',
            backgroundColor: Colors.lime(),
            child: new Column({
                children: [
                    new Link({ target: '_self', href: '/contato', child: new Text('CONTATO'), }),
                    new Link({ target: '_self', href: '/produto', child: new Text('PRODUTO'), }),
                ]
            }),
        }),
    }),
});