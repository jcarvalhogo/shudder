import { type } from "os"

import {
    Colors,
    Center,
    Column,
    Text,
    Container,
    Image,
    Row,
    SizedBox,
    ContainerImage
} from '../../elements/params/exports'

import { PageBasic } from '../PageBasic';

export type elementype = Center | Column | Text | Container | Image | SizedBox | Container | PageBasic | ContainerImage;

export function resolverPage(home: elementype): string {
    return home.createElement();
}
