import React from "react";
import { TimezoneContext } from "./App";

class NestedChild extends React.PureComponent {
  render() {
    // even though we don't care about reading the value of context
    // since we have it stored in moment, we still need to use the Consumer
    // render-prop in order for this component to re-render on context changes.

    // this is a bit of extra ceremony that would add more friction to the migration. :(
    return (
      <TimezoneContext.Consumer>
        {ctx => <h2>Nested Child - {ctx.timezone}</h2>}
      </TimezoneContext.Consumer>
    );
  }
}
NestedChild.contextType = TimezoneContext;

class ChildB extends React.PureComponent {
  render() {
    return <NestedChild />;
  }
}

export default ChildB;
