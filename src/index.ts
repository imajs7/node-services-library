import * as logService from "./services/consoleLog";
import * as auditTrail from "./services/auditTrail";
import * as EventProvider from "./services/events/eventService";
import * as dateTimeService from "./services/timeService";
import * as caseTransformer from "./services/caseTransformer/case-transformer";
import * as storage from "./services/storage";

export {
  logService,
  auditTrail,
  EventProvider,
  dateTimeService,
  caseTransformer,
  storage,
};
