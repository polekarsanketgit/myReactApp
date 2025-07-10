import React, { createContext, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import NavBar from "./NavCom";
import Home from "./componants/HomeComp";
import TicTac from "./componants/TicTacComp";
import CustomeHook from "./componants/CustomeHookComp";
import Counter from "./componants/UseReducerComp";
import UseEffect from "./componants/UseEffectComp";
import UseRef from "./componants/UseRefComp";
import UseMemoCom from "./componants/UseMemoCom";
import ErrorBoundary from "./utils/ErrorBoundary";
import ReduxToolKitComp from "./componants/ReduxToolKitComp";
import ToDoComp from "./componants/ToDo";
import Poll from "./componants/Poll";
import InputBox from "./componants/InputBox";

const UseContextComp = React.lazy(() => import("./componants/CompA"));

const NameContext = createContext();

function App() {
  const [text, setText] = React.useState("");

  const contextDataObj = {
    name: "Sanket",
  };
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<div>Lazy Loading is working please wait ...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TicTac" element={<TicTac />} />
          <Route path="/CustomeHook" element={<CustomeHook />} />
          <Route path="/UseReducer" element={<Counter />} />
          <Route path="/UseEffect" element={<UseEffect />} />
          <Route path="/UseRef" element={<UseRef />} />
          <Route path="/UseMemo" element={<UseMemoCom />} />
          <Route
            path="/UseContext"
            element={
              <ErrorBoundary>
                <NameContext.Provider value={contextDataObj}>
                  <UseContextComp />
                </NameContext.Provider>
              </ErrorBoundary>
            }
          />
          <Route path="/ReduxToolKit" element={<ReduxToolKitComp />} />
          <Route path="/ToDoComp" element={<ToDoComp />} />
          <Route path="/Poll" element={<Poll />} />
          <Route
            path="/InputBox"
            element={<InputBox text={text} setText={setText} />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
export { NameContext };
