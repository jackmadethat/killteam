function Considerations() {
  return (
    <div className="sectionContent" id="considerations">

        <h3>Datacards</h3>
        <p>Datacards contain specific rules for each operative, including key stats.</p>
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/datacard-example.png" className="imgGraphic" alt="Datacard" />
        <h3>Agent type</h3>
        <h3>Operative stats</h3>
        <ul>
            <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/apl.svg" className="svgImg" alt="APL" /> <b>APL (Action point limit):</b> The total cost of actions an operative can perform during its activation, and a stat used to determine control of markers. Some rare rules change an operative’s APL. Regardless of how many APL stat changes an operative is affected by, the total can never be more than -1 or +1 from its normal APL. This takes precedence over all stat changes.<p><em>If an operative has an APL of 2, and two rules say to add 1 to the operative’s APL, it would have an APL of 3.</em></p></li>
            <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/move.svg" className="svgImg" alt="Move" /> <b>Move:</b> The operative’s move distance, used when performing the <b>Reposition</b>, <b>Fall Back</b> and <b>Charge</b> actions. An operative’s Move stat can never be changed to less than 4”. This takes precedence over all stat changes.<p><em>If an operative’s stats are changed during an action, apply the change once the action has been completed.</em></p></li>
            <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/move.svg" className="svgImg" alt="Save" /> <b>Save:</b> The result required for successful defence dice whenever another operative is shooting the operative.<p><em>Note that a higher numbered Hit and Save stat is worse because your chance of rolling a success decreases. This is important if a rule requires you to improve or worsen such a stat. For example, a 4+ Hit stat worsened by 1 is 5+.</em></p></li>
            <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/wounds.svg" className="svgImg" alt="Wounds" /> <b>Wounds:</b> The operative’s starting number of wounds, which is reduced as damage is inflicted upon it.</li>
        </ul>
        <h3>Weapon stats</h3>
        <ul>
            <li>The kill team selection pages in your kill team’s rules specify what weapons an operative has. If it doesn’t specify, an operative has all the weapons on its datacard.</li>
            <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/shoot.svg" className="svgImg" alt="Shoot" /> <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/attack.svg" className="svgImg" alt="Attack" /> <b>Weapon type:</b> <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/shoot.svg" className="svgImg" alt="Shoot" /> are ranged weapons for whenever an operative is shooting, <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/attack.svg" className="svgImg" alt="Attack" /> are melee weapons for whenever an operative is fighting or retaliating.</li>
            <li><b>Atk:</b> The number of attack dice to roll whenever an operative uses this weapon.</li>
            <li><b>Hit:</b> The result required for successful attack dice whenever an operative uses this weapon.</li>
            <li><b>Dmg:</b> The damage each attack dice inflicts with this weapon. The first value is its Normal Dmg stat (damage from a normal success), the second value is its Critical Dmg stat (damage from a critical success).</li>
            <li>Sometimes different weapons will have the same primary name but different secondary names, represented in brackets, e.g. “plasma gun (standard)” and “plasma gun (supercharge)”. These are effectively separate profiles of the same weapon, but used as different weapons. If a rule refers to just the primary name, it includes all weapons with that primary name.</li>
        </ul>
        <h3>Additional rules</h3>
        <ul>
            <li>Additional rules the operative has.</li>
            <li>Unique actions that can be performed by the operative.</li>
        </ul>
        <h3>Keywords</h3>
        <ul>
            <li>Used to identify the operative for rules – some rules will only affect operatives with the relevant keywords.</li>
            <li>Shown in <b>KEYWORD BOLD</b> font.</li>
            <li>Keywords in orange with a skull symbol, e.g. <span>TEMPESTUS AQUILON</span>, are faction keywords – used to identify all operatives from that kill team.</li>
        </ul>
        <h3>Bases</h3>
        <p>Bases size in mm.</p>
    </div>
  )
}

export default Considerations
