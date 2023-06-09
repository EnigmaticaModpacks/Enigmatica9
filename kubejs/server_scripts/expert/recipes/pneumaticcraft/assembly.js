ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/assembly_laser/';

    const recipes = [];

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
