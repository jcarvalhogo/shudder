import { Application } from '../src/core'
import { Home } from './home/Home';


new Application({
    staticDirectory: { dirName: __dirname, directory: ['shared/images', 'shared/icons'] },
    home: Home(),
});