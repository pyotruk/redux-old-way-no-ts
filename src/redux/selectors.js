import store from "./store";

export const getUptimes = state => state.uptimes;

export const getUptimeByDomain = (state, domain) => state.uptimes[domain];

export const getLastCheckedByDomain = (state, domain) =>
  state.uptimes[domain].lastChecked;

export const getLatencyByDomain = (state, domain) =>
  state.uptimes[domain].latency;

export const getStatusByDomain = (state, domain) =>
  state.uptimes[domain].status ? "OK" : "FAILED";

export const getDomains = (state = store.getState()) => Object.keys(state.uptimes);
