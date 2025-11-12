import MapsKey from './Maps_Key'
import { Killzones } from './Data_Killzones'

const MapsSprawl = () => {
  return (
    <div className="sectionContent" id="sprawl">
      <p>A polluted city. A labyrinth of bridges and towers. A crawling hive. The sprawl is a close-quarters killzone that limits movement and restricts maneuverability. Long, narrow corridors may seem to favor long-range combat, but the pollution, smog and shadows may turn the tide of battle towards sneakier operatives.</p>
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

export default MapsSprawl
