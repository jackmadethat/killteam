import MapsKey from './Maps_Key'
import { Killzones } from './Data_Killzones'

const MapsBhetaDecima = () => {
  return (
    <div className="sectionContent" id="bhetaDecima">
      <p>The toxic seas of <i>Bheta-Decima</i> are deadly, but they contain the remains of a vital facility containing relics and technology that could turn the tide of war. Teams of elite operatives clash over the exposed gantries, contending with the hungry depths as much as the enemy.</p>
      <figure>
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/Bheta-Decima.JPG" className="imgGraphic" />
      </figure>
      <br />
      <MapsKey />
      <p className="textCenter"><em>Areas marked in blue are hazardous terrain.</em></p>
      <div className="mapGrid">
        {Killzones.slice(18, 30).map((item) => (
          <div key={item.id}>{item.image}</div>
        ))}
      </div>
    </div>
  )
}

export default MapsBhetaDecima
