const Mission_Swarm = () => {
  return (
    <div className="sectionContent" id="considerations">

        <div style={{ marginBottom: 40 + 'px' }}></div>

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
