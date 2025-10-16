import { useState } from 'react'
import './App.css'
import Introduction from './components/Introduction'
import GameSequence from './components/GameSequence'
import PvESequence from './components/PvESequence'

const PvPReference = () => {
  const [visible_GameSequence, setVisible_GameSequence] = useState(false);
  const [visible_PvESequence, setVisible_PvESequence] = useState(false);
  const [visible_Introduction, setVisible_Introduction] = useState(false);

  const toggleGameSequence = () => {
    setVisible_GameSequence(!visible_GameSequence);
  };

  const toggleIntroduction = () => {
    setVisible_Introduction(!visible_Introduction);
  };

  const togglePvEGameSequence = () => {
    setVisible_PvESequence(!visible_PvESequence);
  };

  return (
    <>
      <div className="sectionButton">
        <div className="hovered" onClick={toggleIntroduction}><h2 className="textCenter subHeading">Introduction</h2></div>
        {visible_Introduction && <Introduction />}
      </div>

      <div className="sectionButton">
        <div className="hovered" onClick={toggleGameSequence}><h2 className="textCenter subHeading">Core Gameplay</h2></div>
        {visible_GameSequence && <GameSequence />}
      </div>

      <div className="sectionButton">
        <div className="hovered" onClick={togglePvEGameSequence}><h2 className="textCenter subHeading">Solo/Co-Op Gameplay</h2></div>
        {visible_PvESequence && <PvESequence />}
      </div>
    </>
  )
}

export default PvPReference
