import { useState } from 'react'
import './App.css'
import MapsOpen from './components/Maps_Open'
import MapsTombWorld from './components/Maps_TombWorld'
import MapsBhetaDecima from './components/Maps_BhetaDecima'
import MapsGallowdark from './components/Maps_Gallowdark'
import MapsVolkus from './components/Maps_Volkus'

const Killzones = () => {
  const [visible_mapsOpen, setVisible_mapsOpen] = useState(false);
  const [visible_mapsTombWorld, setVisible_mapsTombWorld] = useState(false);
  const [visible_mapsBhetaDecima, setVisible_mapsBhetaDecima] = useState(false);
  const [visible_mapsGallowdark, setVisible_mapsGallowdark] = useState(false);
  const [visible_mapsVolkus, setVisible_mapsVolkus] = useState(false);

  const toggleOpenMaps = () => {
    setVisible_mapsOpen(!visible_mapsOpen);
  };

  const toggleTombWorld = () => {
    setVisible_mapsTombWorld(!visible_mapsTombWorld);
  };

  const toggleBhetaDecima = () => {
    setVisible_mapsBhetaDecima(!visible_mapsBhetaDecima);
  };

  const toggleGallowdark = () => {
    setVisible_mapsGallowdark(!visible_mapsGallowdark);
  };

  const toggleVolkus = () => {
    setVisible_mapsVolkus(!visible_mapsVolkus);
  };

  return (
    <>
      <div className="sectionButton">
        <div className="hovered" onClick={toggleOpenMaps}><h2 className="textCenter subHeading">Open Maps</h2></div>
        {visible_mapsOpen && <MapsOpen />}
      </div>

      <div className="sectionButton">
        <div className="hovered" onClick={toggleTombWorld}><h2 className="textCenter subHeading">Tomb World</h2></div>
        {visible_mapsTombWorld && <MapsTombWorld />}
      </div>

      <div className="sectionButton">
        <div className="hovered" onClick={toggleVolkus}><h2 className="textCenter subHeading">Volkus</h2></div>
        {visible_mapsVolkus && <MapsVolkus />}
      </div>

      <div className="sectionButton">
        <div className="hovered" onClick={toggleGallowdark}><h2 className="textCenter subHeading">Gallowdark</h2></div>
        {visible_mapsGallowdark && <MapsGallowdark />}
      </div>

      <div className="sectionButton">
        <div className="hovered" onClick={toggleBhetaDecima}><h2 className="textCenter subHeading">Bheta-Decima</h2></div>
        {visible_mapsBhetaDecima && <MapsBhetaDecima />}
      </div>
    </>
  )
}

export default Killzones
