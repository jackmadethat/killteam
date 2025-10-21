import { useState } from 'react'
import './App.css'
import UniversalActions from './components/UniversalActions'
import Guard from './components/Guard'
import Counteract from './components/Counteract'
import Shooting from './components/Shooting'
import Fighting from './components/Fighting'

const Actions = () => {
  const [visible_UniversalActions, setVisible_UniversalActions] = useState(false);
  const [visible_Guard, setVisible_Guard] = useState(false);
  const [visible_Counteract, setVisible_Counteract] = useState(false);
  const [visible_Shooting, setVisible_Shooting] = useState(false);
  const [visible_Fighting, setVisible_Fighting] = useState(false);

  const toggleUniversalActions = () => {
    setVisible_UniversalActions(!visible_UniversalActions);
  };

  const toggleGuard = () => {
    setVisible_Guard(!visible_Guard);
  };

  const toggleCounteract = () => {
    setVisible_Counteract(!visible_Counteract);
  };

  const toggleShooting = () => {
    setVisible_Shooting(!visible_Shooting);
  };

  const toggleFighting = () => {
    setVisible_Fighting(!visible_Fighting);
  };

  return (
    <>
      <div className="sectionButton">
        <div className="hovered" onClick={toggleUniversalActions}><h2 className="textCenter subHeading">Universal Actions</h2></div>
        {visible_UniversalActions && <UniversalActions />}
      </div>
      <div className="sectionButton">
        <div className="hovered" onClick={toggleShooting}><h2 className="textCenter subHeading">Shooting</h2></div>
        {visible_Shooting && <Shooting />}
      </div>
      <div className="sectionButton">
        <div className="hovered" onClick={toggleFighting}><h2 className="textCenter subHeading">Fighting</h2></div>
        {visible_Fighting && <Fighting />}
      </div>
      <div className="sectionButton">
        <div className="hovered" onClick={toggleGuard}><h2 className="textCenter subHeading">Guard</h2></div>
        {visible_Guard && <Guard />}
      </div>
      {/*
      <div className="sectionButton">
        <div className="hovered" onClick={toggleCounteract}><h2 className="textCenter subHeading">Counteract</h2></div>
        {visible_Counteract && <Counteract />}
      </div>
       */}
    </>
  )
}

export default Actions
