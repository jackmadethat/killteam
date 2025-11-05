import MapsKey from './Maps_Key'
import { Killzones } from './Data_Killzones'

const MapsMechelen = () => {
  return (
    <div className="sectionContent" id="mechelen">
      <p>Killzone: <i>Mechelen</i> is a set of professionally-tailored killzones used in the World Team Championship hosted in Mechelen, Belgium. The terrain pieces are a mix of standing walls like in Gallowdark and structures like in Volkus. Additionally, the layouts include terrain features similar to standard equipment such as light and heavy barricades. Mechelen layouts are perfect for elite, tactical gameplay.</p>
      <br />
      <MapsKey />
      <div className="mapGrid">
        {Killzones.slice(48, 54).map((item) => (
          <div key={item.id}>{item.image}</div>
        ))}
      </div>
    </div>
  )
}

export default MapsMechelen
