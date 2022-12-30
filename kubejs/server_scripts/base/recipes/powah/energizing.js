ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/powah/energizing/';
    const recipes = [
        {
            inputs: [
                '#forge:dusts/fluorite',
                '#forge:yellow_cake_uranium',
                '#forge:dusts/fluorite',
                '#forge:yellow_cake_uranium',
                '#forge:dusts/fluorite',
                '#forge:yellow_cake_uranium'
            ],
            energy: '60000000',
            output: Item.of('powah:uraninite', 6),
            id: `${id_prefix}uraninite`
        },
        {
            inputs: ['#forge:ingots/steel', '#forge:ingots/signalum'],
            energy: '10000',
            output: Item.of('powah:steel_energized', 2),
            id: `powah:energizing/energized_steel`
        },
        {
            inputs: ['ars_nouveau:fire_essence', '#forge:nuggets/horizonite', '#forge:nuggets/horizonite'],
            energy: '120000',
            output: Item.of('powah:crystal_blazing', 4),
            id: `${id_prefix}crystal_blazing`
        },
        {
            inputs: ['ars_nouveau:water_essence', '#forge:gems/aquite'],
            energy: '300000',
            output: Item.of('powah:crystal_niotic', 3),
            id: `${id_prefix}crystal_niotic`
        },
        {
            inputs: ['ars_nouveau:earth_essence', '#forge:gems/diopside'],
            energy: '1000000',
            output: Item.of('powah:crystal_spirited', 3),
            id: `${id_prefix}crystal_spirited`
        },
        {
            inputs: [
                'occultism:afrit_essence',
                '#forge:storage_blocks/pyrope',
                '#forge:storage_blocks/pyrope',
                'powah:blazing_crystal_block'
            ],
            energy: '20000000',
            output: Item.of('powah:crystal_nitro', 27),
            id: `${id_prefix}crystal_nitro`
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
