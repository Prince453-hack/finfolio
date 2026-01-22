import { Hono } from "hono";
import { handle } from "hono/vercel";
import accountsRouter from "./account";
import categoriesRouter from "./categories";
import transactionsRouter from "./transactions";
import summaryRouter from "./summary";

export const runtime = "edge";

const app = new Hono().basePath("/api");

const routes = app
  .route("/accounts", accountsRouter)
  .route("/categories", categoriesRouter)
  .route("/transactions", transactionsRouter)
  .route("/summary", summaryRouter);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);

export type AppType = typeof routes;
