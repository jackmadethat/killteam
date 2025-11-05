const UniversalEquipment = () => {
  return (
    <div className="sectionContent" id="universalEquipment">
        
        <p>Equipment is either Universal (listed below) or Faction (specific to your particular kill team, detailed in your kill team's rules). Teams can choose a <em>maximum of 4 equipment options</em> from either Universal or Faction Equipment listed in that kill team's rules. Note that not all Universal equipment is available to all kill teams.</p>
        
        <h3>Ammo Cache</h3>
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/ammo-cache.png" className="imgGraphic" style={{ maxWidth: 200 + 'px', maxHeight: 200 + 'px', marginLeft: 2 + '%' }} />
        <p>Before the battle, you can set up one of your Ammo Cache markers wholly within your territory. Friendly operatives can perform the following mission action during the battle.</p>
        
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">AMMO RESUPPLY</p>
                <p className="actionCost"><b>0AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> One of your Ammo Cache markers the active operative controls is used this turning point.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> Until the start of the next turning point, whenever this operative is shooting with a weapon from its datacard, you can re-roll one of your attack dice.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> An operative cannot perform this action while within control range of an enemy operative, if that marker isn’t yours, or if that marker has been used this turning point.</li>
            </ul>
        </div>
        
        <h3>Comms Device</h3>
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/comms-device.png" className="imgGraphic" style={{ maxWidth: 200 + 'px', maxHeight: 200 + 'px', marginLeft: 2 + '%' }} />
        <p>Before the battle, you can set up one of your Comms Device markers wholly within your territory. While a friendly operative controls this marker, add 3" to the distance requirements of its <b>SUPPORT</b> rules that refer to friendly operatives (e.g., "select a friendly operative within 6" would be "within 9" instead"). Note you cannot benefit from your opponent’s Comms Device markers.</p>
        
        <h3>Mines</h3>
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/mines.png" className="imgGraphic" style={{ maxWidth: 200 + 'px', maxHeight: 200 + 'px', marginLeft: 2 + '%' }} />
        <p>Before the battle, you can set up up to one of your Mines markers wholly within your territory and more than 2" from other markers, access points and accesible terrain. The first time that marker is within an operative’s control range, remove that marker and inflict D3+3 damage on that operative.</p>
        
        <h3>Razor Wire</h3>
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/razor-wire.png" className="imgGraphic" style={{ maxWidth: 200 + 'px', maxHeight: 200 + 'px', marginLeft: 2 + '%' }} />
        <p>Razor wire is Exposed and Obstructing terrain. Before the battle, you can set it up wholly within your territory, on the killzone floor and more than 2" from all other equipment terrain features, access points and accesible terrain.</p>
        <p><strong>Obstructing:</strong> Whenever an operative would cross over this terrain feature within 1" of it, treat the distance as an additional 1".</p>
        
        <h3>Light Barricades</h3>
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/light-barricade.png" className="imgGraphic" style={{ maxWidth: 200 + 'px', maxHeight: 200 + 'px', marginLeft: 2 + '%' }} />
        <p>Light barricades are Light terrain, except the feet, which are Insignificant and Exposed. Before the battle, you can set up any number of them wholly within your territory, on the killzone floor and more than 2" from other equipment terrain features, access points and accesible terrain.</p>
        
        <h3>Heavy Barricade</h3>
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/heavy-barricade.png" className="imgGraphic" style={{ maxWidth: 200 + 'px', maxHeight: 200 + 'px', marginLeft: 2 + '%' }} />
        <p>A heavy barricade is Heavy terrain. Before the battle, you can set it up wholly within 4" of your drop zone, on the killzone floor and more than 2” from other equipment terrain features, access points and accesible terrain.</p>
        
        <h3>Ladders</h3>
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/ladder.png" className="imgGraphic" style={{ maxWidth: 200 + 'px', maxHeight: 200 + 'px', marginLeft: 2 + '%' }} />
        <p>Ladders are Exposed terrain. Before the battle, you can set up any number of them as follows:</p>
        <ul>
            <li>Wholly within your territory.</li>
            <li>Upright against terrain that has a height of at least 2".</li>
            <li>More than 2" from other equipment terrain features.</li>
            <li>More than 1" from doors and access points.</li>
        </ul>
        <p>Additionally, an operative can either move thorugh ladders as if they aren't there (but cannot finish on them), or climb them. Once per action, whenever an operative is climbing this terrain feature, treat the vertical distance as 1". Note that if an operative then continues climbing another terrain feature during that action (including another ladder), that distance is determined as normal.</p>
        
        <h3>Portable Barricade</h3>
        <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/portable-barricade.png" className="imgGraphic" style={{ maxWidth: 200 + 'px', maxHeight: 200 + 'px', marginLeft: 2 + '%' }} />
        <p>A portable barricade is Light, Protective and Portable terrain. Before the battle, you can set it up wholly within your territory, on the killzone floor and more than 2" from all other equipment terrain features, access points and accesible terrain.</p>
        <p><b>Protective:</b> While an operative is in Cover behind this terrain feature, improve its Save stat by 1 (to a maximum of 2+).</p>
        <p><b>Portable:</b> This terrain feature only provides cover while an operative is connected to it and if the shield is intervening (ignore its feet). Operatives connected to the inside of it can perform the following unique action during the battle.</p>
        
        <div className="actionLine"></div>
        <div className="actionDiv">
            <div className="titleBlock">
                <p className="actionName">MOVE WITH BARRICADE</p>
                <p className="actionCost"><b>1AP</b></p>
            </div>
            <ul>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> The same as the <b>Reposition</b> action, except the active operative can move no more than its Move stat minus 2" and cannot climb, drop, jump or use any kill team\'s rules that remove it and set it back up again (e.g. HEARTHKYN SALVAGER FLY, MANDRAKE SHADOW PASSAGE).</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/yes.svg" className="svgImg" /> Before this operative moves, remove the portable barricade it is connected to. After the operative moves, set up the portable barricade so that it is once again, but the portable barricade cannot be set up within 2" of other equipment terrain features, access points or Accessible terrain. If this is not possible, the portable barricade is not set up again.</li>
                <li><img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/no.svg" className="svgImg" /> This action is treated as a <b>Reposition</b> action. An operative cannot perform the Move with Barricade action in the same turning point in which it performed the <b>Fall Back</b> or <b>Charge</b> actions.</li>
            </ul>
        </div>

        <figure>
            <img src="https://raw.githubusercontent.com/jackmadethat/killteam/refs/heads/main/src/img/portable_barricade-1.png" className="imgGraphic" style={{ maxWidth: 200 + 'px', maxHeight: 200 + 'px' }} />
            <p>The operative must contact both feet of the inside of the portable barricade to be connected to it.</p>
        </figure>
    </div>
  )
}

export default UniversalEquipment
