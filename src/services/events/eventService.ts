// eventService.ts

export interface EventLogItem {
  eventId: string;
  type: string;
  consumed: boolean;
  data: any;
}

type EventListener = (event: EventLogItem) => void;

export class EventService {
  private static instance: EventService | null = null;
  private eventLog: EventLogItem[] = [];
  private maxSize: number;
  private eventListeners: EventListener[] = [];

  private constructor(maxSize: number = 100) {
    this.maxSize = maxSize;
  }

  public static getInstance(maxSize: number = 100): EventService {
    if (!EventService.instance) {
      EventService.instance = new EventService(maxSize);
    }
    return EventService.instance;
  }

  logEvent(eventId: string, type: string, data: any) {
    const newEvent: EventLogItem = {
      eventId,
      type,
      data,
      consumed: false,
    };

    this.eventLog.push(newEvent);

    if (this.eventLog.length > this.maxSize) {
      this.eventLog.shift(); // Remove the oldest event if the log exceeds the maxSize
    }

    // Notify listeners that a new event has been emitted
    this.notifyListeners(newEvent);
  }

  markEventConsumed(eventId: string) {
    this.eventLog = this.eventLog.filter((event) => event.eventId !== eventId);
  }

  getEventLog(): EventLogItem[] {
    return this.eventLog;
  }

  // Add an event listener to be notified when events are emitted
  addEventListener(listener: EventListener) {
    this.eventListeners.push(listener);
  }

  // Remove an event listener
  removeEventListener(listener: EventListener) {
    this.eventListeners = this.eventListeners.filter((l) => l !== listener);
  }

  // Notify all registered listeners about the emitted event
  private notifyListeners(event: EventLogItem) {
    this.eventListeners.forEach((listener) => {
      listener(event);
    });
  }
}
