ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/enigmatica/';
    const recipes = [
        // {
        //     outputs.primary: { item: 'minecraft:magenta_dye', count: 3, chance: 1.0 },
        //     outputs.secondary: { item: 'minecraft:purple_dye', count: 1, chance: 0.5 },
        //     outputs.tertiary: { item: 'minecraft:pink_dye', count: 1, chance: 0.25 },
        //     input:  'byg:allium_flower_bush',
        //     experience: 0.5,
        //     duration: 20,
        //     energy: 1000,
        //     ignore_occultism_multiplier: true,
        //     id_suffix: `magenta_dye_from_allium_flower_bush`
        // }
    ];

    const recipetypes_crushing = (event, recipe) => {
        // Occultism
        event
            .custom({
                type: 'occultism:crushing',
                ingredient: Item.of(recipe.input).toJson(),
                result: Item.of(recipe.outputs.primary.item, recipe.outputs.primary.count).toJson(),
                crushing_time: recipe.duration,
                ignore_crushing_multiplier: recipe.ignore_occultism_multiplier
            })
            .id(`${id_prefix}occultism_crushing/${recipe.id_suffix}`);

        // Mekanism
        event
            .custom({
                type: 'mekanism:enriching',
                input: { ingredient: Item.of(recipe.input).toJson() },
                output: Item.of(recipe.outputs.primary.item, recipe.outputs.primary.count).toJson()
            })
            .id(`${id_prefix}mekanism_enriching/${recipe.id_suffix}`);

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
                input: Item.of(recipe.input).toJson(),
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
                input: Item.of(recipe.input).toJson(),
                output: outputs
            })
            .id(`${id_prefix}ars_nouveau_crushing/${recipe.id_suffix}`);

        // Create
        event
            .custom({
                type: 'create:milling',
                ingredients: [Item.of(recipe.input).toJson()],
                results: outputs,
                processingTime: 50
            })
            .id(`${id_prefix}create_milling/${recipe.id_suffix}`);
    };

    recipes.forEach((recipe) => {
        recipetypes_crushing(event, recipe);
    });
});
