import { Request, Response } from "express";

export const handleRootRequest = (request: Request, response: Response) => {
    response.send({ gagagaga: 1 });
}