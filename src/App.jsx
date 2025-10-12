import { useState } from 'react'
import './App.css'
import CorePrinciples from './CorePrinciples'
import Equipment from './Equipment'
import Actions from './Actions'
import Weapons from './Weapons'
import Terrain from './Terrain'

function App() {
  const [visible_CorePrinciples, setVisible_CorePrinciples] = useState(false);
  const [visible_Equipment, setVisible_Equipment] = useState(false);
  const [visible_Actions, setVisible_Actions] = useState(false);
  const [visible_Weapons, setVisible_Weapons] = useState(false);
  const [visible_Terrain, setVisible_Terrain] = useState(false);

  const toggleCorePrinciples = () => {
    setVisible_CorePrinciples(!visible_CorePrinciples);
  };

  const toggleEquipment = () => {
    setVisible_Equipment(!visible_Equipment);
  };

  const toggleActions = () => {
    setVisible_Actions(!visible_Actions);
  };

  const toggleWeapons = () => {
    setVisible_Weapons(!visible_Weapons);
  };

  const toggleTerrain = () => {
    setVisible_Terrain(!visible_Terrain);
  };

  return (
    <>
      <div className="sectionButton" onClick={toggleCorePrinciples}>
        <h2 className="textCenter">Core Principles</h2>
      </div>
      {visible_CorePrinciples && <CorePrinciples />}

      <div className="sectionButton" onClick={toggleEquipment}>
        <h2 className="textCenter">Equipment</h2>
      </div>
      {visible_Equipment && <Equipment />}

      <div className="sectionButton" onClick={toggleActions}>
        <h2 className="textCenter">Actions</h2>
      </div>
      {visible_Actions && <Actions />}

      <div className="sectionButton" onClick={toggleWeapons}>
        <h2 className="textCenter">Weapons</h2>
      </div>
      {visible_Weapons && <Weapons />}

      <div className="sectionButton" onClick={toggleTerrain}>
        <h2 className="textCenter">Terrain</h2>
      </div>
      {visible_Terrain && <Terrain />}
    </>
  )
}

export default App
