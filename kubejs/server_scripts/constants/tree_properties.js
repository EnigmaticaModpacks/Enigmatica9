//priority: 1000

const treeProperties = [
    {
        trees: [
            {
                sapling: 'minecraft:oak_sapling',
                logs: ['minecraft:oak_log'],
                leaves: ['minecraft:oak_leaves'],
                fruits: ['minecraft:apple'],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 25, dead: 4 }
                }
            },
            {
                sapling: 'minecraft:spruce_sapling',
                logs: ['minecraft:spruce_log'],
                leaves: ['minecraft:spruce_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'minecraft:birch_sapling',
                logs: ['minecraft:birch_log'],
                leaves: ['minecraft:birch_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 25, dead: 4 }
                }
            },
            {
                sapling: 'minecraft:jungle_sapling',
                logs: ['minecraft:jungle_log'],
                leaves: ['minecraft:jungle_leaves', 'minecraft:vine'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'industrialforegoing:latex',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'minecraft:acacia_sapling',
                logs: ['minecraft:acacia_log'],
                leaves: ['minecraft:acacia_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'industrialforegoing:latex',
                    rate: { living: 75, dead: 8 }
                }
            },
            {
                sapling: 'minecraft:dark_oak_sapling',
                logs: ['minecraft:dark_oak_log'],
                leaves: ['minecraft:dark_oak_leaves'],
                fruits: ['minecraft:apple'],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'minecraft:mangrove_propagule',
                logs: ['minecraft:mangrove_log', 'minecraft:mangrove_roots'],
                leaves: ['minecraft:mangrove_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'minecraft:azalea',
                logs: ['quark:azalea_log'],
                leaves: ['minecraft:azalea_leaves', 'minecraft:flowering_azalea_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'minecraft:flowering_azalea',
                logs: ['quark:azalea_log'],
                leaves: ['minecraft:flowering_azalea_leaves', 'minecraft:azalea_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'quark:blue_blossom_sapling',
                logs: ['quark:blossom_log'],
                leaves: ['quark:blue_blossom_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'quark:lavender_blossom_sapling',
                logs: ['quark:blossom_log'],
                leaves: ['quark:lavender_blossom_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'quark:orange_blossom_sapling',
                logs: ['quark:blossom_log'],
                leaves: ['quark:orange_blossom_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'quark:pink_blossom_sapling',
                logs: ['quark:blossom_log'],
                leaves: ['quark:pink_blossom_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'quark:yellow_blossom_sapling',
                logs: ['quark:blossom_log'],
                leaves: ['quark:yellow_blossom_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'quark:red_blossom_sapling',
                logs: ['quark:blossom_log'],
                leaves: ['quark:red_blossom_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'hexerei:mahogany_sapling',
                logs: ['hexerei:mahogany_log'],
                leaves: ['hexerei:mahogany_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'hexerei:willow_sapling',
                logs: ['hexerei:willow_log'],
                leaves: ['hexerei:willow_leaves', 'hexerei:willow_vines'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'occultism:otherworld_sapling',
                logs: ['occultism:otherworld_log'],
                leaves: ['occultism:otherworld_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'blue_skies:maple_sapling',
                logs: ['blue_skies:maple_log'],
                leaves: ['blue_skies:maple_leaves'],
                fruits: [],
                dimension: 'everdawn',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'blue_skies:dusk_sapling',
                logs: ['blue_skies:dusk_log'],
                leaves: ['blue_skies:dusk_leaves'],
                fruits: [],
                dimension: 'everdawn',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'blue_skies:lunar_sapling',
                logs: ['blue_skies:lunar_log'],
                leaves: ['blue_skies:lunar_leaves'],
                fruits: [],
                dimension: 'everdawn',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'blue_skies:crescent_fruit_sapling',
                logs: ['blue_skies:dusk_log'],
                leaves: ['blue_skies:crescent_fruit_leaves'],
                fruits: ['blue_skies:crescent_fruit'],
                dimension: 'everdawn',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'blue_skies:bluebright_sapling',
                logs: ['blue_skies:bluebright_log'],
                leaves: ['blue_skies:bluebright_leaves'],
                fruits: [],
                dimension: 'everbright',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'blue_skies:starlit_sapling',
                logs: ['blue_skies:starlit_log'],
                leaves: ['blue_skies:starlit_leaves'],
                fruits: [],
                dimension: 'everbright',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'blue_skies:frostbright_sapling',
                logs: ['blue_skies:frostbright_log'],
                leaves: ['blue_skies:frostbright_leaves'],
                fruits: [],
                dimension: 'everbright',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'blue_skies:cherry_sapling',
                logs: ['blue_skies:cherry_log'],
                leaves: ['blue_skies:cherry_leaves'],
                fruits: ['blue_skies:cherry'],
                dimension: 'everbright',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'ars_elemental:yellow_archwood_sapling',
                logs: ['ars_elemental:yellow_archwood_log'],
                leaves: ['ars_elemental:yellow_archwood_leaves'],
                fruits: ['ars_elemental:flashpine_pod'],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'ars_nouveau:blue_archwood_sapling',
                logs: ['ars_nouveau:blue_archwood_log'],
                leaves: ['ars_nouveau:blue_archwood_leaves'],
                fruits: ['ars_nouveau:frostaya_pod'],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'ars_nouveau:purple_archwood_sapling',
                logs: ['ars_nouveau:purple_archwood_log'],
                leaves: ['ars_nouveau:purple_archwood_leaves'],
                fruits: ['ars_nouveau:bastion_pod'],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'ars_nouveau:green_archwood_sapling',
                logs: ['ars_nouveau:green_archwood_log'],
                leaves: ['ars_nouveau:green_archwood_leaves'],
                fruits: ['ars_nouveau:mendosteen_pod'],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'ars_nouveau:red_archwood_sapling',
                logs: ['ars_nouveau:red_archwood_log'],
                leaves: ['ars_nouveau:red_archwood_leaves'],
                fruits: ['ars_nouveau:bombegranate_pod'],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'twilightforest:twilight_oak_sapling',
                logs: ['twilightforest:twilight_oak_log', 'twilightforest:root', 'twilightforest:liveroot_block'],
                leaves: ['twilightforest:twilight_oak_leaves'],
                fruits: [],
                dimension: 'twilightforest',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'twilightforest:canopy_sapling',
                logs: ['twilightforest:canopy_log', 'twilightforest:root', 'twilightforest:liveroot_block'],
                leaves: ['twilightforest:canopy_leaves'],
                fruits: [],
                dimension: 'twilightforest',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'twilightforest:mangrove_sapling',
                logs: [
                    'twilightforest:mangrove_log',
                    'twilightforest:mangrove_root',
                    'twilightforest:root',
                    'twilightforest:liveroot_block'
                ],
                leaves: ['twilightforest:mangrove_leaves', 'minecraft:vine'],
                fruits: [],
                dimension: 'twilightforest',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'twilightforest:darkwood_sapling',
                logs: ['twilightforest:dark_log', 'twilightforest:root', 'twilightforest:liveroot_block'],
                leaves: ['twilightforest:dark_leaves'],
                fruits: [],
                dimension: 'twilightforest',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'twilightforest:hollow_oak_sapling',
                logs: [
                    'twilightforest:twilight_oak_log',
                    'twilightforest:twilight_oak_wood',
                    'twilightforest:root',
                    'twilightforest:liveroot_block'
                ],
                leaves: ['twilightforest:twilight_oak_leaves'],
                fruits: [],
                dimension: 'twilightforest',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'twilightforest:rainbow_oak_sapling',
                logs: ['twilightforest:twilight_oak_log', 'twilightforest:root', 'twilightforest:liveroot_block'],
                leaves: ['twilightforest:rainbow_oak_leaves'],
                fruits: [],
                dimension: 'twilightforest',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'twilightforest:time_sapling',
                logs: [
                    'twilightforest:time_log',
                    'twilightforest:time_wood',
                    'twilightforest:root',
                    'twilightforest:liveroot_block'
                ],
                leaves: ['twilightforest:time_leaves'],
                fruits: [],
                dimension: 'twilightforest',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'twilightforest:transformation_sapling',
                logs: ['twilightforest:transformation_log', 'twilightforest:root', 'twilightforest:liveroot_block'],
                leaves: ['twilightforest:transformation_leaves'],
                fruits: [],
                dimension: 'twilightforest',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'twilightforest:mining_sapling',
                logs: [
                    'twilightforest:mining_log',
                    'twilightforest:mining_wood',
                    'twilightforest:root',
                    'twilightforest:liveroot_block'
                ],
                leaves: ['twilightforest:mining_leaves'],
                fruits: [],
                dimension: 'twilightforest',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'twilightforest:sorting_sapling',
                logs: ['twilightforest:sorting_log', 'twilightforest:root', 'twilightforest:liveroot_block'],
                leaves: ['twilightforest:sorting_leaves'],
                fruits: [],
                dimension: 'twilightforest',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:ether_sapling',
                logs: ['byg:ether_log'],
                leaves: ['byg:ether_leaves'],
                fruits: ['byg:ether_bulb'],
                dimension: 'end',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:ether_sapling',
                logs: ['byg:ether_log'],
                leaves: ['byg:ether_leaves'],
                fruits: ['byg:ether_bulb'],
                dimension: 'end',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:lament_sapling',
                logs: ['byg:lament_log'],
                leaves: ['byg:lament_leaves', 'minecraft:shroomlight'],
                fruits: [],
                dimension: 'nether',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:nightshade_sapling',
                logs: ['byg:nightshade_log', 'byg:imbued_nightshade_log'],
                leaves: ['byg:nightshade_leaves', 'byg:flowering_nightshade_leaves'],
                fruits: [],
                dimension: 'nether',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:withering_oak_sapling',
                logs: ['byg:withering_oak_log', 'byg:imbued_withering_oak_log'],
                leaves: ['byg:withering_oak_leaves', 'byg:arisian_bloom_branch'],
                fruits: [],
                dimension: 'nether',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:pink_cherry_sapling',
                logs: ['byg:cherry_log'],
                leaves: ['byg:pink_cherry_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:white_cherry_sapling',
                logs: ['byg:cherry_log'],
                leaves: ['byg:white_cherry_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:silver_maple_sapling',
                logs: ['byg:maple_log'],
                leaves: ['byg:silver_maple_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:red_maple_sapling',
                logs: ['byg:maple_log'],
                leaves: ['byg:red_maple_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:maple_sapling',
                logs: ['byg:maple_log'],
                leaves: ['byg:maple_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:brown_birch_sapling',
                logs: ['minecraft:birch_log'],
                leaves: ['byg:brown_birch_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:orange_birch_sapling',
                logs: ['minecraft:birch_log'],
                leaves: ['byg:orange_birch_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:red_birch_sapling',
                logs: ['minecraft:birch_log'],
                leaves: ['byg:red_birch_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:yellow_birch_sapling',
                logs: ['minecraft:birch_log'],
                leaves: ['byg:yellow_birch_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:brown_oak_sapling',
                logs: ['minecraft:oak_log'],
                leaves: ['byg:brown_oak_leaves'],
                fruits: ['minecraft:apple'],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:orange_oak_sapling',
                logs: ['minecraft:oak_log'],
                leaves: ['byg:orange_oak_leaves'],
                fruits: ['minecraft:apple'],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:red_oak_sapling',
                logs: ['minecraft:oak_log'],
                leaves: ['byg:red_oak_leaves'],
                fruits: ['minecraft:apple'],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:orchard_sapling',
                logs: ['minecraft:oak_log'],
                leaves: ['byg:orchard_leaves', 'byg:flowering_orchard_leaves', 'byg:ripe_orchard_leaves'],
                fruits: ['minecraft:apple'],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:blue_spruce_sapling',
                logs: ['minecraft:spruce_log'],
                leaves: ['byg:blue_spruce_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:orange_spruce_sapling',
                logs: ['minecraft:spruce_log'],
                leaves: ['byg:orange_spruce_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:red_spruce_sapling',
                logs: ['minecraft:spruce_log'],
                leaves: ['byg:red_spruce_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:yellow_spruce_sapling',
                logs: ['minecraft:spruce_log'],
                leaves: ['byg:yellow_spruce_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:zelkova_sapling',
                logs: ['byg:zelkova_log'],
                leaves: ['byg:zelkova_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:brown_zelkova_sapling',
                logs: ['byg:zelkova_log'],
                leaves: ['byg:brown_zelkova_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:redwood_sapling',
                logs: ['byg:redwood_log'],
                leaves: ['byg:redwood_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:pine_sapling',
                logs: ['byg:pine_log'],
                leaves: ['byg:pine_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:araucaria_sapling',
                logs: ['byg:pine_log'],
                leaves: ['byg:araucaria_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:holly_sapling',
                logs: ['byg:holly_log'],
                leaves: ['byg:holly_leaves', 'byg:holly_berry_leaves'],
                fruits: ['minecraft:sweet_berries'],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:fir_sapling',
                logs: ['byg:fir_log'],
                leaves: ['byg:fir_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:aspen_sapling',
                logs: ['byg:aspen_log'],
                leaves: ['byg:aspen_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:cika_sapling',
                logs: ['byg:cika_log'],
                leaves: ['byg:cika_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:jacaranda_sapling',
                logs: ['byg:jacaranda_log'],
                leaves: ['byg:jacaranda_leaves', 'byg:flowering_jacaranda_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:indigo_jacaranda_sapling',
                logs: ['byg:indigo_jacaranda_log'],
                leaves: ['byg:indigo_jacaranda_leaves', 'byg:flowering_indigo_jacaranda_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:baobab_sapling',
                logs: ['byg:baobab_log'],
                leaves: ['byg:baobab_leaves'],
                fruits: ['byg:baobab_fruit'],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:ebony_sapling',
                logs: ['byg:ebony_log'],
                leaves: ['byg:ebony_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:mahogany_sapling',
                logs: ['byg:mahogany_log'],
                leaves: ['byg:mahogany_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:white_mangrove_sapling',
                logs: ['byg:white_mangrove_log'],
                leaves: ['byg:white_mangrove_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:palm_sapling',
                logs: ['byg:palm_log'],
                leaves: ['byg:palm_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:palo_verde_sapling',
                logs: ['byg:palo_verde_log'],
                leaves: ['byg:palo_verde_leaves', 'byg:flowering_palo_verde_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:blue_enchanted_sapling',
                logs: ['byg:blue_enchanted_log'],
                leaves: ['byg:blue_enchanted_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:green_enchanted_sapling',
                logs: ['byg:green_enchanted_log'],
                leaves: ['byg:green_enchanted_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:rainbow_eucalyptus_sapling',
                logs: ['byg:rainbow_eucalyptus_log'],
                leaves: ['byg:rainbow_eucalyptus_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:skyris_sapling',
                logs: ['byg:skyris_log'],
                leaves: ['byg:skyris_leaves', 'byg:green_apple_skyris_leaves'],
                fruits: ['byg:green_apple'],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:willow_sapling',
                logs: ['byg:willow_log'],
                leaves: ['byg:willow_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:witch_hazel_sapling',
                logs: ['byg:witch_hazel_log'],
                leaves: ['byg:witch_hazel_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:joshua_sapling',
                logs: ['minecraft:oak_log'],
                leaves: ['byg:joshua_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            },
            {
                sapling: 'byg:cypress_sapling',
                logs: ['byg:cypress_log'],
                leaves: ['byg:cypress_leaves'],
                fruits: [],
                dimension: 'overworld',
                substrate: 'dirt',
                logProcessing: {
                    sap: 'thermal:resin',
                    rate: { living: 50, dead: 6 }
                }
            }
        ],
        shrooms: [
            {
                sapling: 'minecraft:brown_mushroom',
                stems: ['minecraft:mushroom_stem'],
                caps: ['minecraft:brown_mushroom_block'],
                dimension: 'overworld',
                substrate: 'mushroom'
            },
            {
                sapling: 'minecraft:red_mushroom',
                stems: ['minecraft:mushroom_stem'],
                caps: ['minecraft:red_mushroom_block'],
                dimension: 'overworld',
                substrate: 'mushroom'
            },
            {
                sapling: 'minecraft:crimson_fungus',
                stems: ['minecraft:crimson_stem'],
                caps: ['minecraft:nether_wart_block', 'minecraft:shroomlight'],
                dimension: 'nether',
                substrate: 'crimson_nylium'
            },
            {
                sapling: 'minecraft:warped_fungus',
                stems: ['minecraft:warped_stem'],
                caps: ['minecraft:warped_wart_block', 'minecraft:shroomlight'],
                dimension: 'nether',
                substrate: 'warped_nylium'
            }
        ]
    }
];
