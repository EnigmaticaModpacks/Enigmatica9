ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/create/shaped/';

    const recipes = [];

    const stone_conversions = [
        'create:crimsite',
        'create:scoria',
        'create:ochrum',
        'create:veridium',
        'create:asurine'
    ];

    stone_conversions.forEach((stone, index) => {
        let input = stone;
        let output = index + 1 >= stone_conversions.length ? stone_conversions[0] : stone_conversions[index + 1];

        recipes.push({
            output: `8x ${output}`,
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: input,
                B: '#forge:essences/manipulation'
            },
            id: `${id_prefix}${input.replace(':', '_')}_from_${output.replace(':', '_')}`
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
