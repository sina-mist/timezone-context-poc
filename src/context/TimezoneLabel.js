import React, { PureComponent } from "react";
import TimezoneContext from './TimezoneContext';

class TimezoneLabel extends PureComponent {
    render() {
        console.log('render label');
        return <div>{this.context.timezone}</div>;
    }
}

TimezoneLabel.contextType = TimezoneContext;

export default TimezoneLabel;