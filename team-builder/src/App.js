import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import data from "./Data";
import Form from "./component/Form";
import TeamList from "./component/TeamList";

function App() {
  const [teamMembers, setTeamMembers] = useState(data);
  const addNewMember = member => {
    setTeamMembers({ ...teamMembers, member });
  };
  return (
    <div className="App">
      <Form />
      <div>
        <TeamList members={teamMembers} />
      </div>
    </div>
  );
}

export default App;
