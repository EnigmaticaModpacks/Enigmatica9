ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/powah/energizing/';
    const recipes = [
        {
            inputs: [
                '#forge:gems/fluorite',
                '#forge:yellow_cake_uranium',
                '#forge:gems/fluorite',
                '#forge:yellow_cake_uranium',
                '#forge:gems/fluorite'
            ],
            energy: '150000000',
            output: Item.of('powah:uraninite', 2),
            id: `${id_prefix}uraninite`
        },
        {
            inputs: ['#forge:ingots/steel', '#forge:ingots/signalum'],
            energy: '10000',
            output: Item.of('powah:steel_energized', 2),
            id: `powah:energizing/energized_steel`
        },
        {
            inputs: ['#forge:ingots/horizonite', 'ars_nouveau:fire_essence', '#forge:ingots/horizonite'],
            energy: '120000',
            output: Item.of('powah:crystal_blazing', 2),
            id: `powah:energizing/blazing_crystal`
        },
        {
            inputs: ['#forge:gems/aquite', 'ars_nouveau:water_essence', '#forge:gems/aquite'],
            energy: '300000',
            output: Item.of('powah:crystal_niotic', 2),
            id: `powah:energizing/niotic_crystal`
        },
        {
            inputs: ['#forge:gems/diopside', 'ars_nouveau:earth_essence', '#forge:gems/diopside'],
            energy: '1000000',
            output: Item.of('powah:crystal_spirited', 2),
            id: `powah:energizing/spirited_crystal`
        },
        {
            inputs: [
                'powah:crystal_blazing',
                '#forge:gems/pyrope',
                'occultism:afrit_essence',
                '#forge:gems/pyrope',
                'powah:crystal_blazing'
            ],
            energy: '20000000',
            output: Item.of('powah:crystal_nitro', 4),
            id: `powah:energizing/nitro_crystal`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = recipe.output.toJson();
        event.custom(recipe).id(recipe.id);
    });
});
