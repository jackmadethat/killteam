import { useState } from 'react'
import './App.css'
import UniversalEquipment from './components/UniversalEquipment'
import Grenades from './components/Grenades'

const Equipment = () => {
  const [visible_UniversalEquipment, setVisible_UniversalEquipment] = useState(false);
  const [visible_Grenades, setVisible_Grenades] = useState(false);

  const toggleUniversalEquipment = () => {
    setVisible_UniversalEquipment(!visible_UniversalEquipment);
  };

  const toggleGrenades = () => {
    setVisible_Grenades(!visible_Grenades);
  };

  return (
    <div style={{ marginBottom: 40 + 'px' }}>
      <div>
        <div className="hovered" onClick={toggleUniversalEquipment}><h2 className="subcategoryBtn">Universal Equipment</h2></div>
        {visible_UniversalEquipment && <UniversalEquipment />}
      </div>
      <div>
        <div className="hovered" onClick={toggleGrenades}><h2 className="subcategoryBtn">Grenades</h2></div>
        {visible_Grenades && <Grenades />}
      </div>
    </div>
  )
}

export default Equipment
