import { useState } from 'react'
import './App.css'
import PvPReference from './PvPReference'
import CorePrinciples from './CorePrinciples'
import Equipment from './Equipment'
import Actions from './Actions'
import Weapons from './Weapons'
import Terrain from './Terrain'

function App() {
  const [visible_PvPReference, setVisible_PvPReference] = useState(false);
  const [visible_CorePrinciples, setVisible_CorePrinciples] = useState(false);
  const [visible_Equipment, setVisible_Equipment] = useState(false);
  const [visible_Actions, setVisible_Actions] = useState(false);
  const [visible_Weapons, setVisible_Weapons] = useState(false);
  const [visible_Terrain, setVisible_Terrain] = useState(false);

  const togglePvPReference = () => {
    setVisible_PvPReference(!visible_PvPReference);
  };

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

  // https://kt3.albecortes.com/

  return (
    <div id="content">
      <div className="categoryButton" onClick={togglePvPReference}>
        <h2 className="textCenter">Overview</h2>
      </div>
      {visible_PvPReference && <PvPReference />}

      <div className="categoryButton" onClick={toggleCorePrinciples}>
        <h2 className="textCenter">Fundamentals</h2>
      </div>
      {visible_CorePrinciples && <CorePrinciples />}

      <div className="categoryButton" onClick={toggleEquipment}>
        <h2 className="textCenter">Equipment</h2>
      </div>
      {visible_Equipment && <Equipment />}

      <div className="categoryButton" onClick={toggleActions}>
        <h2 className="textCenter">Actions</h2>
      </div>
      {visible_Actions && <Actions />}

      <div className="categoryButton" onClick={toggleWeapons}>
        <h2 className="textCenter">Weapons</h2>
      </div>
      {visible_Weapons && <Weapons />}

      <div className="categoryButton" onClick={toggleTerrain}>
        <h2 className="textCenter">Terrain</h2>
      </div>
      {visible_Terrain && <Terrain />}

    </div>
  )
}

export default App
