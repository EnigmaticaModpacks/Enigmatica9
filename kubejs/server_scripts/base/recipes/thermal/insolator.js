ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/thermal/insolator/';

    const recipes = [
        /*
        {
            input: Item.of('minecraft:azalea'),
            outputs: [
                { item: 'quark:azalea_log', chance: 6.0 },
                { item: 'minecraft:azalea', chance: 1.1 },
                { item: 'minecraft:hanging_roots', chance: 1.25 }
            ],
            energy_mod: 3.25,
            water_mod: 3.0,
            id: `${id_prefix}azalea`
        }
        */
    ];

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
                outputs: outputs,
                input: Item.of(crop.seed),
                energy_mod: processing.energy_modifier,
                water_mod: processing.growth_modifier,
                id: `${id_prefix}${crop.plant.replace(':', '_')}`
            });
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'thermal:insolator';
        recipe.input = recipe.input.toJson();
        recipe.results = recipe.outputs;
        event.custom(recipe).id(recipe.id);
    });
});
