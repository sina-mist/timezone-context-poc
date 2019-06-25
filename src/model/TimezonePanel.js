import React, { PureComponent } from "react";
import TimezoneToggle from "./TimezoneToggle";
import TimezoneLabel from "./TimezoneLabel";
import TimezoneStaticLabel from "./TimezoneStaticLabel";

class TimezonePanel extends PureComponent {
    render() {
        console.log('render panel');
        return (
            <div>
                <TimezoneToggle />
                <TimezoneLabel />
                <TimezoneStaticLabel />
            </div>
        );
    }
}

export default TimezonePanel;