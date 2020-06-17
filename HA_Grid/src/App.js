import React, { useState, useCallback } from 'react'
import Navigation from "./components/Navigation.jsx"
import Workspace from "./components/Workspace.jsx"
import {CustomDragLayer} from "./components/CustomDragLayer.jsx"

function App() {

  const [snapToGridAfterDrop, setSnapToGridAfterDrop] = useState(false)
  const [snapToGridWhileDragging, setSnapToGridWhileDragging] = useState(false)

  const handleSnapToGridAfterDropChange = useCallback(() => {
    setSnapToGridAfterDrop(!snapToGridAfterDrop)
  }, [snapToGridAfterDrop])

  const handleSnapToGridWhileDraggingChange = useCallback(() => {
    setSnapToGridWhileDragging(!snapToGridWhileDragging)
  }, [snapToGridWhileDragging])

  return (
    <div className="app">
      <div className="inner-app">
        <Navigation />
        <Workspace snapToGrid={snapToGridAfterDrop}/>
        <CustomDragLayer snapToGrid={snapToGridWhileDragging} />
      </div>
    </div>
  );

}

export default App;
