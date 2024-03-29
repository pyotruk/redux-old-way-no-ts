import { map } from "lodash";
import React from "react";
import { connect } from "react-redux";

import ServerStatus from "./components/ServerStatus";
import AddDomainForm from "./components/AddDomainForm";
import startUptimeCheckInterval from "./services/uptime";
import { getUptimes } from "./redux/selectors";

import "./style.css";

startUptimeCheckInterval();

function App({ uptimes }) {
  return (
    <div className="container">
      <h1>Uptime Monitor</h1>

      <div className="columns">
        <div>Domain</div>
        <div>Last Checked</div>
        <div>Latency</div>
        <div>Status</div>
      </div>

      {map(uptimes, ({ domain }) => (
        <ServerStatus key={domain} domain={domain} />
      ))}

      <AddDomainForm />
    </div>
  );
}

const enhance = connect(
  state => ({
    uptimes: getUptimes(state)
  }),
  dispatch => ({})
);

export default enhance(App);
