import { ClassCss } from 'core/params/CoreParams';
import { CreateCssStyleApp } from './core/CssCreate'

let c1: ClassCss = { name: '.class_1', atributos: [{ name: 'padding', values: '0px' }] };
let c2: ClassCss = { name: '.class_2', atributos: [{ name: 'margin', values: '0px' }] };
let c3: ClassCss = { name: '.class_3', atributos: [{ name: 'border', values: '0px' }] };

CreateCssStyleApp([c1, c2, c3], 'App');
