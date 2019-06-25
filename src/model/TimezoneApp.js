import React, { PureComponent } from "react";
import TimezonePanel from "./TimezonePanel";

class TimezoneApp extends PureComponent {
    render() {
        console.log('render app');
        return (
            <div>
                <TimezonePanel/>
            </div>
        );
    }
}

export default TimezoneApp;