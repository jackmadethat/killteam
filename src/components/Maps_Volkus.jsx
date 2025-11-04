import MapsKey from './Maps_Key'
import { Killzones } from './Data_Killzones'

const MapsVolkus = () => {
  return (
    <div className="sectionContent" id="tombworld">
      <p>Volkus is a large and mineral-rich world, home to sprawling hive cities, mining and logging complexes, and vast manufacturing facilities that produce vital materials required across the Imperium. Now, teams of elite operatives clash in the rubble-strewn hive streets, and Imperial forces attempt to secure crucial objectives from alien invaders.</p>
      <figure>
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/Volkus.JPG" className="imgGraphic" />
      </figure>
      <br />
      <MapsKey />
      <div className="mapGrid">
        {Killzones.slice(6, 18).map((item) => (
          <div key={item.id}>{item.image}</div>
        ))}
      </div>
    </div>
  )
}

export default MapsVolkus
