//priority: 1000

ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    // Comment if Steam & Rails is added to the pack
    if (!Platform.isLoaded('railways')) {
        return;
    }
    console.log('Steam & Rails installed, loading recipes...')

    const track_base_exceptions = {
        'minecraft:end_stone_brick_slab': 'minecraft:end_stone_bricks',
        'quark:blossom_planks_slab': 'quark:blossom_planks',
        'quark:azalea_planks_slab': 'quark:azalea_planks',
        'quark:ancient_planks_slab': 'quark:ancient_planks',
        'minecraft:blackstone_slab': 'minecraft:blackstone',
        'minecraft:glass_pane': 'minecraft:glass'
    };

    function full_track_base(track_base) {
        if (track_base in track_base_exceptions) {
            return track_base_exceptions[track_base];
        }
        if (track_base.endsWith('_slab')) {
            let track_base_slabless = track_base.slice(0, -5);
            let track_base_planks = track_base_slabless + '_planks';
            if (!Item.of(track_base_planks).isEmpty()) {
                return track_base_planks;
            }
        }
        return track_base;
    }

    const id_prefix = 'enigmatica:expert/railways/shaped/';

    const recipes = [
        {
            output: '16x railways:track_monorail',
            pattern: ['AAA', 'BBB', 'CCC'],
            key: {
                A: '#forge:plates/bronze',
                B: 'create:metal_bracket',
                C: 'create:metal_girder'
            },
            id: `${id_prefix}track_monorail_from_bronze`
        },
        {
            output: '32x railways:track_monorail',
            pattern: ['AAA', 'BBB', 'CCC'],
            key: {
                A: '#forge:plates/iron',
                B: 'create:metal_bracket',
                C: 'create:metal_girder'
            },
            id: `${id_prefix}track_monorail_from_iron`
        },
        {
            output: '48x railways:track_monorail',
            pattern: ['AAA', 'BBB', 'CCC'],
            key: {
                A: '#forge:plates/osmium',
                B: 'create:metal_bracket',
                C: 'create:metal_girder'
            },
            id: `${id_prefix}track_monorail_from_osmium`
        },
        {
            output: 'railways:smokestack_caboosestyle',
            pattern: ['ABA', ' C '],
            key: {
                A: 'pneumaticcraft:compressed_stone_slab',
                B: 'pneumaticcraft:compressed_stone',
                C: 'minecraft:campfire'
            },
            id: 'railways:crafting/smokestack_caboosestyle'
        },
        {
            output: 'railways:smokestack_long',
            pattern: ['ACA'],
            key: {
                A: 'pneumaticcraft:compressed_stone_slab',
                C: 'minecraft:campfire'
            },
            id: 'railways:crafting/smokestack_long'
        },
        {
            output: 'railways:smokestack_coalburner',
            pattern: ['A A', 'A A', 'ACA'],
            key: {
                A: 'pneumaticcraft:compressed_stone',
                C: 'minecraft:campfire'
            },
            id: 'railways:crafting/smokestack_coalburner'
        },
        {
            output: 'railways:smokestack_oilburner',
            pattern: ['A A', 'ACA'],
            key: {
                A: 'pneumaticcraft:compressed_stone',
                C: 'minecraft:campfire'
            },
            id: 'railways:crafting/smokestack_oilburner'
        },
        {
            output: 'railways:smokestack_streamlined',
            pattern: ['ACA'],
            key: {
                A: 'pneumaticcraft:compressed_stone',
                C: 'minecraft:campfire'
            },
            id: 'railways:crafting/smokestack_streamlined'
        },
        {
            output: 'railways:smokestack_woodburner',
            pattern: ['ABA', 'BCB'],
            key: {
                A: 'pneumaticcraft:compressed_stone_slab',
                B: 'pneumaticcraft:compressed_stone',
                C: 'minecraft:campfire'
            },
            id: 'railways:crafting/smokestack_woodburner'
        },
        {
            output: 'railways:smokestack_diesel',
            pattern: ['ABA'],
            key: {
                A: 'pneumaticcraft:compressed_stone',
                B: 'create:propeller'
            },
            id: 'railways:crafting/smokestack_diesel'
        },
        {
            output: 'railways:track_coupler',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'pneumaticcraft:compressed_stone_slab',
                B: 'pneumaticcraft:logistics_core',
                C: 'create:railway_casing'
            },
            id: 'railways:crafting/track_coupler'
        },
        {
            output: '4x railways:semaphore',
            pattern: [' A ', 'BCD', ' A '],
            key: {
                A: 'pneumaticcraft:compressed_stone',
                B: '#minecraft:fences',
                C: 'create:andesite_casing',
                D: 'pneumaticcraft:logistics_core'
            },
            id: 'railways:crafting/semaphore'
        },
        {
            output: 'railways:conductor_whistle',
            pattern: ['AB', ' C'],
            key: {
                A: '#forge:ingots/bronze',
                B: '#forge:nuggets/bronze',
                C: '#forge:string'
            },
            id: 'railways:crafting/conductor_whistle'
        },
        {
            output: 'railways:track_switch_brass',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'minecraft:lever',
                B: 'create:brass_casing',
                C: 'pneumaticcraft:logistics_core'
            },
            id: 'railways:crafting/track_switch_brass'
        },
        {
            output: 'railways:track_switch_andesite',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'minecraft:lever',
                B: 'create:andesite_casing',
                C: 'pneumaticcraft:logistics_core'
            },
            id: 'railways:crafting/track_switch_andesite'
        },
        {
            output: 'railways:remote_lens',
            pattern: ['A', 'B', 'C'],
            key: {
                A: '#forge:nuggets/signalum',
                B: '#forge:plates/gold',
                C: 'ars_nouveau:scryers_crystal'
            },
            id: 'railways:crafting/remote_lens'
        },
        // "Andesite" tracks
        {
            output: 'railways:track_create_andesite_narrow x16',
            pattern: ['A', 'B', 'C'],
            pattern: ['A A', 'ACA', 'ABA'],
            key: {
                A: `#forge:rods/bronze`,
                B: 'minecraft:smooth_stone_slab',
                C: '#forge:gravel'
            },
            id: `${id_prefix}track_create_narrow_from_bronze`
        },
        {
            output: 'railways:track_create_andesite_wide x16',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: `#forge:rods/bronze`,
                B: 'minecraft:smooth_stone',
                C: '#forge:gravel'
            },
            id: `${id_prefix}track_create_wide_from_bronze`
        },
        {
            output: '48x railways:track_create_andesite_narrow',
            pattern: ['A', 'B', 'C'],
            pattern: ['A A', 'ACA', 'ABA'],
            key: {
                A: `#forge:rods/osmium`,
                B: 'minecraft:smooth_stone_slab',
                C: '#forge:gravel'
            },
            id: `${id_prefix}track_create_narrow_from_osmium`
        },
        {
            output: '48x railways:track_create_andesite_wide',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: `#forge:rods/osmium`,
                B: 'minecraft:smooth_stone',
                C: '#forge:gravel'
            },
            id: `${id_prefix}track_create_wide_from_osmium`
        },
        {
            output: '32x railways:track_create_andesite_narrow',
            pattern: ['A', 'B', 'C'],
            pattern: ['A A', 'ACA', 'ABA'],
            key: {
                A: `#forge:rods/iron`,
                B: 'minecraft:smooth_stone_slab',
                C: '#forge:gravel'
            },
            id: `${id_prefix}track_create_narrow_from_iron`
        },
        {
            output: '32x railways:track_create_andesite_wide',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: `#forge:rods/iron`,
                B: 'minecraft:smooth_stone',
                C: '#forge:gravel'
            },
            id: `${id_prefix}track_create_wide_from_iron`
        }
    ];

    colors.forEach((color) => {
        recipes.push({
            output: `railways:${color}_conductor_cap`,
            pattern: ['AAA', 'ABA', 'ACA'],
            key: {
                A: 'ars_nouveau:magebloom_fiber',
                B: '#forge:ingots/silver',
                C: `#forge:dyes/${color}`
            },
            id: `${id_prefix}${color}_conductor_cap`
        });
    });

    // Convert tracks to shaped
    event.forEachRecipe({ type: 'create:sequenced_assembly' }, (r) => {
        let source_recipe = JSON.parse(r.json);
        let output = source_recipe.results[0].item;

        if (!output.includes('railways:track') || output.includes('monorail') || output.includes('_wide') || output.includes('_narrow')) {
            return;
        }
        let track_base = source_recipe.ingredient.item;
        let track_type = output.split(':')[1];
        let rails = [
            { material: 'iron', count: 32 },
            { material: 'osmium', count: 48 },
            { material: 'bronze', count: 16 }
        ];
        let gold_exceptions = ['track_warped', 'track_crimson', 'track_blackstone'];
        if (gold_exceptions.includes(track_type)) {
            rails.push({ material: 'gold', count: 32 });
        }

        rails.forEach((rail) => {
            // Standard
            recipes.push({
                output: Item.of(output).withCount(rail.count),
                pattern: ['ABA', 'ACA', 'ABA'],
                key: {
                    A: `#forge:rods/${rail.material}`,
                    B: track_base,
                    C: '#forge:gravel'
                },
                id: `${id_prefix}${track_type}_from_${rail.material}`
            });
            if (!Item.of(output+'_narrow').isEmpty()) {
                // Narrow
                recipes.push({
                    output: Item.of(output+'_narrow').withCount(rail.count),
                    pattern: ['A A', 'ACA', 'ABA'],
                    key: {
                        A: `#forge:rods/${rail.material}`,
                        B: track_base,
                        C: '#forge:gravel'
                    },
                    id: `${id_prefix}${track_type}_narrow_from_${rail.material}`
                });
            }
            if (!Item.of(output+'_wide').isEmpty()) {
                // Wide
                let track_base_full = full_track_base(track_base)
                if (Item.of(track_base_full).isEmpty() || track_base_full == track_base) {
                    console.log('Exception track base for '+track_base+' is '+track_base_full);
                    return
                }
                recipes.push({
                    output: Item.of(output+'_wide').withCount(rail.count),
                    pattern: ['ABA', 'ACA', 'ABA'],
                    key: {
                        A: `#forge:rods/${rail.material}`,
                        B: track_base_full,
                        C: '#forge:gravel'
                    },
                    id: `${id_prefix}${track_type}_wide_from_${rail.material}`
                });
            }
        });
    });

    recipes.forEach((recipe) => {
       event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
