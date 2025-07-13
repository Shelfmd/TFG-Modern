// priority: 0

const registerGTCEuRecipeTypes = (event) => {
	event.create('nether_dome')
		.category('nether_dome')
		.setEUIO('in')
		.setMaxIOSize(2, 1, 1, 1)
		.setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_GAS_COLLECTOR, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.FIRE)

	event.create('end_dome')
		.category('end_dome')
		.setEUIO('in')
		.setMaxIOSize(2, 1, 1, 1)
		.setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_GAS_COLLECTOR, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.FIRE)

	event.create('steam_bloomery')
		.category('steam_bloomery')
		.setEUIO('in')
		.setMaxIOSize(2, 1, 0, 0)
		.setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
		.setSound(GTSoundEntries.FIRE)

	event.create('large_solar_panel')
        	.category('generator')
        	.setEUIO('out')
        	.setMaxIOSize(2, 0, 2, 1)
		.setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        	.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        	.setSound(GTSoundEntries.COOLING)
}
