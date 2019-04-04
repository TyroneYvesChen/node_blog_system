import express from "express";
import path from "path";
import db from "./middleware/db";
// import appRouter from './router'
import { PORT } from "./config";
import bodyParser from "body-parser";

const app = express();
const connection = db.connection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all("/*", (req, res, next) => {
  // console.log(req.headers);
  res.setHeader(
    "Access-Control-Allow-Origin",
    req.headers && req.headers.origin ? req.headers.origin : "*"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  console.log("卧槽！插入了！");
  if (req.method === "OPTIONS") {
    res.send(200);
  } else {
    next();
  }
});

app.use(express.static(path.join(__dirname, "public")));

// appRouter(app);

app.use("/ceshi", (req, res) => {
  console.log("ceshi");
  db.query(connection, "select * from account", [], data => {
    console.log(data);
    res.json({
      result: data
    });
  });
});

app.use(function(req, res, next) {
  res.status(404).send("Sorry can't find that!");
});
app.listen(PORT, () => {
  console.log(`服务器已启动 端口号 [${PORT}]`);
});
