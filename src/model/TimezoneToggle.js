import React, { PureComponent } from "react";
import TimezoneMdl from './TimezoneMdl';

class TimezoneToggle extends PureComponent {
    render() {
        console.log('render toggle');
        return (
            <button onClick={this.updateTimezone}>
                Toggle Timezone
            </button>
        );
    }

    updateTimezone = () => {
        TimezoneMdl.update({
            timezone: TimezoneMdl.state.timezone === "Pacific" ? "Eastern" : "Pacific"
        });
    }
}

export default TimezoneToggle;