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
        },
        {
            inputs: [
                'powah:capacitor_basic_large',
                '#forge:gears/enderium',
                'minecraft:ender_eye',
                '#forge:gears/enderium',
                'powah:capacitor_basic_large'
            ],
            energy: '100000',
            output: Item.of('powah:ender_core', 1),
            id: `powah:energizing/ender_core`
        },
        {
            inputs: ['ae2:printed_silicon', '#forge:dusts/redstone', 'ae2:printed_logic_processor'],
            energy: '5000',
            output: Item.of('ae2:logic_processor'),
            id: `${id_prefix}logic_processor`
        },
        {
            inputs: ['ae2:printed_silicon', '#forge:dusts/redstone', 'ae2:printed_engineering_processor'],
            energy: '5000',
            output: Item.of('ae2:engineering_processor'),
            id: `${id_prefix}engineering_processor`
        },
        {
            inputs: ['ae2:printed_silicon', '#forge:dusts/redstone', 'ae2:printed_calculation_processor'],
            energy: '5000',
            output: Item.of('ae2:calculation_processor'),
            id: `${id_prefix}calculation_processor`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = recipe.output.toJson();
        event.custom(recipe).id(recipe.id);
    });
});
