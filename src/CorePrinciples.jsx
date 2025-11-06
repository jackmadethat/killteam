import { useState } from 'react'
import './App.css'
import StrategyPhase from './components/StrategyPhase'
import FirefightPhase from './components/FirefightPhase'
import Considerations from './components/Considerations'
import KeyPrinciples from './components/KeyPrinciples'
import Strategy from './components/Strategy'

const CorePrinciples = () => {
  const [visible_StrategyPhase, setVisible_StrategyPhase] = useState(false);
  const [visible_FirefightPhase, setVisible_FirefightPhase] = useState(false);
  const [visible_Considerations, setVisible_Considerations] = useState(false);
  const [visible_KeyPrinciples, setVisible_KeyPrinciples] = useState(false);
  const [visible_Strategy, setVisible_Strategy] = useState(false);

  const toggleStrategyPhase = () => {
    setVisible_StrategyPhase(!visible_StrategyPhase);
  };

  const toggleFirefightPhase = () => {
    setVisible_FirefightPhase(!visible_FirefightPhase);
  };

  const toggleConsiderations = () => {
    setVisible_Considerations(!visible_Considerations);
  };

  const toggleKeyPrinciples = () => {
    setVisible_KeyPrinciples(!visible_KeyPrinciples);
  };

  const toggleStrategy = () => {
    setVisible_Strategy(!visible_Strategy);
  };

  return (
    <div style={{ marginBottom: 40 + 'px' }}>
      <div>
        <div className="hovered" onClick={toggleConsiderations}>
          <h2 className="subcategoryBtn">Operatives</h2>
          <p className="subsectionNo">2.1</p>
        </div>
        {visible_Considerations && <Considerations />}
      </div>
      <div>
        <div className="hovered" onClick={toggleStrategyPhase}>
          <h2 className="subcategoryBtn">Strategy Phase</h2>
          <p className="subsectionNo">2.2</p>
        </div>
        {visible_StrategyPhase && <StrategyPhase />}
      </div>
      <div>
        <div className="hovered" onClick={toggleFirefightPhase}>
          <h2 className="subcategoryBtn">Firefight Phase</h2>
          <p className="subsectionNo">2.3</p>
        </div>
        {visible_FirefightPhase && <FirefightPhase />}
      </div>
      <div>
        <div className="hovered" onClick={toggleKeyPrinciples}>
          <h2 className="subcategoryBtn">Core Principles</h2>
          <p className="subsectionNo">2.4</p>
        </div>
        {visible_KeyPrinciples && <KeyPrinciples />}
      </div>
      <div>
        <div className="hovered" onClick={toggleStrategy}>
          <h2 className="subcategoryBtn">Strategy & Tactics</h2>
          <p className="subsectionNo">2.5</p>
        </div>
        {visible_Strategy && <Strategy />}
      </div>
    </div>
  )
}

export default CorePrinciples
