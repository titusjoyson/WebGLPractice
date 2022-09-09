class EventBus {
    constructor() {
        this.event = {}
    }

    subscribe(eventName, callback) {
        if (!this.event[eventName]) {
            this.event[eventName] = [];
        }
        this.event[eventName].push(callback);
    }

    unSubscribe(eventName, callback) {
        if (!this.event[eventName]) return;
        this.event[eventName] = this.event[eventName].filter(cb => cb != callback);
    }

    dispatch(eventName, callback) {
        if (!this.event[eventName]) return
        this.event[eventName].forEach(cb => cb(callback));
    }
}

const eventBus = new EventBus();

export default eventBus;