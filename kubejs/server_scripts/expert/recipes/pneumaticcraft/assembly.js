ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/assembly_laser/';

    const recipes = [
        {
            output: `powah:lens_of_ender`,
            input: {
                tag: `forge:pellets/polonium`,
                type: 'pneumaticcraft:stacked_item',
                count: 9
            },
            program: 'drill',
            id: `${id_prefix}lens_of_ender`
        }
    ];

    colors.forEach((color) => {
        recipes.push({
            output: `industrialforegoing:laser_lens${lens_colors[color]}`,
            input: {
                item: `quark:${color}_rune`,
                type: 'pneumaticcraft:stacked_item',
                count: 3
            },
            program: 'drill',
            id: `${id_prefix}${color}_laser_lens`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = `pneumaticcraft:assembly_${recipe.program}`;
        recipe.result = Item.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
