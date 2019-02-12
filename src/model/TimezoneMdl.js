let timezone = 'Pacific';
let listeners = [];

function notify() {
    listeners.slice().forEach((listener) => {
        listener();
    });
}

export default {
    setTimezone(tz) {
        timezone = tz;
        notify();
    },
    getTimezone() {
        return timezone;
    },
    onChange(listener, contex) {
        listeners.push(listener);
    },
    offChange(listener) {
        let i = listeners.indexOf(listener);
        if (i >= 0) {
            listeners.splice(i, 1);
        }
    },
};
