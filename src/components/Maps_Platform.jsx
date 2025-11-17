import MapsKey from './Maps_Key'
import { Killzones } from './Data_Killzones'

const MapsPlatform = () => {
  return (
    <div className="sectionContent" id="Platform">
      <p>Gantries on a volcanic mining rig. Precarious surfaces over toxic waste. Scaffolding above infested waters. Platform killzones are dynamic, multi-level environments over hazardous terrain which limits movement and favors long-range sharpshooters and highly maneuverable operatives.</p>
      <br />
      <MapsKey />
      <div className="mapGrid">
        {Killzones.slice(9, 19).map((item) => (
          <img key={item.id} src={item.imageSrc} className="mapImage" />
        ))}
      </div>
    </div>
  )
}

export default MapsPlatform
