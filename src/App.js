import React, { Component } from "react";
import Child from "./Child";
import ChildB from "./ChildB";
import "./App.css";

export const TimezoneContext = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.setTimezone = tz => {
      // update moment
      // moment().tz(tz)

      // trigger re-render of context consumers
      this.setState(prevState => ({
        timezoneContext: {
          ...prevState.timezoneContext,
          timezone: tz
        }
      }));
    };

    // we hold the context in state in order to avoid a gotcha where
    // all context consumers re-render whenever this App component re-renders
    // because React does a reference check on the `value` we pass to the provider
    // and if we were to inline an object in `value` it would create a new reference
    // whenever App re-renders.
    this.state = {
      timezoneContext: {
        timezone: "Pacific",
        setTimezone: this.setTimezone
      }
    };
  }

  render() {
    return (
      <div className="App">
        <TimezoneContext.Provider value={this.state.timezoneContext}>
          <Child />
          <ChildB />
        </TimezoneContext.Provider>
      </div>
    );
  }
}

export default App;
