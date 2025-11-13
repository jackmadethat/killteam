const FirefightPhase = () => {
  return (
    <div className="sectionContent" id="firefightPhase">              
      <p>The player who has initiative activates a ready friendly operative. Once that activation ends, their opponent activates one of their ready friendly operatives. The players repeat this process, alternating activations until all of one player’s operatives are expended, at which point they can <b>counteract</b> between their opponent’s remaining activations. Once all operatives are expended, the Firefight phase ends.</p>
      
      <h3>When a friendly operative is activated:</h3>
      <div>
          <ol>
            <li>Determine order</li>
            <li>Perform actions</li>
            <li>Once expended, next player activates</li>
          </ol>
      </div>
      <p>Repeat until all operatives are expended, which ends the Turning Point.</p>
      <p className="indentNote"><em>Are all your operatives expended, but not your opponent’s? Counteract.</em></p>
      
      <h3>Determine order</h3>
      <ul>
          <li>Select the operative’s order (Engage or Conceal). It keeps this order until it’s next activated.</li>
      </ul>
      <p><b>Engage:</b> The operative can perform actions as normal and can counteract.</p>
      <p><b>Conceal:</b> The operative cannot perform <b>Shoot</b> or <b>Charge</b> actions, and it cannot counteract. However, while in cover it isn’t a valid target.</p>
      <p className="indentNote"><em>Giving your operatives the right order is key. As you play a few games, you’ll gain a greater understanding of when to use an Engage order and when to use a Conceal order.</em></p>
      
      <h3>Perform actions</h3>
      <ul>
          <li>The operative performs actions. While doing so it is the active operative.</li>
          <li>Each action costs Action points (AP), and you cannot spend more AP during an operative’s activation than its Action point limit (APL). In addition, an operative cannot perform the same action more than once during its activation—this is called <em>action restrictions</em>. Some rare rules change the cost of actions: regardless of how many AP changes affect an action, the minimum is always 0AP. This minimum takes precedence over all AP changes.</li>
          <li>You don’t need to declare all the operative’s actions when it’s activated. Instead, perform one action and then decide the next after seeing the result.</li>
          <li>If an action is declared or begun but cannot be completed, the action is cancelled. Revert to the game state before that action. For example, if an operative has moved but cannot complete the move, return it to where it was before moving; it hasn’t performed that action and you haven’t spent AP on it.</li>
      </ul>
      <p className="indentNote"><em>Example: an operative with APL 2 could <b>Reposition</b> (1AP) and <b>Shoot</b> (1AP), totalling 2AP; but couldn’t <b>Fall Back</b> (2AP) and <b>Shoot</b> (1AP), which totals 3AP.</em></p>
      
      <h3>Expended</h3>
      <ul>
          <li>When you finish your operative’s activation, that operative is <b>expended</b>. While expended, an operative is not ready.</li>
      </ul>
      <p className="indentNote"><em>An order token with the darker side up shows an operative as expended.</em></p>
      
      <h3>Counteract</h3>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">COUNTERACT</p>
                <p className="actionCost"><b>0AP</b></p>
            </div>
            <ul>
              <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> When you would activate a ready friendly operative, if all your operatives are expended but your opponent still has ready operatives, you can select an expended friendly operative with an Engage order to perform a <b>1AP</b> action for free (excluding Guard). Each operative can only counteract once per turning point, and cannot move more than 2", or must be set up wholly within 2" if it’s removed and set up again, while counteracting (this is not a change to its Move stat, and takes precedence over all other rules). </li>
            </ul>
        </div>
      <p>Counteracting is optional; you can choose not to. In either case, activation alternates back to your opponent afterwards.</p>
      <p className="indentNote"><em>Counteracting isn’t an activation, it’s instead of activating. This difference is important; for instance, it means action restrictions won’t apply.</em></p>
    
      <h3>Firefight Ploys</h3>
      <p>You can use CP to activate Firefight Ploys as outlined in your kill team's rules. The timing and circumstance of Firefight Ploys are described in the ploys themselves. You can only use Firefight ploys during the Firefight phase, and require CP to be used. Typically, Strategic Ploys/Gambits affect your whole team, while Firefight Ploys affect single operatives.</p>
    
      <div className="strategyPloy">
          <p><b>Command Re-Roll</b><br /><span style={{ fontSize: 1.3 + 'em' }}>1CP</span></p>
          <p>Use this Firefight Ploy after rolling your attack or defence dice. You can re-roll one of those dice. This Firefight Ploy is available to all factions. </p>
      </div>

    </div>
  )
}

export default FirefightPhase
