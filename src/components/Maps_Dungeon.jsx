import MapsKey from './Maps_Key'
import { Killzones } from './Data_Killzones'

const MapsDungeon = () => {
  return (
    <div className="sectionContent" id="dungeon">
      <p>The catacombs beneath a city. A derelict space station. The corridors of a sunken temple. Dungeon killzones are tight, claustrophobic environments with a strong focus on close-quarters combat and technical movement. Dungeons feature a single plane of elevation, but don't let the simplicity fool you: Doors, traps and hazards provide a dynamic edge that will keep you on your toes.</p>
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

export default MapsDungeon
