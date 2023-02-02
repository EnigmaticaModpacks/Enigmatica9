ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/hexerei/mixingcauldron/';

    const recipes = [
        // {
        //     liquid: { fluid: 'minecraft:lava' },
        //     inputs: [
        //         'twilightforest:firefly',
        //         '#forge:string',
        //         '#forge:string',
        //         '#forge:string',
        //         '#forge:dusts/gold',
        //         '#forge:string',
        //         '#forge:string',
        //         '#forge:string'
        //     ],
        //     output: Item.of('naturesaura:gold_fiber', 6),
        //     liquidOutput: { fluid: 'minecraft:lava' },
        //     fluidLevelsConsumed: 1000,
        //     heatRequirement: 'heated',
        //     id: `${id_prefix}gold_fiber`
        // }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'hexerei:mixingcauldron';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
