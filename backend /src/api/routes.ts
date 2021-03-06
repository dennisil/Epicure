import { Request, Response, Router } from "express";
import V1Routes from "./v1/v1.routes";
import express from "express";
import path from "path";

class ApiRoutes {
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    const v1Routes = new V1Routes();

    this.router.use("/v1/", v1Routes.router);

    if (process.env.NODE_ENV != "production") {
      this.router.use(
        "/docs/",
        express.static(path.resolve(__dirname, "../../webApidoc"))
      );
    }
  }
}

export default ApiRoutes;
