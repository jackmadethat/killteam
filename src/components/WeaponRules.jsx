function WeaponRules() {
  return (
    <div className="sectionContent" id="weaponRules">
      <p>Weapon rules apply whenever a friendly operative uses a weapon that has them. Common weapon rules can be found below, and you may find rare weapon rules in your kill team’s rules. Weapons gain no benefit from having the same weapon rule more than once, unless the weapon rule has an x, in which case select which x to use. If a friendly operative is using a weapon that has multiple weapon rules that would take effect at the same time, you can choose the order they take effect.</p>
      <h3>Accurate X</h3>
      <p>You can retain up to x attack dice as normal successes without rolling them. If a weapon has more than one instance of Accurate x, you can treat it as one instance of Accurate 2 instead (this takes precedence over x rules above).</p>
      <h3>Balanced</h3>
      <p>You can re-roll one of your attack dice.</p>
      <h3>Blast X</h3>
      <p>The target you select is the primary target. After shooting the primary target, shoot with this weapon against each secondary target in an order of your choice (roll each sequence separately). Secondary targets are other operatives visible to and within x of the primary target, e.g., Blast 2” (they are all valid targets, regardless of a Conceal order). Secondary targets are in cover and obscured if the primary target was.</p>
      <h3>Brutal</h3>
      <p>Your opponent can only block with critical successes.</p>
      <h3>Ceaseless</h3>
      <p>You can re-roll any of your attack dice results of one result (e.g., results of 2).</p>
      <h3>Devastating X</h3>
      <p>Each retained critical success immediately inflicts x damage on the operative this weapon is being used against, e.g., Devastating 3. If the rule starts with a distance (e.g., 1” Devastating x), inflict x damage on that operative and each other operative visible to and within that distance of it. Note that success isn’t discarded after doing so—it can still be resolved later in the sequence.</p>
      <h3>Heavy</h3>
      <p>An operative cannot use this weapon in an activation or counteraction in which it moved, and it cannot move in an activation or counteraction in which it used this weapon. If the rule is Heavy (x only), where x is a move action, only that move is allowed, e.g., Heavy (Dash only). This weapon rule has no effect on preventing the Guard action.</p>
      <h3>Hot</h3>
      <p>After an operative uses this weapon, roll one D6. If the result is less than the weapon’s Hit stat, inflict damage on that operative equal to the result multiplied by two. If it’s used multiple times in one action (e.g., Blast), still only roll one D6.</p>
      <h3>Lethal X+</h3>
      <p>Your successes equal to or greater than x are critical successes, e.g., Lethal 5+.</p>
      <h3>Limited X</h3>
      <p>After an operative uses this weapon a number of times in the battle equal to x, they no longer have it. If it’s used multiple times in one action (e.g., Blast), treat this as one use.</p>
      <h3>Piercing X</h3>
      <p>The defender collects x less defence dice, e.g., Piercing 1. If the rule is Piercing Crits x, this only comes into effect if you retain any critical successes.</p>
      <h3>Punishing</h3>
      <p>If you retain any critical successes, you can retain one of your fails as a normal success instead of discarding it.</p>
      <h3>Range X</h3>
      <p>Only operatives within x of the active operative can be valid targets, e.g., Range 9”</p>
      <h3>Relentless</h3>
      <p>You can re-roll any of your attack dice.</p>
      <h3>Rending</h3>
      <p>If you retain any critical successes, you can retain one of your normal successes as a critical success instead.</p>
      <h3>Saturate</h3>
      <p>The defender cannot retain cover saves.</p>
      <h3>Seek</h3>
      <p>When selecting a valid target, operatives cannot use terrain for cover. If the rule is Seek Light, operatives cannot use Light terrain for cover. Whilst this can allow such operatives to be targeted (assuming they’re visible), it doesn’t remove their cover save (if any).</p>
      <h3>Severe</h3>
      <p>If you don’t retain any critical successes, you can change one of your normal successes to a critical success. The Devastating and Piercing Crits weapon rules still take effect, but Punishing and Rending don’t.</p>
      <h3>Shock</h3>
      <p>The first time you strike with a critical success in each sequence, also discard one of your opponent’s unresolved normal successes (or a critical success if there are none).</p>
      <h3>Silent</h3>
      <p>An operative can perform the Shoot action with this weapon while it has a Conceal order.</p>
      <h3>Stun</h3>
      <p>If you retain any critical successes, subtract 1 from the APL stat of the operative this weapon is being used against until the end of its next activation.</p>
      <h3>Torrent X</h3>
      <p>Select a valid target as normal as the primary target, then select any number of other valid targets within x of the first valid target as secondary targets, e.g., Torrent 2”. Shoot with this weapon against all of them in an order of your choice (roll each sequence separately).</p>
    </div>
  )
}

export default WeaponRules
