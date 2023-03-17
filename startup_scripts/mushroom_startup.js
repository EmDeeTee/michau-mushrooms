// priority: 0

onEvent('item.registry', event => {
	event.create('mushroom_jar').displayName('Jar').maxStackSize(64)
	event.create('mushroom_roasted').displayName("Roasted mushroom").maxStackSize(64).food(food => {
		food.hunger(3).saturation(3)
	})

	//Cutlet stuff
	event.create('mushroom_cutlet_paste').displayName('Mushroom cutlet paste').maxStackSize(64).food(food => {
		food.hunger(4).saturation(1).effect('hunger', 600, 0, 30)
	})
	event.create('mushroom_cutlet').displayName('Mushroom cutlet').maxStackSize(64).food(food => {
		food.hunger(5).saturation(1).effect('speed', 600, 0, 30).alwaysEdible()
	})

	event.create('mushroom_jar_with_mushrooms').displayName('Pickled mushrooms').maxStackSize(64).food(food => {
		food.hunger(10).saturation(12).effect('regeneration', 600, 0, 30).effect('speed', 600, 0, 30).effect('strength', 600, 0, 30).alwaysEdible()
	})
})
