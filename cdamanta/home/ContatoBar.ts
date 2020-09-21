import { Colors, Row, SizedBox, Text, Image, Container } from "../../src/elements";


function Whatsapp() {
    return new Row({
        width: '170px',
        height: '34px',
        alignItems: 'center',
        children: [
            new Image({
                src: 'icons/whatsapp.svg',
                width: '34'
            }),
            new SizedBox({ width: '7px' },),
            new Text('87 99641-9386', { fontSize: '1rem', color: '#ffffff' }),
        ]
    });
}

function Message() {
    return new Row({
        width: '160px',
        height: '34px',
        alignItems: 'center',
        children: [
            new Image({
                src: 'icons/telefone.svg',
                width: '32'
            }),
            new SizedBox({ width: '7px' },),
            new Text('87 98848-3467', { fontSize: '1rem', color: '#ffffff' }),
        ]
    });
}

function Email() {
    return new Row({
        width: '240px',
        height: '34px',
        alignItems: 'center',
        children: [
            new Image({
                src: 'icons/email.svg',
                width: '32'
            }),
            new SizedBox({ width: '7px' },),
            new Text('vendas@cdamanta.com.br', { fontSize: '1rem', color: '#ffffff' }),
        ]
    });
}

export function ContatoBar() {
    return new Container({
        width: '100%',
        height: '48px',
        backgroundColor: 'rgb(25,66,33,0.45)',
        alignContent: 'center',
        alignItems: 'center',
        child: new Row({
            width: '80%',
            height: '42px',
            alignItems: 'center',
            alignContent: 'space-between',
            children: [
                new Row({// container cmom todos os contatos
                    width: '570px',
                    height: '32px',
                    children: [
                        Whatsapp(),
                        Message(),
                        Email()
                    ]
                }),
                new Text('LOJA ONLINE', { color: Colors.deepOrange(), fontSize: '1.2rem' }),
            ]
        }),
    });
}
