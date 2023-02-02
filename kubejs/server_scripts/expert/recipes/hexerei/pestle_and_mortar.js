ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/hexerei/pestle_and_mortar/';

    const recipes = [
        {
            inputs: [
                Ingredient.of('#forge:dusts/tin'),
                Ingredient.of('#forge:dusts/copper'),
                Ingredient.of('#forge:dusts/copper'),
                Ingredient.of('#forge:dusts/copper'),
                Ingredient.of('#forge:dusts/redstone')
            ],
            output: Item.of(AlmostUnified.getPreferredItemForTag('forge:dusts/bronze'), 4),
            grindingTime: 10 * 20,
            id: `${id_prefix}bronze_dust`
        },
        {
            inputs: [
                Ingredient.of('#forge:dusts/silver'),
                Ingredient.of('#forge:dusts/gold'),
                Ingredient.of('#forge:dusts/redstone'),
                Ingredient.of('#forge:dusts/gold'),
                Ingredient.of('#forge:dusts/silver')
            ],
            output: Item.of(AlmostUnified.getPreferredItemForTag('forge:dusts/electrum'), 4),
            grindingTime: 10 * 20,
            id: `${id_prefix}electrum_dust`
        },
        {
            inputs: [
                Ingredient.of('#forge:dusts/redstone'),
                Ingredient.of('#forge:dusts/iron'),
                Ingredient.of('#forge:dusts/nickel'),
                Ingredient.of('#forge:dusts/iron'),
                Ingredient.of('#forge:dusts/redstone')
            ],
            output: Item.of(AlmostUnified.getPreferredItemForTag('forge:dusts/invar'), 3),
            grindingTime: 10 * 20,
            id: `${id_prefix}invar_dust`
        },
        {
            inputs: [
                Ingredient.of('#forge:dusts/nickel'),
                Ingredient.of('#forge:dusts/copper'),
                Ingredient.of('#forge:dusts/redstone'),
                Ingredient.of('#forge:dusts/copper'),
                Ingredient.of('#forge:dusts/nickel')
            ],
            output: Item.of(AlmostUnified.getPreferredItemForTag('forge:dusts/constantan'), 4),
            grindingTime: 10 * 20,
            id: `${id_prefix}constantan_dust`
        },
        {
            inputs: [
                Ingredient.of('#forge:string'),
                Ingredient.of('#forge:string'),
                Ingredient.of('twilightforest:firefly'),
                Ingredient.of('#forge:string'),
                Ingredient.of('#forge:string')
            ],
            output: Item.of('naturesaura:gold_fiber', 4),
            grindingTime: 2 * 20,
            id: `${id_prefix}gold_fiber`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'hexerei:pestle_and_mortar';
        recipe.ingredients = recipe.inputs.map((input) => input.toJson());
        recipe.output = recipe.output.toJson();

        event.custom(recipe).id(recipe.id);
    });
});
