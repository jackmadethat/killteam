import { useState } from 'react'
import './App.css'
import UniversalActions from './components/UniversalActions'
import Guard from './components/Guard'
import Counteract from './components/Counteract'
import Shooting from './components/Shooting'
import Fighting from './components/Fighting'
import SpecialActions from './components/SpecialActions'

const Actions = () => {
  const [visible_UniversalActions, setVisible_UniversalActions] = useState(false);
  const [visible_Guard, setVisible_Guard] = useState(false);
  const [visible_Counteract, setVisible_Counteract] = useState(false);
  const [visible_Shooting, setVisible_Shooting] = useState(false);
  const [visible_Fighting, setVisible_Fighting] = useState(false);
  const [visible_SpecialActions, setVisible_SpecialActions] = useState(false);

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

  const toggleSpecialActions = () => {
    setVisible_SpecialActions(!visible_SpecialActions);
  };

  return (
    <div style={{ marginBottom: 40 + 'px' }}>
      <div>
        <div className="hovered" onClick={toggleUniversalActions}>
          <h2 className="subcategoryBtn">Universal Actions</h2>
          <p className="subsectionNo">3.1</p>
        </div>
        {visible_UniversalActions && <UniversalActions />}
      </div>
      <div>
        <div className="hovered" onClick={toggleShooting}>
          <h2 className="subcategoryBtn">Shooting</h2>
          <p className="subsectionNo">3.2</p>
        </div>
        {visible_Shooting && <Shooting />}
      </div>
      <div>
        <div className="hovered" onClick={toggleFighting}>
          <h2 className="subcategoryBtn">Fighting</h2>
          <p className="subsectionNo">3.3</p>
        </div>
        {visible_Fighting && <Fighting />}
      </div>
      <div>
        <div className="hovered" onClick={toggleGuard}>
          <h2 className="subcategoryBtn">Guard</h2>
          <p className="subsectionNo">3.4</p>
        </div>
        {visible_Guard && <Guard />}
      </div>
      <div>
        <div className="hovered" onClick={toggleSpecialActions}>
          <h2 className="subcategoryBtn">Special Actions</h2>
          <p className="subsectionNo">3.5</p>
        </div>
        {visible_SpecialActions && <SpecialActions />}
      </div>
      {/*
      <div>
        <div className="hovered" onClick={toggleCounteract}><h2 className="subcategoryBtn">Counteract</h2></div>
        {visible_Counteract && <Counteract />}
      </div>
      */}
    </div>
  )
}

export default Actions
