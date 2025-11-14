const Introduction = () => {
  return (
    <div className="sectionContent" id="introduction">
      <p><em>Kill Team</em> is a tactical combat tabletop game set in a grim, dark future. Two rival teams of highly skilled operatives battle and complete objectives to achieve victory. It's a completely separate game from Warhammer 40k, focusing on small-scale battles between individual characters rather than big armies. The tight scale, shorter game length and low number of units makes Kill Team one of the most accessible ways to get into tabletop wargaming hobby.</p>
      <p>The game is designed for Warhammer 40k miniatures, but teams of other miniatures are fine (referred to as 'proxies') as long as they comply with Kill Team Rules. This compendium uses many homebrew rules, details and features, and therefore differs from official rules, but broadly complies.</p>
      <p>While the game is primarily played with 2 players, Co-Op and single player missions are possible, and a great way to learn the ropes before playing against other players.</p>
      <h3>What you'll need to play Kill Team:</h3>
      <ul>
        <li>A team for each player (between 6 and 15 models, depending on your faction)</li>
        <li>A play area (referred to as the 'killzone') of 30" x 22" or 703mm x 606mm divided into a 7x6 grid, depending on terrain setup</li>
        <div className="mapGrid">
          <img src="https://github.com/jackmadethat/killteam/raw/refs/heads/main/src/img/maps/Killzone_Standard_Blank.svg" className="mapImage" alt="30 x 22 inch killzone" />
          <img src="https://github.com/jackmadethat/killteam/raw/refs/heads/main/src/img/maps/Killzone_Grid_Blank.svg" className="mapImage" alt="703mm x 606mm, 7x6 Grid killzone" />
        </div>
        <li>Game rules for reference, mission pack for game-specific rules, and rules for each kill team
          <p className="indentNote"><em>Much of the above is freely available online on the <a href="https://www.warhammer-community.com/en-gb/downloads/kill-team/">Warhammer Community website</a> or in the free <a href="https://play.google.com/store/apps/details?id=com.gamesworkshop.kt3">Kill Team mobile app</a>. The 'Lite Rules' document is a perfect, three-page reference containing enough of the core rules to play a complete game.</em></p>
        </li>
        <li>Terrain and equipment markers, either from official Kill Team box sets or improvised from elsewhere (Jenga blocks are a surprisingly effective proxy for terrain)</li>
        <li>A measurement device, such as measuring tape or a ruler</li>
        <li>A way to track score and other data for the duration of the game, such as a notepad</li>
        <li>Around 10 six-sided dice (D6)</li>
        <li>Gameplay tokens
          <p className="indentNote"><em><a href="https://github.com/jackmadethat/killteam/raw/refs/heads/main/src/assets/KillTeamTokens_Printable.zip">Click here</a> to download printable A4 sheets with all the tokens you'll need for a game of Kill Team.</em></p>
        </li>
      </ul>
    </div>
  )
}

export default Introduction