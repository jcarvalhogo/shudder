import { Application } from "../src/core";

import { Center, Colors } from "../src/elements";

new Application({
    home: new Center({
        width: '300px',
        height: '300px',
        backgroundColor: Colors.blue(),
    }).createElement(),
});