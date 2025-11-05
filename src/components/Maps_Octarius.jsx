import MapsKey from './Maps_Key'
import { Killzones } from './Data_Killzones'

const MapsOctarius = () => {
  return (
    <div className="sectionContent" id="gallowdark">
      <p>In the Killzones of <i>Octarius</i>, teams of specialist soldiers skirmish between ramshackle Ork structures. These ferrous heaps are hammered together with reckless abandon by the teeming Ork hordes. Crude fortifications and staging posts built in places of strategic importance, they create a warren of cover and elevated platforms where death can approach from unexpected angles.</p>
      <br />
      <MapsKey />
      <div className="mapGrid">
        {Killzones.slice(42, 48).map((item) => (
          <div key={item.id}>{item.image}</div>
        ))}
      </div>
    </div>
  )
}

export default MapsOctarius
