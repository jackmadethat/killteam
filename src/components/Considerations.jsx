const Considerations = () => {
  return (
    <div className="sectionContent" id="considerations">
        <p>Operatives are the models used in the game. Your operatives are friendly operatives, and your opponent’s operatives are enemy operatives.</p>

        <h3>Datacards</h3>
        <p>Datacards contain specific rules for each operative, including key stats.</p>
        <p className="indentNote"><em>Below is an example of an operative's datacard from the Angels of Death kill team (available free on the Warhammer Community website).</em></p>
        <br />

        <table className="weaponTable dataCard">
            <tbody>
                <tr>
                    <th>ELIMINATOR SNIPER</th>
                    <th>APL<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/apl.svg" className="svgImg" alt="APL" />3</th>
                    <th>MOV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/move.svg" className="svgImg" alt="Move" />7"</th>
                    <th>SAV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/save.svg" className="svgImg" alt="Save" />3+</th>
                    <th>WND<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/wounds.svg" className="svgImg" alt="Wounds" />12</th>
                </tr>
                <tr>
                    <td colspan="5">
                        <table className="weaponTable weaponStats">
                            <tbody>
                                <tr>
                                    <th>NAME</th>
                                    <th>ATK</th>
                                    <th>HIT</th>
                                    <th>DMG</th>
                                    <th>WEAPON RULES</th>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: 5 + 'px' }}><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/shoot.svg" className="svgImg" alt="Shoot" /> Bolt Pistol</td>
                                    <td>4</td>
                                    <td>3+</td>
                                    <td>3/4</td>
                                    <td>Range 8"</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: 5 + 'px' }}><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/shoot.svg" className="svgImg" alt="Attack" /> Bolt Sniper Rifle (executioner)</td>
                                    <td>4</td>
                                    <td>2+</td>
                                    <td>3/4</td>
                                    <td>Heavy (<b>Dash</b> only), Saturate, Seek Light, Silent</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: 5 + 'px' }}><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/shoot.svg" className="svgImg" alt="Attack" /> Bolt Sniper Rifle (hyperfrag)</td>
                                    <td>4</td>
                                    <td>2+</td>
                                    <td>2/4</td>
                                    <td>Blast 1", Heavy (<b>Dash</b> only), Silent</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: 5 + 'px' }}><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/shoot.svg" className="svgImg" alt="Attack" /> Bolt Sniper Rifle (mortis)</td>
                                    <td>4</td>
                                    <td>2+</td>
                                    <td>3/3</td>
                                    <td>Devastating 3, Heavy (<b>Dash</b> only), Piercing 1, Silent</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: 5 + 'px' }}><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/attack.svg" className="svgImg" alt="Attack" /> Fists</td>
                                    <td>4</td>
                                    <td>3+</td>
                                    <td>3/4</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td colspan="5" className="datacardAdditionalRules">
                        <div className= "additionalRulesColumns">
                            <div className= "col1">
                                <p><b>Camo Cloak</b>: Whenever an operative is shooting this operative, ignore the Saturate weapon rule. This operative has the Stealthy <b>CHAPTER TACTIC</b>. If you selected that <b>CHAPTER TACTIC</b>, you can do both of its options (i.e. retain two cover saves – one normal and one critical success).</p>
                            </div>
                            <div className= "col1">
                                <div className="actionLine"></div>
                                <div className="actionDiv">
                                    <div className="titleBlock">
                                        <p className="actionName">OPTICS</p>
                                        <p className="actionCost"><b>1AP</b></p>
                                    </div>
                                    <ul>
                                        <li style={{ marginLeft: 17 + 'px' }}><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> Until the start of this operative’s next activation, whenever it’s shooting, enemy operatives cannot be obscured.</li>
                                        <li style={{ marginLeft: 17 + 'px' }}><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> An operative cannot perform this action while within control range of an enemy operative.</li>
                                    </ul>
                                </div>
                                <br />
                            </div>
                        </div>
                    </td>
                </tr>
                {/*
                <tr>
                    <td colspan="5" className="datacardAdditionalRules continueText" style={{ textAlign: 'right', marginRight: 15 + 'px' }}><b>RULES CONTINUE NEXT PANEL &gt;</b></td>
                </tr>
                */}
                <tr>
                  <td colspan="5"><div className="actionLine" style={{ width: 100 + '%' }}></div></td>
                </tr>
                <tr>
                    <td colspan="4" className="datacardKeywords" style={{ paddingLeft: 10 + 'px' }}><span><b style={{ fontSize: 1.185 + 'em' }}>ANGELS OF DEATH</b><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/skull.svg" className="svgImg blackIcon" /></span>, IMPERIUM, ADEPTUS ASTARTES, ELIMINATOR, SNIPER</td>
                    <td colspan="5" style={{ textAlign: 'right' }}><span className="baseSize">40</span></td>
                </tr>
                <tr>
                    
                </tr>
            </tbody>
        </table>

        <h3>Operative stats</h3>
        <ul>
            <li>
                <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/apl.svg" className="svgImg" alt="APL" /> 
                <b>&nbsp;APL (Action point limit):</b> The total cost of actions an operative can perform during its activation, and a stat used to determine control of markers. Some rare rules change an operative’s APL. Regardless of how many APL stat changes an operative is affected by, the total can never be more than -1 or +1 from its normal APL. This takes precedence over all stat changes.
                <p className="indentNote"><em>If an operative has an APL of 2, and two rules say to add 1 to the operative’s APL, it would have an APL of 3.</em></p>
                </li>
            <li>
                <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/move.svg" className="svgImg" alt="Move" /> 
                <b>&nbsp;Move:</b> The operative’s move distance, used when performing the <b>Reposition</b>, <b>Fall Back</b> and <b>Charge</b> actions. An operative’s Move stat can never be changed to less than 4”. This takes precedence over all stat changes.
                <p className="indentNote"><em>If an operative’s stats are changed during an action, apply the change once the action has been completed.</em></p>
                </li>
            <li>
                <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/save.svg" className="svgImg" alt="Save" /> 
                <b>&nbsp;Save:</b> The result required for successful defence dice whenever another operative is shooting the operative.
                <p className="indentNote"><em>Note that a higher numbered Hit and Save stat is worse because your chance of rolling a success decreases. This is important if a rule requires you to improve or worsen such a stat. For example, a 4+ Hit stat worsened by 1 is 5+.</em></p>
                </li>
            <li>
                <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/wounds.svg" className="svgImg" alt="Wounds" /> 
                <b>&nbsp;Wounds:</b> The operative’s starting number of wounds, which is reduced as damage is inflicted upon it.
                </li>
        </ul>
        <h3>Weapon stats</h3>
        <ul>
            <li>Beneath the operative's stats are the weapons it can equip. Your kill team's rules will specify the weapons each of your operatives can equip, and if it doesn’t specify, it can equip all the weapons on its datacard.</li>
            <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/shoot.svg" className="svgImg" alt="Shoot" /> <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/attack.svg" className="svgImg" alt="Attack" /> <b>Weapon type:</b> <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/shoot.svg" className="svgImg" alt="Shoot" /> are ranged weapons for whenever an operative is shooting, <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/icons/img/attack.svg" className="svgImg" alt="Attack" /> are melee weapons for whenever an operative is fighting or retaliating.</li>
            <li><b>Atk:</b> The number of attack dice to roll whenever an operative uses this weapon.</li>
            <li><b>Hit:</b> The result required for successful attack dice whenever an operative uses this weapon.</li>
            <li><b>Dmg:</b> The damage each attack dice inflicts with this weapon. The first value is its <em>Normal Dmg stat</em> (damage from a normal success), the second value is its <em>Critical Dmg stat</em> (damage from a critical success).</li>
            <li>Sometimes different weapons will have the same primary name but different secondary names, represented in brackets, e.g. “plasma gun (standard)” and “plasma gun (supercharge)”. These are effectively separate profiles of the same weapon, but used as different weapons. If a rule refers to just the primary name, it includes all weapons with that primary name.</li>
        </ul>
        <h3>Additional rules</h3>
        <p>Beneath the operative's weapon loadout are any relevant additional rules for the operative and any unique actions that the operative can perform.</p>
        <h3>Keywords</h3>
        <p>At the bottom of the datacard are any relevant keywords for the operative. Keywords are used as identifiers for certain rules that apply to specific operatives and operative types. Keywords in orange with a skull symbol, e.g. <b style={{ color: '#F80' }}>ANGELS OF DEATH</b><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/skull.svg" className="svgImg blackIcon" />, are faction keywords – used to identify all operatives from that kill team.</p>
        <h3>Bases</h3>
        <p>In the bottom-right corner of the datacard is the units base size in mm.</p>
    </div>
  )
}

export default Considerations
