// Dom -> Document Object Model
import { EventEmitter } from "events";

class Domclass extends EventEmitter {
  addEventEmitter(eventName, callback) {
    this.on(eventName, callback);
  }
  removeaddlistener(eventName, callback) {
    this.off(eventNamw, callback);
  }
  dispatchEvent(eventName, eventData = {}) {
    const event = {
      type: eventName,
      timespan: new Date(),
      ...eventData,
    };
    this.emit(eventName, event);
  }
}
