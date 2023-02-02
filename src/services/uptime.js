import axios from "axios";
import { setUptime } from "../redux/actions";
import { getDomains } from "../redux/selectors";

const checkUptime = async () => {
  for (const domain of getDomains()) {
    const url = `https://uptime-checker.com/status?domain=${domain}`;
    const response = await axios.get(url);
    // {"domain":"foo.com","lastChecked":1675279964318,"latency":143,"status":"OK","httpStatusCode":200}

    setUptime(response.data);
  }
};

export default () => {
  checkUptime();

  setInterval(checkUptime, 5000);
};
