ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/powah/energizing/';
    const recipes = [
        {
            output: '3x emendatusenigmatica:brass_ingot',
            inputs: ['#forge:dusts/aluminum', '#forge:dusts/aluminum', '#forge:dusts/copper', '#forge:essences/earth'],
            energy: '100000',
            id: `${id_prefix}brass_ingot`
        },
        {
            output: '2x powah:crystal_niotic',
            inputs: ['#forge:dusts/subzero', 'quark:cyan_rune', '#forge:dusts/subzero'],
            energy: '50000',
            id: `${id_prefix}crystal_niotic`
        },
        {
            output: '2x powah:crystal_spirited',
            inputs: ['#forge:dusts/sylvanite', 'quark:lime_rune', '#forge:dusts/sylvanite'],
            energy: '800000',
            id: `${id_prefix}crystal_spirited`
        },
        {
            output: '4x powah:crystal_nitro',
            inputs: ['#forge:pellets/polonium', 'quark:red_rune', '#forge:pellets/polonium'],
            energy: '25600000',
            id: `${id_prefix}crystal_nitro`
        },
        {
            output: '4x spirit:soul_steel_ingot',
            inputs: [
                '#forge:dusts/iesnium',
                '#forge:dusts/iesnium',
                '#forge:dusts/osmium',
                '#forge:dusts/nickel',
                '#forge:dusts/diamond',
                'spirit:soul_powder'
            ],
            energy: '100000',
            id: `${id_prefix}soul_steel_ingot`
        },
        {
            output: '2x rftoolsbase:infused_diamond',
            inputs: [
                '#forge:gems/diamond',
                '#forge:gems/diamond',
                '#forge:essences/water',
                '#forge:essences/fire',
                '#forge:essences/earth',
                '#forge:essences/air'
            ],
            energy: '200000',
            id: `${id_prefix}infused_diamond`
        },
        {
            output: 'powah:binding_card',
            inputs: ['powah:blank_card', '#forge:gems/carminite'],
            energy: '12000000',
            id: `${id_prefix}binding_card`
        },
        {
            output: '4x rftoolsbase:infused_enderpearl',
            inputs: [
                Item.of(
                    'pneumaticcraft:spawner_core',
                    '{"pneumaticcraft:SpawnerCoreStats":{"minecraft:enderman":100}}'
                ).weakNBT(),
                '#forge:storage_blocks/dimensional',
                '#forge:storage_blocks/dimensional',
                '#forge:storage_blocks/dimensional',
                '#forge:ingots/energized_steel'
            ],
            energy: '12000000',
            id: `${id_prefix}infused_enderpearl`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
