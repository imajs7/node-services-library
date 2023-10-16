import { appConfig } from "../../config";

const logService = {
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
  const debug =
    appConfig.env === "development" ||
    appConfig.env === "dev" ||
    appConfig.env === "test";
  return debug;
};

export { logService };
