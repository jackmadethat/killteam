import { useState } from 'react';
import TrackerTable from './components/TrackerTable';
import GameGenerator from './components/GameGenerator';
import DiceRoller from './components/DiceRoller';

const Tracker = () => {
  const [diceRoller, setDiceRoller] = useState(false);
  const [gameTracker, setGameTracker] = useState(false);
  const [generateGame, setGenerateGame] = useState(false);

  const toggleDiceRoller = () => {
    setDiceRoller(!diceRoller);
  }

  const toggleGameTracker = () => {
    setGameTracker(!gameTracker);
  }

  const toggleGenerateGame = () => {
    setGenerateGame(!generateGame);
  }

  return (
    <div className="sectionContent" id="tracker" style={{ textAlign: 'center' }}>
      <div className="hovered" onClick={toggleDiceRoller}>
        <h2 className="subcategoryBtn textCenter" style={{ maxWidth: 500 + 'px', marginLeft: 'auto', marginRight: 'auto' }}>Dice Roller</h2>
      </div>
      {diceRoller &&
        <DiceRoller />
      }
      <div className="hovered" onClick={toggleGameTracker}>
        <h2 className="subcategoryBtn textCenter" style={{ maxWidth: 500 + 'px', marginLeft: 'auto', marginRight: 'auto' }}>Score Tracker</h2>
      </div>
      {gameTracker &&
        <TrackerTable />
      }
      <div className="hovered" onClick={toggleGenerateGame}>
        <h2 className="subcategoryBtn textCenter" style={{ maxWidth: 500 + 'px', marginLeft: 'auto', marginRight: 'auto' }}>Game Generator</h2>
      </div>
      {generateGame && 
        <GameGenerator />
      }
    </div>
  );
};

export default Tracker;