import { useState } from 'react'
import './App.css'
import WeaponRules from './components/WeaponRules'

const Weapons = () => {
  const [visible_WeaponRules, setVisible_WeaponRules] = useState(false);

  const toggleWeaponRules = () => {
    setVisible_WeaponRules(!visible_WeaponRules);
  };

  return (
    <div style={{ marginBottom: 40 + 'px' }}>
      <div>
        <div className="hovered"onClick={toggleWeaponRules}>
          <h2 className="subcategoryBtn" >Weapon Rules</h2>
          <p className="subsectionNo">4.1</p>
        </div>
        {visible_WeaponRules && <WeaponRules />}
      </div>
    </div>
  )
}

export default Weapons
