ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/mixing/';
    const recipes = [
        {
            inputs: [
                Ingredient.of('#forge:glass').toJson(),
                Ingredient.of('#forge:glass').toJson(),
                Ingredient.of('#forge:dusts/iron').toJson()
            ],
            outputs: [Item.of('immersiveengineering:insulating_glass', 2).toJson()],
            heatRequirement: 'heated',
            id: `${id_prefix}insulating_glass`
        },
        {
            inputs: [
                Ingredient.of('#forge:crops/tea').toJson(),
                Ingredient.of('#forge:crops/tea').toJson(),
                Ingredient.of('#forge:crops/tea').toJson(),
                Ingredient.of('#forge:crops/tea').toJson(),
                { fluid: 'minecraft:water', amount: 250, nbt: {} },
                { fluidTag: 'forge:milk', amount: 250 }
            ],
            outputs: [{ amount: 500, fluid: 'create:tea' }],
            heatRequirement: 'heated',
            id: `create:mixing/tea`
        },
        {
            inputs: [
                Ingredient.of('#hexerei:tallow_meltable').toJson(),
                Ingredient.of('#hexerei:tallow_meltable').toJson(),
                Ingredient.of('#hexerei:tallow_meltable').toJson(),
                Ingredient.of('#hexerei:tallow_meltable').toJson(),
                Ingredient.of('#hexerei:tallow_meltable').toJson(),
                Ingredient.of('#hexerei:tallow_meltable').toJson(),
                Ingredient.of('#hexerei:tallow_meltable').toJson(),
                Ingredient.of('#hexerei:tallow_meltable').toJson(),
                { fluid: 'minecraft:water', amount: 2000, nbt: {} }
            ],
            outputs: [{ amount: 2000, fluid: 'hexerei:tallow_fluid' }],
            heatRequirement: 'heated',
            id: `${id_prefix}tallow_fluid`
        },
        {
            inputs: [Ingredient.of('create:experience_nugget').toJson()],
            outputs: [{ amount: 60, fluid: 'sophisticatedcore:xp_still' }],
            heatRequirement: 'heated',
            id: `${id_prefix}experience_nugget_to_liquid`
        },
        {
            inputs: [Ingredient.of('ars_nouveau:experience_gem').toJson()],
            outputs: [{ amount: 60, fluid: 'sophisticatedcore:xp_still' }],
            heatRequirement: 'heated',
            id: `${id_prefix}experience_gem_to_liquid`
        },
        {
            inputs: [Ingredient.of('ars_nouveau:greater_experience_gem').toJson()],
            outputs: [{ amount: 240, fluid: 'sophisticatedcore:xp_still' }],
            heatRequirement: 'heated',
            id: `${id_prefix}greater_experience_gem_to_liquid`
        },
        {
            inputs: [Ingredient.of('minecraft:honey_block').toJson()],
            outputs: [{ amount: 1000, fluid: 'the_bumblezone:honey_fluid_still' }],
            heatRequirement: 'heated',
            id: `create:mixing/honey`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'create:mixing';
        recipe.ingredients = recipe.inputs;
        recipe.results = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
