import { useState } from 'react'

const TerrainRules = () => {
  const [visible_Platform, setVisible_Platform] = useState(false);
  const [visible_Ruins, setVisible_Ruins] = useState(false);
  const [visible_Dungeon, setVisible_Dungeon] = useState(false);
  const [visible_Sprawl, setVisible_Sprawl] = useState(false);
  const [visible_Octarius, setVisible_Octarius] = useState(false);
  const [visible_Open, setVisible_Open] = useState(false);

  const togglePlatform = () => {
    setVisible_Platform(!visible_Platform);
  };

  const toggleRuins = () => {
    setVisible_Ruins(!visible_Ruins);
  };

  const toggleDungeon = () => {
    setVisible_Dungeon(!visible_Dungeon);
  };

  const toggleSprawl = () => {
    setVisible_Sprawl(!visible_Sprawl);
  };

  const toggleOctarius = () => {
    setVisible_Octarius(!visible_Octarius);
  };

  const toggleOpen = () => {
    setVisible_Open(!visible_Open);
  };

  return (
    <div className="sectionContent" id="terrainRules">
        <p style={{ marginBottom: 10 + 'px' }}>Different killzones have different rules, terrain types, and features.<br /><br />
        <em>Click on a sub-heading below to see various killzone-specific rules.</em></p>

        <h2 className="subHeading hovered" style={{ fontSize: 1.3 + 'em', marginLeft: 2 + '%' }} onClick={toggleOpen}>Open</h2>
        <div className="weaponLine" style={{ marginBottom: 20 + 'px', marginLeft: 1 + '%' }}></div>
        {visible_Open &&
            <>
                <p>While there are no unique rules for Open killzones, players can roll-off and place terrain in turns, piece-by-piece, after selecting a killzone layout. This lends towards an interesting mix of terrain and terrain types, potentially blending any and all killzone themes. Alternatively, players can agree on limited terrain sets for a more consistent theme.</p>
                <p>Below are some cost-effective terrain options for consideration.</p>
                <h3>Generic Dungeon Walls</h3>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain/Terrain_Dungeon_Generic_01.png" className="imgGraphic" />
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain/Terrain_Dungeon_Generic_02.png" className="imgGraphic" />
                </figure>
                <p>If you're willing to spend the time, terrain can be crafted from paper or cut and glued from plywood or MDF sheeting. Here are links to <a href="https://github.com/jackmadethat/killteam/raw/refs/heads/main/src/assets/KillzoneTerrain_Walls_Paper.pdf">papercraft</a> and <a href="https://github.com/jackmadethat/killteam/raw/refs/heads/main/src/assets/KillzoneTerrain_Walls_Plywood.pdf">plywood</a> templates to create generic pieces such as is pictured above, printable on A4.</p>
                <p>Alternatively, a simple set of Jenga blocks can serve as improvized terrain suitable for dungeon walls, ad hoc structures, and other terrain features.</p>
            </>
        }

        <h2 className="subHeading hovered" style={{ fontSize: 1.3 + 'em', marginLeft: 2 + '%' }} onClick={togglePlatform}>Platform</h2>
        <div className="weaponLine" style={{ marginBottom: 20 + 'px', marginLeft: 1 + '%' }}></div>
        {visible_Platform &&
            <>
                <h3>Gantries</h3>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain/Terrain_Gantry.png" className="imgGraphic" />
                    <p>Pictured: 1x Medium Gantry</p>
                </figure>
                <p>Platform killzones use up to 2x short gantries (60mm x 60mm), 4x medium gantries (60mm x 120mm) and 2x long gantries (60mm x 240mm). Gantries stand 72mm from the base to the walkable surface.</p>
                <ul>
                    <li>Gantry floors are accessible and vantage terrain.</li>
                    <li>Gantry pillars are heavy terrain.</li>
                    <li>When gantry floors are connected (i.e., they are touching each other), they are treated as the same terrain.</li>
                </ul>
                <h3>Condenser</h3>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain/Terrain_Condenser.png" className="imgGraphic" />
                </figure>
                <p>The Condenser is 117mm tall with a circular pillar and platform with vertical sections used as battlements.</p>
                <ul>
                    <li>The roof is accessible and vantage terrain.</li>
                    <li>The battlements on the roof are light terrain.</li>
                    <li>All other parts of the condenser are heavy terrain.</li>
                </ul>
                <h3>Hazardous Areas</h3>
                <p>The hazardous areas of Platform killzones are marked on the killzone layout. Make sure they're clearly indicated when you begin play to avoid confusion - one good way is to use paper cut-outs to lay over the hazardous areas.</p>
                <p className="indentNote"><em>Hazardous areas represent boiling lava, seas infested with monsters, or a great height that will be fatal if fallen from. The roaring seas, indutrial smog, or high heat restrict visibility on the lower levels, pushing combat towards higher ground.</em></p>
                <p>No part of an operative’s base can be touching a hazardous area. Additionally, hazardous areas restrict targeting in the following ways:</p>
                <ul>
                    <li>When selecting a valid target for an operative on the killzone floor, an intended target on the killzone floor is not a valid target if 4” of hazardous area is between them.</li>
                    <li>When selecting a valid target for an operative on vantage terrain, an operative on the killzone floor is not a valid target if the footprint of a gantry is between them. The opposite is also true: an operative on the killzone floor to an intended target on vantage terrain with the footprint of a gantry in between them. However, in both cases, ignore the footprint of the gantry the active operative or the intended target is on or in.</li>
                </ul>
                <p>Operatives cannot use actions or ploys that involve tunneling or other underground activity on a Platform killzone.</p>
            </>
        }

        <h2 className="subHeading hovered" style={{ fontSize: 1.3 + 'em', marginLeft: 2 + '%' }} onClick={toggleDungeon}>Dungeon</h2>
        <div className="weaponLine" style={{ marginBottom: 20 + 'px', marginLeft: 1 + '%' }}></div>
        {visible_Dungeon &&
            <>
                <h3>Dungeon Walls</h3>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain/Terrain_Dungeon_01.png" className="imgGraphic" />
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain/Terrain_Heavy.png" className="imgGraphic" />
                    <p>Dungeon walls are heavy terrain and can contain doors, hatchways or breach points.</p>
                </figure>
                <ul>
                    <li>Operatives cannot move over or through Wall terrain (this takes precedence over all other rules).</li>
                    <li>Visibility cannot be determined over or through Wall terrain.</li>
                    <li>Other than theoretical areas of the killzone (centre of the killzone, drop zones, etc.), distances cannot be measured over or through Wall terrain; they must be measured around it using the shortest possible route.</li>
                    <li>For the purposes of cover and obscured, only the corners and ends of Wall terrain can intervene, unless the active operative has passed it.</li>
                </ul>
                <p>Dungeon killzones have an implied ceiling at the level of the top of the dungeon wall (generally 60-70mm from the killzone floor). </p>
                <p>Dungeons are wholly considered condensed terrain.</p>
                <p>Operatives are unable to use the <b>Pounce</b> action in a dungeon killzone.</p>
                <h3>Breach Points</h3>
                <p>In addition to doors or hatchways, dungeon walls may contain breach points. A breach point is a section of wall that's thinner, damaged, partially ruined, or otherwise compromised so that an operative can break through it with force.</p>
                <p>Breach points have two statuses: Open and closed. All breach points start the game closed, and the only way to open them is to use the <b>Breach</b> action (shown below and in the Special Actions section (3.5))</p>
                <div className="actionLine"></div>
                <div className="actionDiv">
                    <div className="titleBlock">
                        <p className="actionName">BREACH</p>
                        <p className="actionCost"><b>2AP</b></p>
                    </div>
                    <ul>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> Open a closed breach point with an access point within the operative’s control range.</li>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> An operative that has the word(s) “breach marker”, “grenadier” or “mine” on its datacard, or has a weapon with the Piercing 2 or Piercing Crits 2 weapon rule (excluding weapons that have the Blast or Torrent weapon rule) can perform this action for 1 less AP (to a minimum of 1AP), but it cannot do so during an activation/counteraction in which it performed the Charge or Shoot action (or vice versa).</li>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> Roll one D6 separately for each operative that’s on the other side of the access point and has that access point within its control range: on a 4+, subtract 1 from that operative’s APL stat until the end of its next activation and inflict damage on it equal to the dice result halved (rounding up).</li>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" /> An operative cannot perform this action while within control range of an enemy operative (on it's own side of the wall), or if that breach point is open.</li>
                    </ul>
                </div>
                <p>The elite operatives that form kill teams are specially equipped to overcome all manner of barriers. Some draw upon esoteric traits and adaptable skills to force a route to their target. From point-blank firepower and atomic destabilisers to bio-acids and raw strength fuelled by faith, operatives have a variety of methods at their disposal to breach weak points. The forces involved can result in extreme damage, with whizzing debris and violent shock waves hitting those unlucky enough to be on the other side.</p>
            </>
        }

        <h2 className="subHeading hovered" style={{ fontSize: 1.3 + 'em', marginLeft: 2 + '%' }} onClick={toggleRuins}>Ruins</h2>
        <div className="weaponLine" style={{ marginBottom: 20 + 'px', marginLeft: 1 + '%' }}></div>
        {visible_Ruins &&
            <>
                <h3>Ruined Structures</h3>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain/Terrain_Ruins_01.png" className="imgGraphic" />
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain/Terrain_Ruins_02.png" className="imgGraphic" />
                    <p>The above examples aren't, strictly speaking, 'ruins' but are examples of the kinds of structures used for Ruins killzones.</p>
                </figure>
                <p>Ruined Structures are mixed terrain with light, heavy and vantage elements and may include doors. There are also hatchways in the vantage elements that can be accessed vertically, both upwards and downwards, using the <b>Operate Hatchway</b> action.</p>
                <p>Operatives can climb up and drop down through open hatchways.</p>
                <div className="actionLine"></div>
                <div className="actionDiv">
                    <div className="titleBlock">
                        <p className="actionName">OPERATE HATCHWAY</p>
                        <p className="actionCost"><b>1AP</b></p>
                    </div>
                    <ul>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> Open or close a hatch that’s access point is within the operative’s control range.</li>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> An operative can perform this action during a <b>Dash</b> or <b>Reposition</b> action, and any remaining move distance can be used after it does so.</li>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" /> An operative cannot perform this action while within control range of an enemy operative, or if that hatchway is open and its access point is within an enemy operative’s control range.</li>
                    </ul>
                </div>
                <p>While a hatch is <b>closed</b>:</p>
                <ul style={{ textAlign: 'left' }}>
                    <li>Its hatch must be fully shut.</li>
                    <li>The access point and hatch itself are Heavy and Ceiling terrain.</li>
                </ul>
                <p>While a hatch is <b>open</b>:</p>
                <ul style={{ textAlign: 'left' }}>
                    <li>Its hatch must be fully open (it cannot be ajar).</li>
                    <li>Its access point is Accessible, Insignificant and Exposed terrain.</li>
                    <li>Its door is Heavy and Ceiling terrain, and the gap directly underneath it is Blocking terrain.</li>
                </ul>
                <h3>Scrap Piles</h3>
                <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain/Terrain_Scrap.png" className="imgGraphic" />
                <p>An operative cannot climb over a Scrap Pile. Instead it must perform an action to navigate through and around a Scrap Pile.</p>
                <div className="actionLine"></div>
                <div className="actionDiv">
                    <div className="titleBlock">
                        <p className="actionName">SCRAMBLE REPOSITION</p>
                        <p className="actionCost"><b>1AP</b></p>
                    </div>
                    <ul>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> An operative can perform this action while within control range of a Scrap Pile. Remove this operative from the killzone then set it up within control range of the Scrap Pile it started within range of for this action. It cannot be setup within control range of enemy operatives.</li>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" /> An operative cannot perform this action if it is within control range of an enemy operative. This action is treated as a <b>Reposition</b> action.</li>
                    </ul>
                </div>
                <br />
                <div className="actionLine"></div>
                <div className="actionDiv">
                    <div className="titleBlock">
                        <p className="actionName">SCRAMBLE CHARGE</p>
                        <p className="actionCost"><b>1AP</b></p>
                    </div>
                    <ul>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> An operative can perform this action while within control range of a Scrap Pile. Remove this operative from the killzone then set it up within control range of the Scrap Pile it started within range of for this action. It must be setup within control range of at least 1 enemy operative after being placed.</li>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" /> An operative cannot perform this action if it is within control range of an enemy operative and/or if it has a conceal order. This action is treated as a <b>Charge</b> action, however, an operative can still perform the <b>Dash</b> action before or after a <b>Scramble Charge</b>.</li>
                    </ul>
                </div>
            </>
        }

        <h2 className="subHeading hovered" style={{ fontSize: 1.3 + 'em', marginLeft: 2 + '%' }} onClick={toggleSprawl}>Sprawl</h2>
        <div className="weaponLine" style={{ marginBottom: 20 + 'px', marginLeft: 1 + '%' }}></div>
        {visible_Sprawl &&
            <>
                <h3>Buildings</h3>
                <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain/Terrain_Sprawl_01.png" className="imgGraphic" />
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain/Terrain_Sprawl_02.png" className="imgGraphic" />
                    <p>Buildings are tall, blocking structures such as skyscrapers and towering pillars. Whole, realistically scaled models can be impractical on the tabletop, so things like cardboard boxes or Dungeon Wall terrain set up in enclosed squares can be used.</p>
                </figure>
                <p>Buildings are heavy terrain and are impassable. They constrict the killzone to a maze of narrow corridors, restricting movement.</p>
                <h3>Exhaust Vents</h3>
                <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain/Terrain_ExhaustVent.png" className="imgGraphic" />
                <p>Exhaust vents are light terrain and have two states: Open and closed. While open, exhaust vents produce a smoke area with a 3" radius around their middle point. Refer to Smoke Grenade rules (5.2) for more information regarding smoke areas.</p>
                <div className="actionLine"></div>
                <div className="actionDiv">
                    <div className="titleBlock">
                        <p className="actionName">TOGGLE VENT</p>
                        <p className="actionCost"><b>1AP</b></p>
                    </div>
                    <ul>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> An operative can perform this action while within control range of an Exhaust Vent. Switch the state of the Exhaust Vent to either open or closed.</li>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" /> An operative cannot perform this action if it is within control range of an enemy operative and/or if it has a conceal order.</li>
                    </ul>
                </div>
                <h3>Moving Through Buildings</h3>
                 <figure>
                    <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain/Terrain_Sprawl_03.png" className="imgGraphic" />
                    <p>Example access points for a building on a Sprawl killzone.</p>
                </figure>
                <p>Operatives can access and traverse buildings with access points using the following action:</p>
                <div className="actionLine"></div>
                <div className="actionDiv">
                    <div className="titleBlock">
                        <p className="actionName">TRAVERSE BUILDING</p>
                        <p className="actionCost"><b>1AP</b></p>
                    </div>
                    <ul>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> If an operative is within control range of a building's access point, it can enter the building. Remove it from the killzone for the rest of the turning point. This is treated as a <b>Reposition</b> action.</li>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> An operative traversing a building can exit the building. Replace it on the killzone floor within control range of one of the building's access points. This is treated as a <b>Reposition</b> action.</li>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/yes.svg" className="svgImg" /> If an enemy operative is in the building when the active operative attempts to exit, it must <b>Fight</b> the enemy operative to do so, with the enemy operative treated as the attacker. Once the <b>Fight</b> action has been resolved, it may exit. When fighting in this way, a maximum of one operative per player participates</li>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" /> An operative cannot perform this action if it is within control range of an enemy operative and/or if it has a conceal order.</li>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" /> Operatives cannot score VP or carry markers when using this action.</li>
                        <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/icons/no.svg" className="svgImg" /> An operative can only perform this action once per turning point.</li>
                    </ul>
                </div>
            </>
        }
    </div>
  )
}

export default TerrainRules
