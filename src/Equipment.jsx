import { useState } from 'react'
import './App.css'
import UniversalEquipment from './components/UniversalEquipment'
import Grenades from './components/Grenades'

function Equipment() {
  const [visible_UniversalEquipment, setVisible_UniversalEquipment] = useState(false);
  const [visible_Grenades, setVisible_Grenades] = useState(false);

  const toggleUniversalEquipment = () => {
    setVisible_UniversalEquipment(!visible_UniversalEquipment);
  };

  const toggleGrenades = () => {
    setVisible_Grenades(!visible_Grenades);
  };

  return (
    <>
      <div className="sectionButton" onClick={toggleUniversalEquipment}>
        <h2 className="textCenter subHeading">Universal Equipment</h2>
        {visible_UniversalEquipment && <UniversalEquipment />}
      </div>
      <div className="sectionButton" onClick={toggleGrenades}>
        <h2 className="textCenter subHeading">Grenades</h2>
        {visible_Grenades && <Grenades />}
      </div>
    </>
  )
}

export default Equipment
