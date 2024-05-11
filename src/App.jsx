import { Provider } from "react-redux";
import "./App.css";

import TalentFinder from "./components/TalentFinder";
import appStore from "./store/appStore";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <TalentFinder />
      </Provider>
    </>
  );
}

export default App;
