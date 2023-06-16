ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/assembly_laser/';

    const recipes = [];

    let crystal_types = ['generator', 'producer'];
    let crystal_sizes = ['dim', 'pulsating', 'iridescent'];

    crystal_sizes.forEach((size) => {
        crystal_types.forEach((type) => {
            recipes.push({
                result: { item: `kubejs:${size}_arcanite_crystal` },
                input: { item: `enigmaticunity:${size}_source_${type}` },
                program: 'drill',
                id: `${id_prefix}${size}_source_${type}_recycling`
            });
        });
    });

    colors.forEach((color) => {
        recipes.push({
            result: { item: `industrialforegoing:laser_lens${lens_colors[color]}` },
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
        event.custom(recipe).id(recipe.id);
    });
});
