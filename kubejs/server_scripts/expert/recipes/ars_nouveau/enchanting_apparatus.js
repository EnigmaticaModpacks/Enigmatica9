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
            output: { item: 'mekanism:teleportation_core', count: 2 },
            pedestalItems: [
                { item: { item: 'ars_nouveau:conjuration_essence' } },
                { item: { item: 'quark:rainbow_rune' } },
                { item: { item: 'quark:rainbow_rune' } }
            ],
            reagent: [{ item: 'occultism:spirit_attuned_gem' }],
            sourceCost: 500,
            id: `${id_prefix}teleportation_core`
        },
        {
            output: { item: 'occultism:storage_controller_base' },
            pedestalItems: [
                { item: { tag: 'forge:ingots/energized_steel' } },
                { item: { tag: 'forge:ingots/energized_steel' } },
                { item: { tag: 'forge:ingots/energized_steel' } }
            ],
            reagent: [{ item: 'occultism:otherstone_pedestal' }],
            sourceCost: 2000,
            id: `${id_prefix}storage_controller_base`
        },
        {
            output: {
                item: 'occultism:dimensional_matrix',
                nbt: { spiritName: '' }
            },
            pedestalItems: [
                { item: { item: 'rftoolsbase:dimensionalshard' } },
                { item: { item: 'rftoolsbase:dimensionalshard' } },
                { item: { item: 'rftoolsbase:dimensionalshard' } }
            ],
            reagent: [{ item: 'mekanism:teleportation_core' }],
            sourceCost: 2000,
            id: `${id_prefix}dimensional_matrix`
        },
        {
            output: { item: 'occultism:stable_wormhole' },
            pedestalItems: [
                { item: { item: 'rftoolsbase:dimensionalshard' } },
                { item: { item: 'rftoolsbase:dimensionalshard' } },
                { item: { item: 'rftoolsbase:dimensionalshard' } }
            ],
            reagent: [{ item: 'occultism:wormhole_frame' }],
            sourceCost: 2000,
            id: `${id_prefix}stable_wormhole`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:enchanting_apparatus';
        event.custom(recipe).id(recipe.id);
    });
});
