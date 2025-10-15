import { useState } from 'react'
import './App.css'
import GameSequence from './components/GameSequence'
import MissionOps from './components/MissionOps'

function PvPReference() {
  const [visible_GameSequence, setVisible_GameSequence] = useState(false);
  const [visible_Ops, setVisible_Ops] = useState(false);

  const toggleGameSequence = () => {
    setVisible_GameSequence(!visible_GameSequence);
  };

  const toggleOps = () => {
    setVisible_Ops(!visible_Ops);
  };

  return (
    <>
      <div className="sectionButton">
        <div className="hovered" onClick={toggleGameSequence}><h2 className="textCenter subHeading">PvP Game Sequence</h2></div>
        {visible_GameSequence && <GameSequence />}
      </div>

      <div className="sectionButton">
        <div className="hovered" onClick={toggleOps}><h2 className="textCenter subHeading">Missions & Operations</h2></div>
        {visible_Ops && <MissionOps />}
      </div>
    </>
  )
}

export default PvPReference
