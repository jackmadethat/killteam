import { useState } from 'react'
import './App.css'
import PvPReference from './PvPReference'
import CorePrinciples from './CorePrinciples'
import Equipment from './Equipment'
import Actions from './Actions'
import Weapons from './Weapons'
import Terrain from './Terrain'
import Missions from './Missions'
import Killzones from './Killzones'

const App = () => {
  const [visible_PvPReference, setVisible_PvPReference] = useState(false);
  const [visible_CorePrinciples, setVisible_CorePrinciples] = useState(false);
  const [visible_Equipment, setVisible_Equipment] = useState(false);
  const [visible_Actions, setVisible_Actions] = useState(false);
  const [visible_Weapons, setVisible_Weapons] = useState(false);
  const [visible_Terrain, setVisible_Terrain] = useState(false);
  const [visible_Missions, setVisible_Missions] = useState(false);
  const [visible_Killzones, setVisible_Killzones] = useState(false);

  const [visible_Rules, setVisible_Rules] = useState(false);
  const [visible_Tracker, setVisible_Tracker] = useState(false);

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

  const toggleMissions = () => {
    setVisible_Missions(!visible_Missions);
  };

  const toggleKillzones = () => {
    setVisible_Killzones(!visible_Killzones);
  };


  const toggleRules = () => {
    setVisible_Rules(!visible_Rules);
  };

  const toggleTracker = () => {
    setVisible_Tracker(!visible_Tracker);
  };

  // https://ktdash.app/

  return (
    <div id="content">
      <div className="primaryButton" onClick={toggleTracker}>
        <h2 className="textCenter">Game Tracker</h2>
      </div>

      {visible_Tracker && 
        <div>
          <p>Coming Soon</p>
        </div>
      }

      <div className="primaryButton" onClick={toggleRules}>
        <h2 className="textCenter">Rulebook</h2>
      </div>

      {visible_Rules && 
        <div>
          <div onClick={togglePvPReference}>
            <h2 className="categoryBtn hovered">Overview</h2>
          </div>
          {visible_PvPReference && <PvPReference />}

          <div onClick={toggleCorePrinciples}>
            <h2 className="categoryBtn hovered">Fundamentals</h2>
          </div>
          {visible_CorePrinciples && <CorePrinciples />}

          <div onClick={toggleActions}>
            <h2 className="categoryBtn hovered">Actions</h2>
          </div>
          {visible_Actions && <Actions />}

          <div onClick={toggleWeapons}>
            <h2 className="categoryBtn hovered">Weapons</h2>
          </div>
          {visible_Weapons && <Weapons />}

          <div onClick={toggleEquipment}>
            <h2 className="categoryBtn hovered">Equipment</h2>
          </div>
          {visible_Equipment && <Equipment />}

          <div onClick={toggleMissions}>
            <h2 className="categoryBtn hovered">Missions</h2>
          </div>
          {visible_Missions && <Missions />}

          <div onClick={toggleKillzones}>
            <h2 className="categoryBtn hovered">Killzones</h2>
          </div>
          {visible_Killzones && <Killzones />}

          <div onClick={toggleTerrain}>
            <h2 className="categoryBtn hovered">Terrain</h2>
          </div>
          {visible_Terrain && <Terrain />}
        </div>
      }
    </div>
  )
}

export default App
