ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [];

    let metals = Object.keys(metal_properties);

    metals.forEach((metal) => {
        if (Item.exists(`emendatusenigmatica:raw_${metal}` && Item.exists(`emendatusenigmatica:${metal}_dust`))) {
            recipes.push(
                {
                    output: `emendatusenigmatica:${metal}_dust`,
                    inputs: [`#forge:raw_materials/${metal}`, '#forge:tools/crafting_hammers'],
                    id: `emendatusenigmatica:dust/from_raw/${metal}`
                },
                {
                    output: `emendatusenigmatica:${metal}_dust`,
                    inputs: [`#forge:ores/${metal}`, '#forge:tools/crafting_hammers'],
                    id: `emendatusenigmatica:dust/from_ore/${metal}`
                }
            );
        }
    });

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
