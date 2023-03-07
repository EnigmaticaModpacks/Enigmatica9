ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/ars_nouveau/crush/';

    const recipes = [
        {
            input: { item: 'naturesaura:infused_stone' },
            output: [{ chance: 1.0, count: 1, item: 'pneumaticcraft:compressed_stone' }],
            id: `${id_prefix}compressed_stone`
        },
        {
            input: { tag: 'forge:ingots/invar' },
            output: [{ chance: 1.0, count: 1, item: 'pneumaticcraft:ingot_iron_compressed' }],
            id: `${id_prefix}ingot_iron_compressed`
        },
        {
            input: { tag: 'forge:storage_blocks/invar' },
            output: [{ chance: 1.0, count: 1, item: 'pneumaticcraft:compressed_iron_block' }],
            id: `${id_prefix}compressed_iron_block`
        },
        {
            input: { tag: 'forge:gears/invar' },
            output: [{ chance: 1.0, count: 1, item: 'pneumaticcraft:compressed_iron_gear' }],
            id: `${id_prefix}compressed_iron_gear`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:crush';
        event.custom(recipe).id(recipe.id);
    });
});
