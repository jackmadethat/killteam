import MapsKey from './Maps_Key'
import { Killzones } from './Data_Killzones'

const MapsRuins = () => {
  return (
    <div className="sectionContent" id="ruins">
      <p>The aftermath of a grand battle. An ancient city. A hulking scrapyard. Killzones in ruins provide highly variable environments featuring multiple elevations, a wide variety of terrain features, enclosed areas for surprise attacks and open areas perfect for brawling. A variety of terrain types and terrain-related rules can be employed to create exciting, nail-biting scenarios.</p>
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

export default MapsRuins
