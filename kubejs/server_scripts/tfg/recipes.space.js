// priority: 0

function registerTFGSpaceRecipes(event) {

	// Change where you can do other recipes

	const allowedCombustibleDims = [
		{
			dimension: "minecraft:the_nether",
			type: "dimension"
		},
		{
			dimension: "minecraft:overworld",
			type: "dimension"
		}
	]

	event.findRecipes({ type: "gtceu:large_boiler" }).forEach(recipe => {
		recipe.json.add("recipeConditions", allowedCombustibleDims)
	})
	event.findRecipes({ type: "gtceu:steam_boiler" }).forEach(recipe => {
		recipe.json.add("recipeConditions", allowedCombustibleDims)
	})
	event.findRecipes({ type: "gtceu:combustion_generator" }).forEach(recipe => {
		recipe.json.add("recipeConditions", allowedCombustibleDims)
	})
	event.findRecipes({ type: "gtceu:gas_turbine" }).forEach(recipe => {
		recipe.json.add("recipeConditions", allowedCombustibleDims)
	})

	// Air collector

	event.recipes.gtceu.gas_collector('nether')
		.circuit(2)
		.outputFluids(Fluid.of('gtceu:air', 10000))
		.dimension('minecraft:the_nether')
		.duration(200)
		.EUt(16)

	event.recipes.gtceu.gas_collector('moon')
		.circuit(3)
		.outputFluids(Fluid.of('gtceu:argon', 1))
		.dimension('ad_astra:moon')
		.duration(20*60*30)
		.EUt(16)

	// Aqueous accumulator

	let aaCircuit = 1;

	event.recipes.gtceu.aqueous_accumulator('water_overworld')
		.circuit(aaCircuit++)
		.dimension('minecraft:overworld')
		.duration(20)
		.EUt(GTValues.VHA[GTValues.ULV])
		.addDataString("fluidA", "minecraft:water")
		.outputFluids(Fluid.of("minecraft:water", 1000))

	event.recipes.gtceu.aqueous_accumulator('water_nether')
		.circuit(aaCircuit++)
		.dimension('minecraft:the_nether')
		.duration(20)
		.EUt(GTValues.VHA[GTValues.ULV])
		.addDataString("fluidA", "minecraft:water")
		.outputFluids(Fluid.of("minecraft:water", 1000))

	event.recipes.gtceu.aqueous_accumulator('water_moon')
		.circuit(aaCircuit++)
		.dimension('ad_astra:moon')
		.duration(20*5)
		.EUt(GTValues.VHA[GTValues.MV])
		.addDataString("fluidA", "minecraft:water")
		.outputFluids(Fluid.of("minecraft:water", 1000))
		
	event.recipes.gtceu.aqueous_accumulator('sea_water_overworld')
		.circuit(aaCircuit++)
		.dimension('minecraft:overworld')
		.duration(20)
		.EUt(GTValues.VA[GTValues.ULV])
		.addDataString("fluidA", "tfc:salt_water")
		.outputFluids(Fluid.of("tfc:salt_water", 1000))

	event.recipes.gtceu.aqueous_accumulator('sea_water_nether')
		.circuit(aaCircuit++)
		.dimension('minecraft:the_nether')
		.duration(20)
		.EUt(GTValues.VA[GTValues.ULV])
		.addDataString("fluidA", "tfc:salt_water")
		.outputFluids(Fluid.of("tfc:salt_water", 1000))

	event.recipes.gtceu.aqueous_accumulator('sea_water_moon')
		.circuit(aaCircuit++)
		.dimension('ad_astra:moon')
		.duration(20)
		.EUt(GTValues.VA[GTValues.ULV])
		.addDataString("fluidA", "tfc:salt_water")
		.outputFluids(Fluid.of("tfc:salt_water", 1000))

	event.recipes.gtceu.aqueous_accumulator('lava_overworld')
		.circuit(aaCircuit++)
		.dimension('minecraft:overworld')
		.duration(20*15)
		.EUt(GTValues.VHA[GTValues.HV])
		.addDataString("fluidA", "minecraft:lava")
		.outputFluids(Fluid.of("minecraft:lava", 1000))

	event.recipes.gtceu.aqueous_accumulator('lava_nether')
		.circuit(aaCircuit++)
		.dimension('minecraft:the_nether')
		.duration(20*15)
		.EUt(GTValues.VHA[GTValues.HV])
		.addDataString("fluidA", "minecraft:lava")
		.outputFluids(Fluid.of("minecraft:lava", 1000))

	// Plants

	// Chorus
	event.recipes.gtceu.greenhouse('tfg:chorus')
		.itemInputs('8x tfg:lunar_chorus_flower')
		.itemOutputs('64x minecraft:chorus_fruit')
		.chancedOutput('8x tfg:lunar_chorus_flower', 7500, 1000)
		.chancedOutput('8x tfg:lunar_chorus_flower', 5000, 1000)
		.duration(36000) // 30 mins
		.circuit(1)
		.EUt(GTValues.VA[GTValues.MV])
		.dimension('ad_astra:moon')

	event.recipes.gtceu.greenhouse('tfg:chorus_helium')
		.itemInputs('8x tfg:lunar_chorus_flower')
		.inputFluids(Fluid.of('gtceu:helium_3', 2000))
		.itemOutputs('64x minecraft:chorus_fruit')
		.chancedOutput('8x tfg:lunar_chorus_flower', 8500, 1000)
		.chancedOutput('8x tfg:lunar_chorus_flower', 6000, 1000)
		.duration(12000) // 10 mins
		.circuit(2)
		.EUt(GTValues.VA[GTValues.MV])
		.dimension('ad_astra:moon')

	// Replace the built-in greg one to add a circuit
	event.recipes.gtceu.fermenter('fermented_biomass')
		.inputFluids(Fluid.of('gtceu:biomass', 100))
		.outputFluids(Fluid.of('gtceu:fermented_biomass', 100))
		.circuit(1)
		.duration(150)
		.EUt(2)

	event.recipes.gtceu.fermenter('tfg:chorus')
		.itemInputs('minecraft:chorus_fruit')
		.inputFluids(Fluid.of('gtceu:biomass', 20))
		.chancedOutput('ae2:ender_dust', 100, 100)
		.outputFluids(Fluid.of('gtceu:nitrogen', 1000))
		.circuit(2)
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.MV])
		.dimension('ad_astra:moon')

	// Lightblooms
	event.recipes.gtceu.greenhouse('tfg:lightbloom')
		.itemInputs('8x minecraft:twisting_vines')
		.itemOutputs('16x minecraft:twisting_vines')
		.chancedOutput('minecraft:pearlescent_froglight', 2500, 1000)
		.chancedOutput('minecraft:verdant_froglight', 2500, 1000)
		.chancedOutput('minecraft:ochre_froglight', 2500, 1000)
		.duration(36000) // 30 mins
		.circuit(1)
		.EUt(GTValues.VA[GTValues.LV])
		.dimension('ad_astra:moon')

	event.recipes.gtceu.greenhouse('tfg:lightbloom_helium')
		.itemInputs('8x minecraft:twisting_vines')
		.inputFluids(Fluid.of('gtceu:helium_3', 2000))
		.itemOutputs('16x minecraft:twisting_vines')
		.chancedOutput('minecraft:pearlescent_froglight', 3500, 1000)
		.chancedOutput('minecraft:verdant_froglight', 3500, 1000)
		.chancedOutput('minecraft:ochre_froglight', 3500, 1000)
		.duration(12000) // 30 mins
		.circuit(2)
		.EUt(GTValues.VA[GTValues.LV])
		.dimension('ad_astra:moon')

	event.recipes.gtceu.brewery('biomass_from_twisting_vines')
		.itemInputs('minecraft:twisting_vines')
		.inputFluids(JsonIO.of({ amount: 20, value: { tag: "tfg:clean_water" }}))
		.outputFluids(Fluid.of('gtceu:biomass', 20))
		.duration(50)
		.EUt(3)

	// Space suit gases

	event.recipes.gtceu.compressor('compressed_nitrox')
		.inputFluids(Fluid.of('gtceu:nitrogen', 8000), Fluid.of('gtceu:oxygen', 2000))
		.outputFluids(Fluid.of('tfg:compressed_nitrox', 1000))
		.circuit(1)
		.duration(100)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.compressor('compressed_heliox')
		.inputFluids(Fluid.of('gtceu:helium', 8000), Fluid.of('gtceu:oxygen', 2000))
		.outputFluids(Fluid.of('tfg:compressed_heliox', 1000))
		.circuit(1)
		.duration(100)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.compressor('compressed_heliox_3')
		.inputFluids(Fluid.of('gtceu:helium_3', 8000), Fluid.of('gtceu:oxygen', 2000))
		.outputFluids(Fluid.of('tfg:compressed_heliox_3', 1000))
		.circuit(1)
		.duration(100)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.compressor('compressed_trimix')
		.inputFluids(Fluid.of('gtceu:nitrogen', 5000), Fluid.of('gtceu:oxygen', 3000), Fluid.of('gtceu:helium', 2000))
		.outputFluids(Fluid.of('tfg:compressed_trimix', 1000))
		.circuit(2)
		.duration(100)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.compressor('compressed_trimix_3')
		.inputFluids(Fluid.of('gtceu:nitrogen', 5000), Fluid.of('gtceu:oxygen', 3000), Fluid.of('gtceu:helium_3', 2000))
		.outputFluids(Fluid.of('tfg:compressed_trimix_3', 1000))
		.circuit(2)
		.duration(100)
		.EUt(GTValues.VA[GTValues.HV])
}