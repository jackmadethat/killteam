import { useState } from 'react'

const MapsBhetaDecima = () => {
  const [keyVisible, setKeyVisible] = useState(false);

  const toggleKey = () => {
    setKeyVisible(!keyVisible);
  };

  return (
    <div className="sectionContent" id="bhetaDecima">
      <div className="textCenter">
        <button className="disclaimerBtn" onClick={toggleKey} style={{ marginBottom: 20 + 'px' }}><span style={{ color: 'white' }}>SHOW KEY</span></button>
      </div>
      {keyVisible && <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/MapRule.JPG" className="imgGraphic" style={{ maxWidth: 400 + 'px', paddingBottom: 20 + 'px' }} />}

      <div className="mapGrid">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-bd-1-min.png" className="mapImage" />
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-bd-2-min.png" className="mapImage" />
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-bd-3-min.png" className="mapImage" />
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-bd-4-min.png" className="mapImage" />
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-bd-5-min.png" className="mapImage" />
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-bd-6-min.png" className="mapImage" />
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-bd-7-min.png" className="mapImage" />
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-bd-8-min.png" className="mapImage" />
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-bd-9-min.png" className="mapImage" />
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-bd-10-min.png" className="mapImage" />
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-bd-11-min.png" className="mapImage" />
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-bd-12-min.png" className="mapImage" />
      </div>

    </div>
  )
}

export default MapsBhetaDecima
