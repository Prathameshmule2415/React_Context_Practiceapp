import React, { useState } from "react";

import ContextPackage from "./context";

const Provider = (props) => {
  const [mission, setMission] = useState({
    mname: "Go TO Russia",
    agent: "007",
    accept: "Not Accepted",
  });
  return (
    <ContextPackage.Provider
      value={{
        data: mission,
        acceptMission: () => {
          setMission({ ...mission, accept: "ACCEPTED" });
        },
      }}
    >
      {props.children}
    </ContextPackage.Provider>
  );
};

export default Provider;
