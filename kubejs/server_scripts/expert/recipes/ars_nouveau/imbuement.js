ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ars_nouveau/imbuement/';

    const recipes = [
        {
            input: { tag: 'forge:ingots/pig_iron' },
            output: 'minecraft:iron_ingot',
            count: 1,
            pedestalItems: [
                { item: { item: 'ars_nouveau:air_essence' } },
                { item: { item: 'ars_nouveau:fire_essence' } },
                { item: { item: 'ars_nouveau:fire_essence' } }
            ],
            source: 600,
            id: `${id_prefix}iron_from_pig_iron`
        },
        {
            input: { tag: 'forge:gems/source' },
            output: 'ars_nouveau:fire_essence',
            count: 1,
            pedestalItems: [
                { item: { tag: 'twilightforest:fiery_vial' } },
                { item: { item: 'twilightforest:firefly' } },
                { item: { item: 'twilightforest:torchberries' } }
            ],
            source: 2000,
            id: 'ars_nouveau:imbuement_fire_essence'
        },
        {
            input: { tag: 'forge:gems/source' },
            output: 'ars_nouveau:abjuration_essence',
            count: 1,
            pedestalItems: [
                { item: { tag: 'forge:ingots/ironwood' } },
                { item: { item: 'twilightforest:cicada' } },
                { item: { item: 'twilightforest:naga_scale' } }
            ],
            source: 2000,
            id: 'ars_nouveau:imbuement_abjuration_essence'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:imbuement';
        event.custom(recipe).id(recipe.id);
    });
});
