# Node Services Library

Simple services useful for any nodejs projects.

## Table of Contents

- [Installation](#installation)

## Installation

Describe how to install your library using npm or yarn:

```bash
npm install @merncloud/node-services-library
# or
yarn add @merncloud/node-services-library

```

### Configuring Logger for Any Environment

To configure the logger for specific environments using your package, follow these steps:

1. Import the `configureLogService` function from your package by including the following code in your application:

   ```javascript
   import { configureLogService } from "@merncloud/node-services-library";

   configureLogService({
     allowedEnvironments: ["development", "test", "staging"],
   });
   ```

### Logging with `logService.log`

To log messages using the `logService.log` method from your package, follow these steps:

1. Import the `logService` object from your package by including the following code in your application:

   ```javascript
   import { logService } from "@merncloud/node-services-library";

   logService.logger.log("This is a log message.");
   logService.logger.log("Yourmessage", data);
   logService.logger.error("Something");
   logService.logger.info("Something");
   logService.logger.table(data);
   ```

For support, please email [anurag.jscript@gmail.com](mailto:anurag.jscript@gmail.com)
