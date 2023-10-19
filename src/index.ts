import * as logService from "./services/consoleLog";
import * as auditTrail from "./services/auditTrail";
import * as EventProvider from "./services/events/eventService";
import * as dateService from "./services/timeService/getFormattedDate";
import * as timeService from "./services/timeService/getTimeGap";
import * as caseTransformer from "./services/caseTransformer/case-transformer";
import * as storage from "./services/storage";

export {
  logService,
  auditTrail,
  EventProvider,
  dateService,
  timeService,
  caseTransformer,
  storage,
};
