const UniversalActions = () => {
  return (
    <div className="sectionContent" id="universalActions">
        <p>Actions have effects (<img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" />) and conditions (<img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" />). <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> are conditions that must be fulfilled for the operative to perform that action, whilst <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> are effects when an operative is performing that action, including any requirements when doing so. There are four different types of actions: universal, unique, mission and free.</p>
        <ul>
            <li><b>Universal actions</b> are the most common actions you will use and can be performed by all operatives unless specified otherwise. The main universal actions can be found below.</li>
            <li><b>Unique actions</b> are rarer actions in your kill team’s rules. Only specified operatives can perform them.</li>
            <li><b>Mission actions</b> are specific to the mission or killzone you are playing. If there are any, they will be in your mission pack, killzone rules or the equipment you’ve selected.</li>
            <li>
                <b>Free actions</b> can only be performed when another rule specifies, and the following rules apply:
                <ul>
                    <li>The conditions of the action must be met.</li>
                    <li>It does not cost the operative any additional AP to perform the action.</li>
                    <li>The operative would still count as performing the action for all other rules purposes. For example, if it performed the action during its activation, it wouldn’t be able to perform it again during that activation.</li>
                </ul>
            </li>
        </ul>
        <p className="indentNote"><em>If an operative performs a free action outside of their activation, it does not prevent them from performing that action during their activation, or vice versa.</em></p>
        
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">REPOSITION</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> Move the active operative up to its Move stat to a location it can be placed. This must be done in one or more straight-line increments, and increments are always rounded up to the nearest inch.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> It cannot move within control range of an enemy operative, unless one or more other friendly operatives are already within control range of that enemy operative, in which case it can move within control range of that enemy operative but cannot finish the move there.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action while within control range of an enemy operative, or during the same activation in which it performed the Fall Back or Charge action.</li>
            </ul>
        </div>
        <p className="indentNote"><em>Moving in increments allows for greater precision and clarity.</em></p>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/reposition-example-1.png" className="imgGraphic" alt="Heavy terrain" />
            <p>The operative has a Move stat of 6”. It first moves in a straight-line increment of 2” to clear the corner of a wall. It then moves in a straight-line increment of 4” — the remaining distance it can move without exceeding its Move stat.</p>
            <p><em>These movements are made in straight-line increments, instead of curving around the corner.</em></p>
        </figure>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/reposition-example-2.png" className="imgGraphic" alt="Heavy terrain" />
            <p>The operative first moves in a straight-line increment of 0.5” to clear the corner of a wall, but as increments are rounded up, this is treated as 1”. It then moves in a straight-line increment of 2.75”, but again, this is rounded up to 3”. It has moved 4” in total.</p>
        </figure>

        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">DASH</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> The same as the <b>Reposition</b> action, except don’t use the active operative’s Move stat – it can move up to 3” instead. In addition, it cannot climb during this move, but it can drop and jump.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action while within control range of an enemy operative, or during the same activation in which it performed the <b>Charge</b> action.</li>
            </ul>
        </div>
        <p className="indentNote"><em>Since operatives cannot perform the same action more than once in their activation, Dash actions are the way operatives can move a greater distance.</em></p>
        
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">FALL BACK</p>
                <p className="actionCost"><b>2AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> The same as the <b>Reposition</b> action, except the active operative can move within control range of an enemy operative, but cannot finish the move there.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action unless an enemy operative is within its control range. It cannot perform this action during the same activation in which it performed the <b>Reposition</b> or <b>Charge</b> action.</li>
            </ul>
        </div>
        <p className="indentNote"><em>If an operative is activated within the control range of an enemy operative, the Fall Back action is a way to withdraw. It costs 2AP, so most operatives will not be able to perform more actions in that activation.</em></p>
        
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">CHARGE</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> The same as the <b>Reposition</b> action, except the active operative can move an additional 2”.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> It can move, and must finish the move, within control range of an enemy operative. If it moves within control range of an enemy operative that no other friendly operatives are within control range of, it cannot leave that operative’s control range.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action while it has a Conceal order, if it’s already within control range of an enemy operative, or during the same activation in which it performed the <b>Reposition</b>, <b>Dash</b> or <b>Fall Back</b> action.</li>
            </ul>
        </div>
        <p className="indentNote"><em>Charge actions allow operatives to effectively pin down enemies, but since they need to be in an engagement order to do so, they may become vulnerable to enemy shooting.</em></p>
        
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">PICK UP MARKER</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> Remove a marker the active operative controls that the <b>Pick Up</b> Marker action can be performed upon. That operative is now carrying, contesting and controlling that marker.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action while within control range of an enemy operative, or while it’s already carrying a marker.</li>
            </ul>
        </div>
        <p className="indentNote"><em>If the <b>Pick Up</b> Marker action can be performed on a marker, it will be specified elsewhere, such as in your mission pack.</em></p>
        
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">PLACE MARKER</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> Place a marker the active operative is carrying within its control range.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> If an operative carrying a marker is incapacitated (see damage on pg 47), it must perform this action before being removed from the killzone, but does so for 0AP. This takes precedence over all rules that prevent it from doing so.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action during the same activation in which it already performed the <b>Pick Up Marker</b> action (unless incapacitated).</li>
            </ul>
        </div>
        <p className="indentNote"><em>Similarly, if there is any marker carried by the operative, it will be specified elsewhere.</em></p>
        
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
                <p>The attacker selects one ranged weapon (<img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/shoot.svg" className="svgImg" />) to use that their operative has and collects their attack dice — a number of D6 equal to the weapon’s Atk stat.</p>
            </li>
            <li>Select Valid Target
                <p>The attacker selects an enemy operative that’s a valid target and has no friendly operatives within its control range.</p>
                <p>If the intended target has an <b>Engage</b> order, it’s a valid target if it’s visible to the active operative.</p> 
                <p>If the intended target has a <b>Conceal</b> order, it’s a valid target if it’s visible to the active operative and not in cover.</p> 
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
        <p className="indentNote"><em>Unlike shooting, combat is a brutal back-and-forth. Be careful when choosing whom you fight, as they will fight back.</em></p>
        
        <ol>
            <li>Select Enemy Operative
                <p>The attacker selects an enemy operative within the active operative’s control range to fight against. That enemy operative will retaliate in this action.</p>
                <p style={{ paddingLeft: 5 + '%', paddingRight: 10 + '%' }}><em>The difference between a fighting operative and a retaliating one is important. The fighting operative is the active operative, while the retaliating operative is the chosen enemy operative.</em></p>
            </li>
            <li>Select Weapons
                <p>Both players select one melee weapon (<img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/attack.svg" className="svgImg" />) to use that their operative has and collect their attack dice — a number of D6 equal to the weapon’s Atk stat.</p>
                <p style={{ paddingLeft: 5 + '%', paddingRight: 10 + '%' }}><em>If a rule indicates that an operative cannot retaliate, you can still fight against them, but no attack dice can be gathered or resolved for them.</em></p>
            </li>
            <li>Roll Attack Dice
                <p>Both players roll their attack dice simultaneously. Each result that equals or beats their selected weapon’s Hit stat is a success and is retained. Each result that doesn’t is a fail and is discarded. Each result of 6 is always a critical success. Each other success is a normal success. Each result of 1 is always a fail.</p>
                <p>While a friendly operative is assisted by other friendly operatives, improve the Hit stat of its melee weapons by 1 for each doing so. For a friendly operative to assist them, it must be within control range of the enemy operative in that fight and not within control range of another enemy operative.</p>
                <p style={{ paddingLeft: 5 + '%', paddingRight: 10 + '%' }}><em>Having multiple friendly operatives in the control range of an enemy operative does not allow them to fight all at once, but having assistance makes it more likely to succeed on attack dice.</em></p>
            </li>
            <li>Resolve Attack Dice
                <p>Starting with the attacker, the players alternate resolving one of their successful unblocked attack dice. The players repeat this process until one player has resolved all their dice (in which case their opponent resolves all their remaining dice), or one operative in that fight is incapacitated (see damage on pg 47). When a player resolves a dice, they must strike or block with it.</p>
                <p style={{ paddingLeft: 5 + '%', paddingRight: 10 + '%' }}><em>Striking directly inflicts damage, making it an effective way to harm enemies.</em></p>
                <p>If they strike, inflict damage on the enemy operative, then discard that dice.</p>
                <ul>
                    <li>A normal success inflicts damage equal to the weapon’s Normal Dmg stat.</li>
                    <li>A critical success inflicts damage equal to the weapon’s Critical Dmg stat.</li>
                </ul>
                <p style={{ paddingLeft: 5 + '%', paddingRight: 10 + '%' }}><em>Blocking doesn’t stop a strike that’s already happening; it stops a success that is still unresolved.</em></p>
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

export default UniversalActions
