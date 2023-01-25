ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/create/mixing/';

    const recipes = [
        {
            ingredients: [
                { tag: 'mekanism:clumps/iron' },
                { amount: 400, fluid: 'minecraft:water', nbt: {} },
                { amount: 100, fluidTag: 'forge:redstone_acid' }
            ],
            results: [
                { item: 'mekanism:dirty_dust_iron', count: 2 },
                { item: 'mekanism:dirty_dust_tin', count: 1, chance: 0.3 },
                { item: 'mekanism:dirty_dust_tin', count: 1, chance: 0.1 }
            ],
            heatRequirement: 'heated',
            id: `${id_prefix}iron_from_pig_iron`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:mixing';
        event.custom(recipe).id(recipe.id);
    });
});
