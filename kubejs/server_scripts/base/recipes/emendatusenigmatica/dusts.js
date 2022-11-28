ServerEvents.recipes((event) => {
    const recipes = [];

    let props = Object.keys(metal_properties);

    props.forEach((metal) => {
        if (Item.exists(`emendatusenigmatica:raw_${metal}`)) {
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
