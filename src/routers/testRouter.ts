import { Router } from "express";
import testController from "../controllers/testController.js";
import { ensureAuthenticatedMiddleware } from "../middlewares/ensureAuthenticatedMiddleware.js";

const testRouter = Router();

testRouter.get("/tests", ensureAuthenticatedMiddleware, testController.find);
testRouter.post("/tests", ensureAuthenticatedMiddleware, testController.add);
testRouter.patch(
  "/tests/:id",
  ensureAuthenticatedMiddleware,
  testController.updateViews
);

export default testRouter;
