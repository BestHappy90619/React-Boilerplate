import { useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./Routes";
import { store } from "./redux-toolkit/store";

function App() {
  const pages = useRoutes(Routes);
  return <Provider store={store}>{pages}</Provider>;
}

export default App;
