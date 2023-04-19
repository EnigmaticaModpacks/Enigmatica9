ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [];

    let props = Object.keys(metal_properties);

    props.forEach((metal) => {
        if (Item.exists(`emendatusenigmatica:${metal}_plate`)) {
            recipes.push({
                output: `emendatusenigmatica:${metal}_plate`,
                inputs: [`#forge:ingots/${metal}`, '#forge:tools/crafting_hammers'],
                id: `emendatusenigmatica:plate/from_ingot/${metal}`
            });
        }
    });

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
