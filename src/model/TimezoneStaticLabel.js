import React from 'react';
import TimezoneMdl from './TimezoneMdl';
import ControllerComponent from './ControllerComponent';

class TimezoneStaticLabel extends ControllerComponent {
    constructor(props) {
        super(props);
        this.models = [TimezoneMdl];
        this.state = this.getStateFromModels();
    }

    getStateFromModels() {
        return {timezone: TimezoneMdl.getTimezone()};
    }

    render() {
        console.log('render static label');
        return <div>timezone</div>;
    }
}

export default TimezoneStaticLabel;
