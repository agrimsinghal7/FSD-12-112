// Dom -> Document Object Model
import { EventEmitter } from "events";

class Domclass extends EventEmitter {
  addEventListener(eventName, callback) {
    this.on(eventName, callback);
  }
  removeEventListener(eventName, callback) {
    this.off(eventName, callback);
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

const button = new Domclass();
const handleclick = (event) => {
  console.log(`button clicked type:${event.type} at ${event.timespan}`);
};

button.addEventListener("click", handleclick);
button.dispatchEvent("click", {
  target: "submittedBtn",
});

button.removeEventListener("click", handleclick);
button.dispatchEvent("click", {
  target: "ResetBtn",
});
