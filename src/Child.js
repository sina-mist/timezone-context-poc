import React, { Component } from "react";
import { TimezoneContext } from "./App";

class Child extends Component {
  render() {
    return (
      <TimezoneContext.Consumer>
        {ctx => (
          <div>
            <h1>Timezone - {ctx.timezone}</h1>
            <button
              onClick={() =>
                ctx.setTimezone(
                  ctx.timezone === "Pacific" ? "Eastern" : "Pacific"
                )
              }
            >
              Toggle Timezone
            </button>
          </div>
        )}
      </TimezoneContext.Consumer>
    );
  }
}

Child.contextType = TimezoneContext;

export default Child;
