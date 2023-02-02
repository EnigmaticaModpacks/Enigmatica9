ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/create/mixing/';

    const recipes = [
        {
            ingredients: [
                { item: 'create:crushed_iron_ore' },
                { amount: 100, fluidTag: 'pneumaticcraft:etching_acid' }
            ],
            results: [
                { item: 'mekanism:dirty_dust_iron', count: 1 },
                { item: 'mekanism:dirty_dust_tin', count: 1, chance: 0.1 }
            ],
            heatRequirement: 'heated',
            id: `${id_prefix}iron_dust_from_etching_acid`
        },
        {
            ingredients: [{ item: 'create:crushed_iron_ore' }, { amount: 100, fluidTag: 'forge:redstone_acid' }],
            results: [
                { item: 'mekanism:dirty_dust_iron', count: 2 },
                { item: 'mekanism:dirty_dust_tin', count: 1, chance: 0.3 },
                { item: 'mekanism:dirty_dust_tin', count: 1, chance: 0.1 }
            ],
            heatRequirement: 'heated',
            id: `${id_prefix}iron_dust_from_redstone_acid`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:mixing';
        event.custom(recipe).id(recipe.id);
    });
});
