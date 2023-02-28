ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ars_nouveau/enchanting_apparatus/';
    const recipes = [
        {
            output: { item: 'create:mechanical_crafter', count: 8 },
            pedestalItems: [
                { item: { item: 'create:brass_casing' } },
                { item: { item: 'create:brass_casing' } },
                { item: { item: 'create:brass_casing' } },
                { item: { item: 'create:brass_casing' } },
                { item: { item: 'create:brass_casing' } },
                { item: { item: 'create:brass_casing' } },
                { item: { item: 'create:brass_casing' } },
                { item: { item: 'create:brass_casing' } }
            ],
            reagent: [{ item: 'minecraft:crafting_table' }],
            sourceCost: 500,
            id: `${id_prefix}mechanical_crafter`
        },
        {
            output: { item: 'ae2:controller', count: 1 },
            pedestalItems: [
                { item: { item: 'quark:rainbow_rune' } },
                { item: { item: 'quark:rainbow_rune' } },
                { item: { item: 'quark:rainbow_rune' } },
                { item: { item: 'quark:rainbow_rune' } }
            ],
            reagent: [{ tag: 'industrialforegoing:machine_frame/simple' }],
            sourceCost: 5000,
            id: `${id_prefix}controller`
        },
        {
            output: { item: 'mekanism:teleportation_core', count: 2 },
            pedestalItems: [
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'quark:rainbow_rune' } },
                { item: { item: 'quark:rainbow_rune' } }
            ],
            reagent: [{ item: 'occultism:spirit_attuned_gem' }],
            sourceCost: 500,
            id: `${id_prefix}teleportation_core`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchanting_apparatus';
        event.custom(recipe).id(recipe.id);
    });
});
