import { useState } from 'react';

const DiceRoller = () => {
  const diceImageSrcs = [
    "https://raw.githubusercontent.com/jackmadethat/killteam/30719b7cb34a24ee3be913a3c8c13c46b4a72b55/src/img/dice/Dice_1.svg",
    "https://raw.githubusercontent.com/jackmadethat/killteam/30719b7cb34a24ee3be913a3c8c13c46b4a72b55/src/img/dice/Dice_2.svg",
    "https://raw.githubusercontent.com/jackmadethat/killteam/30719b7cb34a24ee3be913a3c8c13c46b4a72b55/src/img/dice/Dice_3.svg",
    "https://raw.githubusercontent.com/jackmadethat/killteam/30719b7cb34a24ee3be913a3c8c13c46b4a72b55/src/img/dice/Dice_4.svg",
    "https://raw.githubusercontent.com/jackmadethat/killteam/30719b7cb34a24ee3be913a3c8c13c46b4a72b55/src/img/dice/Dice_5.svg",
    "https://raw.githubusercontent.com/jackmadethat/killteam/30719b7cb34a24ee3be913a3c8c13c46b4a72b55/src/img/dice/Dice_6.svg",
  ];
  const diceImages = diceImageSrcs.map((src, index) => ({ src, value: index + 1 }));
  const [dice, setDice] = useState([
    { ...diceImages[Math.floor(Math.random() * diceImages.length)], id: 0, top: 0, left: 0, state: 'blank' },
    { ...diceImages[Math.floor(Math.random() * diceImages.length)], id: 1, top: 0, left: 0, state: 'blank' },
  ]);
  const [goalVal, setGoalVal] = useState(0);
  const [canRoll, setCanRoll] = useState(true);
  const directions = ['up', 'down', 'left', 'right'];
  const nudgeAmount = 12;

  const addDice = () => {
    const randomDice = diceImages[Math.floor(Math.random() * diceImages.length)];
    const newDice = [...dice, { ...randomDice, id: dice.length, top: 0, left: 0 }];
    setDice(newDice);
  };

  const removeDice = () => {
    setDice(dice.slice(0, -1));
  };

  const adjustValue = (add) => {
    setGoalVal(prevGoalVal => Math.min(6, Math.max(0, prevGoalVal + (add ? 1 : -1))));
  };

  const rollDice = () => {
    setDice(dice.map((die) => {
      const direction = directions[Math.floor(Math.random() * directions.length)];
      let top = die.top;
      let left = die.left;

      switch (direction) {
        case 'up':
          top -= Math.floor(Math.random() * nudgeAmount) + 1;
          break;
        case 'down':
          top += Math.floor(Math.random() * nudgeAmount) + 1;
          break;
        case 'left':
          left -= Math.floor(Math.random() * nudgeAmount) + 1;
          break;
        case 'right':
          left += Math.floor(Math.random() * nudgeAmount) + 1;
          break;
      }

      return { 
        ...die, 
        src: diceImages[Math.floor(Math.random() * diceImages.length)].src,
        rotation: Math.floor(Math.random() * 360 - 180),
        top,
        left,
        state: 'none'
      };
    }));
  };

  const finishRoll = () => {
    setCanRoll(true);
    setDice(dice.map((die) => {
      const value = die.value;
      if (value >= goalVal) {
        return { ...die, state: 'selected' };
      } else {
        return { ...die, state: 'not-selected' };
      }
    }));
  };

  const startCycle = () => {
    const cycle = setInterval(rollDice, 50); // Green number sets pace of animation
    const nextCycle = () => {
      clearInterval(cycle);
      stage_02();
    }
    setTimeout(nextCycle, 1000); // Next stage called after running stage for 1 second
    const stage_02 = () => {
      const cycle = setInterval(rollDice, 100);
      const nextCycle = () => {
        clearInterval(cycle);
        stage_03();
      }
      setTimeout(nextCycle, 1000);
    }
    const stage_03 = () => {
      const cycle = setInterval(rollDice, 175);
      const endCycle = () => {
        clearInterval(cycle);
        setTimeout(finishRoll, 500);
      }
      setTimeout(endCycle, 1000);
    }
  }

  const animateDice = () => {
    if (canRoll && dice.length > 0) {
      setCanRoll(false);
      setDice(dice.map((die) => ({ ...die, state: 'blank', top: 0, left: 0, rotation: 0 })));
      startCycle();
    }
  }

  return (
    <div className="sectionContent" id="diceroller">
        <button className="disclaimerBtn" style={{ marginTop: 25 + 'px', marginRight: 7 + 'px' }}><span style={{ color: 'white' }} onClick={addDice}>ADD DICE</span></button>
        <button className="disclaimerBtn" style={{ marginLeft: 7 + 'px' }}><span style={{ color: 'white' }} onClick={removeDice}>REMOVE DICE</span></button>
        <table className="trackerTable" style={{ marginTop: 10 + 'px', maxWidth: 200 + 'px' }}>
          <thead>
          <tr>
            <th style={{ fontSize: 1.25 + 'em' }}><b>Value to Beat</b></th>
          </tr>
        </thead>
          <tbody>
            <tr>
              <td><button className="pointsBtn" onClick={() => adjustValue(false)}><span>-</span></button><span style={{ fontSize: 1.5 + 'em' }}>{goalVal}</span><button className="pointsBtn" onClick={() => adjustValue(true)}><span>+</span></button></td>
            </tr>
          </tbody>
        </table>
        <div className="diceBox">
          {dice.map((die, index) => (
            <img
              key={die.id}
              src={die.src}
              className="diceImg"
              style={{ 
                transform: `rotate(${die.rotation}deg)`,
                position: 'relative',
                top: `${die.top}px`,
                left: `${die.left}px`,
                backgroundColor: die.state === 'selected' ? 'rgba(0, 128, 0, 0.4)' : die.state === 'not-selected' ? 'rgba(128, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0)'
              }}
            />
          ))}
        </div>
        <button className="disclaimerBtn"><span style={{ color: 'white', paddingLeft: 30 + 'px', paddingRight: 30 + 'px' }} onClick={animateDice}>ROLL</span></button>
    </div>
  )
}

export default DiceRoller