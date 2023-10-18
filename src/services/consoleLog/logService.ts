import { appConfig } from "../../config";

const logger = {
  log: (message: any, ...args: any) => {
    if (debugEnabled()) {
      console.log(`%c${message}`, "color: green; background: yellow", ...args);
    }
  },
  error: (message: any, ...args: any) => {
    if (debugEnabled()) {
      console.error(`%c${message}`, "color: red; background: yellow", ...args);
    }
  },
  warn: (message: any, ...args: any) => {
    if (debugEnabled()) {
      console.warn(
        `%c${message}`,
        "color: orange; background: yellow",
        ...args
      );
    }
  },

  table: (message: any, ...args: any) => {
    if (debugEnabled()) {
      console.table(message, ...args);
    }
  },
};

const debugEnabled = () => {
  const { allowedEnvironments } = appConfig.logServiceConfig;
  return allowedEnvironments.includes(appConfig.env);
};

export { logger };
