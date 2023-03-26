ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/powah/energizing/';
    const recipes = [
        {
            output: '4x powah:steel_energized',
            inputs: ['#forge:dusts/aluminum', '#forge:dusts/aluminum', '#forge:dusts/copper', '#forge:gems/moonstone'],
            energy: '100000',
            id: `powah:energizing/energized_steel`
        },
        {
            output: '4x powah:crystal_niotic',
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
            output: '2x spirit:soul_steel_ingot',
            inputs: ['#forge:ingots/invar', 'blue_skies:soul_fragment', '#forge:ingots/silver'],
            energy: '100000',
            id: `${id_prefix}soul_steel_ingot`
        },
        {
            output: '2x rftoolsbase:infused_diamond',
            inputs: [
                'ars_nouveau:water_essence',
                'ars_nouveau:fire_essence',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                'ars_nouveau:earth_essence',
                'ars_nouveau:air_essence'
            ],
            energy: '200000',
            id: `${id_prefix}infused_diamond`
        },
        {
            output: 'powah:binding_card',
            inputs: ['powah:blank_card', '#forge:gems/carminite'],
            energy: '12000000',
            id: `${id_prefix}binding_card`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
