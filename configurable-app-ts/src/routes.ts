import { Express } from "express";
import { handleRootRequest } from "./controllers/app.controller";

export default (app : Express) => {
    app.get("/", handleRootRequest);
}