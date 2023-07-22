ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/shapeless/';

    const recipes = [];

    colors.forEach((color) => {
        recipes.push({
            output: Item.of('8x immersiveengineering:flare', `{flareColour:${flare_colors[color]}}`),
            inputs: [
                `#forge:dyes/${color}`,
                'immersiveengineering:buckshot',
                'immersiveengineering:buckshot',
                'immersiveengineering:buckshot',
                'immersiveengineering:buckshot',
                'immersiveengineering:buckshot',
                'immersiveengineering:buckshot',
                'immersiveengineering:buckshot',
                'immersiveengineering:buckshot'
            ],
            id: `${id_prefix}flare_${color}`
        });
    });

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
