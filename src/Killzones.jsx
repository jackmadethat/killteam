import { useState } from 'react'
import './App.css'
import MapsOpen from './components/Maps_Open'
import MapsDungeon from './components/Maps_Dungeon'
import MapsOceanRig from './components/Maps_OceanRig'
import MapsRuins from './components/Maps_Ruins'
import MapsSprawl from './components/Maps_Sprawl'


const Killzones = () => {
  const [visible_mapsOpen, setVisible_mapsOpen] = useState(false);
  const [visible_mapsTombWorld, setVisible_mapsTombWorld] = useState(false);
  const [visible_mapsOceanRig, setVisible_mapsOceanRig] = useState(false);
  const [visible_mapsDungeon, setVisible_mapsDungeon] = useState(false);
  const [visible_mapsRuins, setVisible_mapsRuins] = useState(false);
  const [visible_mapsOctarius, setVisible_mapsOctarius] = useState(false);
  const [visible_mapsSprawl, setVisible_mapsSprawl] = useState(false);

  const toggleOpenMaps = () => {
    setVisible_mapsOpen(!visible_mapsOpen);
  };

  const toggleTombWorld = () => {
    setVisible_mapsTombWorld(!visible_mapsTombWorld);
  };

  const toggleOceanRig = () => {
    setVisible_mapsOceanRig(!visible_mapsOceanRig);
  };

  const toggleDungeon = () => {
    setVisible_mapsDungeon(!visible_mapsDungeon);
  };

  const toggleRuins = () => {
    setVisible_mapsRuins(!visible_mapsRuins);
  };

  const toggleOctarius = () => {
    setVisible_mapsOctarius(!visible_mapsOctarius);
  };

  const toggleSprawl = () => {
    setVisible_mapsSprawl(!visible_mapsSprawl);
  };

  return (
    <div style={{ marginBottom: 40 + 'px' }}>
      <div>
        <div className="hovered" onClick={toggleOpenMaps}>
          <h2 className="subcategoryBtn">Open</h2>
          <p className="subsectionNo">7.1</p>
        </div>
        {visible_mapsOpen && <MapsOpen />}
      </div>

      <div>
        <div className="hovered" onClick={toggleOceanRig}>
          <h2 className="subcategoryBtn">Platform</h2>
          <p className="subsectionNo">7.2</p>
        </div>
        {visible_mapsOceanRig && <MapsOceanRig />}
      </div>

      <div>
        <div className="hovered" onClick={toggleDungeon}>
          <h2 className="subcategoryBtn">Dungeon</h2>
          <p className="subsectionNo">7.3</p>
        </div>
        {visible_mapsDungeon && <MapsDungeon />}
      </div>

      <div>
        <div className="hovered" onClick={toggleRuins}>
          <h2 className="subcategoryBtn">Ruins</h2>
          <p className="subsectionNo">7.4</p>
        </div>
        {visible_mapsRuins && <MapsRuins />}
      </div>

      <div>
        <div className="hovered" onClick={toggleSprawl}>
          <h2 className="subcategoryBtn">Sprawl</h2>
          <p className="subsectionNo">7.5</p>
        </div>
        {visible_mapsSprawl && <MapsSprawl />}
      </div>

      {/* 
      <div>
        <div className="hovered" onClick={toggleOpenMaps}>
          <h2 className="subcategoryBtn">Open Maps</h2>
          <p className="subsectionNo">7.1</p>
        </div>
        {visible_mapsOpen && <MapsOpen />}
      </div>

      <div>
        <div className="hovered" onClick={toggleOceanRig}>
          <h2 className="subcategoryBtn">Bheta-Decima</h2>
          <p className="subsectionNo">7.2</p>
        </div>
        {visible_mapsOceanRig && <MapsOceanRig />}
      </div>

      <div>
        <div className="hovered" onClick={toggleDungeon}>
          <h2 className="subcategoryBtn">Dungeon</h2>
          <p className="subsectionNo">7.3</p>
        </div>
        {visible_mapsDungeon && <MapsDungeon />}
      </div>

      <div>
        <div className="hovered" onClick={toggleSprawl}>
          <h2 className="subcategoryBtn">Sprawl</h2>
          <p className="subsectionNo">7.4</p>
        </div>
        {visible_mapsSprawl && <MapsSprawl />}
      </div>

      <div>
        <div className="hovered" onClick={toggleOctarius}>
          <h2 className="subcategoryBtn">Octarius</h2>
          <p className="subsectionNo">7.5</p>
        </div>
        {visible_mapsOctarius && <MapsOctarius />}
      </div>

      <div>
        <div className="hovered" onClick={toggleTombWorld}>
          <h2 className="subcategoryBtn">Tomb World</h2>
          <p className="subsectionNo">7.6</p>
        </div>
        {visible_mapsTombWorld && <MapsTombWorld />}
      </div>

      <div>
        <div className="hovered" onClick={toggleRuins}>
          <h2 className="subcategoryBtn">Ruins</h2>
          <p className="subsectionNo">7.7</p>
        </div>
        {visible_mapsRuins && <MapsRuins />}
      </div>
      */}
    </div>
  )
}

export default Killzones
