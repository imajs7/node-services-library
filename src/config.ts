export const appConfig = {
  port: process.env.PORT || 1999,
  hostname: process.env.HOSTNAME || "localhost",
  env: process.env.NODE_ENV || process.env.REACT_APP_NODE_ENV || "dev",
};
