import MapsKey from './Maps_Key'
import { Killzones } from './Data_Killzones'

const MapsOceanRig = () => {
  return (
    <div className="sectionContent" id="oceanrig">
      <p>Gantries on an offshore station. Precarious surfaces over toxic waste. Scaffolding above infested waters. Ocean Rig killzones are dynamic, multi-level environments over hazardous terrain which limits movement and favors long-range sharpshooters and highly maneuverable operatives.</p>
      <br />
      <MapsKey />
      <div className="mapGrid">
        {/*Killzones.slice(36, 42).map((item) => (
          <div key={item.id}>{item.image}</div>
        ))*/}
      </div>
    </div>
  )
}

export default MapsOceanRig
