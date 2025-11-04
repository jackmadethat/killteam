import MapsKey from './Maps_Key'
import { Killzones } from './Data_Killzones'

const MapsGallowdark = () => {
  return (
    <div className="sectionContent" id="gallowdark">
      <p>The <i>Gallowdark</i> is a derelict space hulk – a conglomeration of ships pressed together over many centuries, filled with buckled corridors, bulkheads, and jagged metal. Filled with technology, relics, or the mysteries of the past, small teams of warriors will often cross paths with enemy operatives in the twisted corridors.</p>
      <br />
      <MapsKey />
      <div className="mapGrid">
        {Killzones.slice(30, 36).map((item) => (
          <div key={item.id}>{item.image}</div>
        ))}
      </div>
    </div>
  )
}

export default MapsGallowdark
