ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mekanism/reaction/';
    const recipes = [
        {
            gasOutput: { gas: 'mekanism:polonium', amount: 10 },
            itemInput: { ingredient: { item: 'minecraft:echo_shard' }, amount: 4 },
            gasInput: { gas: 'mekanism:hydrofluoric_acid', amount: 100 },
            fluidInput: { tag: 'forge:magicite', amount: 250 },
            energyRequired: 3995,
            duration: 30,
            id: `${id_prefix}polonium`
        },
        {
            itemOutput: { item: 'mekanism:pellet_polonium' },
            fluidInput: { amount: 250, tag: 'forge:experience' },
            gasInput: { amount: 1000, gas: 'mekanism:polonium' },
            itemInput: { ingredient: { tag: 'forge:nether_stars' } },
            duration: 100,
            id: `${id_prefix}pellet_polonium`
        },
        {
            itemOutput: { item: 'mekanism:substrate' },
            fluidInput: { amount: 10, tag: 'minecraft:water' },
            gasInput: { amount: 100, gas: 'mekanism:hydrogen' },
            itemInput: { amount: 2, ingredient: { tag: 'forge:fuels/bio' } },
            duration: 100,
            id: `${id_prefix}substrate`
        },
        {
            itemOutput: { item: 'minecraft:nether_star' },
            fluidInput: { amount: 1000, tag: 'forge:blighted_ichor' },
            gasInput: { amount: 100, gas: 'starbunclemania:source_gas' },
            itemInput: { ingredient: { item: 'mekanism:substrate' } },
            energyRequired: 3995,
            duration: 300,
            id: `${id_prefix}nether_star`
        },
        {
            itemOutput: { item: 'emendatusenigmatica:enderium_ingot' },
            fluidInput: { amount: 250, tag: 'forge:ender' },
            gasInput: { amount: 50, gas: 'mekanism:oxygen' },
            itemInput: { ingredient: { tag: 'mekanism:alloys/reinforced' } },
            energyRequired: 1995,
            duration: 300,
            id: `${id_prefix}enderium`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:reaction';
        event.custom(recipe).id(recipe.id);
    });
});
