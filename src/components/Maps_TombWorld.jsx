import MapsKey from './Maps_Key'
import { Killzones } from './Data_Killzones'

const MapsTombWorld = () => {
  return (
    <div className="sectionContent" id="tombworld">
      <p>Beneath the rad-washed wastes and dusty chasms of Somneft lurks an existential threat to Imperial forces in the Nephilim Sector – a dormant Necron <i>Tomb World</i> which could spell disaster for the Indomitus Crusade.</p>
      <br />
      <MapsKey /> 
      <div className="mapGrid">
        {Killzones.slice(0, 6).map((item) => (
          <div key={item.id}>{item.image}</div>
        ))}
      </div>
    </div>
  )
}

export default MapsTombWorld
