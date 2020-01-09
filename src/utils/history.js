import { createBrowserHistory } from "history";
import { configuration } from "../constants";
const { APP_URL } = configuration;
/**
 * Create browser history
 */
export const history = createBrowserHistory({
  basename: APP_URL
});
