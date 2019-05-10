// 环境变量
export const NODE_ENV: string = "development";

// 端口号
export const PORT: number = 8888;

interface MYSQL_CONFIG_OPTIONS {
  host: string;
  user: string;
  password: string;
  port: string;
  database: string;
}

// 端口号
export const MYSQL_CONFIG: object = {
  host: "localhost",
  user: "root",
  password: "88888888",
  port: "3306",
  database: "ty"
} as MYSQL_CONFIG_OPTIONS;
