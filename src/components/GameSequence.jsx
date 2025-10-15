function GameSequence() {
  return (
    <div className="sectionContent" id="gameSequence">
      <ol>
        <li>Setup Mission & Killzone
          <ul>
            <br /><li>Players select Kill Teams, the Killzone, mission, and set up terrain</li>
            <li>Players roll off with the winner assigning initiative</li>
            <li>Player with initiative selects their drop zone</li>
          </ul>
        </li><br />
        <li>Setup Equipment & Operatives
          <ul>
            <br /><li>Players select their operatives and equipment options
              <p className="indentNote"><em>Players can choose to select their operatives and equipment in secret, then reveal to each other at the same time, or during deployment.</em></p>
            </li>
            <li>Each player gains 2CP</li>
            <li>Determine the <em>Critical Operation (Crit Op)</em> for the mission and place relevant markers</li>
            <li>Players alternate setting up equipment by item (not option)</li>
            <li>Players alternate setting up their Kill Team in thirds, rounding up, all with a conceal order
              <p className="indentNote"><em>Example: A Kill Team of 6 operatives will deploy 2/2/2. A Kill Team of 10 operatives can deploy 3/3/4, 3/4/3 or 4/3/3.</em></p>
            </li>
            <li>Each player secretly selects a <em>Tactical Operation (Tac Op)</em> from either their faction archetype or generic set</li><br />
          </ul>
        </li>
        <li>Scouting
          <ul>
            <br /><li>Select a pre-game scouting option:
              <ol>
                <li><b>Equip</b>: Select 1 NEW additional equipment option</li>
                <li><b>Ploy</b>: Use a strategy ploy in the Strategy Phase for 0CP</li>
                <li><b>Reposition</b>: An operative who is wholly within your drop zone can perform a Reposition action for free. They must finish within 3" of your drop zone.</li>
              </ol>
            </li>
            <li>Reveal scouting options simultaneously and the player with initiative resolves first</li><br />
          </ul>
        </li>
        <li>Start Battle
          <ul>
            <br /><li>First Turning Point (TP) initiative is decided by the Scouting options: 1 beats 2, 2 beats 3, 3 beats 1. If options are the same, the player who didn't have initiative during setup decides initiative</li>
            <li>As a Strategic Gambit for 0CP, each player secretly selects one Op to be their <em>Primary Op</em> (the Crit Op, their Tac Op or the Kill Op)</li>
          </ul>
          <p className="indentNote"><em>Strategic Gambit is the term for all the rules and abilities that happen in the Strategic Phase. This includes Strategic Ploys, but that's not all. All Strategic Ploys are Strategic Gambits, but not all Strategic Gambits are ploys.</em></p>
        </li>
        <li>Turning Points
          <ul>
            <br /><li><b>Strategy Phase</b>
              <ul>
                <li>Determine initiative: From the second TP onwards, players roll for initiative. On a tie, alternate from the previous TP's initiative.</li>
                <li>Each TP, the player with initiative receives 1CP and the player without receives 2CP.</li>
                <li>Use Strategic Gambits, alternating until both players pass.</li>
              </ul>
            </li><br />
            <li><b>Firefight Phase</b>
              <ul>
                <li>Players alternate activating and expending operatives.</li>
                <li>Activate an operative by giving it an order (Engage or Conceal) and setting the token light-side-up.</li>
                <li>The operative can perform actions until it's APL is reached.</li>
                <li>Set the operative to expended by setting it's order token light-side-down.</li>
              </ul>
            </li><br />
          </ul>
        </li>
        <li>Resolve Battle
          <ul>
            <li>The battle ends after 4 Turning Points (unless the mission dictates otherwise)</li>
            <li>Players reveal their Primary Op and calculate their score by multiplying their awarded VP by 1.5 (rounding up)</li>
            <li>At the battle's end, the player with the most Victory Points (VP) wins, or it's a draw
              <p className="indentNote"><em>Players can only earn VP after the first Turning Point</em></p>
            </li>
          </ul>
        </li>
      </ol>
      <h3>Scoring</h3>
      <ul>
        <li><b>CRIT OP</b>: Score VP by performing mission actions and controlling objective markers (Max 6VP per game)</li>
        <li><b>KILL OP</b>: Score VP for each enemy operative eliminated or per Kill Op card (Max 6VP per game)</li>
        <li><b>TAC OP</b>: Score VP as described on the Tac Op (Max 6VP per game)</li>
        <li><b>PRIMARY OP</b>: At the first TP, players will have selected one Op to be their Primary Op. At the end of the battle, their score for their selected Primary Op is multiplied by 1.5, rounding up</li>
      </ul>
    </div>
  )
}

export default GameSequence
