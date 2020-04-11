import React from "react";
import "./App.css";
import Provider from "./provider";
import Context from "./context";

const Agents = () => {
  return <AgentOne />;
};

const AgentOne = () => {
  return <AgentTwo />;
};

const AgentTwo = () => {
  return <AgentBond />;
};

const AgentBond = () => {
  return (
    <div>
      <Context.Consumer>
        {(context) => (
          <div>
            <h3>Mission Information</h3>
            <p>Mission Name:{context.data.mname}</p>
            <p>Agent Name:{context.data.agent}</p>
            <p>Mission Status:{context.data.accept}</p>
            <button onClick={context.acceptMission}>Accept The Mission</button>
          </div>
        )}
      </Context.Consumer>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <h1>Context API</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  );
};

export default App;
