import MapsKey from './Maps_Key'
import { Killzones } from './Data_Killzones'

const MapsOpen = () => {
  return (
    <div className="sectionContent" id="openMaps">
      <p>Open maps provide template objective and deployment options to act as a starting point for games. After placing objective markers, players can roll off and take turns placing terrain features or simply play on an open field.</p>
      <br />
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
