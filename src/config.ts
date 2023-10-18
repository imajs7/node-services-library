export const appConfig = {
  env: process.env.NODE_ENV || process.env.REACT_APP_NODE_ENV || "",

  logServiceConfig: {
    allowedEnvironments: ["development", "dev", "test"],
  },
};
