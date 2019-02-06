export default function(initialState = {}) {
    let listeners = [];

    function notify() {
        listeners.slice().forEach((listener) => {
            listener.fn.apply(listener.context);
        });
    }

    return {
        state: initialState,
        update(updates = {}) {
            Object.assign(this.state, updates);
            notify();
        },
        reset(newState = {}) {
            this.state = newState;
            notify();
        },
        onChange(listener, context) {
            listeners.push({
                fn: listener,
                context: context || this,
            });
        },
        offChange(listener) {
            for (let i = 0; i < listeners.length; i++) {
                if (listeners[i].fn === listener) {
                    listeners.splice(i, 1);
                    break;
                }
            }
        },
    };
}