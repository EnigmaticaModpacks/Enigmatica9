ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    let metals = Object.keys(metal_properties);
    let gems = Object.keys(gem_properties);
    let nonEECompat = [
        {
            dust: 'ae2:certus_quartz_dust',
            name: 'certus_quartz',
            type: 'gems'
        },
        {
            dust: 'ae2:fluix_dust',
            name: 'fluix',
            type: 'gems'
        },
        {
            dust: 'ae2:sky_dust',
            name: 'sky_stone',
            type: 'stone'
        },
        {
            dust: 'create:powdered_obsidian',
            name: 'obsidian',
            type: 'stone',
            tag: '#forge:obsidian'
        },
        {
            dust: 'create:cinder_flour',
            name: 'netherrack',
            type: 'stone',
            tag: '#forge:netherrack'
        }
    ];
    let exceptions = {
        // Stones
        sky_stone: {
            mekanism: true,
            create: true
        },
        obsidian: {
            mekanism: true,
            create: true
        },
        netherrack: {
            thermal: true,
            create: true
        },
        // Gems
        coal: {
            mekanism: true,
            immersiveengineering: true
        },
        charcoal: {
            mekanism: true
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
        certus_quartz: {
            mekansim: true,
            create: true
        },
        fluix: {
            mekanism: true,
            create: true
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
            if (!exceptions[metal]) {
                exceptions[metal] = {
                    occultism: true,
                    thermal: true
                };
            } else {
                exceptions[metal].occultism = true;
                exceptions[metal].thermal = true;
            }

            recipetypes_crushing(event, { name: metal, type: 'ingots' }, exceptions);
        }
    });

    gems.forEach((gem) => {
        if (Item.exists(`emendatusenigmatica:${gem}_dust`)) {
            if (!exceptions[gem]) {
                exceptions[gem] = { thermal: true };
            } else {
                exceptions[gem].thermal = true;
            }
            recipetypes_crushing(event, { name: gem, type: 'gems' }, exceptions);
        }
    });

    nonEECompat.forEach((material) => {
        recipetypes_crushing(
            event,
            { name: material.name, type: material.type },
            exceptions,
            material.dust,
            material.tag
        );
    });
});

// Functions
function recipetypes_crushing(event, material, exceptions, item, tag) {
    const id_prefix = 'enigmatica:normal/unification/dust_processing/';
    let recipe = {
        outputs: {
            primary: { item: item == null ? `emendatusenigmatica:${material.name}_dust` : item, count: 1, chance: 1 }
        },
        input: '',
        experience: 0.25,
        duration: 80,
        energy: 1000,
        ignore_occultism_multiplier: true,
        id_suffix: '',
        exceptions: exceptions[material.name]
    };

    if (!recipe.exceptions) recipe.exceptions = {};

    recipe.input = tag == null ? `#forge:${material.type}/${material.name}` : tag;
    recipe.id_suffix = `${material.type}/${material.name}_dust`;

    // Occultism
    if (!recipe.exceptions.occultism) {
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

    // Thermal
    if (!recipe.exceptions.thermal) {
        event
            .custom({
                type: 'thermal:pulverizer',
                ingredient: Ingredient.of(recipe.input).toJson(),
                results: [
                    {
                        item: recipe.outputs.primary.item,
                        count: recipe.outputs.primary.count
                    }
                ],
                experience: recipe.experience
            })
            .id(`${id_prefix}thermal_pulverizer/${recipe.id_suffix}`);
    }
}
