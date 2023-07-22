ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'immersiveengineering:mineral/';

    const recipes = [
        {
            ores: [
                { chance: 0.5, output: { item: 'minecraft:gravel' } },
                { chance: 0.1, output: { item: 'byg:quartzite_sand' } },
                { chance: 0.4, output: { item: 'minecraft:ancient_debris' } }
            ],
            dimensions: ['minecraft:the_nether'],
            weight: 8,
            fail_chance: 0.7,
            sample_background: 'minecraft:netherrack',
            id: `${id_prefix}ancient_debris`
        },
        {
            ores: [
                { chance: 0.5, output: { tag: 'forge:gems/quartz' } },
                { chance: 0.3, output: { tag: 'forge:gems/fluorite' } },
                { chance: 0.1, output: { item: 'minecraft:raw_gold' } },
                { chance: 0.1, output: { tag: 'forge:dusts/sulfur' } }
            ],
            dimensions: ['minecraft:the_nether'],
            weight: 20,
            fail_chance: 0.15,
            sample_background: 'byg:raw_quartz_block',
            id: `${id_prefix}mephitic_quarzite`
        },
        {
            ores: [
                { chance: 0.75, output: { item: 'minecraft:raw_copper' } },
                { chance: 0.25, output: { item: 'minecraft:raw_gold' } }
            ],
            dimensions: ['minecraft:overworld', 'twilightforest:twilight_forest'],
            weight: 30,
            fail_chance: 0.1,
            sample_background: 'minecraft:stone',
            id: `${id_prefix}auricupride`
        },
        {
            ores: [
                { chance: 0.6, output: { item: 'minecraft:prismarine' } },
                { chance: 0.3, output: { tag: 'forge:gems/emerald' } }
            ],
            dimensions: ['minecraft:overworld', 'twilightforest:twilight_forest'],
            weight: 5,
            fail_chance: 0.2,
            sample_background: 'minecraft:prismarine',
            id: `${id_prefix}beryl`
        },
        {
            ores: [
                { chance: 0.7, output: { tag: 'forge:gems/coal' } },
                { chance: 0.1, output: { tag: 'forge:dusts/sulfur' } },
                { chance: 0.2, output: { tag: 'forge:gems/bitumen' } }
            ],
            dimensions: ['minecraft:overworld', 'twilightforest:twilight_forest'],
            weight: 25,
            fail_chance: 0.05,
            sample_background: 'minecraft:andesite',
            id: `${id_prefix}bituminous_coal`
        },
        {
            ores: [
                { chance: 7.0, output: { tag: 'forge:raw_materials/tin' } },
                { chance: 3.0, output: { tag: 'forge:raw_materials/osmium' } }
            ],
            dimensions: ['minecraft:overworld', 'twilightforest:twilight_forest'],
            weight: 20,
            fail_chance: 0.05,
            sample_background: 'create:limestone',
            id: `${id_prefix}cassiterite`
        },
        {
            ores: [
                { chance: 0.35, output: { item: 'minecraft:raw_iron' } },
                { chance: 0.35, output: { item: 'minecraft:raw_copper' } },
                { chance: 0.3, output: { tag: 'forge:dusts/sulfur' } }
            ],
            dimensions: ['minecraft:overworld', 'twilightforest:twilight_forest'],
            weight: 20,
            fail_chance: 0.05,
            sample_background: 'quark:jasper',
            id: `${id_prefix}chalcopyrite`
        },
        {
            ores: [
                { chance: 0.5, output: { tag: 'forge:gems/cinnabar' } },
                { chance: 0.4, output: { tag: 'forge:dusts/redstone' } },
                { chance: 0.1, output: { tag: 'forge:dusts/sulfur' } }
            ],
            dimensions: ['minecraft:overworld', 'twilightforest:twilight_forest'],
            weight: 15,
            fail_chance: 0.1,
            sample_background: 'minecraft:granite',
            id: `${id_prefix}cinnabar`
        },
        {
            ores: [
                { chance: 0.4, output: { tag: 'forge:raw_materials/lead' } },
                { chance: 0.2, output: { tag: 'forge:raw_materials/silver' } },
                { chance: 0.4, output: { tag: 'forge:dusts/sulfur' } }
            ],
            dimensions: ['minecraft:overworld', 'twilightforest:twilight_forest'],
            weight: 15,
            fail_chance: 0.05,
            sample_background: 'quark:slate',
            id: `${id_prefix}galena`
        },
        {
            ores: [
                { chance: 0.3, output: { item: 'minecraft:granite' } },
                { chance: 0.3, output: { item: 'minecraft:diorite' } },
                { chance: 0.3, output: { item: 'minecraft:andesite' } },
                { chance: 0.1, output: { item: 'minecraft:obsidian' } }
            ],
            dimensions: ['minecraft:overworld'],
            weight: 25,
            fail_chance: 0.05,
            sample_background: 'minecraft:stone',
            id: `${id_prefix}igneous_rock`
        },
        {
            ores: [
                { chance: 0.7, output: { tag: 'forge:raw_materials/aluminum' } },
                { chance: 0.2, output: { item: 'minecraft:raw_iron' } }
            ],
            dimensions: ['minecraft:overworld', 'twilightforest:twilight_forest'],
            weight: 20,
            fail_chance: 0.05,
            sample_background: 'minecraft:stone',
            id: `${id_prefix}laterite`
        },
        {
            ores: [
                { chance: 0.35, output: { item: 'minecraft:raw_iron' } },
                { chance: 0.35, output: { tag: 'forge:raw_materials/nickel' } },
                { chance: 0.3, output: { tag: 'forge:dusts/sulfur' } }
            ],
            dimensions: ['minecraft:overworld', 'twilightforest:twilight_forest'],
            weight: 25,
            fail_chance: 0.05,
            sample_background: 'quark:jasper',
            id: `${id_prefix}pentlandite`
        },
        {
            ores: [
                { chance: 0.5, output: { item: 'minecraft:clay' } },
                { chance: 0.3, output: { item: 'minecraft:sand' } },
                { chance: 0.2, output: { item: 'minecraft:gravel' } }
            ],
            dimensions: ['minecraft:overworld'],
            weight: 25,
            fail_chance: 0.05,
            sample_background: 'minecraft:clay',
            id: `${id_prefix}silt`
        },
        {
            ores: [
                { chance: 0.7, output: { tag: 'forge:raw_materials/uranium' } },
                { chance: 0.3, output: { tag: 'forge:raw_materials/lead' } }
            ],
            dimensions: ['minecraft:overworld', 'twilightforest:twilight_forest'],
            weight: 10,
            fail_chance: 0.15,
            sample_background: 'create:weathered_limestone',
            id: `${id_prefix}uraninite`
        },
        {
            ores: [
                { chance: 0.2, output: { item: 'minecraft:basalt' } },
                { chance: 0.3, output: { tag: 'forge:gems/diamond' } },
                { chance: 0.3, output: { tag: 'forge:gems/apatite' } },
                { chance: 0.1, output: { tag: 'forge:gems/fluorite' } }
            ],
            dimensions: ['minecraft:overworld', 'twilightforest:twilight_forest'],
            weight: 5,
            fail_chance: 0.7,
            sample_background: 'minecraft:basalt',
            id: `${id_prefix}kimberlite`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:mineral_mix';
        event.custom(recipe).id(recipe.id);
    });
});
