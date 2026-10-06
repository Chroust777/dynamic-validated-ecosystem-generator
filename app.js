"use strict";

// Earthborne Rangers CROSS-12 Dynamic Path Generator — VBA v7.9.7 port.
// Static/offline browser implementation for GitHub Pages. No external libraries.

const DESIGN_DATA = [{"id":1,"name":"Prowling Wolhund","range":"1–3/12","firstNo":1,"ecosystem":"Woods","type":"Being","traits":"Predator / Mammal","copies":3,"presence":2,"dynamic":false,"presenceFormula":""},{"id":2,"name":"Sitka Buck","range":"4–6/12","firstNo":4,"ecosystem":"Woods","type":"Being","traits":"Prey / Mammal","copies":3,"presence":1,"dynamic":false,"presenceFormula":""},{"id":3,"name":"Sitka Doe","range":"7/12","firstNo":7,"ecosystem":"Woods","type":"Being","traits":"Prey / Mammal","copies":1,"presence":1,"dynamic":false,"presenceFormula":""},{"id":4,"name":"Caustic Mulcher","range":"8/12","firstNo":8,"ecosystem":"Woods","type":"Being","traits":"Biomeld","copies":1,"presence":3,"dynamic":false,"presenceFormula":""},{"id":5,"name":"Sunberry Bramble","range":"9–10/12","firstNo":9,"ecosystem":"Woods","type":"Feature","traits":"Flora / Food","copies":2,"presence":1,"dynamic":false,"presenceFormula":""},{"id":6,"name":"Overgrown Thicket","range":"11–12/12","firstNo":11,"ecosystem":"Woods","type":"Feature","traits":"Flora / Obstacle","copies":2,"presence":1,"dynamic":false,"presenceFormula":""},{"id":7,"name":"Dozing Bearsloth","range":"1–2/12","firstNo":1,"ecosystem":"Old-Growth","type":"Being","traits":"Predator / Mammal","copies":2,"presence":2,"dynamic":false,"presenceFormula":""},{"id":8,"name":"Kleptic Raccoon","range":"3/12","firstNo":3,"ecosystem":"Old-Growth","type":"Being","traits":"Prey / Mammal","copies":1,"presence":1,"dynamic":false,"presenceFormula":""},{"id":9,"name":"Cloudhive","range":"4/12","firstNo":4,"ecosystem":"Old-Growth","type":"Feature","traits":"Prey / Lair / Food","copies":1,"presence":1,"dynamic":false,"presenceFormula":""},{"id":10,"name":"Cloudhive Swarm","range":"5–6/12","firstNo":5,"ecosystem":"Old-Growth","type":"Being","traits":"Insect / Swarm","copies":2,"presence":1,"dynamic":true,"presenceFormula":"Počet včelích žetonů na Swarmu"},{"id":11,"name":"Puffercrawler","range":"7/12","firstNo":7,"ecosystem":"Old-Growth","type":"Being","traits":"Biomeld / Flora","copies":1,"presence":2,"dynamic":false,"presenceFormula":""},{"id":12,"name":"Hanging Cherry Moss","range":"8–9/12","firstNo":8,"ecosystem":"Old-Growth","type":"Feature","traits":"Flora / Food","copies":2,"presence":0,"dynamic":false,"presenceFormula":""},{"id":13,"name":"Rotting Dolewood","range":"10–11/12","firstNo":10,"ecosystem":"Old-Growth","type":"Feature","traits":"Hazard / Flora / Obstacle","copies":2,"presence":2,"dynamic":false,"presenceFormula":""},{"id":14,"name":"Dolewood Canopy","range":"12/12","firstNo":12,"ecosystem":"Old-Growth","type":"Feature","traits":"Flora / Ascent","copies":1,"presence":1,"dynamic":false,"presenceFormula":""},{"id":15,"name":"Circling Irix","range":"1–2/12","firstNo":1,"ecosystem":"Mountain Pass","type":"Being","traits":"Predator / Avian","copies":2,"presence":2,"dynamic":false,"presenceFormula":""},{"id":16,"name":"Pouncing Atrox","range":"3–4/12","firstNo":3,"ecosystem":"Mountain Pass","type":"Being","traits":"Predator / Mammal","copies":2,"presence":2,"dynamic":false,"presenceFormula":""},{"id":17,"name":"Agitated Meadowlarks","range":"5–6/12","firstNo":5,"ecosystem":"Mountain Pass","type":"Being","traits":"Prey / Avian","copies":2,"presence":1,"dynamic":false,"presenceFormula":""},{"id":18,"name":"Fresh Sitka Carcass","range":"7/12","firstNo":7,"ecosystem":"Mountain Pass","type":"Feature","traits":"Prey","copies":1,"presence":3,"dynamic":false,"presenceFormula":""},{"id":19,"name":"Fractalwire","range":"8–9/12","firstNo":8,"ecosystem":"Mountain Pass","type":"Feature","traits":"Hazard / Flora / Obstacle","copies":2,"presence":2,"dynamic":false,"presenceFormula":""},{"id":20,"name":"Shale Scree","range":"10–11/12","firstNo":10,"ecosystem":"Mountain Pass","type":"Feature","traits":"Hazard / Ascent / Obstacle","copies":2,"presence":2,"dynamic":false,"presenceFormula":""},{"id":21,"name":"Spiderline Stanchion","range":"12/12","firstNo":12,"ecosystem":"Mountain Pass","type":"Feature","traits":"Structure","copies":1,"presence":0,"dynamic":false,"presenceFormula":""},{"id":22,"name":"Skittish Opilion","range":"1–2/12","firstNo":1,"ecosystem":"Ravine","type":"Being","traits":"Predator / Arachnid","copies":2,"presence":1,"dynamic":false,"presenceFormula":""},{"id":23,"name":"Nycta Bats","range":"3–4/12","firstNo":3,"ecosystem":"Ravine","type":"Being","traits":"Prey / Mammal / Swarm","copies":2,"presence":2,"dynamic":false,"presenceFormula":""},{"id":24,"name":"Tryptafolium","range":"5–6/12","firstNo":5,"ecosystem":"Ravine","type":"Feature","traits":"Flora / Food","copies":2,"presence":0,"dynamic":false,"presenceFormula":""},{"id":25,"name":"Loose Boulders","range":"7–8/12","firstNo":7,"ecosystem":"Ravine","type":"Feature","traits":"Hazard / Ascent / Obstacle","copies":2,"presence":2,"dynamic":false,"presenceFormula":""},{"id":26,"name":"Web Wall","range":"9–10/12","firstNo":9,"ecosystem":"Ravine","type":"Feature","traits":"Hazard / Obstacle","copies":2,"presence":1,"dynamic":false,"presenceFormula":""},{"id":27,"name":"Fraying Rope Bridge","range":"11/12","firstNo":11,"ecosystem":"Ravine","type":"Feature","traits":"Structure / Hazard / Trail","copies":1,"presence":2,"dynamic":false,"presenceFormula":""},{"id":28,"name":"Talus Cave","range":"12/12","firstNo":12,"ecosystem":"Ravine","type":"Feature","traits":"Lair","copies":1,"presence":1,"dynamic":false,"presenceFormula":""},{"id":29,"name":"Wading Ursus","range":"1–3/12","firstNo":1,"ecosystem":"River","type":"Being","traits":"Predator / Mammal","copies":3,"presence":2,"dynamic":false,"presenceFormula":""},{"id":30,"name":"Toxin Eater","range":"4–5/12","firstNo":4,"ecosystem":"River","type":"Being","traits":"Prey / Biomeld","copies":2,"presence":2,"dynamic":false,"presenceFormula":""},{"id":31,"name":"Silverfin Carp","range":"6–7/12","firstNo":6,"ecosystem":"River","type":"Being","traits":"Prey / Fish / Food","copies":2,"presence":0,"dynamic":false,"presenceFormula":""},{"id":32,"name":"Strong Current","range":"8–9/12","firstNo":8,"ecosystem":"River","type":"Feature","traits":"Water","copies":2,"presence":1,"dynamic":true,"presenceFormula":"Počet Water Features právě ve hře"},{"id":33,"name":"Overgrown Portage","range":"10/12","firstNo":10,"ecosystem":"River","type":"Feature","traits":"Trail / Flora / Obstacle","copies":1,"presence":0,"dynamic":false,"presenceFormula":""},{"id":34,"name":"Rapids","range":"11–12/12","firstNo":11,"ecosystem":"River","type":"Feature","traits":"Hazard / Water","copies":2,"presence":3,"dynamic":false,"presenceFormula":""},{"id":35,"name":"Hydraworm","range":"1–4/12","firstNo":1,"ecosystem":"Swamp","type":"Being","traits":"Predator / Biomeld","copies":4,"presence":2,"dynamic":false,"presenceFormula":""},{"id":36,"name":"Intrepid Marmot","range":"5–6/12","firstNo":5,"ecosystem":"Swamp","type":"Being","traits":"Prey / Mammal","copies":2,"presence":1,"dynamic":false,"presenceFormula":""},{"id":37,"name":"Fetid Bog","range":"7/12","firstNo":7,"ecosystem":"Swamp","type":"Feature","traits":"Flora / Water","copies":1,"presence":0,"dynamic":true,"presenceFormula":"2 × počet připojených karet lícem dolů"},{"id":38,"name":"Black Mud","range":"8–9/12","firstNo":8,"ecosystem":"Swamp","type":"Feature","traits":"Water / Trail / Obstacle","copies":2,"presence":1,"dynamic":false,"presenceFormula":""},{"id":39,"name":"Overgrown Ruins","range":"10/12","firstNo":10,"ecosystem":"Swamp","type":"Feature","traits":"Ruin / Flora","copies":1,"presence":2,"dynamic":false,"presenceFormula":""},{"id":40,"name":"Overgrown Reactor","range":"11/12","firstNo":11,"ecosystem":"Swamp","type":"Feature","traits":"Machine / Ruin / Flora","copies":1,"presence":2,"dynamic":false,"presenceFormula":""},{"id":41,"name":"Heart of the Swamp","range":"12/12","firstNo":12,"ecosystem":"Swamp","type":"Feature","traits":"Trail / Water","copies":1,"presence":0,"dynamic":false,"presenceFormula":""},{"id":42,"name":"Bloodbeckoned Velox","range":"1–2/12","firstNo":1,"ecosystem":"Grassland","type":"Being","traits":"Predator / Mammal","copies":2,"presence":2,"dynamic":false,"presenceFormula":""},{"id":43,"name":"Artilope","range":"3–5/12","firstNo":3,"ecosystem":"Grassland","type":"Being","traits":"Prey / Mammal","copies":3,"presence":1,"dynamic":false,"presenceFormula":""},{"id":44,"name":"Hungry Scrof","range":"6–7/12","firstNo":6,"ecosystem":"Grassland","type":"Being","traits":"Predator / Prey / Mammal","copies":2,"presence":2,"dynamic":false,"presenceFormula":""},{"id":45,"name":"Mourning Root","range":"8–9/12","firstNo":8,"ecosystem":"Grassland","type":"Feature","traits":"Flora / Food","copies":2,"presence":0,"dynamic":false,"presenceFormula":""},{"id":46,"name":"Harvester Anthill","range":"10–11/12","firstNo":10,"ecosystem":"Grassland","type":"Feature","traits":"Food / Obstacle","copies":2,"presence":0,"dynamic":true,"presenceFormula":"Počet harm žetonů na tomto prvku"},{"id":47,"name":"The Whispering Fields","range":"12/12","firstNo":12,"ecosystem":"Grassland","type":"Feature","traits":"Flora / Trail","copies":1,"presence":2,"dynamic":true,"presenceFormula":"2 × počet připojených karet lícem dolů"},{"id":48,"name":"Lutrinal Holt","range":"1/12","firstNo":1,"ecosystem":"Lakeshore","type":"Feature","traits":"Lair / Water","copies":1,"presence":2,"dynamic":false,"presenceFormula":""},{"id":49,"name":"Romping Lutrinal","range":"2–5/12","firstNo":2,"ecosystem":"Lakeshore","type":"Being","traits":"Predator / Prey / Mammal","copies":4,"presence":1,"dynamic":false,"presenceFormula":""},{"id":50,"name":"Carnivorous Naiad","range":"6/12","firstNo":6,"ecosystem":"Lakeshore","type":"Being","traits":"Predator / Flora / Water","copies":1,"presence":2,"dynamic":false,"presenceFormula":""},{"id":51,"name":"Fresh Blue Kelpweed","range":"7–8/12","firstNo":7,"ecosystem":"Lakeshore","type":"Feature","traits":"Flora / Water","copies":2,"presence":0,"dynamic":false,"presenceFormula":""},{"id":52,"name":"Tidewater Muckets","range":"9–10/12","firstNo":9,"ecosystem":"Lakeshore","type":"Being","traits":"Prey / Water / Food","copies":2,"presence":0,"dynamic":false,"presenceFormula":""},{"id":53,"name":"Tributary Steam","range":"11–12/12","firstNo":11,"ecosystem":"Lakeshore","type":"Feature","traits":"Water / Obstacle","copies":2,"presence":1,"dynamic":false,"presenceFormula":""}];

const LOCATION_DATA = [{"name":"White Sky","assembly":"Standard + pivotal set.","arrival":"The lead Ranger draws 1 card.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":""},{"name":"Lone Tree Station","assembly":"Standard + pivotal set.","arrival":"First discard the next Predator; then the lead Ranger draws 1 card.","minPredator":1,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"1× card with the Predator trait","notes":"The generator preserves micro-synergies even after the possible Predator discard."},{"name":"Northern Outpost","assembly":"Standard + pivotal set.","arrival":"The lead Ranger and the first other Ranger each draw 1 card.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":""},{"name":"Atrox Mountain","assembly":"Standard + 3 Valley cards.","arrival":"The lead Ranger and the other Ranger each search for the next Obstacle and put it into play.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":2,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":"For 2 players, CROSS-12 guarantees at least 2 Obstacles."},{"name":"Golden Shore","assembly":"Standard + 3 Valley cards.","arrival":"The lead Ranger draws 1 card.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":""},{"name":"Mount Nim","assembly":"Standard + 3 Valley cards.","arrival":"Both Rangers draw 2 Path cards each, put 1 into play and discard the other; if either drawn card has Ambush, that card must be chosen.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":"Ambush selection is compulsory, not a free choice of either drawn card."},{"name":"Boulder Field","assembly":"Standard + 3 Valley cards.","arrival":"Lead Ranger draws a Challenge card: Sun—scout 2, then draw 1; Mountain—draw 1; Crest—scout 3, then draw 2.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":"Printed effect decreases presence of beings in play by 1; static deck-building Presence values do not change."},{"name":"Ancestor's Grove","assembly":"Standard + 3 Valley cards.","arrival":"Discard the next card with Presence 3; then both Rangers search for a Prey.","minPredator":0,"minPrey":3,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":1,"requiredText":"","discardText":"1× card with Presence 3","notes":"3 Prey is a conservative minimum: the Presence 3 card could be Fresh Sitka Carcass. | Presence 3 is evaluated when revealed; dynamic X values cannot be assumed fixed from Macro_CardMeta!B."},{"name":"Spire","assembly":"The Spire set stays separate; build the ordinary Path deck independently (CROSS-12 is a house variant).","arrival":"Both Rangers draw 1 Path card each.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":"The official Spire deck remains separate from CROSS-12. | The Spire set remains a separate deck; CROSS-12 cannot replace it."},{"name":"Kobo's Market","assembly":"Standard + 3 Valley cards.","arrival":"The lead Ranger searches for the next Feature and puts it into play.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":1,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":""},{"name":"Stoneweaver Bridge","assembly":"Standard + 3 Valley cards.","arrival":"First discard the next Feature; then both Rangers draw 1 card each.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":1,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"1× Feature","notes":"The generator preserves micro-synergies even after the possible Feature discard."},{"name":"The Fractured Wall","assembly":"Standard + pivotal set.","arrival":"The lead Ranger and the other Ranger each search for the next Obstacle and put it into play.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":2,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":"For 2 players, at least 2 Obstacles are guaranteed."},{"name":"The Philosopher's Garden","assembly":"Standard + 3 Valley cards.","arrival":"The lead Ranger draws 1 card face down Along the Way; the other Ranger draws 1 card.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":""},{"name":"The High Basin","assembly":"Standard + 3 Valley cards.","arrival":"The lead Ranger searches for the next Flora and puts it into play.","minPredator":0,"minPrey":0,"minFlora":1,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":""},{"name":"Branch","assembly":"Standard + pivotal set.","arrival":"The lead Ranger searches for the next Feature and puts it into play.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":1,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":""},{"name":"The Furrow","assembly":"Standard + 3 Valley cards.","arrival":"Each Ranger draws 1 Path card; if the drawn card enters along the way, move it within reach.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":""},{"name":"Biological Outpost","assembly":"Standard + 3 Valley cards.","arrival":"Both Rangers search for the next Predator or Prey and put it into play.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":2,"minPresence3":0,"requiredText":"","discardText":"","notes":"Two consecutive Predator-or-Prey searches for two players. The source also has a conditional Mountain Challenge search if none is active."},{"name":"The Plummet","assembly":"Standard + 3 Valley cards.","arrival":"The lead Ranger and the other Rangers each draw 1 card.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":""},{"name":"Greenbriar Knoll","assembly":"Standard + 3 Valley cards.","arrival":"Lead Ranger draws a Challenge card: Sun—scout 2, then draw 1; Mountain—draw 1; Crest—scout 3, then draw 2.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":""},{"name":"Headwaters Station","assembly":"Add no Valley cards (neither of the usual 3).","arrival":"Both Rangers search for Silverfin Carp and put it into play.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"Silverfin Carp [6–7/12] ×2","discardText":"","notes":"CROSS-12 always contains both physical copies of Silverfin Carp. | Officially no Valley cards are added; both Ranger searches require Silverfin Carp."},{"name":"Meadow","assembly":"Standard + pivotal set.","arrival":"The lead Ranger searches for The Whispering Fields and puts it into play.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"The Whispering Fields [12/12] ×1","discardText":"","notes":""},{"name":"The Concordant Ziggurats","assembly":"Standard + 3 Valley cards.","arrival":"The lead Ranger searches for an Obstacle; the other Ranger searches for a Predator.","minPredator":1,"minPrey":0,"minFlora":0,"minObstacle":1,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":""},{"name":"Crossroads Station","assembly":"Standard + 3 Valley cards.","arrival":"Both Rangers draw 1 card each.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":""},{"name":"Rings of the Moon","assembly":"Standard + 3 Valley cards.","arrival":"The lead Ranger and the other Rangers each draw 1 card.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":""},{"name":"Archaeological Outpost","assembly":"Of the 3 separately added Valley cards, include Arcology Sinkhole.","arrival":"Both Rangers search for the next Feature and put it into play.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":2,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":"Arcology Sinkhole is added outside the 12 CROSS terrain cards. | Arcology Sinkhole comes from the separate Valley additions; the present VBA does NOT enforce this printed condition."},{"name":"Mound of the Navigator","assembly":"Standard + 3 Valley cards.","arrival":"The lead Ranger searches for a Feature and puts it into play; the other Ranger draws a card.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":1,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":""},{"name":"Terravore","assembly":"Standard + 3 Valley cards.","arrival":"Search for the next Feature and attach it to the location; then draw.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":1,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":""},{"name":"The Greenbridge","assembly":"Standard + 3 Valley cards.","arrival":"Both Rangers draw 1 card each.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":"Official 2025 card errata adjusts the Crest effect: travel to Cypress Citadel after the bridge collapses; do not retain obsolete instruction to ignore Obstacles."},{"name":"Michael's Bog","assembly":"Standard + 3 Valley cards.","arrival":"The lead Ranger searches for Fetid Bog and puts it into play.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"Fetid Bog [7/12] ×1","discardText":"","notes":""},{"name":"The Cypress Citadel","assembly":"Standard + 3 Valley cards.","arrival":"The lead Ranger and the other Rangers each draw 1 card.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":""},{"name":"The Frowning Gate","assembly":"Standard + 3 Valley cards.","arrival":"Both Rangers draw 1 card each.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":""},{"name":"Marsh of Rebirth","assembly":"Official: use Swamp terrain. CROSS-12 mixing is a deliberate house rule.","arrival":"The lead Ranger searches for Hydraworm and puts it into play.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"Hydraworm [1–4/12] ×4","discardText":"","notes":""},{"name":"Sunken Outpost","assembly":"Standard + 3 Valley cards.","arrival":"The lead Ranger searches for the next Water Feature and puts it into play.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":1,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":"Printed progress is dynamic (X = water on the location); not a fixed progress threshold."},{"name":"The Alluvial Ruins","assembly":"Build a separate detritus deck from Grassland, Lakeshore and Old-Growth; CROSS-12 is not its replacement.","arrival":"Both Rangers draw from the detritus deck.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":"The detritus deck is separate and is not replaced by CROSS-12. | The three full terrain sets form a separate detritus deck; CROSS-12 does not replace it."},{"name":"Bowl of the Sun","assembly":"Of the 3 separately added Valley cards, include The Fundamentalist.","arrival":"The lead Ranger draws 2 Path cards.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":"The Fundamentalist is added outside the 12 CROSS terrain cards. | The Fundamentalist comes from the separate Valley additions; the present VBA does NOT enforce this printed condition."},{"name":"Watcher's Rock","assembly":"Standard + 3 Valley cards.","arrival":"Both Rangers draw 1 card each.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":""},{"name":"Tumbledown","assembly":"Standard + pivotal set.","arrival":"The lead Ranger draws 1 card.","minPredator":0,"minPrey":0,"minFlora":0,"minObstacle":0,"minFeature":0,"minWaterFeature":0,"minPredOrPrey":0,"minPresence3":0,"requiredText":"","discardText":"","notes":""}];

const DECK_SIZE = 12;
const MAX_DESIGNS = 53;
const MAX_ECOS = 8;
const TOTAL_CANDIDATE_TRIALS = 250000;
const LEGACY_PACKAGE_COUNT = 22;
const PACKAGE_COUNT = 28;
const GENERAL_FINALISTS = 20;
const PACKAGE_FINALISTS = 2;
const NICHE_FINALISTS = 8;
const START_TERRAIN_FOUR_FINALISTS = 5;
const START_TERRAIN_FIVE_FINALISTS = 4;
const START_TERRAIN_SIX_FINALISTS = 4;
const START_TERRAIN_THREE_FINALISTS = 2;
const START_TERRAIN_TWO_FINALISTS = 2;
const START_TERRAIN_BUCKET = 2 + PACKAGE_COUNT + MAX_ECOS; // 38
const START_TERRAIN_FIVE_BUCKET = START_TERRAIN_BUCKET + 1;
const START_TERRAIN_SIX_BUCKET = START_TERRAIN_BUCKET + 2;
const START_TERRAIN_THREE_BUCKET = START_TERRAIN_BUCKET + 3;
const START_TERRAIN_TWO_BUCKET = START_TERRAIN_BUCKET + 4;
const LAST_BUCKET = START_TERRAIN_TWO_BUCKET;
const PRIMARY_FINALISTS = 32;
const PRIMARY_NIM = 10;
const NEAR_BEST_BAND = 13;
const NATIVE_QUALITY_GAP = 4.5;
const START_TERRAIN_FOUR_NATIVE_GAP = 7.5;
const START_TERRAIN_MAX_BONUS = 4.75;
const CROSS_TERRAIN_FIT_CAP = 0.75;
const MULTIOBJECTIVE_BONUS = 14;

const SUP = Object.freeze({ NONE:0, MAMMAL:1, PRED_OTHER:2, PREY:3, FISH:4, WATER_FEATURE:5, INSECT:6, FOOD:7, PRED_PRES2:8 });
const ECO_NAMES = [null, "Woods", "Old-Growth", "Mountain Pass", "Ravine", "River", "Swamp", "Grassland", "Lakeshore"];
const ECO_ID = Object.fromEntries(ECO_NAMES.slice(1).map((n,i)=>[n,i+1]));
const AMBUSH_NAMES = new Set(["Rapids", "Pouncing Atrox", "Romping Lutrinal", "Bloodbeckoned Velox"]);
const designByName = new Map(DESIGN_DATA.map(d => [d.name.toLowerCase(), d]));
const designFirst = new Int16Array(MAX_DESIGNS + 1);
const designCopies = new Int8Array(MAX_DESIGNS + 1);
const cards = [];

function traitHas(traits, name) { return traits.toLowerCase().includes(name.toLowerCase()); }
for (const d of DESIGN_DATA) {
  designFirst[d.id] = cards.length;
  designCopies[d.id] = d.copies;
  for (let j=0; j<d.copies; j++) {
    cards.push({
      index: cards.length,
      designId: d.id,
      name: d.name,
      numberInSet: `${d.firstNo + j}/12`,
      ecosystem: d.ecosystem,
      ecoId: ECO_ID[d.ecosystem],
      cardType: d.type,
      traits: d.traits,
      presence: Number(d.presence),
      isPresenceDynamic: !!d.dynamic,
      presenceFormula: d.presenceFormula || "",
      isAmbush: AMBUSH_NAMES.has(d.name),
      isPredator: traitHas(d.traits,"Predator"),
      isPrey: traitHas(d.traits,"Prey"),
      isFlora: traitHas(d.traits,"Flora"),
      isObstacle: traitHas(d.traits,"Obstacle"),
      isFood: traitHas(d.traits,"Food"),
      isMammal: traitHas(d.traits,"Mammal"),
      isFish: traitHas(d.traits,"Fish"),
      isWater: traitHas(d.traits,"Water"),
      isInsect: traitHas(d.traits,"Insect")
    });
  }
}
if (cards.length !== 96) throw new Error(`Physical card pool mismatch: expected 96, got ${cards.length}.`);

function id(name) {
  const d = designByName.get(name.toLowerCase());
  return d ? d.id : 0;
}
const IDS = Object.freeze({
  Wolhund:id("Prowling Wolhund"), Buck:id("Sitka Buck"), Doe:id("Sitka Doe"),
  Cloudhive:id("Cloudhive"), Swarm:id("Cloudhive Swarm"),
  Lutrinal:id("Romping Lutrinal"), Holt:id("Lutrinal Holt"), Kelpweed:id("Fresh Blue Kelpweed"),
  Hydraworm:id("Hydraworm"), Ruins:id("Overgrown Ruins"), Reactor:id("Overgrown Reactor"),
  Velox:id("Bloodbeckoned Velox"), Fields:id("The Whispering Fields"), Anthill:id("Harvester Anthill"), Scrof:id("Hungry Scrof"),
  Opilion:id("Skittish Opilion"), Bats:id("Nycta Bats"), WebWall:id("Web Wall"), Talus:id("Talus Cave"),
  Ursus:id("Wading Ursus"), Toxin:id("Toxin Eater"), Cherry:id("Hanging Cherry Moss"), Atrox:id("Pouncing Atrox"),
  Irix:id("Circling Irix"), Meadowlarks:id("Agitated Meadowlarks"), Carcass:id("Fresh Sitka Carcass"),
  Fractalwire:id("Fractalwire"), ShaleScree:id("Shale Scree"), Stanchion:id("Spiderline Stanchion"),
  Artilope:id("Artilope"), Sunberry:id("Sunberry Bramble"), Carp:id("Silverfin Carp"), FetidBog:id("Fetid Bog")
});

function parseLocation(src) {
  const loc = {...src, requiredName:"", requiredCount:0, discardMode:""};
  if (src.requiredText) {
    let text = src.requiredText;
    const bracket = text.indexOf(" [");
    const mult = text.lastIndexOf("×");
    if (bracket >= 0) loc.requiredName = text.slice(0, bracket).trim();
    else if (mult >= 0) loc.requiredName = text.slice(0, mult).trim();
    else loc.requiredName = text.trim();
    loc.requiredCount = mult >= 0 ? (parseInt(text.slice(mult+1),10) || 1) : 1;
  }
  if (src.name === "Marsh of Rebirth") {
    loc.requiredName = "Hydraworm";
    loc.requiredCount = 4;
  }
  if (src.discardText) {
    const t = src.discardText.toLowerCase();
    if (t.includes("presence 3")) loc.discardMode = "PRESENCE3";
    else if (t.includes("predator")) loc.discardMode = "PREDATOR";
    else if (t.includes("feature")) loc.discardMode = "FEATURE";
  }
  return loc;
}
const locations = LOCATION_DATA.map(parseLocation);
const locationByName = new Map(locations.map(l => [l.name, l]));

function presenceFromState(cardIndex, beeTokens, waterFeaturesInPlay, facedownAttachments, harmTokens) {
  const c = cards[cardIndex];
  if (!c.isPresenceDynamic) return c.presence;
  switch (c.name) {
    case "Cloudhive Swarm": return beeTokens;
    case "Strong Current": return waterFeaturesInPlay;
    case "Fetid Bog":
    case "The Whispering Fields": return 2 * facedownAttachments;
    case "Harvester Anthill": return harmTokens;
    default: throw new Error(`Unimplemented variable Presence: ${c.name}`);
  }
}
function presenceAtInitialReveal(cardIndex, waterFeaturesAlreadyInPlay=0) {
  return presenceFromState(cardIndex, 1, waterFeaturesAlreadyInPlay, 0, 0);
}

function makeStats() {
  return {
    designCount:new Int8Array(MAX_DESIGNS+1), ecoCount:new Int8Array(MAX_ECOS+1),
    predator:0, prey:0, flora:0, obstacle:0, food:0, mammal:0, fish:0, insect:0,
    waterFeature:0, being:0, feature:0, predatorOrPreyCards:0, presence3:0, presence2Plus:0, ecosystems:0
  };
}
function buildStats(deck, st=makeStats(), deckSize=deck.length) {
  st.designCount.fill(0); st.ecoCount.fill(0);
  st.predator=st.prey=st.flora=st.obstacle=st.food=st.mammal=st.fish=st.insect=0;
  st.waterFeature=st.being=st.feature=st.predatorOrPreyCards=st.presence3=st.presence2Plus=st.ecosystems=0;
  for (let i=0;i<deckSize;i++) {
    const idx = deck[i]; if (idx == null || idx < 0) continue;
    const c = cards[idx];
    st.designCount[c.designId]++;
    if (c.ecoId>0) st.ecoCount[c.ecoId]++;
    if (c.isPredator) st.predator++;
    if (c.isPrey) st.prey++;
    if (c.isFlora) st.flora++;
    if (c.isObstacle) st.obstacle++;
    if (c.isFood) st.food++;
    if (c.isMammal) st.mammal++;
    if (c.isFish) st.fish++;
    if (c.isInsect) st.insect++;
    if (c.isWater && c.cardType === "Feature") st.waterFeature++;
    if (c.cardType === "Being") st.being++;
    if (c.cardType === "Feature") st.feature++;
    if (c.isPredator || c.isPrey) st.predatorOrPreyCards++;
    if (!c.isPresenceDynamic && c.presence === 3) st.presence3++;
    if (!c.isPresenceDynamic && c.presence >= 2) st.presence2Plus++;
  }
  for (let e=1;e<=MAX_ECOS;e++) if (st.ecoCount[e] > 0) st.ecosystems++;
  return st;
}

const defaultState = {
  locationName:"White Sky",
  startingTerrain:"Woods",
  profile:"BALANCED",
  hideCards:true,
  enabled:{"Woods":true,"Old-Growth":true,"Mountain Pass":false,"Ravine":true,"River":false,"Swamp":false,"Grassland":true,"Lakeshore":true}
};
let currentState = JSON.parse(JSON.stringify(defaultState));
let currentDeck = [];
let packages = [];
let packageEligible = [];
let eligiblePackageIndex = [];
let nicheDesign = new Int16Array(MAX_ECOS+1);
let startingTerrainEco = 0;
let selectedEcoCount = 0;
let enabledEco = new Array(MAX_ECOS+1).fill(false);
function setStateForGeneration(state) {
  currentState = JSON.parse(JSON.stringify(state));
  selectedEcoCount = 0;
  enabledEco = new Array(MAX_ECOS+1).fill(false);
  for (let e=1;e<=MAX_ECOS;e++) {
    enabledEco[e] = !!state.enabled[ECO_NAMES[e]];
    if (enabledEco[e]) selectedEcoCount++;
  }
  if (selectedEcoCount === 0) throw new Error("Enable at least one ecosystem.");
  startingTerrainEco = state.startingTerrain === "NONE" ? 0 : (ECO_ID[state.startingTerrain] || 0);
  if (state.startingTerrain !== "NONE" && !startingTerrainEco) throw new Error(`Unknown starting terrain: '${state.startingTerrain}'.`);
  if (startingTerrainEco && !enabledEco[startingTerrainEco]) {
    throw new Error(`Starting terrain '${state.startingTerrain}' is disabled. Enable it in the ecosystem pool or select NONE.`);
  }
}

function buildEligiblePool() {
  const eligible=[];
  for (const c of cards) if (enabledEco[c.ecoId]) eligible.push(c.index);
  return eligible;
}
function maxLong(a,b){ return a>=b?a:b; }

function validatePoolFeasibility(eligible, loc) {
  if (eligible.length < DECK_SIZE) throw new Error("The enabled ecosystems contain fewer than 12 physical cards.");
  let pred=0,prey=0,flora=0,obstacle=0,food=0,being=0,feature=0,waterFeature=0,predOrPrey=0,pres3=0,reqAvail=0;
  const reqId=loc.requiredCount>0?id(loc.requiredName):0;
  for (const idx of eligible) {
    const c=cards[idx];
    if(c.isPredator)pred++; if(c.isPrey)prey++; if(c.isFlora)flora++; if(c.isObstacle)obstacle++; if(c.isFood)food++;
    if(c.cardType==="Being")being++; if(c.cardType==="Feature")feature++; if(c.isWater&&c.cardType==="Feature")waterFeature++;
    if(c.isPredator||c.isPrey)predOrPrey++; if(presenceAtInitialReveal(idx,0)===3)pres3++; if(reqId&&c.designId===reqId)reqAvail++;
  }
  if(pred<maxLong(1,loc.minPredator))throw new Error("The enabled ecosystems cannot supply enough Predators for the hard rules / Arrival Setup.");
  if(prey<maxLong(2,loc.minPrey))throw new Error("The enabled ecosystems cannot supply enough Prey for the hard rules / Arrival Setup.");
  if(flora<maxLong(2,loc.minFlora))throw new Error("The enabled ecosystems cannot supply enough Flora for the hard rules / Arrival Setup.");
  if(obstacle<maxLong(1,loc.minObstacle))throw new Error("The enabled ecosystems cannot supply enough Obstacles for the hard rules / Arrival Setup.");
  if(food<1)throw new Error("The enabled ecosystems cannot supply the required Food card.");
  if(being<4)throw new Error("The enabled ecosystems cannot supply the minimum 4 Being cards.");
  if(feature<maxLong(5,loc.minFeature))throw new Error("The enabled ecosystems cannot supply enough Feature cards.");
  if(waterFeature<loc.minWaterFeature)throw new Error("The enabled ecosystems cannot supply enough Water Features for this Location.");
  if(predOrPrey<loc.minPredOrPrey)throw new Error("The enabled ecosystems cannot supply enough Predator/Prey cards for this Location.");
  if(pres3<loc.minPresence3)throw new Error("The enabled ecosystems cannot supply the required Presence 3 card for this Location.");
  if(loc.requiredCount>0&&reqAvail<loc.requiredCount){
    const d=designByName.get(loc.requiredName.toLowerCase());
    throw new Error(`${loc.name} requires ${loc.requiredCount}× ${loc.requiredName}. Enable the ${d?d.ecosystem:"required"} ecosystem.`);
  }
}

function addPackage(caption, anchorEco, members, support1=SUP.NONE, support2=SUP.NONE) {
  packages.push({caption,anchorEco,members:members.map(([designId,qty])=>({designId,qty})),support1,support2});
}
function initializePackageDefinitions() {
  packages=[];
  addPackage("Wolhund pack",1,[[IDS.Wolhund,2]]);
  addPackage("Buck + Doe herd",1,[[IDS.Buck,2],[IDS.Doe,1]]);
  addPackage("Cloudhive + Swarm + Mammal",2,[[IDS.Cloudhive,1],[IDS.Swarm,1]],SUP.MAMMAL);
  addPackage("Cherry Moss + Insect + Mammal",2,[[IDS.Cherry,1],[IDS.Swarm,1]],SUP.MAMMAL);
  addPackage("Atrox + another Predator",3,[[IDS.Atrox,1]],SUP.PRED_OTHER);
  addPackage("Opilion + Web Wall",4,[[IDS.Opilion,1],[IDS.WebWall,1]]);
  addPackage("Nycta Bats + Web Wall",4,[[IDS.Bats,1],[IDS.WebWall,1]]);
  addPackage("Talus Cave / Bats / Web Wall",4,[[IDS.Talus,1],[IDS.Bats,1],[IDS.WebWall,1]]);
  addPackage("Wading Ursus + Fish",5,[[IDS.Ursus,1],[IDS.Carp,1]]);
  addPackage("Toxin Eater + Water / Predator",5,[[IDS.Toxin,1]],SUP.WATER_FEATURE,SUP.PRED_OTHER);
  addPackage("Hydraworm pair",6,[[IDS.Hydraworm,2]]);
  addPackage("Hydraworm + Ruins",6,[[IDS.Hydraworm,2],[IDS.Ruins,1]]);
  addPackage("Hydraworm + Reactor",6,[[IDS.Hydraworm,2],[IDS.Reactor,1]]);
  addPackage("Velox + Whispering Fields",7,[[IDS.Velox,1],[IDS.Fields,1]]);
  addPackage("Artilope + Predator Presence 2+",7,[[IDS.Artilope,1]],SUP.PRED_PRES2);
  addPackage("Scrof + Predator + Food",7,[[IDS.Scrof,1]],SUP.PRED_OTHER,SUP.FOOD);
  addPackage("Anthill + Scrof + Predator",7,[[IDS.Anthill,1],[IDS.Scrof,1]],SUP.PRED_OTHER);
  addPackage("Lutrinal pair + Predator",8,[[IDS.Lutrinal,2]],SUP.PRED_OTHER);
  addPackage("Lutrinal Holt + pair + Predator",8,[[IDS.Lutrinal,2],[IDS.Holt,1]],SUP.PRED_OTHER);
  addPackage("Kelpweed + Lutrinal pair + Predator",8,[[IDS.Lutrinal,2],[IDS.Kelpweed,1]],SUP.PRED_OTHER);
  addPackage("Sunberry Bramble + Prey",1,[[IDS.Sunberry,1]],SUP.PREY);
  addPackage("Cloudhive / Cherry Moss / Swarm",2,[[IDS.Cloudhive,1],[IDS.Cherry,1],[IDS.Swarm,1]],SUP.MAMMAL);
  addPackage("Mountain: Atrox + Irix predator pair",3,[[IDS.Atrox,1],[IDS.Irix,1]]);
  addPackage("Mountain: Carcass attracts Irix",3,[[IDS.Carcass,1],[IDS.Irix,1]]);
  addPackage("Mountain: Carcass / Irix / Atrox",3,[[IDS.Carcass,1],[IDS.Irix,1],[IDS.Atrox,1]]);
  addPackage("Mountain: Stanchion + Fractalwire",3,[[IDS.Stanchion,1],[IDS.Fractalwire,1]]);
  addPackage("Mountain: Stanchion + Shale Scree",3,[[IDS.Stanchion,1],[IDS.ShaleScree,1]]);
  addPackage("Mountain: Meadowlarks / Atrox / Irix",3,[[IDS.Meadowlarks,1],[IDS.Atrox,1],[IDS.Irix,1]]);
}
initializePackageDefinitions();

function supportMatches(idx, mode, excludeDesign) {
  const c=cards[idx];
  switch(mode){
    case SUP.NONE:return true;
    case SUP.MAMMAL:return c.isMammal;
    case SUP.PRED_OTHER:return c.isPredator&&c.designId!==excludeDesign;
    case SUP.PREY:return c.isPrey;
    case SUP.FISH:return c.isFish;
    case SUP.WATER_FEATURE:return c.isWater&&c.cardType==="Feature";
    case SUP.INSECT:return c.isInsect;
    case SUP.FOOD:return c.isFood;
    case SUP.PRED_PRES2:return c.isPredator&&!c.isPresenceDynamic&&c.presence>=2;
    default:return false;
  }
}
function availableSupport(mode, excludeDesign) {
  if(mode===SUP.NONE)return true;
  for(const c of cards) if(enabledEco[c.ecoId]&&supportMatches(c.index,mode,excludeDesign))return true;
  return false;
}
function packageCanRun(pIndex, loc) {
  const p=packages[pIndex];
  if(pIndex>=LEGACY_PACKAGE_COUNT&&startingTerrainEco!==3)return false;
  if(!enabledEco[p.anchorEco])return false;
  let mandatory=loc.requiredCount;
  for(const m of p.members){
    if(!m.designId||!enabledEco[cards[designFirst[m.designId]].ecoId]||designCopies[m.designId]<m.qty)return false;
    mandatory+=m.qty;
    if(loc.requiredName===cards[designFirst[m.designId]].name)mandatory-=m.qty;
    if(loc.name==="Marsh of Rebirth"&&m.designId!==IDS.Hydraworm&&cards[designFirst[m.designId]].isPredator)return false;
  }
  if(mandatory>DECK_SIZE)return false;
  const forced=new Int8Array(MAX_DESIGNS+1);
  if(loc.requiredCount>0){const rid=id(loc.requiredName);if(rid)forced[rid]=loc.requiredCount;}
  for(const m of p.members)if(m.qty>forced[m.designId])forced[m.designId]=m.qty;
  let fp=0,fy=0,ff=0,fo=0,ffood=0,fb=0,ffeat=0,fcount=0;
  for(let did=1;did<=MAX_DESIGNS;did++)if(forced[did]>0){
    const c=cards[designFirst[did]],q=forced[did]; fcount+=q;
    if(c.isPredator)fp+=q;if(c.isPrey)fy+=q;if(c.isFlora)ff+=q;if(c.isObstacle)fo+=q;if(c.isFood)ffood+=q;
    if(c.cardType==="Being")fb+=q;if(c.cardType==="Feature")ffeat+=q;
  }
  if(fcount>DECK_SIZE)return false;
  if(fp>3&&loc.name!=="Marsh of Rebirth")return false;
  if(fp>4||fy>4||ff>4||fo>3||ffood>3||fb>7||ffeat>8)return false;
  if(fcount-fb+4>DECK_SIZE||fcount-ffeat+5>DECK_SIZE)return false;
  if(loc.name==="Marsh of Rebirth"&&(p.support1===SUP.PRED_OTHER||p.support2===SUP.PRED_OTHER||p.support1===SUP.PRED_PRES2||p.support2===SUP.PRED_PRES2))return false;
  const exclude=p.members[0]?.designId||0;
  return availableSupport(p.support1,exclude)&&availableSupport(p.support2,exclude);
}
function designAppearsInPackage(designId){
  for(let p=0;p<packages.length;p++){
    if(p<LEGACY_PACKAGE_COUNT||startingTerrainEco===3){
      if(packages[p].members.some(m=>m.designId===designId))return true;
    }
  }
  return false;
}
function initializeBalancedPackages(loc){
  packageEligible=new Array(PACKAGE_COUNT).fill(false);eligiblePackageIndex=[];nicheDesign.fill(0);
  for(let p=0;p<PACKAGE_COUNT;p++)if(packageCanRun(p,loc)){packageEligible[p]=true;eligiblePackageIndex.push(p);}
  for(let eco=1;eco<=MAX_ECOS;eco++)if(enabledEco[eco]){
    let n=0,chosen=0;
    for(let did=1;did<=MAX_DESIGNS;did++)if(designCopies[did]>0&&cards[designFirst[did]].ecoId===eco&&!designAppearsInPackage(did)){
      n++;if(Math.floor(Math.random()*n)===0)chosen=did;
    }
    if(n===0){
      for(let did=1;did<=MAX_DESIGNS;did++)if(designCopies[did]>0&&cards[designFirst[did]].ecoId===eco){n++;if(Math.floor(Math.random()*n)===0)chosen=did;}
    }
    nicheDesign[eco]=chosen;
  }
}
const HALF_PACKAGE_SUPPORT_BLOCK = new Set([IDS.Wolhund,IDS.Buck,IDS.Doe,IDS.Lutrinal,IDS.Hydraworm,IDS.Velox,IDS.Opilion,IDS.Bats,IDS.Atrox,IDS.Scrof]);
function supportCanBeSeeded(idx, mode, excludeDesign){
  if(!supportMatches(idx,mode,excludeDesign))return false;
  return !HALF_PACKAGE_SUPPORT_BLOCK.has(cards[idx].designId);
}
function seedSupport(deck, used, posObj, mode, excluded, eligible){
  if(mode===SUP.NONE)return true;
  for(let i=0;i<posObj.pos;i++)if(supportMatches(deck[i],mode,excluded))return true;
  if(posObj.pos>=DECK_SIZE)return false;
  const choices=[];
  for(const idx of eligible)if(!used[idx]&&supportCanBeSeeded(idx,mode,excluded))choices.push(idx);
  if(!choices.length)return false;
  const idx=choices[Math.floor(Math.random()*choices.length)];
  deck[posObj.pos++]=idx;used[idx]=1;return true;
}
function seedNamedDesign(deck, used, posObj, designId, needed){
  if(designId<1||designId>MAX_DESIGNS)return false;
  let have=0;
  for(let i=0;i<posObj.pos;i++)if(cards[deck[i]].designId===designId)have++;
  needed-=have;if(needed<=0)return true;if(posObj.pos+needed>DECK_SIZE)return false;
  const candidates=[];
  for(let i=0;i<designCopies[designId];i++){
    const idx=designFirst[designId]+i;
    if(!used[idx]&&enabledEco[cards[idx].ecoId])candidates.push(idx);
  }
  if(candidates.length<needed)return false;
  for(let i=0;i<needed;i++){
    const pick=Math.floor(Math.random()*candidates.length);
    const idx=candidates[pick]; candidates[pick]=candidates[candidates.length-1];candidates.pop();
    deck[posObj.pos++]=idx;used[idx]=1;
  }
  return true;
}
function seedPackage(deck,used,posObj,pIndex,eligible){
  const p=packages[pIndex];
  for(const m of p.members)if(!seedNamedDesign(deck,used,posObj,m.designId,m.qty))return false;
  const exclude=p.members[0]?.designId||0;
  if(!seedSupport(deck,used,posObj,p.support1,exclude,eligible))return false;
  if(!seedSupport(deck,used,posObj,p.support2,exclude,eligible))return false;
  return true;
}
function partialEcologyPossible(deck,prefixSize,loc){
  const st=buildStats(deck,makeStats(),prefixSize);
  const maxPred=loc.name==="Marsh of Rebirth"?4:3;
  if(st.predator>maxPred||st.prey>4||st.flora>4||st.obstacle>3||st.food>3||st.being>7||st.feature>8)return false;
  const remaining=DECK_SIZE-prefixSize;
  if(st.being+remaining<4||st.feature+remaining<5||st.prey+remaining<loc.minPrey||st.obstacle+remaining<loc.minObstacle)return false;
  return true;
}
function packagesAddNewMembers(firstIndex,secondIndex){
  const first=packages[firstIndex],second=packages[secondIndex];
  for(const sm of second.members){
    const fm=first.members.find(x=>x.designId===sm.designId);
    const matches=fm?fm.qty:0;
    if(sm.qty>matches)return true;
  }
  return false;
}
function restoreCandidate(deck,used,savedDeck,savedUsed,posObj,savedPos){
  for(let i=0;i<DECK_SIZE;i++)deck[i]=savedDeck[i];
  used.set(savedUsed);posObj.pos=savedPos;
}
function trySeedSecondaryPackage(deck,used,posObj,firstPackage,eligible,loc){
  if(eligiblePackageIndex.length<2||posObj.pos>DECK_SIZE-3)return;
  const savedPos=posObj.pos,savedDeck=deck.slice(),savedUsed=used.slice();
  for(let tries=0;tries<5;tries++){
    const other=eligiblePackageIndex[Math.floor(Math.random()*eligiblePackageIndex.length)];
    if(other!==firstPackage&&packagesAddNewMembers(firstPackage,other)){
      if(seedPackage(deck,used,posObj,other,eligible)&&posObj.pos<=DECK_SIZE-2&&partialEcologyPossible(deck,posObj.pos,loc))return;
    }
    restoreCandidate(deck,used,savedDeck,savedUsed,posObj,savedPos);
  }
}
function nthEnabledEcosystem(n){for(let e=1;e<=MAX_ECOS;e++)if(enabledEco[e]&&--n===0)return e;return 0;}
function trySeedPreferredSecondaryPackage(deck,used,posObj,firstPackage,eligible,loc){
  if(posObj.pos>DECK_SIZE-3)return;
  const options=[];
  for(let p=0;p<PACKAGE_COUNT;p++)if(packageEligible[p]&&p!==firstPackage&&packages[p].anchorEco===startingTerrainEco&&packagesAddNewMembers(firstPackage,p))options.push(p);
  if(!options.length)return;
  const savedPos=posObj.pos,savedDeck=deck.slice(),savedUsed=used.slice();
  while(options.length){
    const pick=Math.floor(Math.random()*options.length),p=options[pick];options[pick]=options[options.length-1];options.pop();
    if(seedPackage(deck,used,posObj,p,eligible)&&posObj.pos<=DECK_SIZE-1&&partialEcologyPossible(deck,posObj.pos,loc))return;
    restoreCandidate(deck,used,savedDeck,savedUsed,posObj,savedPos);
  }
}
function preferredExtraIsSupported(idx,st){
  const did=cards[idx].designId;
  switch(did){
    case IDS.Wolhund: if(st.designCount[IDS.Wolhund]<2)return false;break;
    case IDS.Buck: case IDS.Doe: if(st.designCount[IDS.Buck]<2||st.designCount[IDS.Doe]<1)return false;break;
    case IDS.Cloudhive: if(st.designCount[IDS.Swarm]<1||st.mammal<1)return false;break;
    case IDS.Lutrinal: if(st.designCount[IDS.Lutrinal]<2||st.predator<=st.designCount[IDS.Lutrinal])return false;break;
    case IDS.Holt: case IDS.Kelpweed: if(st.designCount[IDS.Lutrinal]<2)return false;break;
    case IDS.Hydraworm: if(st.designCount[IDS.Hydraworm]<2)return false;break;
    case IDS.Ruins: case IDS.Reactor: if(st.designCount[IDS.Hydraworm]<2)return false;break;
    case IDS.Velox: if(st.designCount[IDS.Fields]<1)return false;break;
    case IDS.Anthill: if(st.designCount[IDS.Scrof]<1)return false;break;
    case IDS.Scrof: if(st.predator<2||st.food<1)return false;break;
    case IDS.Opilion: case IDS.Bats: if(st.designCount[IDS.WebWall]<1)return false;break;
    case IDS.Talus: if(st.designCount[IDS.Bats]<1||st.designCount[IDS.WebWall]<1)return false;break;
    case IDS.Ursus: if(st.fish<1)return false;break;
    case IDS.Toxin: if(st.waterFeature<1||st.predator<1)return false;break;
    case IDS.Cherry: if(st.insect<1||st.mammal<1)return false;break;
    case IDS.Atrox: if(st.predator<2)return false;break;
    case IDS.Artilope: if(st.predator<1||st.presence2Plus<1)return false;break;
    case IDS.Sunberry: if(st.prey<1)return false;break;
  }
  return true;
}
function preferredExtraFitsEcology(idx,st,pos,loc){
  const c=cards[idx],maxPred=loc.name==="Marsh of Rebirth"?4:3;
  if(c.isPredator&&st.predator>=maxPred)return false;if(c.isPrey&&st.prey>=4)return false;if(c.isFlora&&st.flora>=4)return false;
  if(c.isObstacle&&st.obstacle>=3)return false;if(c.isFood&&st.food>=3)return false;if(c.cardType==="Being"&&st.being>=7)return false;if(c.cardType==="Feature"&&st.feature>=8)return false;
  const remaining=DECK_SIZE-(pos+1);
  if(st.being+(c.cardType==="Being"?1:0)+remaining<4)return false;
  if(st.feature+(c.cardType==="Feature"?1:0)+remaining<5)return false;
  if(st.prey+(c.isPrey?1:0)+remaining<loc.minPrey)return false;
  if(st.obstacle+(c.isObstacle?1:0)+remaining<loc.minObstacle)return false;
  return true;
}
function seedPreferredTerrainToTarget(deck,used,posObj,eligible,loc,targetCount){
  const st=makeStats();
  while(posObj.pos<=DECK_SIZE-3){
    buildStats(deck,st,posObj.pos);
    if(st.ecoCount[startingTerrainEco]>=targetCount)return;
    const choices=[],cumulative=[];let total=0;
    for(const idx of eligible)if(!used[idx]&&cards[idx].ecoId===startingTerrainEco&&preferredExtraIsSupported(idx,st)&&preferredExtraFitsEcology(idx,st,posObj.pos,loc)){
      const did=cards[idx].designId;let w=1/designCopies[did];
      if(st.designCount[did]===0)w*=2;if(cards[idx].cardType==="Feature"&&st.feature<5)w*=1.6;if(cards[idx].isFlora&&st.flora<2)w*=1.5;
      if(cards[idx].isObstacle&&st.obstacle===0)w*=1.5;if(cards[idx].isPrey&&st.prey<2)w*=1.5;
      choices.push(idx);total+=w;cumulative.push(total);
    }
    if(!choices.length)return;
    const roulette=Math.random()*total;let selected=choices[choices.length-1];
    for(let j=0;j<choices.length;j++)if(roulette<cumulative[j]){selected=choices[j];break;}
    deck[posObj.pos++]=selected;used[selected]=1;
  }
}
function forceNamedCards(deck,used,posObj,name,needed,eligible){
  let added=0;
  for(const idx of eligible)if(!used[idx]&&cards[idx].name.toLowerCase()===name.toLowerCase()){
    deck[posObj.pos++]=idx;used[idx]=1;if(++added>=needed)return true;
  }
  return false;
}
function createBalancedCandidate(deck,used,eligible,loc,mode,pIndex,focusEco){
  deck.fill(-1);used.fill(0);const posObj={pos:0};
  if(loc.requiredCount>0&&!forceNamedCards(deck,used,posObj,loc.requiredName,loc.requiredCount,eligible))return false;
  if(mode===1&&pIndex>=0){
    if(!seedPackage(deck,used,posObj,pIndex,eligible))return false;
    if(Math.random()<0.48)trySeedSecondaryPackage(deck,used,posObj,pIndex,eligible,loc);
  } else if(mode===2&&focusEco>0){
    if(nicheDesign[focusEco]>0&&!seedNamedDesign(deck,used,posObj,nicheDesign[focusEco],1))return false;
  } else if(mode>=3&&mode<=5&&startingTerrainEco>0){
    if(pIndex>=0){
      if(!seedPackage(deck,used,posObj,pIndex,eligible))return false;
      if(mode>3||Math.random()<0.45)trySeedPreferredSecondaryPackage(deck,used,posObj,pIndex,eligible,loc);
    }
    seedPreferredTerrainToTarget(deck,used,posObj,eligible,loc,mode+1);
  }
  let guard=0;
  while(posObj.pos<DECK_SIZE){
    if(++guard>500)return false;
    const idx=eligible[Math.floor(Math.random()*eligible.length)];
    if(!used[idx]){deck[posObj.pos++]=idx;used[idx]=1;}
  }
  return true;
}
function fail(reasonBox,text){if(reasonBox)reasonBox.reason=text;return false;}
function validateEcology(st,loc,reasonBox){
  if(loc.name==="Marsh of Rebirth"){
    if(st.designCount[IDS.Hydraworm]!==4)return fail(reasonBox,"Marsh of Rebirth requires all 4 Hydraworms (1–4/12).");
    if(st.predator!==4)return fail(reasonBox,"Marsh of Rebirth: all 4 Predator slots are used by Hydraworms.");
  } else if(st.predator<1||st.predator>3)return fail(reasonBox,"Predator count must be 1–3.");
  if(st.prey<2||st.prey>4)return fail(reasonBox,"Prey count must be 2–4.");
  if(st.flora<2||st.flora>4)return fail(reasonBox,"Flora count must be 2–4.");
  if(st.obstacle<1||st.obstacle>3)return fail(reasonBox,"Obstacle count must be 1–3.");
  if(st.food<1||st.food>3)return fail(reasonBox,"Food count must be 1–3.");
  if(st.being<4||st.being>7)return fail(reasonBox,"Being count must be 4–7.");
  if(st.feature<5||st.feature>8)return fail(reasonBox,"Feature count must be 5–8.");
  return true;
}
function validateDependencies(st,reasonBox){
  if(st.designCount[IDS.Wolhund]===1)return fail(reasonBox,"Prowling Wolhund needs another Prowling Wolhund.");
  if(st.designCount[IDS.Buck]>0||st.designCount[IDS.Doe]>0)if(st.designCount[IDS.Buck]<2||st.designCount[IDS.Doe]<1)return fail(reasonBox,"Deer cluster requires 2 Sitka Buck + 1 Sitka Doe.");
  if(st.designCount[IDS.Cloudhive]>0){if(st.designCount[IDS.Swarm]<1)return fail(reasonBox,"Cloudhive requires Cloudhive Swarm.");if(st.mammal<1)return fail(reasonBox,"Cloudhive requires Mammal support.");}
  if(st.designCount[IDS.Lutrinal]===1)return fail(reasonBox,"Romping Lutrinal requires another Romping Lutrinal.");
  if(st.designCount[IDS.Lutrinal]>0&&st.predator-st.designCount[IDS.Lutrinal]<1)return fail(reasonBox,"Romping Lutrinal requires another Predator.");
  if((st.designCount[IDS.Holt]>0||st.designCount[IDS.Kelpweed]>0)&&st.designCount[IDS.Lutrinal]<2)return fail(reasonBox,"Lutrinal Holt / Fresh Blue Kelpweed require at least 2 Romping Lutrinal.");
  if(st.designCount[IDS.Hydraworm]===1)return fail(reasonBox,"Hydraworm requires another Hydraworm.");
  if((st.designCount[IDS.Ruins]>0||st.designCount[IDS.Reactor]>0)&&st.designCount[IDS.Hydraworm]<2)return fail(reasonBox,"Overgrown Ruins/Reactor require at least 2 Hydraworm.");
  if(st.designCount[IDS.Velox]>0&&st.designCount[IDS.Fields]<1)return fail(reasonBox,"Bloodbeckoned Velox requires The Whispering Fields.");
  if(st.designCount[IDS.Anthill]>0&&st.designCount[IDS.Scrof]<1)return fail(reasonBox,"Harvester Anthill requires Hungry Scrof.");
  if(st.designCount[IDS.Scrof]>0){if(st.predator<2)return fail(reasonBox,"Hungry Scrof requires another Predator.");if(st.food<1)return fail(reasonBox,"Hungry Scrof requires Food support.");}
  if(st.designCount[IDS.Opilion]>0&&st.designCount[IDS.WebWall]<1)return fail(reasonBox,"Skittish Opilion requires Web Wall.");
  if(st.designCount[IDS.Bats]>0&&st.designCount[IDS.WebWall]<1)return fail(reasonBox,"Nycta Bats require Web Wall.");
  if(st.designCount[IDS.Talus]>0&&(st.designCount[IDS.Bats]<1||st.designCount[IDS.WebWall]<1))return fail(reasonBox,"Talus Cave requires Nycta Bats + Web Wall.");
  if(st.designCount[IDS.Ursus]>0&&st.fish<1)return fail(reasonBox,"Wading Ursus requires Fish support.");
  if(st.designCount[IDS.Toxin]>0){if(st.waterFeature<1)return fail(reasonBox,"Toxin Eater requires a Water Feature.");if(st.predator<1)return fail(reasonBox,"Toxin Eater requires Predator support.");}
  if(st.designCount[IDS.Cherry]>0){if(st.insect<1)return fail(reasonBox,"Hanging Cherry Moss requires Insect support.");if(st.mammal<1)return fail(reasonBox,"Hanging Cherry Moss requires Mammal support.");}
  if(st.designCount[IDS.Atrox]>0&&st.predator<2)return fail(reasonBox,"Pouncing Atrox requires another Predator.");
  if(st.designCount[IDS.Artilope]>0){if(st.predator<1)return fail(reasonBox,"Artilope requires Predator support.");if(st.presence2Plus<1)return fail(reasonBox,"Artilope requires another active card with Presence 2+.");}
  if(st.designCount[IDS.Sunberry]>0&&st.prey<1)return fail(reasonBox,"Sunberry Bramble requires Prey support.");
  return true;
}
function validateLocation(st,loc,reasonBox){
  if(st.predator<loc.minPredator)return fail(reasonBox,`${loc.name}: not enough Predators for Arrival Setup.`);
  if(st.prey<loc.minPrey)return fail(reasonBox,`${loc.name}: not enough Prey for Arrival Setup.`);
  if(st.flora<loc.minFlora)return fail(reasonBox,`${loc.name}: not enough Flora for Arrival Setup.`);
  if(st.obstacle<loc.minObstacle)return fail(reasonBox,`${loc.name}: not enough Obstacles for Arrival Setup.`);
  if(st.feature<loc.minFeature)return fail(reasonBox,`${loc.name}: not enough Features for Arrival Setup.`);
  if(st.waterFeature<loc.minWaterFeature)return fail(reasonBox,`${loc.name}: not enough Water Features for Arrival Setup.`);
  if(st.predatorOrPreyCards<loc.minPredOrPrey)return fail(reasonBox,`${loc.name}: not enough Predator/Prey cards for Arrival Setup.`);
  if(st.presence3<loc.minPresence3)return fail(reasonBox,`${loc.name}: a Presence 3 card is required for Arrival Setup.`);
  if(loc.requiredCount>0){const rid=id(loc.requiredName);if(!rid||st.designCount[rid]<loc.requiredCount)return fail(reasonBox,`${loc.name}: requires ${loc.requiredCount}× ${loc.requiredName}.`);}
  return true;
}
function cardMatchesDiscardMode(idx,mode){
  const c=cards[idx];
  if(mode==="PREDATOR")return c.isPredator;
  if(mode==="FEATURE")return c.cardType==="Feature";
  if(mode==="PRESENCE3")return presenceAtInitialReveal(idx,0)===3;
  return false;
}
function validateDiscardRobustness(deck,loc,reasonBox){
  if(!loc.discardMode)return true;
  let found=false;
  for(let i=0;i<DECK_SIZE;i++)if(cardMatchesDiscardMode(deck[i],loc.discardMode)){
    found=true;
    if(loc.discardMode==="PRESENCE3"){
      const deck2=deck.filter((_,j)=>j!==i),st2=buildStats(deck2);
      if(st2.prey<2)return fail(reasonBox,`${loc.name} must still have at least 2 Prey immediately after discarding any Presence 3 card.`);
    }
  }
  if(!found)return fail(reasonBox,`${loc.name}: Arrival Setup cannot find a legal card for its required discard.`);
  return true;
}
function validateDeck(deck,loc,st,reasonBox=null){
  buildStats(deck,st,DECK_SIZE);
  return validateEcology(st,loc,reasonBox)&&validateDependencies(st,reasonBox)&&validateLocation(st,loc,reasonBox)&&validateDiscardRobustness(deck,loc,reasonBox);
}

function packageComplete(st,pIndex){
  if(pIndex<0||pIndex>=PACKAGE_COUNT)return false;
  if(pIndex>=LEGACY_PACKAGE_COUNT&&startingTerrainEco!==3)return false;
  const p=packages[pIndex];
  for(const m of p.members)if(st.designCount[m.designId]<m.qty)return false;
  const exclude=p.members[0]?.designId||0;
  return hasPackageSupport(st,p.support1,exclude)&&hasPackageSupport(st,p.support2,exclude);
}
function hasPackageSupport(st,mode,excludedDesign){
  switch(mode){
    case SUP.NONE:return true;case SUP.MAMMAL:return st.mammal>0;case SUP.PRED_OTHER:return st.predator-st.designCount[excludedDesign]>0;
    case SUP.PREY:return st.prey>0;case SUP.FISH:return st.fish>0;case SUP.WATER_FEATURE:return st.waterFeature>0;case SUP.INSECT:return st.insect>0;case SUP.FOOD:return st.food>0;
    case SUP.PRED_PRES2:
      for(let did=1;did<=MAX_DESIGNS;did++)if(did!==excludedDesign&&st.designCount[did]>0){const c=cards[designFirst[did]];if(c.isPredator&&!c.isPresenceDynamic&&c.presence>=2)return true;}return false;
    default:return false;
  }
}
function basePackageValue(pIndex){
  const p=packages[pIndex];let slots=0,designs=p.members.length,largestRepeat=0;
  for(const m of p.members){slots+=m.qty;if(m.qty>largestRepeat)largestRepeat=m.qty;}
  if(p.support1>0)slots++;if(p.support2>0)slots++;slots=Math.min(4,Math.max(2,slots));
  let v=12+3*(slots-2);if(designs===2)v+=4;if(designs>=3)v+=6;if(largestRepeat>=2)v+=3;if(designs===1&&p.support1===SUP.PREY)v=8;return v;
}
function balancedNetworkScore(st,loc,profile){
  const used=new Int8Array(MAX_DESIGNS+1),chosen=new Uint8Array(PACKAGE_COUNT),supportSpent=new Uint8Array(SUP.PRED_PRES2+1);
  if(loc.requiredCount>0){const rid=id(loc.requiredName);if(rid)used[rid]=loc.requiredCount;}
  const diminishing=[1,.72,.43,.22];let result=0;
  for(let step=0;step<4;step++){
    let bestP=-1,bestValue=0;
    for(let pi=0;pi<PACKAGE_COUNT;pi++)if(!chosen[pi]&&packageComplete(st,pi)){
      const p=packages[pi];let namedSlots=0,novelSlots=0;
      for(const m of p.members){namedSlots+=m.qty;if(m.qty>used[m.designId])novelSlots+=m.qty-used[m.designId];}
      if(namedSlots>0&&novelSlots>0){
        let supportSlots=0,novelSupports=0;
        const supports=[p.support1,p.support2];
        for(let j=0;j<2;j++){const mode=supports[j];if(mode>0&&(j===0||mode!==supports[0])){supportSlots++;if(!supportSpent[mode])novelSupports++;}}
        const val=basePackageValue(pi)*(novelSlots+.35*novelSupports)/(namedSlots+.35*supportSlots);
        if(val>bestValue){bestValue=val;bestP=pi;}
      }
    }
    if(bestP<0)break;result+=bestValue*diminishing[step];chosen[bestP]=1;
    for(const m of packages[bestP].members)if(used[m.designId]<m.qty)used[m.designId]=m.qty;
    if(packages[bestP].support1>0)supportSpent[packages[bestP].support1]=1;if(packages[bestP].support2>0)supportSpent[packages[bestP].support2]=1;
  }
  if(profile==="MAX SYNERGY")result*=1.35;else if(profile==="HIGH VARIETY")result*=.85;return result;
}
function computeScoreParts(st,loc){
  let named=0,trait=0,chain=0,redundancy=0;
  if(st.designCount[IDS.Wolhund]>=2)named+=12+2*(st.designCount[IDS.Wolhund]-2);
  if(st.designCount[IDS.Buck]>=2&&st.designCount[IDS.Doe]>=1)named+=14;if(st.designCount[IDS.Cloudhive]>0&&st.designCount[IDS.Swarm]>0)named+=10;
  if(st.designCount[IDS.Lutrinal]>=2)named+=10;if(st.designCount[IDS.Holt]>0)named+=8;if(st.designCount[IDS.Kelpweed]>0)named+=8;
  if(st.designCount[IDS.Hydraworm]>=2)named+=12+2*(st.designCount[IDS.Hydraworm]-2);if(st.designCount[IDS.Ruins]>0)named+=8;if(st.designCount[IDS.Reactor]>0)named+=8;
  if(st.designCount[IDS.Velox]>0)named+=10;if(st.designCount[IDS.Anthill]>0)named+=10;if(st.designCount[IDS.Opilion]>0)named+=8;if(st.designCount[IDS.Bats]>0)named+=8;if(st.designCount[IDS.Talus]>0)named+=10;
  if(st.designCount[IDS.Cloudhive]>0)trait+=5;if(st.designCount[IDS.Lutrinal]>0)trait+=7;if(st.designCount[IDS.Scrof]>0)trait+=8;if(st.designCount[IDS.Ursus]>0)trait+=7;
  if(st.designCount[IDS.Toxin]>0)trait+=8;if(st.designCount[IDS.Cherry]>0)trait+=8;if(st.designCount[IDS.Atrox]>0)trait+=7;if(st.designCount[IDS.Artilope]>0)trait+=7;if(st.designCount[IDS.Sunberry]>0)trait+=5;
  if(st.designCount[IDS.Talus]>0&&st.designCount[IDS.Bats]>0&&st.designCount[IDS.WebWall]>0)chain+=12;
  if(st.designCount[IDS.Hydraworm]>=2&&(st.designCount[IDS.Ruins]+st.designCount[IDS.Reactor]>0))chain+=10;
  if(st.designCount[IDS.Holt]+st.designCount[IDS.Kelpweed]>0&&st.designCount[IDS.Lutrinal]>=2)chain+=10;
  if(st.designCount[IDS.Anthill]>0&&st.designCount[IDS.Scrof]>0)chain+=8;if(st.designCount[IDS.Velox]>0&&st.designCount[IDS.Fields]>0)chain+=8;
  if(st.mammal>1)redundancy+=2*(st.mammal-1);if(st.predator>2)redundancy+=2;if(st.prey>2)redundancy+=2;if(st.waterFeature>1)redundancy+=2;if(st.food>1)redundancy+=2;if(st.fish>1)redundancy+=2;
  let prefPred=loc.name==="Marsh of Rebirth"?4:2,prefPrey=3,prefObstacle=2;if(loc.minPredator>prefPred)prefPred=loc.minPredator;if(loc.minPrey>prefPrey)prefPrey=loc.minPrey;if(loc.minObstacle>prefObstacle)prefObstacle=loc.minObstacle;
  let ecology=24-1.3*Math.abs(st.predator-prefPred)-1.1*Math.abs(st.prey-prefPrey)-Math.abs(st.flora-3)-.9*Math.abs(st.obstacle-prefObstacle)-.9*Math.abs(st.food-2)-.6*Math.abs(st.being-6)-.6*Math.abs(st.feature-6);if(ecology<0)ecology=0;
  let target=Math.min(5,Math.max(1,selectedEcoCount));const credits=[4,3,2,1.5,1.5];let earned=0,possible=0;for(let i=0;i<target;i++){possible+=credits[i];if(i<st.ecosystems)earned+=credits[i];}
  let diversity=12*earned/possible,maxEco=0;for(let e=1;e<=MAX_ECOS;e++)if(st.ecoCount[e]>maxEco)maxEco=st.ecoCount[e];const idealMax=DECK_SIZE/target+2;if(maxEco>idealMax)diversity-=1.5*(maxEco-idealMax);if(diversity<0)diversity=0;
  const wmin=(a,b)=>Math.min(a,Math.max(0,b));let location=0;if(loc.minPredator>0)location+=wmin(2,st.predator-loc.minPredator);if(loc.minPrey>0)location+=wmin(2,st.prey-loc.minPrey);
  if(loc.minFlora>0)location+=wmin(2,st.flora-loc.minFlora);if(loc.minObstacle>0)location+=wmin(2,st.obstacle-loc.minObstacle);if(loc.minFeature>0)location+=wmin(2,st.feature-loc.minFeature);
  if(loc.minWaterFeature>0)location+=wmin(2,st.waterFeature-loc.minWaterFeature);if(loc.requiredCount>0)location+=4;if(location>8)location=8;
  return {named,trait,chain,redundancy,ecology,diversity,location};
}
function startingTerrainBonus(deck,st){
  if(!startingTerrainEco)return 0;const home=st.ecoCount[startingTerrainEco];if(!home)return 0;let bonus=2.5;if(home>=2)bonus+=1.5;if(home>=3)bonus+=.75;bonus=Math.min(START_TERRAIN_MAX_BONUS,bonus);let fit=0;
  for(const idx of deck){const c=cards[idx];if(c.ecoId===startingTerrainEco)continue;switch(startingTerrainEco){case 1:case 2:if(c.isFlora||c.isFood)fit+=.15;break;case 3:case 4:if(c.isObstacle)fit+=.2;break;case 5:case 6:case 8:if(c.isWater)fit+=.2;break;case 7:if(c.isPrey||c.isFood)fit+=.15;break;}}
  return bonus+Math.min(CROSS_TERRAIN_FIT_CAP,fit);
}
function scoreDeck(deck,st,loc,profile){
  const p=computeScoreParts(st,loc);let redM=1,ecoM=1,divM=1,locM=1;
  if(profile==="MAX SYNERGY"){redM=1.2;ecoM=.9;divM=.6;locM=1.1;}else if(profile==="HIGH VARIETY"){redM=.8;ecoM=1;divM=1.65;locM=1;}
  return balancedNetworkScore(st,loc,profile)+Math.min(8,p.redundancy)*redM+p.ecology*ecoM+p.diversity*divM+p.location*locM+startingTerrainBonus(deck,st);
}
function mountainDistinctNetworkCount(st){let n=0;if(st.designCount[IDS.Atrox]>0&&st.designCount[IDS.Irix]>0)n++;if(st.designCount[IDS.Carcass]>0&&(st.designCount[IDS.Irix]>0||st.designCount[IDS.Atrox]>0))n++;if(st.designCount[IDS.Stanchion]>0&&(st.designCount[IDS.Fractalwire]>0||st.designCount[IDS.ShaleScree]>0))n++;if(st.designCount[IDS.Meadowlarks]>0&&st.designCount[IDS.Atrox]>0)n++;return n;}
function preferredNetworkCount(st){
  if(!startingTerrainEco)return 0;const used=new Int8Array(MAX_DESIGNS+1),done=new Uint8Array(PACKAGE_COUNT);let count=0;
  for(let step=0;step<4;step++){
    let next=-1;
    for(let pi=0;pi<PACKAGE_COUNT;pi++)if(!done[pi]&&packages[pi].anchorEco===startingTerrainEco&&packageComplete(st,pi)){
      let novel=0;for(const m of packages[pi].members)if(m.qty>used[m.designId])novel+=m.qty-used[m.designId];if(novel>0){next=pi;break;}
    }
    if(next<0)break;count++;done[next]=1;for(const m of packages[next].members)if(used[m.designId]<m.qty)used[m.designId]=m.qty;
  }
  return count;
}
function designSignature(st){let s="";for(let did=1;did<=MAX_DESIGNS;did++)s+=String.fromCharCode(48+st.designCount[did]);return s;}
function designSignatureOverlap(a,b){if(a.length!==MAX_DESIGNS||b.length!==MAX_DESIGNS)return 0;let n=0;for(let i=0;i<MAX_DESIGNS;i++)n+=Math.min(a.charCodeAt(i)-48,b.charCodeAt(i)-48);return n;}
function getArrivalSearchPlan(loc){
  switch(loc.name){
    case "Atrox Mountain":case "The Fractured Wall":return ["OBSTACLE","OBSTACLE"];
    case "Kobo's Market":case "Branch":case "Mound of the Navigator":case "Terravore":return ["FEATURE"];
    case "The High Basin":return ["FLORA"];
    case "Ancestor's Grove":return ["PREY","PREY"];
    case "Biological Outpost":return ["PRED_OR_PREY","PRED_OR_PREY"];
    case "Headwaters Station":return ["NAME:Silverfin Carp","NAME:Silverfin Carp"];
    case "Meadow":return ["NAME:The Whispering Fields"];
    case "The Concordant Ziggurats":return ["OBSTACLE","PREDATOR"];
    case "Archaeological Outpost":return ["FEATURE","FEATURE"];
    case "Michael's Bog":return ["NAME:Fetid Bog"];
    case "Marsh of Rebirth":return ["NAME:Hydraworm"];
    case "Sunken Outpost":return ["WATER_FEATURE"];
    default:return [];
  }
}
function cardMatchesArrivalMode(cardIndex,mode){
  const c=cards[cardIndex];if(mode.startsWith("NAME:"))return c.name.toLowerCase()===mode.slice(5).toLowerCase();
  switch(mode){case "OBSTACLE":return c.isObstacle;case "FEATURE":return c.cardType==="Feature";case "FLORA":return c.isFlora;case "PREY":return c.isPrey;case "PREDATOR":return c.isPredator;case "PRED_OR_PREY":return c.isPredator||c.isPrey;case "WATER_FEATURE":return c.isWater&&c.cardType==="Feature";default:return false;}
}
function getOrdinaryArrivalDraws(name){
  if(["White Sky","Lone Tree Station","Golden Shore","Mound of the Navigator","Terravore","Tumbledown"].includes(name))return [1,1];
  if(["Boulder Field","Greenbriar Knoll"].includes(name))return [1,2];
  if(["Northern Outpost","Stoneweaver Bridge","The Philosopher's Garden","The Furrow","The Plummet","Crossroads Station","Rings of the Moon","The Greenbridge","The Cypress Citadel","The Frowning Gate","Bowl of the Sun","Watcher's Rock"].includes(name))return [2,2];
  return [0,0];
}
function isUnavailableForDraw(pos,discard1,discard2,selected){return pos===discard1||pos===discard2||selected.includes(pos);}
function postArrivalBranchScore(st,remainingSize,activeStats){
  const f=remainingSize/DECK_SIZE;let eco=8-.9*Math.abs(st.predator-2*f)-.9*Math.abs(st.prey-3*f)-.9*Math.abs(st.flora-3*f)-.8*Math.abs(st.obstacle-2*f)-.8*Math.abs(st.food-2*f)-.45*Math.abs(st.being-6*f)-.45*Math.abs(st.feature-6*f);eco=Math.max(0,Math.min(8,eco));
  let target=Math.min(5,selectedEcoCount,remainingSize);if(target<1)target=1;let diversity=Math.min(2,2*st.ecosystems/target),red=0;
  if(activeStats.mammal>1)red+=.4;if(activeStats.predator>1)red+=.4;if(activeStats.prey>2)red+=.4;if(activeStats.food>1)red+=.4;if(activeStats.waterFeature>1)red+=.4;if(activeStats.fish>1)red+=.4;red=Math.min(2,red);
  return eco+diversity+red;
}
function scoreArrivalOutcome(deck,loc,discard1,discard2,selected,draw1,draw2,acc,reasonBox){
  const active=[],remaining=[];
  for(let i=0;i<DECK_SIZE;i++)if(i!==discard1&&i!==discard2){
    let hidden=false;if(loc.name==="Terravore"&&selected.includes(i))hidden=true;if(loc.name==="The Philosopher's Garden"&&i===draw1)hidden=true;if(!hidden)active.push(deck[i]);
    if(!isUnavailableForDraw(i,discard1,discard2,selected)&&i!==draw1&&i!==draw2)remaining.push(deck[i]);
  }
  if(remaining.length<=0)return fail(reasonBox,`${loc.name}: Arrival Setup leaves no initial Path cards.`);
  const activeStats=buildStats(active),remainStats=buildStats(remaining);let first=postArrivalBranchScore(remainStats,remaining.length,activeStats);
  if(!validateDependencies(activeStats,null))first-=2.5;if(first<0)first=0;let branchScore=first;
  if(discard1>=0||discard2>=0){
    const recycled=remaining.slice();if(discard1>=0)recycled.push(deck[discard1]);if(discard2>=0)recycled.push(deck[discard2]);const recycledStats=buildStats(recycled);
    const recycledActive=active.slice();if(discard1>=0)recycledActive.push(deck[discard1]);if(discard2>=0)recycledActive.push(deck[discard2]);buildStats(recycledActive,activeStats);
    const second=postArrivalBranchScore(recycledStats,recycled.length,activeStats);branchScore=.7*first+.3*second;
  }
  acc.count++;acc.total+=branchScore;if(branchScore<acc.worst)acc.worst=branchScore;return true;
}
function evaluateArrivalBranch(deck,loc,discardPos,selected,acc,reasonBox){
  const [low,high]=getOrdinaryArrivalDraws(loc.name);
  for(let drawN=low;drawN<=high;drawN++){
    if(drawN===0){if(!scoreArrivalOutcome(deck,loc,discardPos,-1,selected,-1,-1,acc,reasonBox))return false;}
    else if(drawN===1){for(let a=0;a<DECK_SIZE;a++)if(!isUnavailableForDraw(a,discardPos,-1,selected))if(!scoreArrivalOutcome(deck,loc,discardPos,-1,selected,a,-1,acc,reasonBox))return false;}
    else {for(let a=0;a<DECK_SIZE-1;a++)if(!isUnavailableForDraw(a,discardPos,-1,selected))for(let b=a+1;b<DECK_SIZE;b++)if(!isUnavailableForDraw(b,discardPos,-1,selected))if(!scoreArrivalOutcome(deck,loc,discardPos,-1,selected,a,b,acc,reasonBox))return false;}
  }
  return acc.count>0;
}
function exploreArrivalSearches(deck,loc,discardPos,modes,actionNo,selected,acc,reasonBox){
  if(actionNo>=modes.length)return evaluateArrivalBranch(deck,loc,discardPos,selected,acc,reasonBox);
  let found=false;
  for(let i=0;i<DECK_SIZE;i++)if(i!==discardPos&&!selected.includes(i)){
    if(actionNo>0&&modes[actionNo]===modes[actionNo-1]&&i<=selected[actionNo-1])continue;
    if(cardMatchesArrivalMode(deck[i],modes[actionNo])){found=true;selected[actionNo]=i;if(!exploreArrivalSearches(deck,loc,discardPos,modes,actionNo+1,selected,acc,reasonBox))return false;selected.length=actionNo;}
  }
  if(!found){if(actionNo>0&&modes[actionNo]===modes[actionNo-1])return true;return fail(reasonBox,`${loc.name}: Arrival Setup cannot complete search ${actionNo+1} (${modes[actionNo]}) after earlier setup effects.`);}
  return true;
}
function evaluateArrivalForDiscard(deck,loc,discardPos,modes,acc,reasonBox){
  const before=acc.count,selected=[];let ok;
  if(!modes.length)ok=evaluateArrivalBranch(deck,loc,discardPos,selected,acc,reasonBox);else ok=exploreArrivalSearches(deck,loc,discardPos,modes,0,selected,acc,reasonBox);
  if(ok&&acc.count===before)return fail(reasonBox,`${loc.name}: not enough cards for every required Arrival Setup search after this discard.`);return ok;
}
function nimChoiceLegal(a,b,chosen,deck){if(chosen!==a&&chosen!==b)return false;const aa=cards[deck[a]].isAmbush,bb=cards[deck[b]].isAmbush;if(aa&&!bb)return chosen===a;if(bb&&!aa)return chosen===b;return true;}
function evaluateMountNimSetup(deck,loc,reasonBox){
  const acc={count:0,total:0,worst:1e30};
  for(let a=0;a<DECK_SIZE-1;a++)for(let b=a+1;b<DECK_SIZE;b++)for(let c=0;c<DECK_SIZE-1;c++)if(c!==a&&c!==b)for(let d=c+1;d<DECK_SIZE;d++)if(d!==a&&d!==b){
    let legal=false;if(nimChoiceLegal(a,c,a,deck)&&nimChoiceLegal(b,d,b,deck))legal=true;if(nimChoiceLegal(a,d,a,deck)&&nimChoiceLegal(b,c,b,deck))legal=true;
    if(legal&&!scoreArrivalOutcome(deck,loc,c,d,[a,b],-1,-1,acc,reasonBox))return {ok:false,score:0};
  }
  if(acc.count<=0)return {ok:fail(reasonBox,`${loc.name}: no legal two-Ranger Ambush outcome.`),score:0};
  return {ok:true,score:.7*acc.worst+.3*(acc.total/acc.count)};
}
function evaluateArrivalResilience(deck,loc,reasonBox){
  if(loc.name==="Mount Nim")return evaluateMountNimSetup(deck,loc,reasonBox);
  const modes=getArrivalSearchPlan(loc),acc={count:0,total:0,worst:1e30};
  if(!loc.discardMode){if(!evaluateArrivalForDiscard(deck,loc,-1,modes,acc,reasonBox))return {ok:false,score:0};}
  else {let found=false;for(let i=0;i<DECK_SIZE;i++)if(cardMatchesDiscardMode(deck[i],loc.discardMode)){found=true;if(!evaluateArrivalForDiscard(deck,loc,i,modes,acc,reasonBox))return {ok:false,score:0};}if(!found)return {ok:fail(reasonBox,`${loc.name}: Arrival Setup cannot find a legal card for its required discard.`),score:0};}
  if(acc.count===0)return {ok:fail(reasonBox,`${loc.name}: no legal Arrival Setup outcome could be simulated.`),score:0};
  return {ok:true,score:.7*acc.worst+.3*(acc.total/acc.count)};
}
function multiObjectiveQualityFloor(st,loc,arrivalScore){const p=computeScoreParts(st,loc);const syn=Math.min(1,balancedNetworkScore(st,loc,"BALANCED")/45),eco=Math.min(1,p.ecology/24),div=Math.min(1,p.diversity/12),arr=Math.min(1,arrivalScore/12);return Math.min(syn,eco,div,arr);}

// ---------------- Finalist retention and final selection ----------------
function bucketCapacity(bucket){
  if(bucket===1)return GENERAL_FINALISTS;
  if(bucket<=1+PACKAGE_COUNT)return PACKAGE_FINALISTS;
  if(bucket===START_TERRAIN_BUCKET)return START_TERRAIN_FOUR_FINALISTS;
  if(bucket===START_TERRAIN_FIVE_BUCKET)return START_TERRAIN_FIVE_FINALISTS;
  if(bucket===START_TERRAIN_SIX_BUCKET)return START_TERRAIN_SIX_FINALISTS;
  if(bucket===START_TERRAIN_THREE_BUCKET)return START_TERRAIN_THREE_FINALISTS;
  if(bucket===START_TERRAIN_TWO_BUCKET)return START_TERRAIN_TWO_FINALISTS;
  return 1;
}
function ensureBucket(buckets,bucket){if(!buckets[bucket])buckets[bucket]=[];return buckets[bucket];}
function finalistRecord(candidate,score,st,bucket){return {deck:candidate.slice(),score,signature:designSignature(st),bucket};}
function keepBalancedFinalist(candidate,score,st,bucket,buckets){
  const arr=ensureBucket(buckets,bucket),cap=bucketCapacity(bucket),sig=designSignature(st);
  if(arr.some(x=>x.signature===sig))return;
  if(arr.length<cap){arr.push({deck:candidate.slice(),score,signature:sig,bucket});return;}
  let worst=0;for(let i=1;i<arr.length;i++)if(arr[i].score<arr[worst].score)worst=i;
  if(score<=arr[worst].score)return;
  arr[worst]={deck:candidate.slice(),score,signature:sig,bucket};
}
function keepVariedTerrainFinalist(candidate,score,st,bucket,buckets){
  const arr=ensureBucket(buckets,bucket),cap=bucketCapacity(bucket);
  if(arr.length<cap){keepBalancedFinalist(candidate,score,st,bucket,buckets);return;}
  const sig=designSignature(st);if(arr.some(x=>x.signature===sig))return;
  let maxScore=-Infinity,nearest=0,worst=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i].score>maxScore)maxScore=arr[i].score;
    nearest=Math.max(nearest,designSignatureOverlap(sig,arr[i].signature));
    if(arr[i].score<arr[worst].score)worst=i;
  }
  const minScore=arr[worst].score;
  if(nearest<=9&&score>=maxScore-8&&score>=minScore-2.5){
    if(score>minScore||Math.random()<0.07)arr[worst]={deck:candidate.slice(),score,signature:sig,bucket};
  }else if(score>minScore+2){keepBalancedFinalist(candidate,score,st,bucket,buckets);}
}
function bucketFamily(bucket){
  if(bucket===1)return 0;
  if(bucket<=1+PACKAGE_COUNT)return packages[bucket-2].anchorEco;
  if(bucket>=START_TERRAIN_BUCKET)return startingTerrainEco;
  return bucket-1-PACKAGE_COUNT;
}
function bestPackageFinalist(pIndex,buckets){const arr=buckets[2+pIndex]||[];if(!arr.length)return null;return arr.reduce((a,b)=>b.score>a.score?b:a);}
function topFromBucket(bucket,n,buckets){return (buckets[bucket]||[]).slice().sort((a,b)=>b.score-a.score).slice(0,n);}
function buildBalancedEvaluationOrder(buckets,auditLimit){
  const order=[],seenObjects=new Set();
  const push=x=>{if(x&&!seenObjects.has(x)){seenObjects.add(x);order.push(x);}};
  const general=(buckets[1]||[]).slice().sort((a,b)=>b.score-a.score);
  let routeLimit=auditLimit<=PRIMARY_NIM?2:4;
  let takeFour=startingTerrainEco?Math.min(buckets[START_TERRAIN_BUCKET]?.length||0,auditLimit<=PRIMARY_NIM?1:2):0;
  let takeFive=startingTerrainEco?Math.min(buckets[START_TERRAIN_FIVE_BUCKET]?.length||0,1):0;
  let takeSix=startingTerrainEco?Math.min(buckets[START_TERRAIN_SIX_BUCKET]?.length||0,1):0;
  let free=routeLimit-takeFour;takeSix=Math.min(takeSix,Math.max(0,free));free-=takeSix;
  takeFive=Math.min(takeFive,Math.max(0,free));free-=takeFive;
  let takeThree=startingTerrainEco?Math.min(buckets[START_TERRAIN_THREE_BUCKET]?.length||0,Math.max(0,free)):0;free-=takeThree;
  let takeTwo=startingTerrainEco?Math.min(buckets[START_TERRAIN_TWO_BUCKET]?.length||0,Math.max(0,free)):0;
  const generalTarget=8-takeFour-takeFive-takeSix-takeThree-takeTwo;
  general.slice(0,generalTarget).forEach(push);
  if(startingTerrainEco){
    topFromBucket(START_TERRAIN_SIX_BUCKET,takeSix,buckets).forEach(push);
    topFromBucket(START_TERRAIN_FIVE_BUCKET,takeFive,buckets).forEach(push);
    topFromBucket(START_TERRAIN_BUCKET,takeFour,buckets).forEach(push);
    topFromBucket(START_TERRAIN_THREE_BUCKET,takeThree,buckets).forEach(push);
    topFromBucket(START_TERRAIN_TWO_BUCKET,takeTwo,buckets).forEach(push);
  }
  for(let eco=1;eco<=MAX_ECOS;eco++)if(enabledEco[eco]){
    let best=null,bestP=-1;
    for(let p=0;p<PACKAGE_COUNT;p++)if(packages[p].anchorEco===eco){const f=bestPackageFinalist(p,buckets);if(f&&(!best||f.score>best.score)){best=f;bestP=p;}}
    if(best){
      push(best);
      const opts=[];let total=0;
      for(let p=0;p<PACKAGE_COUNT;p++)if(p!==bestP&&packages[p].anchorEco===eco){const f=bestPackageFinalist(p,buckets);if(f&&best.score-f.score<=25){const w=Math.exp((f.score-best.score)/11);opts.push([f,w]);total+=w;}}
      if(opts.length){let r=Math.random()*total,chosen=opts[opts.length-1][0];for(const [f,w] of opts){r-=w;if(r<=0){chosen=f;break;}}push(chosen);}
    }
  }
  for(let eco=1;eco<=MAX_ECOS;eco++){const a=buckets[1+PACKAGE_COUNT+eco]||[];if(a.length)push(a[0]);}
  const all=[];for(let b=1;b<=LAST_BUCKET;b++)for(const f of (buckets[b]||[]))all.push(f);
  all.sort((a,b)=>b.score-a.score).forEach(push);
  return order;
}

const HISTORY_KEY="earthborne-rangers-cross12-v797-history";
function loadHistory(){try{const a=JSON.parse(localStorage.getItem(HISTORY_KEY)||"[]");return Array.isArray(a)?a.slice(0,8):[];}catch{return [];}}
function recentDeckPenalty(sig,locationName){
  try{
    if(typeof localStorage==="undefined")return 1;
    const prefix=`${startingTerrainEco}|${locationName}|`;let result=1;
    const h=loadHistory();
    for(let r=0;r<h.length;r++)if(typeof h[r]==="string"&&h[r].startsWith(prefix)){
      const older=h[r].slice(prefix.length),shared=designSignatureOverlap(sig,older);let p=1;
      if(shared>=12)p=.12+.06*r;else if(shared>=11)p=.34+.05*r;else if(shared>=10)p=.60+.04*r;
      if(p<result)result=p;
    }
    return result;
  }catch{return 1;}
}
function rememberChosenDeck(sig,locationName){
  try{
    if(typeof localStorage==="undefined")return;
    const h=loadHistory();h.unshift(`${startingTerrainEco}|${locationName}|${sig}`);localStorage.setItem(HISTORY_KEY,JSON.stringify(h.slice(0,8)));
  }catch{ /* Storage may be unavailable on a local file or privacy-restricted browser. */ }
}
function normalizeProfile(p){p=String(p||"").toUpperCase().trim();return ["BALANCED","MAX SYNERGY","HIGH VARIETY"].includes(p)?p:"BALANCED";}
function validateSpecialLocationChoice(loc){
  if(loc.name==="Spire")throw new Error("Spire uses its printed special Path setup and cannot be replaced by a standard 12-card CROSS deck.");
  if(loc.name==="The Alluvial Ruins")throw new Error("The Alluvial Ruins uses a separate detritus deck; CROSS-12 does not replace it.");
  if(loc.name==="Marsh of Rebirth"&&startingTerrainEco>0&&startingTerrainEco!==6)throw new Error("Marsh of Rebirth uses Swamp as its starting terrain. Choose Swamp (or NONE).");
}
async function generateDeckCore(state,progressCallback=null){
  setStateForGeneration(state);
  const loc=locationByName.get(state.locationName);if(!loc)throw new Error(`Unknown location: ${state.locationName}`);
  validateSpecialLocationChoice(loc);
  state.profile=normalizeProfile(state.profile);
  const eligible=buildEligiblePool();validatePoolFeasibility(eligible,loc);initializeBalancedPackages(loc);
  const terrainPackages=[];if(startingTerrainEco)for(const p of eligiblePackageIndex)if(packages[p].anchorEco===startingTerrainEco)terrainPackages.push(p);
  const buckets=new Array(LAST_BUCKET+1);const candidate=new Array(DECK_SIZE).fill(-1),used=new Uint8Array(cards.length),st=makeStats();let tested=0,validCount=0;
  while(tested<TOTAL_CANDIDATE_TRIALS){
    tested++;let focusPackage=-1,focusEco=0,focusMode=0,pick;
    switch(tested%8){
      case 0:case 1:
        if(startingTerrainEco&&Math.floor(tested/8)%4===0){focusMode=(tested%8===1)?5:4;if(terrainPackages.length){pick=Math.floor(Math.random()*terrainPackages.length);focusPackage=terrainPackages[pick];}}
        break;
      case 3:
        if(startingTerrainEco){focusMode=3;if(terrainPackages.length)focusPackage=terrainPackages[Math.floor(Math.random()*terrainPackages.length)];}
        break;
      case 4:case 5:case 6:
        if(eligiblePackageIndex.length){if(startingTerrainEco&&terrainPackages.length&&tested%8===4)focusPackage=terrainPackages[Math.floor(Math.random()*terrainPackages.length)];else focusPackage=eligiblePackageIndex[Math.floor(Math.random()*eligiblePackageIndex.length)];focusMode=1;}
        break;
      case 7:
        focusEco=nthEnabledEcosystem(1+Math.floor(Math.random()*selectedEcoCount));if(focusEco>0)focusMode=2;break;
    }
    if(createBalancedCandidate(candidate,used,eligible,loc,focusMode,focusPackage,focusEco)){
      if(validateDeck(candidate,loc,st)){
        validCount++;const score=scoreDeck(candidate,st,loc,state.profile);
        keepBalancedFinalist(candidate,score,st,1,buckets);
        if(startingTerrainEco){const n=st.ecoCount[startingTerrainEco];if(n>=6)keepVariedTerrainFinalist(candidate,score,st,START_TERRAIN_SIX_BUCKET,buckets);else if(n===5)keepVariedTerrainFinalist(candidate,score,st,START_TERRAIN_FIVE_BUCKET,buckets);else if(n===4)keepVariedTerrainFinalist(candidate,score,st,START_TERRAIN_BUCKET,buckets);else if(n===3)keepBalancedFinalist(candidate,score,st,START_TERRAIN_THREE_BUCKET,buckets);else if(n===2)keepBalancedFinalist(candidate,score,st,START_TERRAIN_TWO_BUCKET,buckets);}
        if(focusMode===1&&focusPackage>=0&&packageComplete(st,focusPackage))keepBalancedFinalist(candidate,score,st,2+focusPackage,buckets);
        else if(focusMode===2&&focusEco>0&&nicheDesign[focusEco]>0&&st.designCount[nicheDesign[focusEco]]>0)keepBalancedFinalist(candidate,score,st,1+PACKAGE_COUNT+focusEco,buckets);
      }
    }
    if(tested%10000===0&&progressCallback){progressCallback(tested,TOTAL_CANDIDATE_TRIALS);await new Promise(resolve=>setTimeout(resolve,0));}
  }
  if(validCount===0||!(buckets[1]?.length))throw new Error("No legal CROSS-12 deck was found for this Location and ecosystem selection.");
  const primaryTarget=loc.name==="Mount Nim"?PRIMARY_NIM:PRIMARY_FINALISTS;
  const evalOrder=buildBalancedEvaluationOrder(buckets,primaryTarget),seen=new Set(),viable=[];let primaryExamined=0,bestUtility=-Infinity,bestNativeUtility=-Infinity,lastReason="";
  for(const finalist of evalOrder){
    if(primaryExamined>=primaryTarget&&viable.length>0)break;
    if(seen.has(finalist.signature))continue;seen.add(finalist.signature);primaryExamined++;
    const reasonBox={reason:""},arrival=evaluateArrivalResilience(finalist.deck,loc,reasonBox);if(!arrival.ok){lastReason=reasonBox.reason;continue;}
    const vst=buildStats(finalist.deck),quality=multiObjectiveQualityFloor(vst,loc,arrival.score),utility=finalist.score+MULTIOBJECTIVE_BONUS*quality+.5*arrival.score,nativeUtility=utility-startingTerrainBonus(finalist.deck,vst);
    let homeCount=0,homeNetworks=0;if(startingTerrainEco){homeCount=vst.ecoCount[startingTerrainEco];if(startingTerrainEco===3){if(homeCount>=4)homeNetworks=mountainDistinctNetworkCount(vst);}else if(homeCount>=5)homeNetworks=preferredNetworkCount(vst);}
    const item={...finalist,utility,nativeUtility,family:bucketFamily(finalist.bucket),homeCount,homeNetworks,arrivalScore:arrival.score,stats:vst};viable.push(item);
    if(utility>bestUtility)bestUtility=utility;if(nativeUtility>bestNativeUtility)bestNativeUtility=nativeUtility;
  }
  if(!viable.length)throw new Error(`No finalist passed Arrival Setup for ${loc.name}. Last reason: ${lastReason}. Try another ecosystem selection.`);
  let band=NEAR_BEST_BAND,nativeGap=NATIVE_QUALITY_GAP,fourNativeGap=START_TERRAIN_FOUR_NATIVE_GAP;
  if(state.profile==="MAX SYNERGY"){band=8;nativeGap=3;fourNativeGap=5.5;}else if(state.profile==="HIGH VARIETY"){band=17;nativeGap=6;fourNativeGap=9;}
  for(const v of viable){let ng=v.homeCount>=4&&startingTerrainEco?fourNativeGap:nativeGap;if(startingTerrainEco===3&&v.homeCount>=4&&v.homeNetworks>=2)ng=fourNativeGap+1.5;v.finalEligible=(bestUtility-v.utility<=band&&bestNativeUtility-v.nativeUtility<=ng);}
  let desiredTier=0;if(startingTerrainEco)for(const v of viable)if(v.finalEligible)desiredTier=Math.max(desiredTier,Math.min(v.homeCount,4));
  const familyN=new Int16Array(MAX_ECOS+1);for(const v of viable)if(v.finalEligible&&(!startingTerrainEco||v.homeCount>=desiredTier))familyN[v.family]++;
  let totalWeight=0;for(const v of viable){v.weight=0;if(!v.finalEligible||(startingTerrainEco&&v.homeCount<desiredTier))continue;const divisor=Math.sqrt(Math.max(1,familyN[v.family]));v.weight=Math.exp((v.utility-bestUtility)/(startingTerrainEco?6.5:5.5))/divisor;if(startingTerrainEco&&v.homeNetworks>=2){if(v.homeCount>=6)v.weight*=2;else if(v.homeCount===5)v.weight*=1.6;}if(startingTerrainEco)v.weight*=recentDeckPenalty(v.signature,loc.name);totalWeight+=v.weight;}
  if(totalWeight<=0)throw new Error("No eligible finalist remained after quality protection.");
  let roulette=Math.random()*totalWeight,chosen=null;for(const v of viable)if(v.weight>0){roulette-=v.weight;if(roulette<=0){chosen=v;break;}}if(!chosen)for(let i=viable.length-1;i>=0;i--)if(viable[i].weight>0){chosen=viable[i];break;}
  if(startingTerrainEco)rememberChosenDeck(chosen.signature,loc.name);
  return {deck:chosen.deck.slice(),stats:chosen.stats,loc,tested,validCount,utility:chosen.utility,arrivalScore:chosen.arrivalScore,homeCount:chosen.homeCount,homeNetworks:chosen.homeNetworks};
}

// ---------------- Explanations and browser UI ----------------
function whyCardFits(idx,st,loc){
  const c=cards[idx],n=c.name,r=[];const add=x=>{if(x)r.push(x);};
  switch(n){
    case "Prowling Wolhund":add(`same-name pack support (${st.designCount[IDS.Wolhund]} copies)`);break;
    case "Sitka Buck":case "Sitka Doe":add("complete 2 Buck + 1 Doe deer cluster");break;
    case "Cloudhive":add("Cloudhive Swarm + Mammal support are live");break;
    case "Cloudhive Swarm":if(st.designCount[IDS.Cloudhive]>0)add("directly supports Cloudhive");break;
    case "Romping Lutrinal":add("multiple Lutrinals + another Predator are present");break;
    case "Lutrinal Holt":case "Fresh Blue Kelpweed":add(`supported by ${st.designCount[IDS.Lutrinal]} Romping Lutrinals`);break;
    case "Hydraworm":add(`Hydraworm self-synergy is active (${st.designCount[IDS.Hydraworm]} copies)`);break;
    case "Overgrown Ruins":case "Overgrown Reactor":add("supported by multiple Hydraworms");break;
    case "Bloodbeckoned Velox":add("The Whispering Fields is present");break;
    case "The Whispering Fields":if(st.designCount[IDS.Velox]>0)add("supports Bloodbeckoned Velox");break;
    case "Harvester Anthill":add("Hungry Scrof is present");break;
    case "Hungry Scrof":add("another Predator + Food support are present");break;
    case "Skittish Opilion":case "Nycta Bats":add("Web Wall support is present");break;
    case "Web Wall":if(st.designCount[IDS.Talus]>0&&st.designCount[IDS.Bats]>0)add("completes the Talus Cave + Nycta Bats interaction chain");else if(st.designCount[IDS.Opilion]>0||st.designCount[IDS.Bats]>0)add("supports Ravine web interactions");break;
    case "Talus Cave":add("Nycta Bats + Web Wall chain is complete");break;
    case "Wading Ursus":add(st.fish>1?`Fish support is redundant (${st.fish} Fish cards)`:"Fish support is present");break;
    case "Toxin Eater":add("Water Feature + Predator support are present");break;
    case "Hanging Cherry Moss":add("Insect + Mammal support are present");break;
    case "Pouncing Atrox":add("another Predator is present");break;
    case "Artilope":add("Predator + Presence 2+ support are present");break;
    case "Sunberry Bramble":add("Prey support is present");break;
  }
  if(loc.requiredCount>0&&n.toLowerCase()===loc.requiredName.toLowerCase())add(loc.name==="Marsh of Rebirth"?"part of the 4-Hydraworm CROSS-12 house rule; Arrival Setup searches for 1":`required by ${loc.name} Arrival Setup`);
  if(loc.minObstacle>0&&c.isObstacle)add(`helps satisfy ${loc.name}'s Obstacle setup requirement`);
  if(loc.minPredator>0&&c.isPredator)add(`helps satisfy ${loc.name}'s Predator setup requirement`);
  if(loc.minPrey>0&&c.isPrey)add(`helps satisfy ${loc.name}'s Prey setup requirement`);
  if(loc.minFlora>0&&c.isFlora)add(`helps satisfy ${loc.name}'s Flora setup requirement`);
  if(loc.minFeature>0&&c.cardType==="Feature")add(`helps satisfy ${loc.name}'s Feature setup requirement`);
  if(loc.minWaterFeature>0&&c.isWater&&c.cardType==="Feature")add(`helps satisfy ${loc.name}'s Water Feature setup requirement`);
  if(loc.minPredOrPrey>0&&(c.isPredator||c.isPrey))add(`counts toward ${loc.name}'s Predator/Prey setup requirement`);
  if(loc.minPresence3>0&&c.presence===3)add(`provides the Presence 3 card required by ${loc.name}`);
  if(!r.length){if(c.isPredator)add("fills the deck's Predator role");else if(c.isPrey)add("fills the deck's Prey role");else if(c.isFlora)add("supports the required Flora balance");else if(c.isObstacle)add("supports the required Obstacle balance");else if(c.isFood)add("adds Food support to the ecosystem");else if(c.cardType==="Being"||c.cardType==="Feature")add("supports the Being/Feature balance");else add("contributes to the validated ecological mix");}
  if(selectedEcoCount>1&&st.ecoCount[c.ecoId]<=2)add(`adds ${c.ecosystem} diversity to the selected ecosystem mix`);
  const s=r.join("; ");return s?s[0].toUpperCase()+s.slice(1)+".":"";
}
function compatibilityText(loc,state){
  const checks={"Headwaters Station":"River","Meadow":"Grassland","Michael's Bog":"Swamp","Marsh of Rebirth":"Swamp"};const req=checks[loc.name];
  if(req&&!state.enabled[req])return `INCOMPATIBLE — enable ${req} for this location's required Path card(s).`;
  return "Current ecosystem switches do not conflict with a mandatory named card; full feasibility is checked when generating.";
}
function stateFromUI(){const enabled={};document.querySelectorAll(".eco-select").forEach(el=>enabled[el.dataset.eco]=el.value==="YES");return {locationName:document.getElementById("locationSelect").value,startingTerrain:document.getElementById("terrainSelect").value,profile:document.getElementById("profileSelect").value,hideCards:document.getElementById("hideCardsCheckbox").checked,enabled};}
function renderLocationInfo(){const state=stateFromUI(),loc=locationByName.get(state.locationName);if(!loc)return;document.getElementById("pathAssembly").textContent=loc.assembly||"—";document.getElementById("arrivalSetup").textContent=loc.arrival||"—";document.getElementById("requiredCard").textContent=loc.requiredText||"—";document.getElementById("setupDiscard").textContent=loc.discardText||"—";document.getElementById("specialNote").textContent=loc.notes||"—";const comp=document.getElementById("compatibility");comp.textContent=compatibilityText(loc,state);comp.classList.toggle("bad",comp.textContent.startsWith("INCOMPATIBLE"));}
function renderDeck(deck){
  if(!deck?.length)return;const st=buildStats(deck),loc=locationByName.get(document.getElementById("locationSelect").value)||locations[0],body=document.getElementById("deckBody");body.innerHTML="";
  deck.forEach((idx,i)=>{const c=cards[idx],tr=document.createElement("tr");const vals=[i+1,c.numberInSet,c.name,c.ecosystem,c.cardType,c.traits,whyCardFits(idx,st,loc)];vals.forEach((v,j)=>{const td=document.createElement("td");td.textContent=v;if(j===0||j===1)td.className="center";tr.appendChild(td);});body.appendChild(tr);});
  const ecoNumbers=new Map();for(const idx of deck){const c=cards[idx];if(!ecoNumbers.has(c.ecosystem))ecoNumbers.set(c.ecosystem,[]);ecoNumbers.get(c.ecosystem).push(parseInt(c.numberInSet,10));}
  const sb=document.getElementById("spoilerBody");sb.innerHTML="";for(const eco of ECO_NAMES.slice(1)){if(!ecoNumbers.has(eco))continue;const tr=document.createElement("tr"),a=document.createElement("td"),b=document.createElement("td");a.textContent=eco;b.textContent=ecoNumbers.get(eco).sort((x,y)=>x-y).join(", ");tr.append(a,b);sb.appendChild(tr);}
  toggleSpoiler();
}
function toggleSpoiler(){const hide=document.getElementById("hideCardsCheckbox")?.checked;document.getElementById("spoilerCover")?.classList.toggle("visible",!!hide);}
function showMessage(text){document.getElementById("messageText").textContent=text;document.getElementById("messageBox").hidden=false;}
function findPhysicalCard(name,no){return cards.find(c=>c.name===name&&parseInt(c.numberInSet,10)===no)?.index??-1;}
const INITIAL_DECK=[["Talus Cave",12],["Nycta Bats",3],["Web Wall",9],["Cloudhive",4],["Hanging Cherry Moss",9],["Cloudhive Swarm",5],["Prowling Wolhund",1],["Caustic Mulcher",8],["Prowling Wolhund",3],["Overgrown Thicket",12],["Tidewater Muckets",10],["Overgrown Thicket",11]].map(([n,x])=>findPhysicalCard(n,x)).filter(x=>x>=0);
function initUI(){
  const locSel=document.getElementById("locationSelect"),ter=document.getElementById("terrainSelect");locations.forEach(l=>locSel.add(new Option(l.name,l.name)));["NONE",...ECO_NAMES.slice(1)].forEach(e=>ter.add(new Option(e,e)));
  locSel.value=defaultState.locationName;ter.value=defaultState.startingTerrain;document.getElementById("profileSelect").value=defaultState.profile;document.getElementById("hideCardsCheckbox").checked=defaultState.hideCards;
  document.querySelectorAll(".eco-select").forEach(el=>el.value=defaultState.enabled[el.dataset.eco]?"YES":"NO");
  document.querySelectorAll("select").forEach(el=>el.addEventListener("change",renderLocationInfo));document.getElementById("hideCardsCheckbox").addEventListener("change",toggleSpoiler);
  document.getElementById("messageClose").addEventListener("click",()=>document.getElementById("messageBox").hidden=true);
  document.getElementById("generateButton").addEventListener("click",async()=>{const btn=document.getElementById("generateButton"),state=stateFromUI();btn.disabled=true;const old=btn.textContent;try{btn.textContent="GENERATING… 0%";const result=await generateDeckCore(state,(n,total)=>btn.textContent=`GENERATING… ${Math.round(100*n/total)}%`);currentDeck=result.deck;renderDeck(currentDeck);btn.textContent="DECK READY";}catch(e){showMessage(e?.message||String(e));btn.textContent="GENERATION FAILED";}finally{setTimeout(()=>{btn.disabled=false;btn.textContent=old;},450);}});
  renderLocationInfo();if(INITIAL_DECK.length===DECK_SIZE){setStateForGeneration(defaultState);renderDeck(INITIAL_DECK);}toggleSpoiler();
}
if(typeof document!=="undefined")document.addEventListener("DOMContentLoaded",initUI);
if(typeof module!=="undefined"&&module.exports)module.exports={generateDeckCore,defaultState,cards,locations,locationByName,buildStats,validateDeck,setStateForGeneration,findPhysicalCard};
