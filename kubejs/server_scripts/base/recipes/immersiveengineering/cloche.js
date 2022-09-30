ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/cloche/';

    const recipes = [
        /*
        {
            outputs: [Item.of('2x minecraft:wheat'), Item.of('minecraft:wheat_seeds')],
            input: Item.of('minecraft:wheat_seeds'),
            render: { type: 'crop', block: 'minecraft:wheat' },
            soil: Item.of('minecraft:dirt'),
            time: 800,
            id: `${id_prefix}'minecraft_wheat'`
        }
        */
    ];

    // Cloche additions from crop_properties constant
    let crop_types = Object.keys(crop_properties);

    crop_types.forEach((type) => {
        let processing = crop_properties[type].crop_processing,
            growth_ticks = 800 * processing.growth_modifier,
            primary_count = 2,
            secondary_count = 1;

        if (type == 'fiber_crops') {
            primary_count = 1;
            secondary_count = 2;
        }

        if (type == 'vines') {
            return;
        }

        crop_properties[type].crops.forEach((crop) => {
            if (crop.substrate == 'water') {
                return;
            }

            let outputs = [Item.of(crop.plant, primary_count)];

            if (type.includes('_crops') && crop.seed !== 'minecraft:chorus_flower') {
                outputs.push(Item.of(`${secondary_count}x ${crop.seed}`));
            }
            recipes.push({
                outputs: outputs,
                input: Item.of(crop.seed),
                render: crop.render,
                soil: Ingredient.of(`#enigmatica:soils/${crop.substrate}`),
                time: Math.trunc(growth_ticks),
                id: `${id_prefix}${crop.plant.replace(':', '_')}`
            });
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:cloche';

        // input: { item: 'minecraft:wheat_seeds' },
        recipe.input = recipe.input.toJson();

        // results: [{ count: 2, item: 'minecraft:wheat' }, { item: 'minecraft:wheat_seeds' }]
        recipe.results = recipe.outputs.map((output) => output.toJson());

        //soil: { item: 'minecraft:dirt' }
        recipe.soil = recipe.soil.toJson();

        event.custom(recipe).id(recipe.id);
    });
});
