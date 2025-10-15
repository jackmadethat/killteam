import { useState } from 'react'
import './App.css'
import GameSequence from './components/GameSequence'

function PvPReference() {
  const [visible_GameSequence, setVisible_GameSequence] = useState(false);

  const toggleGameSequence = () => {
    setVisible_GameSequence(!visible_GameSequence);
  };

  return (
    <>
      <div className="sectionButton">
        <div className="hovered" onClick={toggleGameSequence}><h2 className="textCenter subHeading">PvP Game Sequence</h2></div>
        {visible_GameSequence && <GameSequence />}
      </div>
    </>
  )
}

export default PvPReference
