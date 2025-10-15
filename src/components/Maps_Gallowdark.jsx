import { useState } from 'react'

const MapsGallowdark = () => {
  const [keyVisible, setKeyVisible] = useState(false);

  const toggleKey = () => {
    setKeyVisible(!keyVisible);
  };

  return (
    <div className="sectionContent" id="gallowdark">
      <div className="textCenter">
        <button className="disclaimerBtn" onClick={toggleKey} style={{ marginBottom: 20 + 'px' }}><span style={{ color: 'white' }}>SHOW KEY</span></button>
      </div>
      {keyVisible && <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/MapRule.JPG" className="imgGraphic" style={{ maxWidth: 400 + 'px', paddingBottom: 20 + 'px' }} />}

      <div className="mapGrid">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-itd-1-min.png" className="mapImage" />
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-itd-2-min.png" className="mapImage" />
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-itd-3-min.png" className="mapImage" />
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-itd-4-min.png" className="mapImage" />
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-itd-5-min.png" className="mapImage" />
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-itd-6-min.png" className="mapImage" />
      </div>

    </div>
  )
}

export default MapsGallowdark
