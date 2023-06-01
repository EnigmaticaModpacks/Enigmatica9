ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/hexerei/pestle_and_mortar/';

    const recipes = [
        {
            inputs: ['minecraft:wheat', 'minecraft:wheat', 'minecraft:wheat', 'minecraft:wheat', 'minecraft:wheat'],
            output: '6x create:wheat_flour',
            grindingTime: 300,
            id: `${id_prefix}wheat_flour`
        },
        {
            inputs: [
                'minecraft:netherrack',
                'minecraft:netherrack',
                'minecraft:netherrack',
                'minecraft:netherrack',
                'minecraft:netherrack'
            ],
            output: '8x create:cinder_flour',
            grindingTime: 300,
            id: `${id_prefix}cinder_flour`
        },
        {
            inputs: [
                '#forge:rods/blaze',
                '#forge:rods/blaze',
                '#forge:rods/blaze',
                '#forge:rods/blaze',
                '#forge:rods/blaze'
            ],
            output: '15x minecraft:blaze_powder',
            grindingTime: 100,
            id: `${id_prefix}blaze_powder`
        },
        {
            inputs: [
                '#forge:rods/blizz',
                '#forge:rods/blizz',
                '#forge:rods/blizz',
                '#forge:rods/blizz',
                '#forge:rods/blizz'
            ],
            output: '15x thermal:blizz_powder',
            grindingTime: 100,
            id: `${id_prefix}blizz_powder`
        },
        {
            inputs: [
                '#forge:rods/blitz',
                '#forge:rods/blitz',
                '#forge:rods/blitz',
                '#forge:rods/blitz',
                '#forge:rods/blitz'
            ],
            output: '15x thermal:blitz_powder',
            grindingTime: 100,
            id: `${id_prefix}blitz_powder`
        },

        {
            inputs: [
                '#forge:rods/basalz',
                '#forge:rods/basalz',
                '#forge:rods/basalz',
                '#forge:rods/basalz',
                '#forge:rods/basalz'
            ],
            output: '15x thermal:basalz_powder',
            grindingTime: 100,
            id: `${id_prefix}basalz_powder`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'hexerei:pestle_and_mortar';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = Item.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
