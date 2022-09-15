ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/enigmatica/';
    const recipes = [
        // {
        //     primary_output: { item: 'minecraft:magenta_dye', count: 3, chance: 1.0 },
        //     secondary_output: { item: 'minecraft:purple_dye', count: 1, chance: 0.5 },
        //     tertiary_output: { item: 'minecraft:pink_dye', count: 1, chance: 0.25 },
        //     input: { item: 'byg:allium_flower_bush' },
        //     experience: 0.5,
        //     duration: 20,
        //     energy: 1000,
        //     ignore_occultism_multiplier: true,
        //     id_suffix: `magenta_dye_from_allium_flower_bush`
        // }
    ];

    dye_sources.forEach((source) => {
        let count = 3,
            secondaryChance = 0.5,
            tertiaryChance = 0.25;

        if (source.type == 'large') {
            count = count * 2;
            secondaryChance = secondaryChance * 2;
            tertiaryChance = tertiaryChance * 2;
        }

        recipes.push({
            primary_output: { item: source.primary, count: count, chance: 1.0 },
            secondary_output: { item: source.secondary, count: 1, chance: secondaryChance },
            tertiary_output: { item: source.tertiary, count: 1, chance: tertiaryChance },
            input: { item: source.input },
            experience: 0.5,
            duration: 20,
            energy: 1000,
            ignore_occultism_multiplier: true,
            id_suffix: `${source.primary.split(':')[1]}_from_${source.input.split(':')[1]}`
        });
    });

    const recipetypes_crushing = (event, recipe) => {
        // occultism
        event
            .custom({
                type: 'occultism:crushing',
                ingredient: recipe.input,
                result: { item: recipe.primary_output.item, count: recipe.primary_output.count },
                crushing_time: recipe.duration,
                ignore_crushing_multiplier: recipe.ignore_occultism_multiplier
            })
            .id(`${id_prefix}/occultism_crushing/${recipe.id_suffix}`);

        // mekanism
        event
            .custom({
                type: 'mekanism:enriching',
                input: { ingredient: recipe.input },
                output: { item: recipe.primary_output.item, count: recipe.primary_output.count }
            })
            .id(`${id_prefix}/mekanism_enriching/${recipe.id_suffix}`);

        // immersiveengineering
        let immersiveengineering_secondaries = [];
        if (recipe.secondary_output) {
            immersiveengineering_secondaries.push({
                chance: recipe.secondary_output.chance,
                output: { item: recipe.secondary_output.item }
            });
        }
        if (recipe.tertiary_output) {
            immersiveengineering_secondaries.push({
                chance: recipe.tertiary_output.chance,
                output: { item: recipe.tertiary_output.item }
            });
        }
        event
            .custom({
                type: 'immersiveengineering:crusher',
                energy: recipe.energy,
                input: recipe.input,
                result: { base_ingredient: { item: recipe.primary_output.item }, count: recipe.primary_output.count },
                secondaries: immersiveengineering_secondaries
            })
            .id(`${id_prefix}/immersiveengineering_crusher/${recipe.id_suffix}`);

        // ars_nouveau
        let ars_nouveau_outputs = [
            {
                chance: recipe.primary_output.chance,
                count: recipe.primary_output.count,
                item: recipe.primary_output.item
            }
        ];
        if (recipe.secondary_output) {
            ars_nouveau_outputs.push({
                chance: recipe.secondary_output.chance,
                count: recipe.secondary_output.count,
                item: recipe.secondary_output.item
            });
        }
        if (recipe.tertiary_output) {
            ars_nouveau_outputs.push({
                chance: recipe.tertiary_output.chance,
                count: recipe.tertiary_output.count,
                item: recipe.tertiary_output.item
            });
        }

        event
            .custom({
                type: 'ars_nouveau:crush',
                input: recipe.input,
                output: ars_nouveau_outputs
            })
            .id(`${id_prefix}/ars_nouveau_crushing/${recipe.id_suffix}`);
    };

    recipes.forEach((recipe) => {
        recipetypes_crushing(event, recipe);
    });
});
