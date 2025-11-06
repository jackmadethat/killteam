const Strategy = () => {
  return (
    <div className="sectionContent" id="strategy">
      <p>Kill Team can seem like quite a dense game, rules-wise, and it can be difficult to focus on your actual tactics and strategy during a game while you're trying to keep track of rules for your kill team, your opponent's kill team, and the game itself. Here are some simple tips for consideration that can shift the balance in your favor.</p>

      <h4>Staging</h4>
      <div className="weaponLine"></div>
      <p style={{ marginLeft: 3 + '%' }}>Staging is when you position an operative to perform critical actions later, much like board control in the game of chess. Dont be afraid to do very little with an activation if there's a chance you can score more points later. Position a concealed operative so it can charge an enemy operative that challenges a nearby objective. Position an oeprative at a hidden angle so that it can flank a likely spot of cover that your opponent might want. Take forward positions to potentially perform pincer maneuvers with two or more operatives. Remember that victory points matter more to winning than eliminating operatives, so prioritize your objectives and stage your operatives accordingly.</p>

      <h4>Sequencing</h4>
      <div className="weaponLine"></div>
      <p style={{ marginLeft: 3 + '%' }}>The order you activate your operatives changes the flow of the game. Think about action and target priority and get the important stuff done before it's too late. A well-placed sniper can shoot twice (or more) in a single activation, which can be devastating for an exposed operative, but a hopeful pot-shot is far less important than scoring a point by fulfilling an objectve before going for the lucky shot, if you can or should do so. Don't be lucky, be smarter. </p>
      <p style={{ marginLeft: 3 + '%' }}>
      Furthermore, consider activating your weaker operatives early in the turning point - Kill teams with smaller numbers can be put at an easy disadvantage by forcing the activation of all their operatives before stronger and more valuable operatives are activated in larger kill teams. Counteracting is only a single 1AP action and a counteracting operative can't move more than 2", after all. That said, multiple weaker operatives can be more dangerous than a single, stronger operative, so plan ahead and remember that points are more important than eliminations.</p>
      
      <h4>Target Ready Operatives</h4>
      <div className="weaponLine"></div>
      <p style={{ marginLeft: 3 + '%' }}>A ready operative is an operative that can perform actions in the current turning point. An expended operative is no longer a threat (aside from potentially counteracting). As a general rule of thumb, expended operatives can be dealt with later, but ready operatives need to be dealt with now. It may feel unintuitive, since you probably want to eliminate the operative that just jumped out and attacked one of yours, but only eliminating expended operatives hands control to your opponent, lets them trade favourably, and can needlessly give away VP.</p>

      <h4>Don't be Afraid to Trade</h4>
      <div className="weaponLine"></div>
      <p style={{ marginLeft: 3 + '%' }}>Gaining an advantage rarely comes without sacrifice. If you're too afraid to commit to a strategy your opponent can easily out-stage you, taking all the favorable positions on the killzone and your team gets destroyed in the later turning points. Put out bait and be prepared to lose operatives and then, when it happens, be in a good position to capitalize. An example might be positioning an operative in a forward location to threaten an objective, score an easy point or pressure the opponent. The purpose of doing so may be to draw enemy operatives away from other positions leaving them isolated and exposed, scoring points, or misdirecting the opponent. </p>
      <p style={{ marginLeft: 3 + '%' }}>That said, don't treat your operatives like kamikaze pilots, but also don't coddle them; a high-risk play needs to have some kind of pay-off, but playing passively or too defensively because you don't want to lose operatives will not win you games. Likewise, if you have more operatives than your opponent, trading 1-for-1 is usually wise, but if you have fewer operatives than your opponent, try to gain a point with your activation before risking an elimination.</p>

      <h4>Charge Into Cover</h4>
      <div className="weaponLine"></div>
      <p style={{ marginLeft: 3 + '%' }}>Try to end your charges in cover. It's common to end charges in the open next to cover but be mindful of whether your opponent's operative is already in cover and your operative is left exposed. You can often get into cover and fight around or across it, so that if and when you eliminate the operative, you'll have cover against enemy reprisal. Even better if your kill team has the ability to charge with a conceal order.</p>

      <h4>Stand Concealed with Your Head Out</h4>
      <div className="weaponLine"></div>
      <p style={{ marginLeft: 3 + '%' }}>The best way for an operative to end it's activation is with it's head out so it can see as much as possible and (ideally) with half it's base behind cover. The safest way is as described but with a conceal order. This means that, in it's next activation, you can give it an engage order and then shoot without coming out of cover first, which can be game-changing.</p>

      <h4>Consider Threat Ranges</h4>
      <div className="weaponLine"></div>
      <p style={{ marginLeft: 3 + '%' }}>Especially during the first turning point when you dash and reposition forward, consider from where your enemy can threaten you, either with a charge or reposition + dash actions. Then decide why your operative should be where you're thinking of putting it. If it's in shooting range of an enemy operative or will be after a reposition or dash, why? The position of your operatives is massively important, so don't move an operative without a good reason. Do you want to threaten an objective, take a forward position, protect a valuable operative or put pressure on your opponent. Best of all is if your threat range is further than your opponent's, maybe because you have 3APL so you can add a dash into your range, or maybe you just have a higher move stat. This means you can stay outside of their threat range while keeping them within yours.</p>

      <h4>Mind Your Inches</h4>
      <div className="weaponLine"></div>
      <p style={{ marginLeft: 3 + '%' }}>Remember that movement is calculated in straight lines with a minimum of 1", even if. To move around corners, for example, you may have to spend a whole inch to get your operative's base around an edge before proceeding forward. This can be costly for operatives with larger bases, such as 40mm, as you may have to take 2" just to clear the base. Some players like to be very precise with movement (to a fault) so try to keep an inch in the bag when calculating your movements. One potential solution to this is to bend the rules slightly and use a 'bicycle chain' ruler, but this almost certainly won't be permitted in tournament play.</p>

      <h4>Don't Bet on Initiative</h4>
      <div className="weaponLine"></div>
      <p style={{ marginLeft: 3 + '%' }}>Activation order (initiative) is determined at the start of each turning point in the strategy phase - don't count on having it. What this means is don't leave your operatives exposed or vulnerable because you're counting on having initiative in the next turning point. Play as if you won't.</p>
      
    </div>
  )
}

export default Strategy
