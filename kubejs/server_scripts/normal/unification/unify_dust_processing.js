ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    let metals = Object.keys(metal_properties);
    let gems = Object.keys(gem_properties);
    let exceptions = {
        // Gems
        coal: {
            mekanism: true,
            immersiveengineering: true
        },
        diamond: {
            mekanism: true
        },
        emerald: {
            mekanism: true
        },
        fluorite: {
            mekanism: true
        },
        lapis: {
            mekanism: true
        },
        quartz: {
            mekanism: true
        },
        // Metals
        zinc: {
            immersiveengineering: true
        },
        uranium: {
            mekanism: true,
            immersiveengineering: true
        },
        tin: {
            mekanism: true,
            immersiveengineering: true
        },
        steel: {
            mekanism: true,
            immersiveengineering: true
        },
        silver: {
            immersiveengineering: true
        },
        rose_gold: {
            immersiveengineering: true
        },
        refined_obsidian: {
            mekanism: true
        },
        osmium: {
            mekanism: true,
            immersiveengineering: true
        },
        nickel: {
            immersiveengineering: true
        },
        lead: {
            mekanism: true,
            immersiveengineering: true
        },
        iron: {
            mekanism: true,
            immersiveengineering: true
        },
        invar: {
            immersiveengineering: true
        },
        gold: {
            mekanism: true,
            immersiveengineering: true
        },
        electrum: {
            immersiveengineering: true
        },
        copper: {
            mekanism: true,
            immersiveengineering: true
        },
        constantan: {
            immersiveengineering: true
        },
        bronze: {
            mekanism: true,
            immersiveengineering: true
        },
        brass: {
            immersiveengineering: true
        },
        aluminum: {
            immersiveengineering: true
        }
    };

    metals.forEach((metal) => {
        if (Item.exists(`emendatusenigmatica:${metal}_dust`)) {
            recipetypes_crushing(event, { name: metal, type: 'metal' }, exceptions);
        }
    });

    gems.forEach((gem) => {
        if (Item.exists(`emendatusenigmatica:${gem}_dust`)) {
            recipetypes_crushing(event, { name: gem, type: 'gem' }, exceptions);
        }
    });
});

// Functions
function recipetypes_crushing(event, material, exceptions) {
    const id_prefix = 'enigmatica:unification/dust_processing/';
    let recipe = {
        outputs: { primary: { item: `emendatusenigmatica:${material.name}_dust`, count: 1, chance: 1 } },
        input: '',
        experience: 0.25,
        duration: 20,
        energy: 1000,
        ignore_occultism_multiplier: true,
        id_suffix: '',
        exceptions: exceptions[material.name]
    };

    if (!recipe.exceptions) recipe.exceptions = {};

    if (material.type == 'gem') {
        recipe.input = `#forge:gems/${material.name}`;
        recipe.id_suffix = `gems/${material.name}_dust`;
    } else if (material.type == 'metal') {
        recipe.input = `#forge:ingots/${material.name}`;
        recipe.id_suffix = `metals/${material.name}_dust`;
    }

    // Occultism
    if (!recipe.exceptions.occultism && !material.type == 'metal') {
        event
            .custom({
                type: 'occultism:crushing',
                ingredient: Ingredient.of(recipe.input).toJson(),
                result: Item.of(recipe.outputs.primary.item, recipe.outputs.primary.count).toJson(),
                crushing_time: recipe.duration,
                ignore_crushing_multiplier: recipe.ignore_occultism_multiplier
            })
            .id(`${id_prefix}occultism_crushing/${recipe.id_suffix}`);
    }
    // Mekanism
    if (!recipe.exceptions.mekanism) {
        event
            .custom({
                type: 'mekanism:crushing',
                input: { ingredient: Ingredient.of(recipe.input).toJson() },
                output: Item.of(recipe.outputs.primary.item, recipe.outputs.primary.count).toJson()
            })
            .id(`${id_prefix}mekanism_crushing/${recipe.id_suffix}`);
    }
    // Immersive Engineering
    if (!recipe.exceptions.immersiveengineering) {
        event
            .custom({
                type: 'immersiveengineering:crusher',
                energy: recipe.energy,
                input: Ingredient.of(recipe.input).toJson(),
                result: { base_ingredient: { item: recipe.outputs.primary.item }, count: recipe.outputs.primary.count },
                secondaries: []
            })
            .id(`${id_prefix}immersiveengineering_crusher/${recipe.id_suffix}`);
    }
    // Ars Nouveau
    if (!recipe.exceptions.arsnouveau) {
        event
            .custom({
                type: 'ars_nouveau:crush',
                input: Ingredient.of(recipe.input).toJson(),
                output: [recipe.outputs.primary]
            })
            .id(`${id_prefix}ars_nouveau_crushing/${recipe.id_suffix}`);
    }
    // Create
    if (!recipe.exceptions.create) {
        event
            .custom({
                type: 'create:milling',
                ingredients: [Ingredient.of(recipe.input).toJson()],
                results: [recipe.outputs.primary],
                processingTime: 50
            })
            .id(`${id_prefix}create_milling/${recipe.id_suffix}`);
    }
}
