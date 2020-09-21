import { Border, LinkStyle, Padding, StyleClass } from "../../src/styles";
import { Colors, Container, EdgeInsets, Row, Image, Text, Link, SizedBox, Center } from "../../src/elements";

function LogoMarca() {
    return new Row({
        height: '90px',
        width: '330px',
        alignItems: 'center',
        children: [
            new Image({ src: 'icons/logo.svg', width: '64' }),
            new Container({
                margin: new EdgeInsets().symmetric({ horizontal: '10px', vertical: '0px' }),
                height: '90px',
                width: '240px',
                alignItems: 'flex-start',
                alignContent: 'flex-end',
                child: new Text('Cdamanta', { color: '#FC3809', fontSize: '3rem' }),
            }),
        ]
    })
}

function LinksNave(st: LinkStyle, stbtn: LinkStyle) {
    let fontsize = '1.3rem';
    return new Row({
        width: '700px',
        height: '80px',
        alignItems: 'center',
        alignContent: 'space-between',
        children: [
            new Link({
                linkStyle: st,
                child: new Text('Home', { fontSize: fontsize, color: '#fff' }),
            }),
            new Link({
                linkStyle: st,
                child: new Text('Noticias', { fontSize: fontsize, color: '#fff' }),
            }),
            new Link({
                linkStyle: st,
                child: new Text('Projetos', { fontSize: fontsize, color: '#fff' }),
            }),
            new Link({
                linkStyle: st,
                child: new Text('Serviços', { fontSize: fontsize, color: '#fff' }),
            }),
            new Link({
                linkStyle: st,
                child: new Text('Contato', { fontSize: fontsize, color: '#fff' }),
            }),
            new Link({
                linkStyle: stbtn,
                child: new Text('Fale conosco', { fontSize: fontsize, color: '#fff' }),
            }),
        ]
    });
}

export function NavBar() {
    let hoverLink = new StyleClass({ border: new Border({ position: 'border-bottom', color: '#003817', size: 2, style: 'solid' }) });
    let styleLink = new StyleClass({ padding: new Padding().symmetric({ horizontal: 20, vertical: 14 }) });
    let hoverLinkACT = new StyleClass({ backgroundColor: 'rgba(252, 56, 9, 0.5)' });
    let st = new LinkStyle({ className: 'link_nave', style: styleLink, hover: hoverLink, active: hoverLinkACT });

    let hoverLinkBTN = new StyleClass({ backgroundColor: 'rgba(252, 56, 9, 0.5)' });
    let styleLinkBTN = new StyleClass({ backgroundColor: '#FC3809', padding: new Padding().symmetric({ horizontal: 20, vertical: 14 }) });
    let stbtn = new LinkStyle({ className: 'link_nave_btn', style: styleLinkBTN, hover: hoverLinkBTN });


    return new Container({
        width: '100%',
        height: '112px',
        padding: new EdgeInsets().symmetric({ horizontal: '10%', vertical: '0px' }),
        backgroundColor: 'rgb(25,66,33,0.45)',
        child: new Row({
            width: '80%',
            height: '112px',
            alignItems: 'center',
            alignContent: 'space-between',
            children: [
                LogoMarca(),
                LinksNave(st, stbtn)
            ],
        }),
    });
}