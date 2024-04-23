ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/minecraft/';
    const recipes = [
        {
            input: 'ars_nouveau:drygmy_charm',
            output: Item.of('minecraft:cooked_mutton', {
                display: { Name: '{"text":"Roast Drygmy Shank", "color":"gold"}' }
            }),
            xp: 0.35,
            id_suffix: `cooked_drygmy_charm`
        },
        {
            input: 'ars_nouveau:amethyst_golem_charm',
            output: Item.of('supplementaries:candy', {
                display: { Name: '{"text":"Rock Candy", "color":"dark_purple"}' }
            }),
            xp: 0.35,
            id_suffix: `cooked_amethyst_golem_charm`
        },
        {
            input: 'ars_elemental:siren_charm',
            output: Item.of('farmersdelight:cooked_salmon_slice', {
                display: { Name: '{"text":"Smoked Siren Filet", "color":"aqua"}' }
            }),
            xp: 0.35,
            id_suffix: `cooked_siren_charm`
        },
        {
            input: 'ars_elemental:firenando_charm',
            output: Item.of('farmersdelight:smoked_ham', {
                display: { Name: '{"text":"Toasted SPAM", "color":"red"}' }
            }),
            xp: 0.35,
            id_suffix: `cooked_firenando_charm`
        },
        {
            input: 'ars_nouveau:starbuncle_charm',
            output: Item.of('minecraft:cooked_rabbit', {
                display: { Name: '{"text":"Roast Starbuncle", "color":"gold"}' }
            }),
            xp: 0.35,
            id_suffix: `cooked_starbuncle_charm`
        },
        {
            input: 'ars_nouveau:whirlisprig_charm',
            output: Item.of('farmersdelight:cabbage_rolls', {
                display: { Name: '{"text":"Sprig Rolls", "color":"green"}' }
            }),
            xp: 0.35,
            id_suffix: `cooked_whirlisprig_charm`
        },
        {
            input: 'ars_nouveau:wixie_charm',
            output: Item.of('thermal:cooked_mushroom', {
                display: { Name: '{"text":"Sautéed Wixie Cap", "color":"dark_purple"}' }
            }),
            xp: 0.35,
            id_suffix: `cooked_wixie_charm`
        },
        {
            input: 'ars_nouveau:bookwyrm_charm',
            output: Item.of('farmersdelight:cooked_chicken_cuts', {
                display: { Name: '{"text":"Wild Wyrm Wings", "color":"dark_purple"}' }
            }),
            xp: 0.35,
            id_suffix: `cooked_bookwyrm_charm`
        }
    ];

    recipes.forEach((recipe) => {
        event.smoking(recipe.output, recipe.input).xp(recipe.xp).id(`${id_prefix}smoking/${recipe.id_suffix}`);
        event.smelting(recipe.output, recipe.input).xp(recipe.xp).id(`${id_prefix}smelting/${recipe.id_suffix}`);
        event.campfireCooking(recipe.output, recipe.input).xp(recipe.xp).id(`${id_prefix}campfire/${recipe.id_suffix}`);
    });
});
