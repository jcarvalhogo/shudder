import { Row, Colors, Image, SizedBox } from "../src/elements";

export function NavBar() {
    return new Row({
        width: '100%',
        height: '100px',
        backgroundColor: Colors.cyan(100),
        alignContent: 'center',
        alignItems: 'center',
        children: [
            new Image({
                src: './logo/logo.png'
            }),
            new SizedBox({ width: '60%', height: '100px' }, ''),
            new Row({
                width: 'auto',
                height: 'auto',
                children: [
                    new Image({
                        src: './logo/facebook.png'
                    }),
                    new Image({
                        src: './logo/instagram-new.png'
                    }),
                    new Image({
                        src: './logo/twitter-circled.png'
                    }),
                ]
            }),
        ]
    });
}