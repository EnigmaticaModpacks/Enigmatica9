ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/powah/energizing/';
    const recipes = [
        {
            output: '3x powah:steel_energized',
            inputs: ['#forge:dusts/aluminum', '#forge:dusts/aluminum', '#forge:dusts/copper', '#forge:essences/earth'],
            energy: '100000',
            id: `${id_prefix}steel_energized`
        },
        {
            output: '2x powah:crystal_niotic',
            inputs: ['#forge:dusts/subzero', 'quark:cyan_rune', '#forge:dusts/subzero'],
            energy: '50000',
            id: `${id_prefix}crystal_niotic`
        },
        {
            output: '2x powah:crystal_spirited',
            inputs: ['kubejs:sylvanite', 'quark:lime_rune', 'kubejs:sylvanite'],
            energy: '800000',
            id: `${id_prefix}crystal_spirited`
        },
        {
            output: '2x powah:crystal_nitro',
            inputs: ['#forge:pellets/polonium', 'quark:red_rune', '#forge:pellets/polonium'],
            energy: '12800000',
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
                '#forge:essences/water',
                '#forge:essences/fire',
                '#forge:gems/diamond',
                '#forge:gems/diamond',
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
        }
    ];

    let range_addons = [
        { range: 0, color: 'black' },
        { range: 1, color: 'blue' },
        { range: 2, color: 'light_gray' },
        { range: 3, color: 'gray' },
        { range: 4, color: 'red' },
        { range: 5, color: 'orange' },
        { range: 6, color: 'white' },
        { range: 7, color: 'yellow' },
        { range: 8, color: 'brown' },
        { range: 9, color: 'cyan' },
        { range: 10, color: 'purple' },
        { range: 11, color: 'green' }
    ];

    range_addons.forEach((range_addon) => {
        recipes.push({
            output: Item.of(
                `industrialforegoing:range_addon${range_addon.range}`,
                `{TitaniumAugment:{Range:${range_addon.range}.0f}}`
            ),
            inputs: ['mininggadgets:upgrade_empty', `quark:${range_addon.color}_rune`],
            energy: '6000',
            id: `${id_prefix}range_addon${range_addon.range}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
