const Fighting = () => {
  return (
    <div className="sectionContent" id="fighting">
        <div style={{ height: 20+ 'px' }}></div>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">FIGHT</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> Fight with the active operative by following the sequence below. The active operative’s player is the attacker. The selected enemy operative’s player is the defender.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action unless an enemy operative is within its control range.</li>
            </ul>
        </div>
        <p className="indentNote"><em>Unlike shooting, combat is a brutal back-and-forth. Be careful when choosing who you fight, as they will fight back.</em></p>

        <ol>
            <li>Select Enemy Operative
                <p>The attacker selects an enemy operative within the active operative’s control range to fight. That enemy operative will retaliate in this action.</p>
                <p style={{ paddingLeft: 5 + '%', paddingRight: 10 + '%' }}><em>The difference between a fighting operative and a retaliating one is important. The fighting operative is the active operative, while the retaliating operative is the chosen enemy operative.</em></p>
            </li>
            <li>Select Weapons
                <p>Both players select one of their operative's melee weapons (<img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/attack.svg" className="svgImg" />) collect their attack dice (D6) equal to the weapon’s Atk stat.</p>
                <p style={{ paddingLeft: 5 + '%', paddingRight: 10 + '%' }}><em>If a rule indicates that an operative cannot retaliate, you can still fight against them, but no attack dice can be gathered or resolved for them.</em></p>
            </li>
            <li>Roll Attack Dice
                <p>Both players roll their attack dice simultaneously. Each result that equals or beats their selected weapon’s Hit stat is a success and is retained. Each result that doesn’t is a fail and is discarded. Each result of 6 is always a critical success. Each other success is a normal success. Each result of 1 is always a fail.</p>
                <p>While a friendly operative is assisted by other friendly operatives, improve the Hit stat of its melee weapons by 1 for each doing so. For a friendly operative to assist them, it must be within control range of the enemy operative in that fight and not within control range of another enemy operative.</p>
                <p style={{ paddingLeft: 5 + '%', paddingRight: 10 + '%' }}><em>Having multiple friendly operatives in the control range of an enemy operative does not allow them to fight all at once, but having assistance makes it more likely to succeed on attack dice.</em></p>
            </li>
            <li>Resolve Attack Dice
                <p>Starting with the attacker, the players alternate resolving one of their successful unblocked attack dice. The players repeat this process until one player has resolved all their dice (in which case their opponent resolves all their remaining dice), or one operative in that fight is incapacitated. When a player resolves a dice, they must strike or block with it.</p>
                <p style={{ paddingLeft: 5 + '%', paddingRight: 10 + '%' }}><em>Striking directly inflicts damage, making it an effective way to harm enemies.</em></p>
                <p>If they strike, inflict damage on the enemy operative, then discard that dice.</p>
                <ul>
                    <li>A normal success inflicts damage equal to the weapon’s Normal Dmg stat.</li>
                    <li>A critical success inflicts damage equal to the weapon’s Critical Dmg stat.</li>
                </ul>
                <p style={{ paddingLeft: 5 + '%', paddingRight: 10 + '%' }}><em>Blocking doesn’t stop a strike that’s already happening; it stops a success that is unresolved.</em></p>
                <p>If they block, they can allocate that dice to block one of their opponent’s unresolved successes.</p>
                <ul>
                    <li>A normal success can block a normal success.</li>
                    <li>A critical success can block a normal success or a critical success.</li>
                </ul>
            </li>
        </ol>
        <p className="indentNote"><em>You can still block even if your opponent has no unresolved successes left. This is useful if you don’t want to incapacitate the enemy operative yet.</em></p>
    </div>
  )
}

export default Fighting
