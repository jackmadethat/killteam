import MapsKey from './Maps_Key'
import { Killzones } from './Data_Killzones'

const MapsOpen = () => {
  return (
    <div className="sectionContent" id="openMaps">
      <p>Open maps provide objective and deployment options to serve as a starting point for setting up new games. After placing objective markers, players can roll off and take turns placing terrain features or simply play on a completely open field.</p>
      <br />
      <MapsKey />
      <div className="mapGrid">
        {Killzones.slice(0, 9).map((item) => (
          <img src={item.imageSrc} className="mapImage" />
        ))}
      </div>
    </div>
  )
}

export default MapsOpen
