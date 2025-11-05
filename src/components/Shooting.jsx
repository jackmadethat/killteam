const Shooting = () => {
  return (
    <div className="sectionContent" id="shooting">
        <div style={{ height: 20+ 'px' }}></div>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">SHOOT</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> Shoot with the active operative by following the sequence below. The active operative’s player is the attacker. The selected enemy operative’s player is the defender.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action while it has a Conceal order, or while within control range of an enemy operative.</li>
            </ul>
        </div>
        <p className="indentNote"><em>To no one’s surprise, Kill Team can be a very lethal game, so if you frequently lose operatives to enemy shooting, consider playing more defensively, placing your operatives in cover and using a Conceal order.</em></p>

        <ol>
            <li>Select Weapon
                <p>The attacker selects one of their operative's ranged weapons (<img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/shoot.svg" className="svgImg" />) and attack dice (d6) equal to the weapon’s Atk stat.</p>
            </li>
            <li>Select Valid Target
                <p>The attacker selects an enemy operative that’s a valid target and has no friendly operatives within its control range.</p>
                <ul>
                    <li>If the intended target has an <b>Engage</b> order, it’s a valid target if it’s visible to the active operative.</li>
                    <li>If the intended target has a <b>Conceal</b> order, it’s a valid target if it’s visible to the active operative and not in cover.</li>
                </ul>
                <p>An operative is visible if the active operative can see it. An operative is in cover if there’s intervening terrain within its control range. However, it cannot be in cover while within 2” of the active operative.</p>
                <p>An operative cannot be in cover from and obscured by the same terrain feature. If it would be, the defender must select one of them (cover or obscured) for that sequence when their operative is selected as the valid target.</p>
                <p style={{ paddingLeft: 5 + '%', paddingRight: 10 + '%' }}><em>In some very rare cases, you will be both the attacker and the defender, such as when resolving a shot against a friendly operative as a result of the Blast rule. When this occurs, you roll both the attack and defense dice (not your opponent).</em></p>
            </li>
            <li>Roll Attack Dice
                <p>The attacker rolls their attack dice. Each result that equals or beats the weapon’s Hit stat is a success and is retained. Each result that doesn’t is a fail and is discarded. Each result of 6 is always a critical success. Each other success is a normal success. Each result of 1 is always a fail.</p>
                <p>If the target operative is obscured:</p>
                <ul>
                    <li>The attacker must discard one success of their choice instead of retaining it.</li>
                    <li>All the attacker’s critical successes are retained as normal successes and cannot be changed to critical successes (this takes precedence over all other rules).</li>
                </ul>
                <p>An operative is obscured if there’s intervening Heavy terrain. However, it cannot be obscured by intervening Heavy terrain that’s within 1” of either operative.</p>
                <p style={{ paddingLeft: 5 + '%', paddingRight: 10 + '%' }}><em>Obscuration makes it less effective to shoot at an enemy operative if there are large obstructions in the way. However, it is ignored when operatives are in such obstructions; imagine them peeking around corners or windows.</em></p>
            </li>
            <li>Roll Defence Dice
                <p>The defender collects three defence dice. If the target operative is in cover, they can retain one normal success without rolling it – this is known as a cover save. They roll the remainder.</p>
                <p>Each result that equals or beats the target’s Save stat is a success and is retained. Each result that doesn’t is a fail and is discarded. Each result of 6 is always a critical success. Each other success is a normal success. Each result of 1 is always a fail.</p>
                <p style={{ paddingLeft: 5 + '%', paddingRight: 10 + '%' }}><em>Remember, being in cover in this step usually applies to operatives with an Engage order, as a Conceal order would have prevented them from being a valid target before.</em></p>
            </li>
            <li>Resolve Defence Dice
                <p>The defender allocates all their successful defence dice to block successful attack dice.</p>
                <ul>
                    <li>A normal success can block a normal success.</li>
                    <li>Two normal successes can block a critical success.</li>
                    <li>A critical success can block a normal success or a critical success.</li>
                </ul>
            </li><br />
            <li>Resolve Attack Dice
                <p>All successful unblocked attack dice inflict damage on the target operative.</p>
                <ul>
                    <li>A normal success inflicts damage equal to the weapon’s Normal Dmg stat.</li>
                    <li>A critical success inflicts damage equal to the weapon’s Critical Dmg stat.</li>
                </ul>
                <p>Any operatives that were incapacitated (see damage on pg 47) are removed after the active operative has finished the action.</p>
            </li>
        </ol>
        <p className="indentNote"><em>Some weapons fire multiple times in the same action, like those with the Area and Torrent weapon rules (pg. 111). Therefore, operatives do not withdraw until the entire action is resolved.</em></p>
    </div>
  )
}

export default Shooting
