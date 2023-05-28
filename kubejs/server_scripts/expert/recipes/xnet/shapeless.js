ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/xnet/shapeless/';

    const recipes = [
        {
            output: 'xnet:redstone_proxy',
            inputs: ['minecraft:observer', '#xnet:cables'],
            id: `${id_prefix}redstone_proxy`
        }
    ];

    xnet_colors.forEach((color) => {
        recipes.push({
            output: `xnet:netcable_${color}`,
            inputs: ['#xnet:cables', `#forge:dyes/${color}`],
            id: `${id_prefix}netcable_${color}_dye`
        });
    });

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
