import { Application } from '../src/core'
import { LinkStyle } from '../src/core/style-classes/LinkStyle';
import { Padding } from '../src/core/style-classes/Padding';
import { StyleClass } from '../src/core/style-classes/StyleClass';
import { Colors, Link, Text } from '../src/elements';

import { Home } from './home/Home';

new Application({
    staticDirectory: { dirName: __dirname, directory: ['shared/'] },
    home: Home(),
});









