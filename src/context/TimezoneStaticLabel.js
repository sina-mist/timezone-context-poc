import React, { PureComponent } from "react";
import TimezoneContext from './TimezoneContext';

class TimezoneStaticLabel extends PureComponent {
    render() {
        console.log('render static label');
        return <div>timezone</div>;
    }
}

TimezoneStaticLabel.contextType = TimezoneContext;

export default TimezoneStaticLabel;