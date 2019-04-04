import testRouter from "./lib/test/router";

const router = app => {
  app.use("/api/test", testRouter);
};

export default router;
