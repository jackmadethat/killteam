const Mission_Swarm = () => {
  return (
    <div className="sectionContent" id="considerations">
        {/*<div style={{ marginBottom: 40 + 'px' }}></div>*/}
        <h3>Introduction</h3>
        <p>The desert planet of Arkalis Prime is a strategic outpost in the western region of the Milky Way galaxy, used by the Terran Federation to resupply, reinforce and regroup during long campaigns. Thanks to the many rocky moons and large asteroids in the system, weapons installations and supply depots are numerous. Despite this, the Swarm has made landfall and has begun burrowing it's tendrils deep into the planet. The low population and arid conditions slow the spread of the Xenos menace, but the Federation must scramble to purge the vile aliens swiftly and decisively or risk losing this critical location.</p>
        <h3>Campaign Rules</h3>
        <p>Head of the Swarm features 3 missions to be played in sequence with 1-3 players.</p>
        <h4><em><b>Mission 1: Secure the Package</b></em></h4>
        <p>Sergeant Anris is isolated, cut-off from his squad across a narrow canyon, and has detected the Swarm's mounting presence. He must transport his precious research material to the nearby base of operations in order to mobilize his forces into action.</p>
        <h4><em><b>Mission 2: Extraction</b></em></h4>
        <p>Regrouping at a nearby extraction site, Sergeant Anris must hold the line against the growing Swarm invasion until he can be removed from danger.</p>
        <h4><em><b>Mission 3: Turning the Tide</b></em></h4>
        <p>With Arkalis' governing authority notified of the Xenos invasion, a counter-offensive is launched that can begin scouring the world of the Swarm's touch.</p>
        <h3>Player Operatives</h3>
        <table className="weaponTable dataCard">
            <tbody>
                <tr>
                    <th>SERGEANT ANRIS</th>
                    <th>APL<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/apl.svg" className="svgImg" alt="APL" />3</th>
                    <th>MOV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/move.svg" className="svgImg" alt="Move" />7"</th>
                    <th>SAV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/save.svg" className="svgImg" alt="Save" />3+</th>
                    <th>WND<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/wounds.svg" className="svgImg" alt="Wounds" />14</th>
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
                                    <td>Range 8", Piercing Crits 1</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: 5 + 'px' }}><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/shoot.svg" className="svgImg" alt="Shoot" /> Knife</td>
                                    <td>5</td>
                                    <td>4+</td>
                                    <td>2/3</td>
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
                        <div className="additionalRulesColumns">
                            <div className="col1">
                                <p><b>Lethal Parry</b>: Whenever this operative is retaliating, before resolving attack dice in the fight sequence, if you have any critical successes, you can immediately resolve one of them before the NPO resolves any.</p>
                            </div>
                            <div className="col1">
                                <div className="actionLine"></div>
                                <div className="actionDiv">
                                    <div className="titleBlock">
                                        <p className="actionName">AUSPEX SCAN</p>
                                        <p className="actionCost"><b>2AP</b></p>
                                    </div>
                                    <ul>
                                        <li style={{ marginLeft: 17 + 'px' }}><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> For the rest of the game, whenever a player operative is shooting, fighting or retaliating, add 1 to the critical damage stat of it's weapons, and it's successes equal to or greater than 5 are critical successes.</li>
                                        <li style={{ marginLeft: 17 + 'px' }}><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> An operative cannot perform this action while within control range of an enemy operative.</li>
                                        <li style={{ marginLeft: 17 + 'px' }}><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" style={{ marginLeft: -20 + 'px', marginRight: 1 + 'px' }}/> This action cannot be performed while within control range of an enemy operative.</li>
                                    </ul>
                                </div>
                                <br />
                            </div>
                        </div>
                    </td>               
                </tr>
                <tr>
                  <td colspan="5"><div className="actionLine" style={{ width: 100 + '%' }}></div></td>
                </tr>
                <tr>
                    <td colspan="4" className="datacardKeywords" style={{ paddingLeft: 10 + 'px' }}><span><b style={{ fontSize: 1.185 + 'em' }}>TERRAN</b><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/skull.svg" className="svgImg blackIcon" /></span>, SERGEANT, LEADER</td>
                    <td colspan="5" style={{ textAlign: 'right' }}><span className="baseSize">32</span></td>
                </tr>
                <tr>
                    
                </tr>
            </tbody>
        </table>

        <h3>Non-Player Operatives</h3>
        <p className="indentNote"><em>Resembling both insect and reptile, the Swarm is a relentless and single-mindedly destructive species that has arrived from beyond the galaxy to consume all organic life in the Milky Way. It’s been theorized that the Swarm operates under a single, hyper-intelligent hive-mind creature that directs the movements of its drones on the battlefield and and its hive ships across space. Though relatively little is known of the Swarm, what is well-understood is its devastating mission to consume and grow with a speed and ferocity that can bring the whole galaxy to its knees.</em></p>
        <table className="weaponTable dataCard">
            <tbody>
                <tr>
                    <th>BLADED XENOGAUNT</th>
                    <th>APL<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/apl.svg" className="svgImg" alt="APL" />2</th>
                    <th>MOV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/move.svg" className="svgImg" alt="Move" />7"</th>
                    <th>SAV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/save.svg" className="svgImg" alt="Save" />5+</th>
                    <th>WND<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/wounds.svg" className="svgImg" alt="Wounds" />6</th>
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
                                    <td style={{ paddingLeft: 5 + 'px' }}><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/attack.svg" className="svgImg" alt="Attack" /> Talons</td>
                                    <td>4</td>
                                    <td>4+</td>
                                    <td>2/4</td>
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
                        <div className="additionalRulesColumns">
                            <div className="col2">
                                <b>Behavior</b>:<br />
                                <ol>
                                    <li><b>Fight</b></li>
                                    <li><b>Charge</b> the closest player operative via the shortest possible route</li>
                                    <li><b>Reposition</b> towards the closest player operative via the shortest possible route</li>
                                    <li><b>Dash</b> towards the closest player operative via the shortest possible route</li>
                                </ol>
                            </div>
                            <div className="col1">
                            </div>
                        </div>
                    </td>               
                </tr>
                <tr>
                  <td colspan="5"><div className="actionLine" style={{ width: 100 + '%' }}></div></td>
                </tr>
                <tr>
                    <td colspan="4" className="datacardKeywords" style={{ paddingLeft: 10 + 'px' }}><span><b style={{ fontSize: 1.185 + 'em' }}>XENOS</b><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/skull.svg" className="svgImg blackIcon" /></span>, BRAWLER, TROOPER, ORGANIC, MINORIS</td>
                    <td colspan="5" style={{ textAlign: 'right' }}><span className="baseSize">32</span></td>
                </tr>
                <tr>
                    
                </tr>
            </tbody>
        </table>
        <table className="weaponTable dataCard">
            <tbody>
                <tr>
                    <th>SPITTING XENOGAUNT</th>
                    <th>APL<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/apl.svg" className="svgImg" alt="APL" />2</th>
                    <th>MOV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/move.svg" className="svgImg" alt="Move" />7"</th>
                    <th>SAV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/save.svg" className="svgImg" alt="Save" />5+</th>
                    <th>WND<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/wounds.svg" className="svgImg" alt="Wounds" />6</th>
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
                                    <td style={{ paddingLeft: 5 + 'px' }}><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/shoot.svg" className="svgImg" alt="Attack" /> Ranged Bio-Weapon</td>
                                    <td>4</td>
                                    <td>4+</td>
                                    <td>2/3</td>
                                    <td>Range 8"</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: 5 + 'px' }}><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/attack.svg" className="svgImg" alt="Attack" /> Claws & Teeth</td>
                                    <td>3</td>
                                    <td>4+</td>
                                    <td>2/3</td>
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
                        <div className="additionalRulesColumns">
                            <div className="col2">
                                <b>Behavior</b>:<br />
                                <ol>
                                    <li><b>Fall Back</b> if possible, to a location where there's a valid target</li>
                                    <li><b>Reposition</b> towards the closest player operative and/or to cover, if possible</li>
                                    <li><b>Shoot</b></li>
                                    <li><b>Dash</b> towards the closest player operative, to cover if possible</li>
                                    <li><b>Fight</b></li>
                                </ol>
                            </div>
                            <div className="col1">
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                  <td colspan="5"><div className="actionLine" style={{ width: 100 + '%' }}></div></td>
                </tr>
                <tr>
                    <td colspan="4" className="datacardKeywords" style={{ paddingLeft: 10 + 'px' }}><span><b style={{ fontSize: 1.185 + 'em' }}>XENOS</b><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/skull.svg" className="svgImg blackIcon" /></span>, MARKSMAN, TROOPER, ORGANIC, MINORIS</td>
                    <td colspan="5" style={{ textAlign: 'right' }}><span className="baseSize">32</span></td>
                </tr>
                <tr>
                    
                </tr>
            </tbody>
        </table>
        <table className="weaponTable dataCard">
            <tbody>
                <tr>
                    <th>XENO JAGER</th>
                    <th>APL<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/apl.svg" className="svgImg" alt="APL" />3</th>
                    <th>MOV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/move.svg" className="svgImg" alt="Move" />7"</th>
                    <th>SAV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/save.svg" className="svgImg" alt="Save" />4+</th>
                    <th>WND<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/wounds.svg" className="svgImg" alt="Wounds" />16</th>
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
                                    <td style={{ paddingLeft: 5 + 'px' }}><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/shoot.svg" className="svgImg" alt="Attack" /> Ranged Bio-Weapon</td>
                                    <td>5</td>
                                    <td>4+</td>
                                    <td>3/4</td>
                                    <td>Range 8"</td>
                                </tr>
                                <tr>
                                    <td style={{ paddingLeft: 5 + 'px' }}><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/attack.svg" className="svgImg" alt="Attack" /> Boneswords</td>
                                    <td>4</td>
                                    <td>4+</td>
                                    <td>4/5</td>
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
                        <div className="additionalRulesColumns">
                            <div className="col1">
                                <p><b>Synapse</b>: Whenever a Xenogaunt is shooting or fighting within 3" of this operative, retain one attack dice as a normal success for that operative without rolling it.</p>
                                <p><b>Synaptic Backlash</b>: Whenever this operative is incapacitated, before it's removed from the killzone, inflict 1d3 damage on each Xenogaunt within 3" of it (rolled separately for each).</p>
                            </div>
                            <div className="col1">
                                <b>Behavior</b>:<br />
                                <ol>
                                    <li><b>Fight</b></li>
                                    <li><b>Charge</b> towards the closest player operative via the shortest possible route</li>
                                    <li><b>Shoot</b> the closest player operative</li>
                                    <li><b>Reposition</b> towards the closest player operative</li>
                                    <li><b>Dash</b> towards the closest player operative</li>
                                </ol>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                  <td colspan="5"><div className="actionLine" style={{ width: 100 + '%' }}></div></td>
                </tr>
                <tr>
                    <td colspan="4" className="datacardKeywords" style={{ paddingLeft: 10 + 'px' }}><span><b style={{ fontSize: 1.185 + 'em' }}>XENOS</b><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/skull.svg" className="svgImg blackIcon" /></span>, MARKSMAN, BRAWLER, WARRIOR, ORGANIC, MAJORIS</td>
                    <td colspan="5" style={{ textAlign: 'right' }}><span className="baseSize">40</span></td>
                </tr>
                <tr>
                    
                </tr>
            </tbody>
        </table>
        <table className="weaponTable dataCard">
            <tbody>
                <tr>
                    <th>XENO LEAPER</th>
                    <th>APL<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/apl.svg" className="svgImg" alt="APL" />3</th>
                    <th>MOV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/move.svg" className="svgImg" alt="Move" />7"</th>
                    <th>SAV<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/save.svg" className="svgImg" alt="Save" />4+</th>
                    <th>WND<br /><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/wounds.svg" className="svgImg" alt="Wounds" />20</th>
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
                                    <td style={{ paddingLeft: 5 + 'px' }}><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/attack.svg" className="svgImg" alt="Attack" /> Talons</td>
                                    <td>5</td>
                                    <td>3+</td>
                                    <td>4/6</td>
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
                        <div className="additionalRulesColumns">
                            <div className="col1">
                                <p><b>Hidden Predator</b>: After this operative performs the <b>Fight</b> action, it immediately performs a free <b>Fall Back</b> action, to cover if possible. Whenever this operative is in cover from a player operative, it is not visible to that operative.</p>
                            </div>
                            <div className="col1">
                                <b>Behavior</b>:<br />
                                <ol>
                                    <li><b>Fight</b></li>
                                    <li><b>Charge</b> towards the closest player operative via the shortest possible route</li>
                                    <li><b>Reposition</b> towards the closest player operative, to cover if possible (a subsequent dash can fulfil this, if able)</li>
                                    <li><b>Dash</b> towards the closest player operative, to cover if possible</li>
                                </ol>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                  <td colspan="5"><div className="actionLine" style={{ width: 100 + '%' }}></div></td>
                </tr>
                <tr>
                    <td colspan="4" className="datacardKeywords" style={{ paddingLeft: 10 + 'px' }}><span><b style={{ fontSize: 1.185 + 'em' }}>XENOS</b><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/skull.svg" className="svgImg blackIcon" /></span>, BRAWLER, HEAVY, ORGANIC, EXTREMIS</td>
                    <td colspan="5" style={{ textAlign: 'right' }}><span className="baseSize">40</span></td>
                </tr>
                <tr>
                    
                </tr>
            </tbody>
        </table>
        <h3>Mission Actions</h3>
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">REVIVE</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> Select one Downed Ally marker the active operative controls. Set up the player operative that marker was placed for in the killzone in a location it can be placed, so that marker is within it's control range. It's no longer incapacitated, has 6 wounds remaining, and gains a Wound token. Then remove the Downed Ally marker from the killzone.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" /> An operative cannot perform this action while within control range of an enemy operative.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" /> NPOs cannot perform this action.</li>
            </ul>
        </div>
        <br />
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">PURGE XENOCYTE</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> The active objective marker in the active operative's control range is purged and the next objective marker becomes active.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> If there are any Downed Ally markers, set up the operatives those markers were placed for as though the <b>Revive</b> action was performed on them, except each revived operative has 3 wounds instead of 6. Then all player operatives regain 1d3 wounds.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" /> An operative cannot perform this action while within control range of an enemy operative.</li>
            </ul>
        </div>

    </div>
  )
}

export default Mission_Swarm
