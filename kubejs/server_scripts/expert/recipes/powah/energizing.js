ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/powah/energizing/';
    const recipes = [
        {
            output: Item.of('powah:steel_energized', 4),
            inputs: ['#forge:dusts/aluminum', '#forge:dusts/aluminum', '#forge:dusts/copper', '#forge:gems/moonstone'],
            energy: '100000',
            id: `powah:energizing/energized_steel`
        },
        {
            output: Item.of('powah:crystal_niotic', 4),
            inputs: [
                'ars_nouveau:water_essence',
                'blue_skies:soul_fragment',
                '#forge:gems/aquite',
                'blue_skies:soul_fragment',
                'ars_nouveau:water_essence'
            ],
            energy: '100000',
            id: `powah:energizing/niotic_crystal`
        },
        {
            output: Item.of('spirit:soul_steel_ingot', 2),
            inputs: ['#forge:ingots/invar', 'blue_skies:soul_fragment', '#forge:ingots/silver'],
            energy: '100000',
            id: `${id_prefix}soul_steel_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = recipe.output.toJson();
        event.custom(recipe).id(recipe.id);
    });
});
