ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/apotheosis/enchanting/';
    const recipes = [
        {
            result: { item: 'minecraft:sculk_catalyst', count: 1 },
            input: { item: 'industrialforegoing:mechanical_dirt' },
            requirements: { eterna: 40, quanta: 15, arcana: 60 },
            max_requirements: { eterna: -1, quanta: 25, arcana: -1 },
            id: `${id_prefix}sculk_catalyst`
        },
        {
            result: { item: 'emendatusenigmatica:tainted_gold_ingot', count: 1 },
            input: { tag: 'forge:ingots/netherite' },
            requirements: { eterna: 30, quanta: 40, arcana: 40 },
            id: `${id_prefix}tainted_gold_ingot`
        },
        {
            result: { item: 'emendatusenigmatica:tainted_gold_block', count: 1 },
            input: { tag: 'forge:storage_blocks/netherite' },
            requirements: { eterna: 30, quanta: 40, arcana: 40 },
            id: `${id_prefix}tainted_gold_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'apotheosis:enchanting';
        event.custom(recipe).id(recipe.id);
    });
});
