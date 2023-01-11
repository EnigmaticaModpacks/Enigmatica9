ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/thermal/smelter/';

    const recipes = [
        {
            inputs: ['#forge:dusts/quartz', 'minecraft:obsidian', 'minecraft:glass'],
            outputs: [Item.of('thermal:obsidian_glass', 2)],
            energy: 4800,
            id: `${id_prefix}obsidian_glass`
        },
        {
            inputs: ['#forge:dusts/lumium', Ingredient.of('thermal:obsidian_glass', 2)],
            outputs: [Item.of('thermal:lumium_glass', 2)],
            energy: 4800,
            id: `${id_prefix}lumium_glass`
        },
        {
            inputs: ['#forge:dusts/signalum', Ingredient.of('thermal:obsidian_glass', 2)],
            outputs: [Item.of('thermal:signalum_glass', 2)],
            energy: 4800,
            id: `${id_prefix}signalum_glass`
        },
        {
            inputs: ['#forge:dusts/enderium', Ingredient.of('thermal:obsidian_glass', 2)],
            outputs: [Item.of('thermal:enderium_glass', 2)],
            energy: 4800,
            id: `${id_prefix}enderium_glass`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:smelter';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = recipe.outputs.map((output) => output.toJson());
        event.custom(recipe).id(recipe.id);
    });
});
