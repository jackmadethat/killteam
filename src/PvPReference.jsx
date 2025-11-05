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
    <div style={{ marginBottom: 40 + 'px' }}>
      <div>
        <div className="hovered" onClick={toggleIntroduction}>
          <h2 className="subcategoryBtn">Introduction</h2>
          <p className="subsectionNo">1.1</p>
        </div>
        {visible_Introduction && <Introduction />}
      </div>

      <div>
        <div className="hovered" onClick={toggleGameSequence}>
          <h2 className="subcategoryBtn">Core Gameplay</h2>
          <p className="subsectionNo">1.2</p>
        </div>
        {visible_GameSequence && <GameSequence />}
      </div>

      <div>
        <div className="hovered" onClick={togglePvEGameSequence}>
          <h2 className="subcategoryBtn">Solo/Co-Op Gameplay</h2>
          <p className="subsectionNo">1.3</p>
        </div>
        {visible_PvESequence && <PvESequence />}
      </div>
    </div>
  )
}

export default PvPReference
