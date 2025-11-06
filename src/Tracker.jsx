import { useState } from 'react';
import TrackerTable from './components/TrackerTable';
import GameGenerator from './components/GameGenerator';

const Tracker = () => {
  const [generateGame, setGenerateGame] = useState(false);

  const toggleGenerateGame = () => {
    setGenerateGame(!generateGame);
  }

  return (
    <div className="sectionContent" id="tracker" style={{ textAlign: 'center' }}>
      <TrackerTable />
      <br />
      <button className="disclaimerBtn" style={{ marginTop: 10 + 'px' }} onClick={toggleGenerateGame}><span style={{ color: 'white' }}>GENERATE GAME</span></button>
      {generateGame && 
        <GameGenerator />
      }
    </div>
  );
};

export default Tracker;