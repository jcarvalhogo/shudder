import { Row, Colors, Text, Column, SizedBox, Container } from "../src/elements";

export function Menus() {
    return new Column({
        width: '100%',
        alignItems: 'center',
        height: 'auto',
        children: [
            new SizedBox({ height: '10px' }, ''),
            new Row({
                width: '50%',
                height: '80px',
                alignItems: 'center',
                children: [
                    new SizedBox({ width: '15px' }, ''),
                    new Text('HOME', { color: Colors.gray(), fontSize: '1rem' }),
                    new SizedBox({ width: '15px' }, ''),
                    new Text('QUEM SOMOS', { color: Colors.gray(), fontSize: '1rem' }),
                    new SizedBox({ width: '15px' }, ''),
                    new Text('GALERIA', { color: Colors.gray(), fontSize: '1rem' }),
                ]
            }),
            new Container({
                width: '50%',
                height: '2px',
                backgroundColor: Colors.gray()
            }),
        ]
    });
}