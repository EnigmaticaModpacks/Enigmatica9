ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/powah/energizing/';
    const recipes = [
        {
            output: Item.of('powah:steel_energized', 4),
            inputs: ['#forge:dusts/aluminum', '#forge:dusts/aluminum', '#forge:dusts/copper', '#forge:gems/moonstone'],
            energy: '120000',
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
            energy: '300000',
            id: `powah:energizing/niotic_crystal`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = recipe.output.toJson();
        event.custom(recipe).id(recipe.id);
    });
});
