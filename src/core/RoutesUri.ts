import { Request, Response } from "express";

export interface RouterPath {
    handle: (req?: Request) => any;
    path: string;
}

export interface Routes {
    router: RouterPath[];
}