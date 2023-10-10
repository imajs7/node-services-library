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
};

const debugEnabled = () => {
  const debug =
    process.env.REACT_APP_NODE_ENV === "development" ||
    process.env.REACT_APP_NODE_ENV === "dev" ||
    process.env.REACT_APP_NODE_ENV === "test";
  return debug;
};

export { logService };
