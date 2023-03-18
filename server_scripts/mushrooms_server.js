settings.logAddedRecipes = true
settings.logRemovedRecipes = true
// Enable skipped recipe logging, off by default
settings.logSkippedRecipes = true
// Enable erroring recipe logging, on by default, recommended to be kept to true
settings.logErroringRecipes = false

function addHungerToPlayer(player, h) {
    const newHunger = h + player.getFoodLevel()
    if (newHunger > 20) return
    player.setFoodLevel(newHunger)
}

onEvent('item.right_click', event => {
	const item = event.getItem();	
    if (item.id == 'minecraft:brown_mushroom') {
        addHungerToPlayer(event.player, 1)
        event.player.playSound('entity.player.burp', 1.0, 1.0)
        item.count--
	}
})

onEvent('recipes', event => {
    event.smelting('kubejs:mushroom_cutlet', 'kubejs:mushroom_cutlet_paste')
    event.blasting('16x kubejs:mushroom_jar', 'minecraft:glass')
    event.recipes.create.mixing('kubejs:mushroom_cutlet_paste', [
        // Don't hate me, hate the KubeJS Create Addon
        'minecraft:brown_mushroom',
        'minecraft:brown_mushroom',
        'minecraft:brown_mushroom',
        'minecraft:potato',
        'minecraft:carrot'
	])
    event.recipes.create.mixing('kubejs:mushroom_jar_with_mushrooms', [
        // Don't hate me, hate the KubeJS Create Addon
		'kubejs:mushroom_jar',
        'minecraft:brown_mushroom',
        'minecraft:brown_mushroom',
        'minecraft:brown_mushroom',
        'minecraft:brown_mushroom',
        'minecraft:brown_mushroom',
        'minecraft:sugar',
        'minecraft:wheat_seeds'
	])
})

onEvent('item.tags', event => {
	//event.get('forge:cobblestone').add('minecraft:diamond_ore')
})