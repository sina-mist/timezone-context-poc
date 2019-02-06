import React, { PureComponent } from "react";
import TimezonePanel from "./TimezonePanel";
import TimezoneContext from './TimezoneContext';

class TimezoneApp extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {timezone: "Pacific"};
    }

    render() {
        console.log('render app: ' + this.state.timezone);
        let timezoneContextValue = {
            timezone: this.state.timezone,
            setTimezone: this.setTimezone,
        };
        return (
            <div>
                <TimezoneContext.Provider value={timezoneContextValue}>
                    <TimezonePanel/>
                </TimezoneContext.Provider>
            </div>
        );
    }

    setTimezone = (timezone) => {
        console.log('changing timezone');
        this.setState({timezone});
    }
}

export default TimezoneApp;