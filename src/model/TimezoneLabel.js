import React from 'react';
import TimezoneMdl from './TimezoneMdl';
import ControllerComponent from './ControllerComponent';

class TimezoneLabel extends ControllerComponent {
    constructor(props) {
        super(props);
        this.models = [TimezoneMdl];
        this.state = this.getStateFromModels();
    }

    getStateFromModels() {
        return {timezone: TimezoneMdl.getTimezone()};
    }

    render() {
        console.log('render label');
        return <div>{this.state.timezone}</div>;
    }
}

export default TimezoneLabel;
