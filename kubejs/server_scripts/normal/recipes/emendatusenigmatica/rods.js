ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [];

    let props = Object.keys(metal_properties);

    props.forEach((metal) => {
        if (Item.exists(`emendatusenigmatica:${metal}_rod`)) {
            recipes.push({
                output: Item.of(`emendatusenigmatica:${metal}_rod`, 4),
                pattern: ['A', 'A'],
                key: {
                    A: `#forge:ingots/${metal}`
                },
                id: `emendatusenigmatica:rod/from_ingot/${metal}`
            });
        }
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
