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

    dye_sources.forEach((dye_source) => {
        let base_rate = 3;

        let count = dye_source.type == 'large' ? base_rate * 2 : base_rate;
        let secondaryChance = dye_source.type == 'large' ? (base_rate / 9) * 2 : base_rate / 9;
        let tertiaryChance = dye_source.type == 'large' ? (base_rate / 18) * 2 : base_rate / 18;

        recipes.push({
            outputs: {
                primary: { item: dye_source.primary, count: count, chance: 1.0 },
                secondary: { item: dye_source.secondary, count: Math.ceil(count / 2), chance: secondaryChance },
                tertiary: { item: dye_source.tertiary, count: Math.ceil(count / 3), chance: tertiaryChance }
            },
            input: dye_source.input,
            experience: 0.5,
            duration: 20,
            energy: 256,
            ignore_occultism_multiplier: false,
            id_suffix: `${dye_source.primary.split(':')[1]}_from_${dye_source.input.split(':')[1]}`
        });
    });

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

        // Ars Nouveau
        let ars_nouveau_outputs = [
            {
                chance: recipe.outputs.primary.chance,
                count: recipe.outputs.primary.count,
                item: recipe.outputs.primary.item
            }
        ];
        if (recipe.outputs.secondary) {
            ars_nouveau_outputs.push({
                chance: recipe.outputs.secondary.chance,
                count: recipe.outputs.secondary.count,
                item: recipe.outputs.secondary.item
            });
        }
        if (recipe.outputs.tertiary) {
            ars_nouveau_outputs.push({
                chance: recipe.outputs.tertiary.chance,
                count: recipe.outputs.tertiary.count,
                item: recipe.outputs.tertiary.item
            });
        }

        event
            .custom({
                type: 'ars_nouveau:crush',
                input: Item.of(recipe.input).toJson(),
                output: ars_nouveau_outputs
            })
            .id(`${id_prefix}ars_nouveau_crushing/${recipe.id_suffix}`);
    };

    recipes.forEach((recipe) => {
        recipetypes_crushing(event, recipe);
    });
});
