ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/insolator/';

    const recipes = [];

    // Cloche additions from crop_properties constant
    let crop_types = Object.keys(crop_properties);

    crop_types.forEach((type) => {
        let processing = crop_properties[type].crop_processing;

        crop_properties[type].crops.forEach((crop) => {
            let outputs = [{ item: crop.plant, chance: processing.primary_chance }];
            if (type.includes('_crops') && crop.seed !== 'minecraft:chorus_flower') {
                outputs.push({ item: crop.seed, chance: processing.secondary_chance });
            }

            recipes.push({
                results: outputs,
                ingredient: { item: crop.seed },
                energy_mod: processing.energy_modifier,
                water_mod: processing.growth_modifier,
                id: `${id_prefix}${crop.plant.replace(':', '_')}`
            });
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:insolator';
        event.custom(recipe).id(recipe.id);
    });
});
