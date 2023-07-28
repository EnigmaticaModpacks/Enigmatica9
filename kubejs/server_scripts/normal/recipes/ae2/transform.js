ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/ae2/transform/';

    const recipes = [
        {
            circumstance: { type: 'fluid', tag: 'minecraft:water' },
            inputs: ['ae2:charged_certus_quartz_crystal', '#forge:dusts/amethyst'],
            output: Item.of('ae2:fluix_crystal', 2),
            id: `${id_prefix}fluix_crystal`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ae2:transform';
        // ingredients:  [{ item: 'minecraft:oak_log' }],
        recipe.ingredients = recipe.inputs.map((input) =>
            input.startsWith('#') ? { tag: input.slice(1) } : { item: input }
        );
        // result: { count: 2, item: 'ae2:fluix_crystal' }
        recipe.result = recipe.output.toJson();
        event.custom(recipe).id(recipe.id);
    });
});
