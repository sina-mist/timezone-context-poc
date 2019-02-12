import React, {PureComponent} from 'react';
import TimezoneContext from './TimezoneContext';

class TimezoneToggle extends PureComponent {
    render() {
        console.log('render toggle');
        let {timezone, setTimezone} = this.context;
        return (
            <button onClick={() => setTimezone(timezone === 'Pacific' ? 'Eastern' : 'Pacific')}>Toggle Timezone</button>
        );
    }
}

TimezoneToggle.contextType = TimezoneContext;

export default TimezoneToggle;
