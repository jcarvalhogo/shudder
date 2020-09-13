import { Routes } from "./RoutesUri";

export interface StaticDirectory {
    directory: string[];
    dirName: string;
}

export interface ApplicationParams { port?: number; router?: Routes, home: string, staticDirectory?: StaticDirectory }

export interface PageBasicParams { title: string, child: string }
