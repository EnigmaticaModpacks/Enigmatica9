ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/industrialforegoing/shapeless/';

    const recipes = [];

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
            id: `${id_prefix}range_addon${range_addon.range}`
        });
    });

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
