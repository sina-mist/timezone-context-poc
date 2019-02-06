import React, { PureComponent } from "react";
import TimezoneContext from './TimezoneContext';

class TimezoneToggle extends PureComponent {
    render() {
        console.log('render toggle');
        return <TimezoneContext.Consumer>{this.renderWithTimezoneContext}</TimezoneContext.Consumer>
    }

    renderWithTimezoneContext(timezoneProps) {
        let {timezone, setTimezone} = timezoneProps;
        return (
            <button onClick={() =>setTimezone(timezone === "Pacific" ? "Eastern" : "Pacific")}>
                Toggle Timezone
            </button>
        );
    }
}

export default TimezoneToggle;