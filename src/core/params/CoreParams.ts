import { Routes } from "../RoutesUri";
import { elementype } from "../resolvers/CoreResolvers";
import { NavigationPage } from "core/NavigationPage";


export interface StaticDirectory {
    directory: string[];
    dirName: string;
}

export interface ApplicationParams { port?: number, home: elementype, staticDirectory?: StaticDirectory, pages?: NavigationPage[] }

export interface PageBasicParams { title: string, child: elementype, styleSheetName: string, bodyInit?: string }

export interface NavigationParams extends PageBasicParams {
    path: string,
}

export interface attributes {
    name: string;
    values: string;
}

export interface ClassCss {
    name: string,
    atributos: string,
}

