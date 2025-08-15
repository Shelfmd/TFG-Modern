// priority: 0
"use strict";

TFCEvents.worldgenData(event => {

	event.forest('tfg:mars_forest', '#tfg:mars_forest_entries',
		[
			event.forestTypesMapEntry('none', 0, 0, 0, 0, false, false, 0),
			event.forestTypesMapEntry('sparse', [1, 3], 6, 0.08, 0, true, false, null),
			event.forestTypesMapEntry('edge', 2, 10, null, 1, false, false, [0, 1]),
			event.forestTypesMapEntry('normal', 5, 25, null, 1, true, false, null),
			event.forestTypesMapEntry('old_growth', 7, 40, null, 1, false, true, [0, 1])
		],
		true, 
		placement => {}
	)

	event.forestEntry('tfg:mars/crimson_forest_entry',
		climate => {}, // TODO: climate variation?
		'beneath:wood/wood/crimson', // bush log
		'beneath:wood/leaves/crimson', // bush leaves
		'beneath:wood/log/crimson', // fallen log
		'beneath:wood/fallen_leaves/crimson', // fallen leaves
		[ // ground cover
			'minecraft:crimson_fungus',
			'beneath:wood/fallen_leaves/crimson',
			'beneath:wood/twig/crimson'
		],
		'tfg:mars/tree/crimson', // tree feature
		'tfg:mars/tree/crimson_dead', // dead tree feature
		'tfg:mars/tree/crimson', // old growth tree feature
		null, // krummholz
		null, // chance for old growth
		null, // chance for old growth in non-old growth forests
		null, // chance for a fallen tree
		null, // chance for a dead tree
		null, // true to spawn on ocean floor, false for world surface
		placement => {}
	)

	event.forestEntry('tfg:mars/warped_forest_entry',
		climate => {},
		'beneath:wood/wood/warped',
		'beneath:wood/leaves/warped',
		'beneath:wood/log/warped',
		'beneath:wood/fallen_leaves/warped',
		[
			'minecraft:warped_fungus',
			'beneath:wood/fallen_leaves/warped',
			'beneath:wood/twig/warped'
		],
		'tfg:mars/tree/warped',
		'tfg:mars/tree/warped_dead',
		'tfg:mars/tree/warped',
		null, null, null, null, null, null, 
		placement => {}
	)

	event.forestEntry('tfg:mars/aeronos_forest_entry',
		climate => {},
		'ad_astra:aeronos_stem',
		'ad_astra:aeronos_cap',
		'ad_astra:aeronos_stem',
		null,
		[
			"ad_astra:aeronos_mushroom",
			'beneath:wood/fallen_leaves/crimson',
			'beneath:wood/twig/crimson'
		],
		'tfg:mars/tree/aeronos',
		'tfg:mars/tree/aeronos_dead',
		'tfg:mars/tree/aeronos_old_growth',
		null, null, null, null, null, null,
		placement => {}
	)

	event.forestEntry('tfg:mars/strophar_forest_entry',
		climate => {},
		'ad_astra:strophar_stem',
		'ad_astra:strophar_cap',
		null,
		null,
		[
			"ad_astra:strophar_mushroom",
			'beneath:wood/fallen_leaves/warped',
			'beneath:wood/twig/warped'
		],
		'tfg:mars/tree/strophar',
		'tfg:mars/tree/strophar_dead',
		'tfg:mars/tree/strophar_old_growth',
		null, null, null, null, null, null,
		placement => {}
	)

	event.forestEntry('tfg:mars/alphacene_forest_entry',
		climate => {},
		'minecraft:mushroom_stem',
		'species:alphacene_mushroom_block',
		'minecraft:mushroom_stem',
		null,
		[
			"species:alphacene_mushroom",
			'beneath:wood/fallen_leaves/crimson',
			'beneath:wood/twig/crimson'
		],
		'species:alphacene_mushroom',
		'tfg:mars/tree/alphacene_dead',
		'species:alphacene_mushroom',
		null, null, null, null, null, null,
		placement => {}
	)
})

function registerTFGForestConfiguredFeatures(event) {
	event.add('tfg:mars_forest_entries', 'tfg:mars/crimson_forest_entry')
	event.add('tfg:mars_forest_entries', 'tfg:mars/warped_forest_entry')
	event.add('tfg:mars_forest_entries', 'tfg:mars/aeronos_forest_entry')
	event.add('tfg:mars_forest_entries', 'tfg:mars/strophar_forest_entry')
	event.add('tfg:mars_forest_entries', 'tfg:mars/alphacene_forest_entry')
}