import { useState } from 'react'
import './App.css'
import MapsOpen from './components/Maps_Open'
import MapsTombWorld from './components/Maps_TombWorld'
import MapsBhetaDecima from './components/Maps_BhetaDecima'
import MapsGallowdark from './components/Maps_Gallowdark'
import MapsVolkus from './components/Maps_Volkus'
import MapsOctarius from './components/Maps_Octarius'
import MapsMechelen from './components/Maps_Mechelen'

const Killzones = () => {
  const [visible_mapsOpen, setVisible_mapsOpen] = useState(false);
  const [visible_mapsTombWorld, setVisible_mapsTombWorld] = useState(false);
  const [visible_mapsBhetaDecima, setVisible_mapsBhetaDecima] = useState(false);
  const [visible_mapsGallowdark, setVisible_mapsGallowdark] = useState(false);
  const [visible_mapsVolkus, setVisible_mapsVolkus] = useState(false);
  const [visible_mapsOctarius, setVisible_mapsOctarius] = useState(false);
  const [visible_mapsMechelen, setVisible_mapsMechelen] = useState(false);

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

  const toggleOctarius = () => {
    setVisible_mapsOctarius(!visible_mapsOctarius);
  };

  const toggleMechelen = () => {
    setVisible_mapsMechelen(!visible_mapsMechelen);
  };

  return (
    <div style={{ marginBottom: 40 + 'px' }}>
      <div>
        <div className="hovered" onClick={toggleOpenMaps}><h2 className="subcategoryBtn">Open Maps</h2></div>
        {visible_mapsOpen && <MapsOpen />}
      </div>

      <div>
        <div className="hovered" onClick={toggleBhetaDecima}><h2 className="subcategoryBtn">Bheta-Decima</h2></div>
        {visible_mapsBhetaDecima && <MapsBhetaDecima />}
      </div>

      <div>
        <div className="hovered" onClick={toggleGallowdark}><h2 className="subcategoryBtn">Gallowdark</h2></div>
        {visible_mapsGallowdark && <MapsGallowdark />}
      </div>

      <div>
        <div className="hovered" onClick={toggleMechelen}><h2 className="subcategoryBtn">Mechelen</h2></div>
        {visible_mapsMechelen && <MapsMechelen />}
      </div>

      <div>
        <div className="hovered" onClick={toggleOctarius}><h2 className="subcategoryBtn">Octarius</h2></div>
        {visible_mapsOctarius && <MapsOctarius />}
      </div>

      <div>
        <div className="hovered" onClick={toggleTombWorld}><h2 className="subcategoryBtn">Tomb World</h2></div>
        {visible_mapsTombWorld && <MapsTombWorld />}
      </div>

      <div>
        <div className="hovered" onClick={toggleVolkus}><h2 className="subcategoryBtn">Volkus</h2></div>
        {visible_mapsVolkus && <MapsVolkus />}
      </div>
    </div>
  )
}

export default Killzones
