const KeyPrinciples = () => {
  return (
    <div className="sectionContent" id="keyPrinciples">
        <h3>Bases</h3>
        <p>All operatives are on bases. The base is an important part of the miniature for rules purposes, in particular measuring distances. Each operative’s base size is specified on its datacard. The sides of different bases can touch, but a base cannot be placed on another. Friendly operatives can move through other friendly operatives (the base and the miniature), but not through enemy operatives. Bases cannot move through terrain, or be over the edge of the killzone.</p>
        <p className="indentNote"><em>As you play through your first few games, you’ll gain better context for applying key principles, and can simply refer back to them when needed.</em></p>
        
        <h3>Control Range</h3>
        <p>Many rules relate to control range such as moving, fighting and using cover. Something is within an operative’s control range if it’s visible to and within 1" of that operative.</p>
        <p>Control range between operatives is mutual, therefore operatives are within each other’s control range if one of them is visible to and within 1" of the other.</p>
        <p className="indentNote"><em>Imagine control range as an area of interaction the operative has with things close to it.</em></p>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/control-range-1.png" className="imgGraphic" alt="Control Range Example" />
            <p>Operatives A and B are within each other’s control range.</p>
            <p>The terrain is within both operative B and C’s control range.</p><p>Because of the terrain, operative B is not visible to operative C, and vice versa, therefore they are not within each other’s control range.</p>
        </figure>
        
        <h3>Cover</h3>
        <p>Cover is determined from one operative to another, usually when one of them is shooting. An operative is in cover if there’s intervening terrain within its control range. However, it cannot be in cover within 2" of the other operative.</p>
        <p className="indentNote"><em>An operative in cover with a Conceal order is not a valid target. An operative in cover with an Engage order is a valid target, but has a cover save.</em></p>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/cover-example-1.png" className="imgGraphic" alt="Cover Example" />
            <p>There’s intervening terrain within operative A’s control range, therefore it’s in cover.</p>
        </figure>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/cover-example-2.png" className="imgGraphic" alt="Cover Example" />
            <p>There’s intervening terrain, but it’s not within operative A’s control range, therefore it’s not in cover.</p>
        </figure>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/cover-example-3.png" className="imgGraphic" alt="Cover Example" />
            <p>There’s terrain within operative A’s control range, but the terrain is not intervening, therefore it’s not in cover.</p>
        </figure>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/cover-example-4.png" className="imgGraphic" alt="Cover Example" />
            <p>There’s intervening terrain within operative A’s control range, but operative B is within 2" of operative A, therefore it’s not in cover.</p>
        </figure>
        
        <h3>Damage</h3>
        <p>When damage is inflicted on an operative, reduce their wounds by that amount. An operative’s starting number of wounds is determined by its Wounds stat. If an operative’s wounds are reduced to 0 or less, it’s incapacitated, then removed from the killzone.</p>
        <p>While an operative has fewer than its starting wounds remaining, it’s wounded. While it has fewer than half its starting wounds remaining, it’s also injured. Subtract 2" from the Move stat of injured operatives and worsen the Hit stat of their weapons by 1.</p>
        <p className="indentNote"><em>Keep track of each operative’s remaining wounds with dice, tokens or by writing it down.</em></p>
        <p className="indentNote"><em>‘Incapacitated’ and ‘removed from the killzone’ are separate. Some rules take effect when an operative is incapacitated, but before it’s removed.</em></p>
        
        <h3>Dice (D6, D3)</h3>
        <p>Use 6-sided dice to determine the outcome of various rules. This will often require x+, where x is the lowest possible result, e.g., 3+. Sometimes a result within a range will be required, e.g., 1-3. Some rare rules require you to roll a D3. To do so, roll one D6 and halve the result (rounding up). Some require xD6 or xD3 (e.g., 2D6 or 3D3). Roll x number of dice and add the results together. Some require D6+x or D3+x (e.g., D6+2 or D3+3). Roll that dice and add x to the result.</p>
        <p>Some rules allow you to re-roll a dice roll. You can never re-roll a dice roll more than once, and you cannot select the original result, even if the new result is worse. If it’s an attack or defence dice, you re-roll before it’s retained or discarded. If you can re-roll multiple different dice, you can do this in any order, including seeing the result of one re-roll before deciding on the next. If multiple players can re-roll dice at the same time (e.g., during a <b>Fight</b> action), they alternate either re-rolling a dice or passing until they both pass in succession, starting with the player with initiative (this takes precedence over initiative and rules that would happen at the same time).</p>
        <p className="indentNote"><em>For example, if a 4+ is required, a dice result of 4, 5 or 6 fulfils this, and if a 1-4 is required, a dice result of 1, 2, 3 or 4 fulfils this.</em></p>
        
        <h3>Distances</h3>
        <p>Various rules have a distance requirement in inches. When measuring to and from something, do so from the closest part of it. For an operative, do so from its base, ignoring all parts of its miniature. When measuring to and from an area of the killzone, measure the horizontal distance only (in other words, look from above to ignore the vertical distance).</p>
        <p>If a rule requires something to be ‘within’ a distance, the requirement is fulfilled if any part of it is that distance or less. If a rule requires something to be ‘wholly within’ a distance, the requirement is fulfilled if every part of it is that distance or less. An operative is always within and wholly within distance requirements of itself and a marker it’s carrying. If an operative is carrying a marker, that marker is the same distance as that operative.</p>
        <p className="indentNote"><em>Operatives within a certain distance of an operative that’s carrying a marker are also within the same distance of that marker.</em></p>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/distances-example-1.png" className="imgGraphic" alt="Distance Example" />
            <p>Distance measuring example: Operative B is within 2" of operative A. The objective marker is within 2" of operative A. Operative C is wholly within 2" of operative A.</p>
        </figure>
        
        <h3>Equipment</h3>
        <p>Equipment are additional rules you can select before the battle, as specified in your game sequence. Universal equipment can be selected for any kill team whereas faction equipment is specific. Each player cannot select each equipment option more than once per game.</p>
        
        <h3>Intervening</h3>
        <p>Rules such as cover and obscured require you to determine if something is intervening, e.g., terrain. Most of the time this is easily determined – if it’s between the operative and the intended target, it’s intervening. Sometimes this will be unclear, so we use targeting lines.</p>
        <p>To use targeting lines, the operative’s player draws imaginary straight lines 1mm in diameter from any point of its base to every facing part of the intended target’s base. Anything at least one of these lines cross is intervening. Anything all of these lines cross is wholly intervening.</p>
        <p className="indentNote"><em>The operative’s player decides from which point of the base targeting lines are drawn from. This can allow the operative to get a more favourable targeting angle — imagine the operative leaning right or left as appropriate.</em></p>
        <p className="indentNote"><em>Intervening is usually determined from one operative to another, but some rare rules will require you to determine it from other things such as markers. In such instances, treat all parts of that thing as the ‘base’ when determining this.</em></p>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/intervening-example-1.png" className="imgGraphic" alt="Intervening Example" />
            <p>Targeting lines cross terrain, therefore it’s intervening.</p>
        </figure>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/intervening-example-2.png" className="imgGraphic" alt="Intervening Example" />
            <p>Due to where operative A’s player has decided to draw the targeting lines from, the terrain is not intervening.</p>
        </figure>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/intervening-example-3.png" className="imgGraphic" alt="Intervening Example" />
            <p>Most commonly, targeting lines can be drawn in a two-dimensional (top down) manner for ease. However, if there’s a difference in height between the operatives (e.g., one of them is on Vantage terrain), targeting lines should be drawn in a three-dimensional manner.</p>
            <p>None of these targeting lines cross terrain feature A, therefore it’s not intervening.</p>
        </figure>
                
        <h3>Markers</h3>
        <p>Markers are placed in precise locations (this must be a location in which they can be placed) and impact the game and operatives around them. They can be placed underneath operatives (temporarily remove operatives to do so), and operatives can be placed upon them. Objective markers are 40mm in diameter. All other markers are 20mm in diameter. Some markers are known as mission markers. This means nothing on its own, but other rules interact with it.</p>
        <p>Operatives contest markers within their control range. Friendly operatives control a marker if the total APL of those contesting it is greater than that of enemy operatives, but control cannot change during an action. While an operative is carrying a marker, it contests and controls that marker, and is the only operative that can.</p>
        <p className="indentNote"><em>Objective markers are the most common marker, representing vital locations in the killzone. Controlling them is often required to achieve victory.</em></p>
        <p className="indentNote"><em>It’s fine to use a miniature to represent a marker, but have a normal marker available if it creates rules issues (e.g., it’s too big).</em></p>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/markers-example-1.png" className="imgGraphic" alt="Markers Example" />
            <p>Example of markers in play. Only three operatives contest the objective marker, as it isn’t within control range of the orange operative on the left (the terrain feature prevents it from being visible). The total APL of the orange operatives contesting the objective marker is 2. The total APL of the white operatives contesting it is 4, so they control it.</p>
        </figure>
        
        <h3>Obscured</h3>
        <p>Obscured is determined from one operative to another, usually when one of them is shooting. An operative is obscured if there’s intervening Heavy terrain that’s more than 1” from both operatives. However, it cannot be obscured by intervening Heavy terrain that’s within 1” of either operative.</p>
        <p>When an operative is shooting, if the target operative is obscured:</p>
        <ul>
            <li>The attacker must discard one success of their choice instead of retaining it.</li>
            <li>All the attacker’s critical successes are retained as normal successes and cannot be changed to critical successes (this takes precedence over all other rules).</li>
        </ul>
        <p className="indentNote"><em>Obscured is when an operative is a valid target, but intervening obstacles (usually terrain) make it a less efficient target. Imagine the operative having to target the enemy through a ruin or distant window.</em></p>
        <figure className="figure">
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/obscured-example-1.png" className="imgGraphic" alt="Obscured Example" />
            <p>Operative B is visible to operative A through a window. However, there’s intervening Heavy terrain more than 1” from both operatives, therefore operative B is obscured.</p>
        </figure>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/obscured-example-2.png" className="imgGraphic" alt="Obscured Example" />
            <p>There’s intervening Heavy terrain, but it’s within 1” of A, therefore operative B is not obscured.</p>
        </figure>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/obscured-example-3.png" className="imgGraphic" alt="Obscured Example" />
            <p>There’s intervening Heavy terrain. Whilst parts of it are within 1” of the operatives, part of it isn’t, therefore operative B is obscured.</p>
            <p className="indentNote"><em>In other words, an operative being within 1" of a terrain feature doesn’t prevent the whole terrain feature from being obscuring, only the part within 1" of the operative.</em></p>
        </figure>
                
        <h3>Orders</h3>
        <p><b>Engage: The operative can perform actions as normal and can counteract.</b></p>
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/order-engage.png" className="imgGraphic" style={{ maxWidth: 100 + 'px', maxHeight: 100 + 'px', marginLeft: 2 + '%' }} alt="Order" />
        <p><b>Conceal: The operative cannot perform Shoot and Charge actions, and it cannot counteract. However, it’s not a valid target while it’s in cover.</b></p>
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/order-conceal.png" className="imgGraphic" style={{ maxWidth: 100 + 'px', maxHeight: 100 + 'px', marginLeft: 2 + '%' }} alt="Order" />
        <p>Operatives are given a Conceal order when they are set up before the battle. You can change an operative’s order whenever it’s activated.</p>
        <p>Order tokens have two sides. The lighter side shows an operative is ready (it can be activated in the Firefight phase) and the darker side shows an operative is expended (it has been activated in the Firefight phase).</p>
        
        <h3>Ploys</h3>
        <p>Players can spend CP on ploys to gain rules bonuses at the opportune moment. Unless otherwise specified, all ploys cost 1CP. There are two types of ploys:</p>
        <ul>
            <li>Every strategy ploy is a <b>STRATEGIC GAMBIT</b> (used in the Gambit step of the Strategy phase). Some apply rules that are resolved “immediately”; otherwise, they apply rules that last until the end of the turning point.</li>
            <li>Firefight ploys are used in the Firefight phase and apply rules as the ploy specifies.</li>
        </ul>
        <p>All players have access to the Command Re-roll firefight ploy below and the ploys in their kill team’s rules. Other than Command Re-roll, each player cannot use each ploy more than once per turning point.</p>
        <p>On Guard: Once during each enemy operative’s activation, after that enemy operative performs an action, you can interrupt that activation and select one friendly operative on guard to perform the <b>Fight</b> or <b>Shoot</b> action for free (including actions that are treated as such, e.g. <b>Hatchway Fight</b> see Terrain).</p>
        <p>That friendly operative can even perform the Shoot action while within control range of an enemy operative (this takes precedence over the normal Shoot action conditions). This is known as a point-blank shot and has the following additional rules while your operative is doing it:</p>
        <ul>
            <li>Target the enemy operative within your operative’s control range (even if it wouldn’t normally be a valid target).</li>
            <li>Worsen the Hit stat of your operative’s weapons by 1.</li>
            <li>Until the end of the interrupted enemy operative’s activation, your operative cannot retaliate.</li>
        </ul>
        <p>If you do, that friendly operative cannot counteract during the turning point.</p>
        <p className="indentNote"><em>Determine the target as normal for these actions. This means you don’t have to target the operative you interrupted.</em></p>

        <div className="strategyPloy">
        <p><b>Command Re-Roll</b><br /><span style={{ fontSize: 1.3 + 'em' }}>1CP</span></p>
        <p>Use this firefight ploy after rolling your attack or defence dice. You can re-roll one of those dice.</p>
        </div>
        
        <h3>Precedence</h3>
        <p>Some rare rules will conflict with each other, so it must be established which takes precedence. In order of priority, a rule takes precedence if:</p>
        <ol>
            <li>It specifically says so.</li>
            <li>The online designer’s commentary says so.</li>
            <li>It’s not found in the core book (i.e., other rules take precedence over core book rules).</li>
            <li>It says "cannot".</li>
            <li>The player with initiative decides.</li>
        </ol>
        
        <h3>Roll-off</h3>
        <p>If a rule requires a roll-off, both players roll one D6 and whoever has the highest wins the roll-off. If there’s a tie, roll-off again.</p>
        
        <h3>Tokens</h3>
        <p>Tokens are used to help you keep track of rules effects. They are often placed next to the relevant operative, but can be moved to make space for other operatives and markers as necessary. They are removed when the tracked rules effect ends.</p>
        
        <h3>Valid Target</h3>
        <p>Some rules require you to select a valid target for an operative. This is most common when an operative is shooting, but some rare rules require it too. If the intended target has an Engage order, it’s a valid target if it’s visible to the operative. If the intended target has a Conceal order, it’s a valid target if it’s visible to the operative and not in cover.</p>
        
        <h3>Visible</h3>
        <p>For something to be visible, the operative must be able to see it. To check visibility, look from behind the operative and determine if you can draw an unobstructed straight line 1mm in diameter from its head to any part of what it’s trying to see. Ignore operatives’ bases when determining this. An operative is always visible to itself. The enemy operative is visible in both images below, even when partially behind the nearby ruin.</p>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/visible-example-1.png" className="imgGraphic" alt="Visible Example" /><p>Full visibility example.</p>
        </figure>
        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/visible-example-2.png" className="imgGraphic" alt="Visible Example" /><p>Partial visibility example.</p>
        </figure>
        
        <h3>Killzone Floor</h3>
        <p>The killzone floor is the lowest level of the killzone (i.e., the game board). Anything that’s on a marker that’s on the killzone floor is also on the killzone floor.</p>
    </div>
  )
}

export default KeyPrinciples
