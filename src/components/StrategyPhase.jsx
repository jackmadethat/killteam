function StrategyPhase() {
  return (
    <div class="sectionContent" id="strategyPhase">
      <p>The strategy phase happens at the start of each turning point and is resolved in this order: <b>1. Initiative</b> → <b>2. Ready</b> → <b>3. Gambit</b>.</p>
      <h3>Initiative</h3>
      <ul>
          <li>The player with initiative activates first in the turning point and decides the order of resolution for rules that would happen at the same time.</li>
          <li>In the first turning point, who has initiative is determined by the game sequence of your mission pack.</li>
          <li>In subsequent turning points, players roll off and the winner decides who has initiative. If the roll-off is a tie, the player who didn’t have initiative in the previous turning point decides who has initiative (this takes precedence over roll-offs and ties).</li>
      </ul>
      <p><em>In some mission packs you will also determine initiative when setting up the battle. The player with initiative decides the order of resolution for simultaneous rules that happen before the battle begins.</em></p>
      <h3>Ready</h3>
      <ul>
          <li>Each player gains 1 Command point (CP). In each turning point after the first, the player who doesn’t have initiative gains 2CP instead. Players keep CP until spent.</li>
          <li>Each player readies all friendly operatives.</li>
      </ul>
      <p><em>CP are a valuable resource used to activate additional rules called ploys.</em></p>
      <p><em>An order token with the lighter side up shows an operative as ready.</em></p>
      <h3>Gambit</h3>
      <ul>
          <li>Starting with the player who has initiative, each player alternates either using a <b>STRATEGIC GAMBIT</b> or passing.</li>
          <li>Repeat this process until both players have passed in succession.</li>
          <li>Strategy ploys are the most common <b>STRATEGIC GAMBIT</b>, but any rule labelled <b>STRATEGIC GAMBIT</b> can be used. You cannot use each <b>STRATEGIC GAMBIT</b> more than once per turning point.</li>
      </ul>
    </div>
  )
}

export default StrategyPhase
