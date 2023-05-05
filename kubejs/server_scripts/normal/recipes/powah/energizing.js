ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/powah/energizing/';
    const recipes = [
        {
            output: Item.of('powah:steel_energized', 2),
            inputs: ['#forge:ingots/steel', '#forge:ingots/signalum'],
            energy: '10000',
            id: `powah:energizing/energized_steel`
        },
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
