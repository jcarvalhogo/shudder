import { Application } from "../src/core";

import { Center, Colors, Text, Container } from "../src/elements";

new Application({
    home: new Container({
        width: '300px',
        height: '300px',
        backgroundColor: Colors.blue(),
        child: new Container({
            width: '48px',
            height: '48px',
            backgroundColor: Colors.brown()
        }),
    })
});