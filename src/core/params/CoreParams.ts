import { Routes } from "../RoutesUri";
import { elementype } from "../resolvers/CoreResolvers";


export interface StaticDirectory {
    directory: string[];
    dirName: string;
}

export interface ApplicationParams { port?: number; router?: Routes, home: elementype, staticDirectory?: StaticDirectory }

export interface PageBasicParams { title: string, child: elementype }
