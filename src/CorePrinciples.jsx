import { useState } from 'react'
import './App.css'
import StrategyPhase from './components/StrategyPhase'
import FirefightPhase from './components/FirefightPhase'
import Considerations from './components/Considerations'
import KeyPrinciples from './components/KeyPrinciples'

function CorePrinciples() {
  const [visible_StrategyPhase, setVisible_StrategyPhase] = useState(false);
  const [visible_FirefightPhase, setVisible_FirefightPhase] = useState(false);
  const [visible_Considerations, setVisible_Considerations] = useState(false);
  const [visible_KeyPrinciples, setVisible_KeyPrinciples] = useState(false);

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

  return (
    <>
      <div className="sectionButton" onClick={toggleStrategyPhase}>
        <h2 className="textCenter subHeading">Strategy Phase</h2>
      </div>
        {visible_StrategyPhase && <StrategyPhase />}
      <div className="sectionButton" onClick={toggleFirefightPhase}>
        <h2 className="textCenter subHeading">Firefight Phase</h2>
        {visible_FirefightPhase && <FirefightPhase />}
      </div>
      <div className="sectionButton" onClick={toggleConsiderations}>
        <h2 className="textCenter subHeading">Considerations</h2>
        {visible_Considerations && <Considerations />}
      </div>
      <div className="sectionButton" onClick={toggleKeyPrinciples}>
        <h2 className="textCenter subHeading">Key Fundamentals</h2>
        {visible_KeyPrinciples && <KeyPrinciples />}
      </div>
    </>
  )
}

export default CorePrinciples
