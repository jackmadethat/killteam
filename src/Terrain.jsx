import { useState } from 'react'
import './App.css'
import TerrainMovement from './components/TerrainMovement'
import TerrainBasics from './components/TerrainBasics'
import DoorsHatchways from './components/DoorsHatchways'
import TerrainRules from './components/TerrainRules'

const Terrain = () => {
  const [visible_TerrainMovement, setVisible_TerrainMovement] = useState(false);
  const [visible_TerrainBasics, setVisible_TerrainBasics] = useState(false);
  const [visible_DoorsHatchways, setVisible_DoorsHatchways] = useState(false);
  const [visible_TerrainRules, setVisible_TerrainRules] = useState(false);

  const toggleTerrainMovement = () => {
    setVisible_TerrainMovement(!visible_TerrainMovement);
  };

  const toggleTerrainBasics = () => {
    setVisible_TerrainBasics(!visible_TerrainBasics);
  };

  const toggleDoorsHatchways = () => {
    setVisible_DoorsHatchways(!visible_DoorsHatchways);
  };

  const toggleTerrainRules = () => {
    setVisible_TerrainRules(!visible_TerrainRules);
  };

  return (
    <>
      <div className="sectionButton">
        <div className="hovered" onClick={toggleTerrainMovement}><h2 className="textCenter subHeading">Terrain & Movement</h2></div>
        {visible_TerrainMovement && <TerrainMovement />}
      </div>
      <div className="sectionButton">
        <div className="hovered" onClick={toggleTerrainBasics}><h2 className="textCenter subHeading">Terrain Basics</h2></div>
        {visible_TerrainBasics && <TerrainBasics />}
      </div>
      <div className="sectionButton">
        <div className="hovered" onClick={toggleDoorsHatchways}><h2 className="textCenter subHeading">Doors & Hatchways</h2></div>
        {visible_DoorsHatchways && <DoorsHatchways />}
      </div>
      <div className="sectionButton">
        <div className="hovered" onClick={toggleTerrainRules}><h2 className="textCenter subHeading">Terrain Rules</h2></div>
        {visible_TerrainRules && <TerrainRules />}
      </div>
    </>
  )
}

export default Terrain
