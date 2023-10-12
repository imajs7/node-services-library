import { logService } from "./services/consoleLog/logService";
import { getObjectChanges } from "./services/auditTrail/getObjectChanges";
import { EventService } from "./services/events/eventService";
import { getFormattedDate } from "./services/timeService/getFormattedDate";
import { getTimeGap } from "./services/timeService/getTimeGap";

export {
  logService,
  getObjectChanges,
  EventService,
  getFormattedDate,
  getTimeGap,
};
