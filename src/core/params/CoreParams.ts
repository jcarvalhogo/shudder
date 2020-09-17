import { Routes } from "../RoutesUri";
import { elementype } from "../resolvers/CoreResolvers";
import { NavigationPage } from "core/NavigationPage";


export interface StaticDirectory {
    directory: string[];
    dirName: string;
}

export interface ApplicationParams { port?: number, home: elementype, staticDirectory?: StaticDirectory, pages?: NavigationPage[] }

export interface PageBasicParams { title: string, child: elementype }

export interface NavigationParams extends PageBasicParams {
    path: string,
}
