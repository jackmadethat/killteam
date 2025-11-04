import MapsKey from './Maps_Key'
import { Killzones } from './Data_Killzones'

const MapsOpen = () => {
  return (
    <div className="sectionContent" id="openMaps">
      <MapsKey />
      <div className="mapGrid">
        {Killzones.slice(36, 42).map((item) => (
          <div key={item.id}>{item.image}</div>
        ))}
      </div>
    </div>
  )
}

export default MapsOpen
