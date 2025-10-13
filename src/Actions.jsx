import { useState } from 'react'
import './App.css'
import UniversalActions from './components/UniversalActions'
import Guard from './components/Guard'
import Counteract from './components/Counteract'

function Actions() {
  const [visible_UniversalActions, setVisible_UniversalActions] = useState(false);
  const [visible_Guard, setVisible_Guard] = useState(false);
  const [visible_Counteract, setVisible_Counteract] = useState(false);

  const toggleUniversalActions = () => {
    setVisible_UniversalActions(!visible_UniversalActions);
  };

  const toggleGuard = () => {
    setVisible_Guard(!visible_Guard);
  };

  const toggleCounteract = () => {
    setVisible_Counteract(!visible_Counteract);
  };

  return (
    <>
      <div className="sectionButton" onClick={toggleUniversalActions}>
        <div className="hovered"><h2 className="textCenter subHeading">Universal Actions</h2></div>
        {visible_UniversalActions && <UniversalActions />}
      </div>
      <div className="sectionButton" onClick={toggleGuard}>
        <div className="hovered"><h2 className="textCenter subHeading">Guard</h2></div>
        {visible_Guard && <Guard />}
      </div>
      <div className="sectionButton" onClick={toggleCounteract}>
        <div className="hovered"><h2 className="textCenter subHeading">Counteract</h2></div>
        {visible_Counteract && <Counteract />}
      </div>
    </>
  )
}

export default Actions
