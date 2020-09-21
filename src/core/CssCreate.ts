import fs from 'fs';
import { attributes, ClassCss } from './params/CoreParams';
import { PageStyle } from './params/PageStyle';

function generateClass(classCss: Map<string, ClassCss>) {
    let cssFile = ''
    classCss.forEach(nclass => {
        cssFile += `${nclass.name}{${nclass.atributos}}\n`
    });
    return cssFile;
}

export async function CreateCssStyleApp(): Promise<boolean> {
    try {
        fs.writeFileSync(__dirname + `/shared/css/${PageStyle.styleName}.css`, generateClass(PageStyle.cssClass));
        return true;
    } catch (err) {
        console.log('Error: ', err);
    }
    return false;
}

export async function DeletAllCssStyle(): Promise<boolean> {
    try {
        fs.readdir(__dirname + '/shared/css/', (err, files) => {
            console.log('Error delete file: ', err);
            files.forEach(f => fs.unlinkSync(f));
        });
        return true;
    } catch (err) {
        console.log('Error: ', err);
    }
    return false;
}

