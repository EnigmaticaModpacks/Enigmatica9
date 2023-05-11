ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/occultism/dimensional_mineshaft/';
    const recipes = [
        {
            output: 'emendatusenigmatica:quartz_ore',
            weight: 560,
            id: `occultism:miner/ores/nether_quartz_ore`
        },
        {
            output: 'emendatusenigmatica:gold_ore',
            weight: 373,
            id: `occultism:miner/ores/nether_gold_ore`
        },
        {
            output: 'emendatusenigmatica:bitumen_sandstone_ore',
            weight: 1000,
            id: `${id_prefix}bitumen_ore`
        },
        {
            output: 'emendatusenigmatica:apatite_ore',
            weight: 1500,
            id: `${id_prefix}apatite_ore`
        }
    ];

    Object.keys(metal_properties)
        .concat(Object.keys(gem_properties))
        .forEach((material) => {
            let material_properties;
            if (metal_properties[material] != null) {
                material_properties = metal_properties[material];
            } else {
                material_properties = gem_properties[material];
            }

            if (
                material_properties.oreProcessing != null &&
                material_properties.oreProcessing.occultism != null &&
                material_properties.oreProcessing.occultism.oreWeight != null
            ) {
                recipes.push({
                    ingredient: { tag: 'occultism:miners/deeps' },
                    output: `emendatusenigmatica:${material}_deepslate_ore`,
                    weight: material_properties.oreProcessing.occultism.oreWeight,
                    id: `occultism:miner/deeps/${material}_deepslate_ore`
                });
            }
        });

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:miner';
        recipe.ingredient = recipe.ingredient == null ? { tag: 'occultism:miners/ores' } : recipe.ingredient;
        recipe.result = Ingredient.of(recipe.output).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
