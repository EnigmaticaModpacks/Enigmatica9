ServerEvents.recipes((event) => {
    const recipes = [];

    let metals = Object.keys(metal_properties);
    let gems = Object.keys(gemProperties);

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

    gems.forEach((gem) => {
        if (Item.exists(`emendatusenigmatica:${gem}_dust`)) {
            recipes.push({
                type: 'immersiveengineering:crusher',
                energy: 20000,
                input: Item.of(`emendatusenigmatica:${gem}_gem`).toJson(),
                result: { base_ingredient: { item: `emendatusenigmatica:${gem}_dust` }, count: 1 },
                id: `emendatusenigmatica:ie/crusher/gem/${gem}_dust`
            })
        }
    })

    recipes.forEach((recipe) => {
        if (recipe.type) {
            event.custom(recipe).id(recipe.id)
        } else {
            event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
        }
    });
});
