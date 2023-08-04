ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/enigmatica/';
    const recipes = [
        {
            outputs: { primary: { item: 'kubejs:amethyst_dust', count: 1, chance: 1.0 } },
            input: '#forge:gems/amethyst',
            experience: 0.2,
            duration: 20,
            energy: 1000,
            ignore_occultism_multiplier: true,
            id_suffix: `amethyst_dust_from_amethyst`
        },
        {
            outputs: { primary: { item: 'kubejs:therium_dust', count: 1, chance: 1.0 } },
            input: '#forge:gems/therium',
            experience: 0.2,
            duration: 20,
            energy: 1000,
            ignore_occultism_multiplier: true,
            id_suffix: `therium_dust_from_therium`
        },
        {
            outputs: { primary: { item: 'kubejs:subzero_dust', count: 1, chance: 1.0 } },
            input: '#forge:gems/subzero',
            experience: 0.2,
            duration: 20,
            energy: 1000,
            ignore_occultism_multiplier: true,
            id_suffix: `subzero_dust_from_subzero`
        },
        {
            outputs: { primary: { item: 'minecraft:pointed_dripstone', count: 4, chance: 1.0 } },
            input: 'minecraft:dripstone_block',
            experience: 0.2,
            duration: 20,
            energy: 1000,
            ignore_occultism_multiplier: true,
            id_suffix: `pointed_dripstone`
        }
    ];

    const recipetypes_crushing = (event, recipe) => {
        // Mekanism
        event
            .custom({
                type: 'mekanism:crushing',
                input: {
                    ingredient: recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input }
                },
                output: Item.of(recipe.outputs.primary.item, recipe.outputs.primary.count).toJson()
            })
            .id(`${id_prefix}mekanism_crushing/${recipe.id_suffix}`);

        // Immersive Engineering
        let immersiveengineering_secondaries = [];
        if (recipe.outputs.secondary) {
            immersiveengineering_secondaries.push({
                chance: recipe.outputs.secondary.chance,
                output: Item.of(recipe.outputs.secondary.item, recipe.outputs.secondary.count).toJson()
            });
        }
        if (recipe.outputs.tertiary) {
            immersiveengineering_secondaries.push({
                chance: recipe.outputs.tertiary.chance,
                output: Item.of(recipe.outputs.tertiary.item, recipe.outputs.tertiary.count).toJson()
            });
        }
        event
            .custom({
                type: 'immersiveengineering:crusher',
                energy: recipe.energy,
                input: recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input },
                result: { base_ingredient: { item: recipe.outputs.primary.item }, count: recipe.outputs.primary.count },
                secondaries: immersiveengineering_secondaries
            })
            .id(`${id_prefix}immersiveengineering_crusher/${recipe.id_suffix}`);

        let outputs = [recipe.outputs.primary];

        if (recipe.outputs.secondary) {
            outputs.push(recipe.outputs.secondary);
        }

        if (recipe.outputs.tertiary) {
            outputs.push(recipe.outputs.tertiary);
        }

        // Ars Nouveau
        event
            .custom({
                type: 'ars_nouveau:crush',
                input: recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input },
                output: outputs
            })
            .id(`${id_prefix}ars_nouveau_crushing/${recipe.id_suffix}`);

        // Create
        event
            .custom({
                type: 'create:milling',
                ingredients: [recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input }],
                results: outputs,
                processingTime: 50
            })
            .id(`${id_prefix}create_milling/${recipe.id_suffix}`);

        // Thermal
        event
            .custom({
                type: 'thermal:pulverizer',
                ingredient: recipe.input.startsWith('#') ? { tag: recipe.input.slice(1) } : { item: recipe.input },
                result: outputs,
                experience: recipe.experience
            })
            .id(`${id_prefix}thermal_pulverizer/${recipe.id_suffix}`);
    };

    recipes.forEach((recipe) => {
        recipetypes_crushing(event, recipe);
    });
});
