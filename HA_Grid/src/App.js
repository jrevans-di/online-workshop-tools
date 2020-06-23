import React, { useState, useCallback } from "react";
import Header from "./components/Header.jsx";
import Workspace from "./components/Workspace.jsx";
import { CustomDragLayer } from "./components/CustomDragLayer.jsx";

function App() {
  const scenarioData = [
    {
      title: "New boiler selection by private company",
      description:
        "Provide data to a private company who will select a new ideal boiler for your home, but they will also use this data to inform the selection of new boilers for people that live in your local area. They will not use the data for any other purpose or share it outside the company.",
    },
    {
      title: "University research project on income and well-being",
      description:
        "To feed into a new university led research project studying how income levels affect health and wellbeing. This data will not be shared outside the research team but findings will feed into government policy and research publications.",
    },
  ];

  const [scenarioIndex, setScenarioIndex] = useState(0);

  const incrementScenario = useCallback(() => {
    setScenarioIndex((scenarioIndex + 1) % scenarioData.length);
  }, [scenarioIndex, scenarioData.length]);

  const decrementScenario = useCallback(() => {
    setScenarioIndex(
      scenarioIndex - 1 <= -1 ? scenarioData.length - 1 : scenarioIndex - 1
    );
  }, [scenarioIndex, scenarioData.length]);

  return (
    <div className="app">
      <div className="inner-app">
        <Header
          scenarioIndex={scenarioIndex}
          scenario={scenarioData[scenarioIndex]}
          incrementScenario={incrementScenario}
          decrementScenario={decrementScenario}
        />
        <Workspace />
        <CustomDragLayer />
      </div>
    </div>
  );
}

export default App;
