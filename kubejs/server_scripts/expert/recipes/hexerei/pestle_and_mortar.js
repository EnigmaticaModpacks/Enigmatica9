ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/hexerei/pestle_and_mortar/';

    const recipes = [
        {
            inputs: [
                '#forge:dusts/constantan',
                '#forge:dusts/constantan',
                Ingredient.of(['minecraft:glow_berries', 'twilightforest:torchberries']),
                '#forge:dusts/constantan',
                '#forge:dusts/constantan'
            ],
            output: '4x emendatusenigmatica:lumium_dust',
            grindingTime: 10 * 20,
            id: `${id_prefix}lumium_dust`
        },
        {
            inputs: [
                '#forge:dusts/aluminum',
                '#forge:dusts/aluminum',
                '#forge:essences/manipulation',
                '#forge:dusts/aluminum',
                '#forge:dusts/aluminum'
            ],
            output: '4x emendatusenigmatica:signalum_dust',
            grindingTime: 10 * 20,
            id: `${id_prefix}signalum_dust`
        },
        {
            inputs: [
                '#forge:dusts/tin',
                '#forge:dusts/copper',
                '#forge:dusts/copper',
                '#forge:dusts/copper',
                '#forge:dusts/redstone'
            ],
            output: '4x emendatusenigmatica:bronze_dust',
            grindingTime: 10 * 20,
            id: `${id_prefix}bronze_dust`
        },
        {
            inputs: [
                '#forge:dusts/silver',
                '#forge:dusts/gold',
                '#forge:dusts/redstone',
                '#forge:dusts/gold',
                '#forge:dusts/silver'
            ],
            output: '4x emendatusenigmatica:electrum_dust',
            grindingTime: 10 * 20,
            id: `${id_prefix}electrum_dust`
        },
        {
            inputs: [
                '#forge:dusts/redstone',
                '#forge:dusts/iron',
                '#forge:dusts/nickel',
                '#forge:dusts/iron',
                '#forge:dusts/redstone'
            ],
            output: '3x emendatusenigmatica:invar_dust',
            grindingTime: 10 * 20,
            id: `${id_prefix}invar_dust`
        },
        {
            inputs: [
                '#forge:dusts/nickel',
                '#forge:dusts/copper',
                '#forge:dusts/redstone',
                '#forge:dusts/copper',
                '#forge:dusts/nickel'
            ],
            output: '4x emendatusenigmatica:constantan_dust',
            grindingTime: 10 * 20,
            id: `${id_prefix}constantan_dust`
        },
        {
            inputs: ['#forge:string', '#forge:string', 'twilightforest:firefly', '#forge:string', '#forge:string'],
            output: '8x naturesaura:gold_fiber',
            grindingTime: 2 * 20,
            id: `${id_prefix}gold_fiber`
        },
        {
            inputs: [
                'hexerei:belladonna_flowers',
                'hexerei:belladonna_berries',
                'hexerei:belladonna_berries',
                'hexerei:belladonna_berries',
                'hexerei:sage'
            ],
            output: '2x hexerei:mindful_trance_blend',
            grindingTime: 2 * 20,
            id: `hexerei:mindful_trance_blend_from_pestle_and_mortar`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'hexerei:pestle_and_mortar';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = Item.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
