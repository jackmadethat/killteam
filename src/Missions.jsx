import { useState } from 'react'
import './App.css'
import MissionOps from './components/MissionOps'
import TacOps from './components/TacOps'
import KillOps from './components/KillOps'

const Missions = () => {
  const [visible_CritOps, setVisible_CritOps] = useState(false);
  const [visible_TacOps, setVisible_TacOps] = useState(false);
  const [visible_KillOps, setVisible_KillOps] = useState(false);

  const toggleCritOps = () => {
    setVisible_CritOps(!visible_CritOps);
  };

  const toggleTacOps = () => {
    setVisible_TacOps(!visible_TacOps);
  };

  const toggleKillOps = () => {
    setVisible_KillOps(!visible_KillOps);
  };

  return (
    <div style={{ marginBottom: 40 + 'px' }}>
      {/*
      <h3 style={{ marginLeft: 5 + '%', fontSize: 1.8 + 'em' }}>PvP</h3>
      <h3 style={{ marginLeft: 5 + '%', fontSize: 1.8 + 'em' }}>PvE</h3>
      */}
      
      <div>
        <div className="hovered" onClick={toggleCritOps}>
          <h2 className="subcategoryBtn">Critical Ops</h2>
          <p className="subsectionNo">6.1</p>
        </div>
        {visible_CritOps && <MissionOps />}
      </div>

      <div>
        <div className="hovered" onClick={toggleTacOps}>
          <h2 className="subcategoryBtn">Tactical Ops</h2>
          <p className="subsectionNo">6.2</p>
        </div>
        {visible_TacOps && <TacOps />}
      </div>

      <div>
        <div className="hovered" onClick={toggleKillOps}>
          <h2 className="subcategoryBtn">Kill Op</h2>
          <p className="subsectionNo">6.3</p>
        </div>
        {visible_KillOps && <KillOps />}
      </div>
    </div>
  )
}

export default Missions
