import { Text, Column, Colors, SizedBox, Image, Container } from "../src/elements";

export function Corpo() {
    return new Column({
        width: '53%',
        height: '800px',
        children: [
            new Text(
                'A proposta do site é proporcionar acesso à informações confiáveis de um grupo fechado, que tem como objetivo:',
                {
                    fontSize: '1.1rem',
                    fontWeight: 'bold'
                }
            ),
            new SizedBox({ height: '40px' }, ''),
            new Text(
                '● Amenizar a dor daqueles que necessitam;',
                {
                    fontSize: '1.1rem',
                    fontWeight: 'normal'
                }
            ),
            new SizedBox({ height: '10px' }, ''),
            new Text(
                '● Resgatar o poder da imaginação;',
                {
                    fontSize: '1.1rem',
                    fontWeight: 'normal'
                }
            ),
            new SizedBox({ height: '10px' }, ''),
            new Text(
                '● Fortalecer o vínculo familiar, fragilizado no momento das internações;',
                {
                    fontSize: '1.1rem',
                    fontWeight: 'normal'
                }
            ),
            new SizedBox({ height: '10px' }, ''),
            new Text(
                '● Introduzir a arte do Palhaço nos hospitais, Asilos e orfanatos.',
                {
                    fontSize: '1.1rem',
                    fontWeight: 'normal',

                }
            ),
            new SizedBox({ height: '30px', width: '53%' }, ''),
            new Container({
                alignItems:'center',
                height: 'auto',
                width: '100%',
                child: new Image({ src: './logo/logo_risos.jpg', width: '500px' }),
            }),

        ]
    });
}