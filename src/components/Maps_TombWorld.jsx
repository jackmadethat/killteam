import MapsKey from './Maps_Key'

const MapsTombWorld = () => {
  return (
    <div className="sectionContent" id="tombworld">
      <p>Beneath the rad-washed wastes and dusty chasms of Somneft lurks an existential threat to Imperial forces in the Nephilim Sector – a dormant Necron <i>Tomb World</i> which could spell disaster for the Indomitus Crusade.</p>
      <figure>
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/TombWorld.JPG" className="imgGraphic" />
      </figure>
      <br />
      <MapsKey /> 
      <div className="mapGrid">
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-tw-1-min.png" className="mapImage" />
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-tw-2-min.png" className="mapImage" />
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-tw-3-min.png" className="mapImage" />
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-tw-4-min.png" className="mapImage" />
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-tw-5-min.png" className="mapImage" />
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/maps/map-tw-6-min.png" className="mapImage" />
      </div>

    </div>
  )
}

export default MapsTombWorld
