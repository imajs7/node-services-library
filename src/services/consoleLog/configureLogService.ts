// configureLogService.ts

import { appConfig } from "../../config";

interface LogServiceConfig {
  allowedEnvironments: string[];
}

const configureLogService = (config: LogServiceConfig) => {
  const defaultConfig = appConfig.logServiceConfig.allowedEnvironments;
  appConfig.logServiceConfig = { ...defaultConfig, ...config };
};

export { configureLogService };
