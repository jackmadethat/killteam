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
    <>
      <div className="sectionButton">
        <div className="hovered" onClick={toggleCritOps}><h2 className="textCenter subHeading">Critical Ops</h2></div>
        {visible_CritOps && <MissionOps />}
      </div>

      <div className="sectionButton">
        <div className="hovered" onClick={toggleTacOps}><h2 className="textCenter subHeading">Tactical Ops</h2></div>
        {visible_TacOps && <TacOps />}
      </div>

      <div className="sectionButton">
        <div className="hovered" onClick={toggleKillOps}><h2 className="textCenter subHeading">Kill Ops</h2></div>
        {visible_KillOps && <KillOps />}
      </div>
    </>
  )
}

export default Missions
