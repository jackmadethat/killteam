import { useState } from 'react'
import './App.css'
import WeaponRules from './components/WeaponRules'

function Weapons() {
  const [visible_WeaponRules, setVisible_WeaponRules] = useState(false);

  const toggleWeaponRules = () => {
    setVisible_WeaponRules(!visible_WeaponRules);
  };

  return (
    <>
      <div className="sectionButton" onClick={toggleWeaponRules}>
        <h2 className="textCenter subHeading">Weapon Rules</h2>
        {visible_WeaponRules && <WeaponRules />}
      </div>
    </>
  )
}

export default Weapons
