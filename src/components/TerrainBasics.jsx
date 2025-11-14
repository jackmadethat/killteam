const TerrainBasics = () => {
  return (
    <div className="sectionContent" id="terrainBasics">
        <p>A terrain feature is composed of different parts, each of which is a type of terrain (one part can be more than one type). If you are using a terrain feature from a specific killzone, the type of each part of that terrain feature will be specified. If you are using a terrain feature from a killzone of your own creation, you must specify the type of each part of that terrain feature before the battle.</p>
        <p>Circumstances may arise where cover, obscurity and visibility may not be clear, such as when an operative is partially concealed by heavy terrain. In these cases, some intuition and friendly sportsmanship should be employed: For example, an operative with an engage order partially concealed by heavy terrain can be considered to be in cover, but not obscured, and is therefore a valid shooting target. An operative with a conceal order that is in cover, even partially, is not a valid shooting target. When in doubt, look from the operative's physical head for a sightline or use a laser pointer.</p>
        <p>The most common types of terrain are below, but some killzones may have their own types.</p>
        
        <h3>Heavy</h3>
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain/Terrain_Heavy.png" className="imgGraphic" />
        <p>Larger terrain is heavy. It provides cover and can obscure operatives. Heavy terrain can be walls, structures, boulders, vehicles, or anything large and impassable.</p>

        <h3>Light</h3>
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain/Terrain_Light.png" className="imgGraphic" />
        <p>Smaller terrain is light. It provides cover without obscuring operatives.</p>
        <p className="indentNote"><em>It’s good to have a mixture of light and heavy terrain in your killzone, as rules and operatives interact with each type differently.</em></p>
        
        <h3>Blocking</h3>
        <p>Blocking terrain is usually attributed to gaps between or underneath a terrain feature such as tiny holes or cavities. Visibility cannot be drawn through such gaps, and for the purposes of cover and obscured, the gaps are intervening like the terrain around it.</p>
        <p className="indentNote"><em>Technically, blocking terrain isn’t actually physical terrain, but rather the gaps operatives shouldn’t be able to see through. Blocking terrain is rare, but it exists for necessary instances.</em></p>
        
        <h3>Vantage</h3>
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain/Terrain_Vantage.png" className="imgGraphic" />
        <p>Vantage terrain is the upper levels of the killzone - areas operatives can be placed upon above the killzone floor. If terrain is not vantage terrain, then operatives can move over it, but they cannot finish a move or be set up on it. Vantage terrain is also light terrain. Vantage terrain has the following main features:</p>
        <ul>
            <li>Whenever an operative on vantage terrain is shooting an operative that has an engage order, its ranged weapon has the Accurate 1 weapon rule if the target operative is at least 2" lower than it, or Accurate 2 if the target operative is at least 4" lower than it.</li>
            <li>Whenever you are selecting a valid target for an operative on vantage terrain, operatives at least 2" lower than that operative with a conceal order cannot use light terrain for cover. Whilst this can allow such operatives to be targeted (assuming they’re visible), it doesn’t remove their cover save, and the defender can retain it as a critical success instead, or retain one additional cover save.</li>
            <li>For the purposes of obscured, ignore heavy terrain connected to vantage terrain the active operative or the intended target is on.</li>
        </ul>
        <p>As vantage terrain is also light, an operative on vantage terrain will often be in cover from operatives lower than them — imagine them crouching down to gain a cover save or avoid being a valid target.</p>
        <p>An operative on vantage terrain can target an operative with a conceal order that’s 2” lower than them and only in cover from light terrain.</p>
        <p>If an operative is obstructed from moving across vantage terrain by enemy operatives or other terrain features, it can move around these obstructions (without dropping off) so long as part of its base is always on the vantage terrain.</p>
        <figure>
            <div className="diagramDiv">
              <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/operativediagrams/OperativeDiagram_Vantage.svg" className="imgGraphic diagramClipFix" />
            </div>
            <p>Operative B has a Conceal order and is in cover from light terrain, but since operative A is on vantage terrain and at least 2” higher, operative B is a valid target.</p>
        </figure>
        
        <h3>Accessible</h3>
        <figure>
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/terrain/Terrain_Accessible.png" className="imgGraphic" />
        <p>The hatch in the above image is accessible while it's open and heavy terrain while it's closed.</p>
        </figure>
        <p>Operatives can move through Accessible terrain, such as doors and hatchways (this takes precedence over bases, terrain and movement), but it counts as an additional 1" to do so. Only the center of an operative’s base needs to move through Accessible terrain, so base sizes are irrelevant. Operatives must be on one side of accessible terrain or the other - they can't end a movement in the middle of a doorway.</p>
        
        <h3>Insignificant</h3>
        <p>Insignificant terrain is usually very small, such as small piles of rubble or debris. For the purposes of climbing and dropping, ignore it.</p>
        <p>An operative can move over and across Insignificant terrain without going up and down.</p>
        
        <h3>Exposed</h3>
        <p>Exposed terrain is usually very small, or terrain with large gaps that operatives shouldn’t be able to take cover behind, such as a chain link fence.</p>
        <p>It’s particularly important to identify insignificant and exposed terrain before the battle, to prevent misunderstandings later on.</p>
        
        <h3>Ceiling</h3>
        <p>Operatives with a round base of 50mm or less, or an oval base of 60x35mm, can move underneath ceiling terrain regardless of the operative’s height. The operative must still finish the action in a location it can be placed. If the operative's model is too tall, temporarily substitute it for a token matching it's base size.</p>

        <h3>Equipment</h3>
        <p>Equipment can be set up on vantage terrain, on the killzone floor and within 2" of accessible terrain (this takes precedence over the usual restrictions).</p>

        <h3>Condensed Environment</h3>
        <p>Weapons with the Blast, Torrent and/or x" Devastating (i.e. Devastating with a distance requirement) weapon rule also have the Lethal 5+ weapon rule.</p>
    </div>
  )
}

export default TerrainBasics
