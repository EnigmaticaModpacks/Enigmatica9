//priority: 1000

//Registry containing all crop-like growables.
const crop_properties = {
    cactus: {
        crop_processing: {
            growth_modifier: 1.5,
            water_modifier: 0.1,
            energy_modifier: 4.0,
            primary_chance: 2.0,
            secondary_chance: 1.1
        },
        crops: []
    },
    canes: {
        crop_processing: {
            growth_modifier: 1.0,
            water_modifier: 3.0,
            energy_modifier: 2.0,
            primary_chance: 2.0,
            secondary_chance: 1.1
        },
        crops: []
    },
    corals: {
        crop_processing: {
            growth_modifier: 2.0,
            water_modifier: 2.0,
            energy_modifier: 4.0,
            primary_chance: 2.0,
            secondary_chance: 1.1
        },
        crops: []
    },
    fiber_crops: {
        crop_processing: {
            growth_modifier: 1.0,
            water_modifier: 1.0,
            energy_modifier: 1.0,
            primary_chance: 2.0,
            secondary_chance: 1.1
        },
        crops: []
    },
    fruit_crops: {
        crop_processing: {
            growth_modifier: 1.0,
            water_modifier: 1.0,
            energy_modifier: 1.0,
            primary_chance: 2.5,
            secondary_chance: 1.1
        },
        crops: []
    },
    gourd_crops: {
        crop_processing: {
            growth_modifier: 1.5,
            water_modifier: 2.0,
            energy_modifier: 2.0,
            primary_chance: 2.0,
            secondary_chance: 1.1
        },
        crops: []
    },
    grain_crops: {
        crop_processing: {
            growth_modifier: 0.8,
            water_modifier: 1.0,
            energy_modifier: 1.0,
            primary_chance: 2.5,
            secondary_chance: 1.1
        },
        crops: []
    },
    leafy_crops: {
        crop_processing: {
            growth_modifier: 0.6,
            water_modifier: 1.0,
            energy_modifier: 1.0,
            primary_chance: 2.5,
            secondary_chance: 1.1
        },
        crops: []
    },
    legume_crops: {
        crop_processing: {
            growth_modifier: 0.7,
            water_modifier: 1.0,
            energy_modifier: 1.0,
            primary_chance: 2.0,
            secondary_chance: 1.1
        },
        crops: []
    },
    melon_crops: {
        crop_processing: {
            growth_modifier: 1.5,
            water_modifier: 2.0,
            energy_modifier: 2.0,
            primary_chance: 2.0,
            secondary_chance: 1.1
        },
        crops: []
    },
    root_crops: {
        crop_processing: {
            growth_modifier: 1.0,
            water_modifier: 1.0,
            energy_modifier: 1.0,
            primary_chance: 2.0,
            secondary_chance: 1.1
        },
        crops: []
    },
    seed_crops: {
        crop_processing: {
            growth_modifier: 1.0,
            water_modifier: 1.0,
            energy_modifier: 1.0,
            primary_chance: 2.0,
            secondary_chance: 1.1
        },
        crops: []
    },
    vine_crops: {
        crop_processing: {
            growth_modifier: 0.7,
            water_modifier: 1.0,
            energy_modifier: 1.1,
            primary_chance: 2.0,
            secondary_chance: 1.1
        },
        crops: []
    },
    grassy: {
        crop_processing: {
            growth_modifier: 0.5,
            water_modifier: 1.5,
            energy_modifier: 1.0,
            primary_chance: 3.0,
            secondary_chance: 1.1
        },
        crops: []
    },
    aquatic: {
        crop_processing: {
            growth_modifier: 1.0,
            water_modifier: 3.0,
            energy_modifier: 0.5,
            primary_chance: 2.0,
            secondary_chance: 1.1
        },
        crops: []
    },
    mushrooms: {
        crop_processing: {
            growth_modifier: 0.7,
            water_modifier: 1.5,
            energy_modifier: 1.5,
            primary_chance: 2.0,
            secondary_chance: 1.1
        },
        crops: []
    },
    shrubs: {
        crop_processing: {
            growth_modifier: 1.0,
            water_modifier: 1.0,
            energy_modifier: 1.0,
            primary_chance: 2.0,
            secondary_chance: 1.1
        },
        crops: []
    },
    vines: {
        crop_processing: {
            growth_modifier: 1.0,
            water_modifier: 1.0,
            energy_modifier: 1.0,
            primary_chance: 2.0,
            secondary_chance: 1.1
        },
        crops: []
    },
    flowers: {
        crop_processing: {
            growth_modifier: 0.5,
            water_modifier: 1.5,
            energy_modifier: 1.0,
            primary_chance: 2.0,
            secondary_chance: 1.1
        },
        crops: []
    }
};

crop_properties.cactus.crops = [
    // Minecraft
    {
        seed: 'minecraft:cactus',
        render: { type: 'stacking', block: 'minecraft:cactus' },
        plant: 'minecraft:cactus',
        substrate: 'sand'
    },
    // Byg
    {
        seed: 'byg:golden_spined_cactus',
        render: { type: 'stacking', block: 'byg:golden_spined_cactus' },
        plant: 'byg:golden_spined_cactus',
        substrate: 'sand'
    },
    {
        seed: 'byg:mini_cactus',
        render: { type: 'stacking', block: 'byg:mini_cactus' },
        plant: 'byg:mini_cactus',
        substrate: 'sand'
    },
    {
        seed: 'byg:prickly_pear_cactus',
        render: { type: 'stacking', block: 'byg:prickly_pear_cactus' },
        plant: 'byg:prickly_pear_cactus',
        substrate: 'sand'
    },
    {
        seed: 'byg:warped_cactus',
        render: { type: 'stacking', block: 'byg:warped_cactus' },
        plant: 'byg:warped_cactus',
        substrate: 'soul_sand'
    }
];

crop_properties.canes.crops = [
    // Minecraft
    {
        seed: 'minecraft:bamboo',
        render: { type: 'stacking', block: 'minecraft:bamboo' },
        plant: 'minecraft:bamboo',
        substrate: 'dirt'
    },
    {
        seed: 'minecraft:sugar_cane',
        render: { type: 'stacking', block: 'minecraft:sugar_cane' },
        plant: 'minecraft:sugar_cane',
        substrate: 'sand'
    },
    // Byg
    {
        seed: 'byg:sythian_stalk_block',
        render: { type: 'stacking', block: 'byg:sythian_stalk_block' },
        plant: 'byg:sythian_stalk_block',
        substrate: 'netherrack'
    }
];

crop_properties.corals.crops = [
    // Minecraft
    {
        seed: 'minecraft:brain_coral',
        render: { type: 'generic', block: 'minecraft:brain_coral' },
        plant: 'minecraft:brain_coral',
        substrate: 'water'
    },
    {
        seed: 'minecraft:brain_coral_block',
        render: { type: 'generic', block: 'minecraft:brain_coral_block' },
        plant: 'minecraft:brain_coral_block',
        substrate: 'water'
    },
    {
        seed: 'minecraft:brain_coral_fan',
        render: { type: 'generic', block: 'minecraft:brain_coral_fan' },
        plant: 'minecraft:brain_coral_fan',
        substrate: 'water'
    },
    {
        seed: 'minecraft:bubble_coral',
        render: { type: 'generic', block: 'minecraft:bubble_coral' },
        plant: 'minecraft:bubble_coral',
        substrate: 'water'
    },
    {
        seed: 'minecraft:bubble_coral_block',
        render: { type: 'generic', block: 'minecraft:bubble_coral_block' },
        plant: 'minecraft:bubble_coral_block',
        substrate: 'water'
    },
    {
        seed: 'minecraft:bubble_coral_fan',
        render: { type: 'generic', block: 'minecraft:bubble_coral_fan' },
        plant: 'minecraft:bubble_coral_fan',
        substrate: 'water'
    },
    {
        seed: 'minecraft:fire_coral',
        render: { type: 'generic', block: 'minecraft:fire_coral' },
        plant: 'minecraft:fire_coral',
        substrate: 'water'
    },
    {
        seed: 'minecraft:fire_coral_block',
        render: { type: 'generic', block: 'minecraft:fire_coral_block' },
        plant: 'minecraft:fire_coral_block',
        substrate: 'water'
    },
    {
        seed: 'minecraft:fire_coral_fan',
        render: { type: 'generic', block: 'minecraft:fire_coral_fan' },
        plant: 'minecraft:fire_coral_fan',
        substrate: 'water'
    },
    {
        seed: 'minecraft:horn_coral',
        render: { type: 'generic', block: 'minecraft:horn_coral' },
        plant: 'minecraft:horn_coral',
        substrate: 'water'
    },
    {
        seed: 'minecraft:horn_coral_block',
        render: { type: 'generic', block: 'minecraft:horn_coral_block' },
        plant: 'minecraft:horn_coral_block',
        substrate: 'water'
    },
    {
        seed: 'minecraft:horn_coral_fan',
        render: { type: 'generic', block: 'minecraft:horn_coral_fan' },
        plant: 'minecraft:horn_coral_fan',
        substrate: 'water'
    },
    {
        seed: 'minecraft:tube_coral',
        render: { type: 'generic', block: 'minecraft:tube_coral' },
        plant: 'minecraft:tube_coral',
        substrate: 'water'
    },
    {
        seed: 'minecraft:tube_coral_block',
        render: { type: 'generic', block: 'minecraft:tube_coral_block' },
        plant: 'minecraft:tube_coral_block',
        substrate: 'water'
    },
    {
        seed: 'minecraft:tube_coral_fan',
        render: { type: 'generic', block: 'minecraft:tube_coral_fan' },
        plant: 'minecraft:tube_coral_fan',
        substrate: 'water'
    },
    // Byg
    {
        seed: 'byg:warped_coral',
        render: { type: 'generic', block: 'byg:warped_coral' },
        plant: 'byg:warped_coral',
        substrate: 'soul_sand'
    },
    {
        seed: 'byg:warped_coral_block',
        render: { type: 'generic', block: 'byg:warped_coral_block' },
        plant: 'byg:warped_coral_block',
        substrate: 'soul_sand'
    },
    {
        seed: 'byg:warped_coral_fan',
        render: { type: 'generic', block: 'byg:warped_coral_fan' },
        plant: 'byg:warped_coral_fan',
        substrate: 'soul_sand'
    }
];

crop_properties.fiber_crops.crops = [
    // Immersive Engineering
    {
        seed: 'immersiveengineering:seed',
        render: { type: 'hemp', block: 'immersiveengineering:hemp' },
        plant: 'immersiveengineering:hemp_fiber',
        substrate: 'dirt'
    },
    // Supplementaries
    {
        seed: 'supplementaries:flax_seeds',
        render: { type: 'crop', block: 'supplementaries:flax' },
        plant: 'supplementaries:flax',
        substrate: 'dirt'
    }
    // Thermal Series
    // {
    //     seed: 'thermal:flax_seeds',
    //     render: { type: 'crop', block: 'thermal:flax' },
    //     plant: 'thermal:flax',
    //     substrate: 'dirt'
    // }
];

crop_properties.fruit_crops.crops = [
    // Minecraft
    {
        seed: 'minecraft:chorus_flower',
        render: { type: 'crop', block: 'minecraft:chorus_flower' },
        plant: 'minecraft:chorus_fruit',
        substrate: 'end_stone'
    },
    {
        seed: 'minecraft:glow_berries',
        render: { type: 'crop', block: 'minecraft:cave_vines' },
        plant: 'minecraft:glow_berries',
        substrate: 'moss'
    },
    // Occultism
    {
        seed: 'occultism:datura_seeds',
        render: { type: 'crop', block: 'occultism:datura' },
        plant: 'occultism:datura',
        substrate: 'dirt'
    },
    // Thermal Series
    {
        seed: 'thermal:strawberry_seeds',
        render: { type: 'crop', block: 'thermal:strawberry' },
        plant: 'thermal:strawberry',
        substrate: 'dirt'
    },
    {
        seed: 'thermal:coffee_seeds',
        render: { type: 'crop', block: 'thermal:coffee' },
        plant: 'thermal:coffee',
        substrate: 'dirt'
    }
];

crop_properties.gourd_crops.crops = [
    {
        seed: 'minecraft:pumpkin_seeds',
        render: { type: 'stem', block: 'minecraft:pumpkin' },
        plant: 'minecraft:pumpkin',
        substrate: 'dirt'
    }
];
crop_properties.grain_crops.crops = [
    // Minecraft
    {
        seed: 'minecraft:wheat_seeds',
        render: { type: 'crop', block: 'minecraft:wheat' },
        plant: 'minecraft:wheat',
        substrate: 'dirt'
    },
    // Farmer's Delight
    {
        seed: 'farmersdelight:rice',
        render: { type: 'crop', block: 'farmersdelight:rice_upper_crop' },
        plant: 'farmersdelight:rice_panicle',
        substrate: 'water'
    },
    // Blue Skies
    {
        seed: 'blue_skies:pine_fruit_seeds',
        render: { type: 'crop', block: 'blue_skies:pine_fruits' },
        plant: 'blue_skies:pine_fruit',
        substrate: 'dirt'
    },
    {
        seed: 'blue_skies:scalefruit_seeds',
        render: { type: 'crop', block: 'blue_skies:scalefruits' },
        plant: 'blue_skies:scalefruit',
        substrate: 'dirt'
    },
    // Thermal Series
    {
        seed: 'thermal:amaranth_seeds',
        render: { type: 'crop', block: 'thermal:amaranth' },
        plant: 'thermal:amaranth',
        substrate: 'dirt'
    },
    {
        seed: 'thermal:barley_seeds',
        render: { type: 'crop', block: 'thermal:barley' },
        plant: 'thermal:barley',
        substrate: 'dirt'
    },
    {
        seed: 'thermal:corn_seeds',
        render: { type: 'crop', block: 'thermal:corn' },
        plant: 'thermal:corn',
        substrate: 'dirt'
    }
    // {
    //     seed: 'thermal:rice_seeds',
    //     render: { type: 'crop', block: 'thermal:rice' },
    //     plant: 'thermal:rice',
    //     substrate: 'dirt'
    // }
];
crop_properties.leafy_crops.crops = [
    // Farmer's Delight
    {
        seed: 'farmersdelight:cabbage_seeds',
        render: { type: 'crop', block: 'farmersdelight:cabbages' },
        plant: 'farmersdelight:cabbage',
        substrate: 'dirt'
    },
    // Blue Skies
    {
        seed: 'blue_skies:winter_leaf_seeds',
        render: { type: 'crop', block: 'blue_skies:winter_leaves' },
        plant: 'blue_skies:winter_leaves',
        substrate: 'dirt'
    },
    // Thermal Series
    {
        seed: 'thermal:spinach_seeds',
        render: { type: 'crop', block: 'thermal:spinach' },
        plant: 'thermal:spinach',
        substrate: 'dirt'
    },
    {
        seed: 'thermal:tea_seeds',
        render: { type: 'crop', block: 'thermal:tea' },
        plant: 'thermal:tea',
        substrate: 'dirt'
    },
    // Hexerei
    {
        seed: 'hexerei:sage_seed',
        render: { type: 'generic', block: 'hexerei:sage_crop' },
        plant: 'hexerei:sage',
        substrate: 'dirt'
    },
    {
        seed: 'hexerei:belladonna_flowers',
        render: { type: 'generic', block: 'hexerei:belladonna_flower' },
        plant: 'hexerei:belladonna_berries',
        substrate: 'dirt'
    },
    {
        seed: 'hexerei:mandrake_flowers',
        render: { type: 'generic', block: 'hexerei:mandrake_flower' },
        plant: 'hexerei:mandrake_root',
        substrate: 'dirt'
    },
    {
        seed: 'hexerei:mugwort_flowers',
        render: { type: 'generic', block: 'hexerei:mugwort_bush' },
        plant: 'hexerei:mugwort_leaves',
        substrate: 'dirt'
    },
    {
        seed: 'hexerei:yellow_dock_flowers',
        render: { type: 'generic', block: 'hexerei:yellow_dock_bush' },
        plant: 'hexerei:yellow_dock_leaves',
        substrate: 'dirt'
    }
];
crop_properties.legume_crops.crops = [
    // Blue Skies
    {
        seed: 'blue_skies:fiery_bean_seeds',
        render: { type: 'crop', block: 'blue_skies:fiery_beans' },
        plant: 'blue_skies:fiery_beans',
        substrate: 'dirt'
    },
    // Thermal Series
    {
        seed: 'thermal:green_bean_seeds',
        render: { type: 'crop', block: 'thermal:green_bean' },
        plant: 'thermal:green_bean',
        substrate: 'dirt'
    }
];
crop_properties.melon_crops.crops = [
    // Minecraft
    {
        seed: 'minecraft:melon_seeds',
        render: { type: 'stem', block: 'minecraft:melon' },
        plant: 'minecraft:melon',
        substrate: 'dirt'
    },
    // Thermal Series
    {
        seed: 'thermal:frost_melon_seeds',
        render: { type: 'stem', block: 'thermal:frost_melon' },
        plant: 'thermal:frost_melon',
        substrate: 'dirt'
    }
];
crop_properties.root_crops.crops = [
    // Minecraft
    {
        seed: 'minecraft:beetroot_seeds',
        render: { type: 'crop', block: 'minecraft:beetroots' },
        plant: 'minecraft:beetroot',
        substrate: 'dirt'
    },
    {
        seed: 'minecraft:carrot',
        render: { type: 'crop', block: 'minecraft:carrots' },
        plant: 'minecraft:carrot',
        substrate: 'dirt'
    },
    {
        seed: 'minecraft:potato',
        render: { type: 'crop', block: 'minecraft:potatoes' },
        plant: 'minecraft:potato',
        substrate: 'dirt'
    },
    // Farmer's Delight
    {
        seed: 'farmersdelight:onion',
        render: { type: 'crop', block: 'farmersdelight:onions' },
        plant: 'farmersdelight:onion',
        substrate: 'dirt'
    },
    // Thermal Series
    {
        seed: 'thermal:peanut_seeds',
        render: { type: 'crop', block: 'thermal:peanut' },
        plant: 'thermal:peanut',
        substrate: 'dirt'
    },
    // {
    //     seed: 'thermal:onion_seeds',
    //     render: { type: 'crop', block: 'thermal:onion' },
    //     plant: 'thermal:onion',
    //     substrate: 'dirt'
    // },
    {
        seed: 'thermal:radish_seeds',
        render: { type: 'crop', block: 'thermal:radish' },
        plant: 'thermal:radish',
        substrate: 'dirt'
    },
    {
        seed: 'thermal:sadiroot_seeds',
        render: { type: 'crop', block: 'thermal:sadiroot' },
        plant: 'thermal:sadiroot',
        substrate: 'dirt'
    },
    // Blue Skies
    {
        seed: 'blue_skies:solnut',
        render: { type: 'crop', block: 'blue_skies:solnuts' },
        plant: 'blue_skies:solnut',
        substrate: 'dirt'
    }
];
crop_properties.seed_crops.crops = [];
crop_properties.vine_crops.crops = [
    // Farmer's Delight
    {
        seed: 'farmersdelight:tomato_seeds',
        render: { type: 'crop', block: 'farmersdelight:tomatoes' },
        plant: 'farmersdelight:tomato',
        substrate: 'dirt'
    },
    // Thermal Series
    // {
    //     seed: 'thermal:tomato_seeds',
    //     render: { type: 'crop', block: 'thermal:tomato' },
    //     plant: 'thermal:tomato',
    //     substrate: 'dirt'
    // },
    {
        seed: 'thermal:bell_pepper_seeds',
        render: { type: 'crop', block: 'thermal:bell_pepper' },
        plant: 'thermal:bell_pepper',
        substrate: 'dirt'
    },
    {
        seed: 'thermal:eggplant_seeds',
        render: { type: 'crop', block: 'thermal:eggplant' },
        plant: 'thermal:eggplant',
        substrate: 'dirt'
    }
];
crop_properties.grassy.crops = [
    // Minecraft
    {
        seed: 'minecraft:crimson_roots',
        render: { type: 'generic', block: 'minecraft:crimson_roots' },
        plant: 'minecraft:crimson_roots',
        substrate: 'nether_mushroom'
    },
    {
        seed: 'minecraft:fern',
        render: { type: 'generic', block: 'minecraft:fern' },
        plant: 'minecraft:fern',
        substrate: 'grass'
    },
    {
        seed: 'minecraft:grass',
        render: { type: 'generic', block: 'minecraft:grass' },
        plant: 'minecraft:grass',
        substrate: 'grass'
    },
    {
        seed: 'minecraft:nether_sprouts',
        render: { type: 'generic', block: 'minecraft:nether_sprouts' },
        plant: 'minecraft:nether_sprouts',
        substrate: 'nether_mushroom'
    },
    {
        seed: 'minecraft:seagrass',
        render: { type: 'generic', block: 'minecraft:seagrass' },
        plant: 'minecraft:seagrass',
        substrate: 'water'
    },
    {
        seed: 'minecraft:warped_roots',
        render: { type: 'generic', block: 'minecraft:warped_roots' },
        plant: 'minecraft:warped_roots',
        substrate: 'nether_mushroom'
    },

    // Byg
    {
        seed: 'byg:beach_grass',
        render: { type: 'generic', block: 'byg:beach_grass' },
        plant: 'byg:beach_grass',
        substrate: 'grass'
    },
    {
        seed: 'byg:embur_roots',
        render: { type: 'generic', block: 'byg:embur_roots' },
        plant: 'byg:embur_roots',
        substrate: 'nether_mushroom'
    },
    {
        seed: 'byg:ether_foliage',
        render: { type: 'generic', block: 'byg:ether_foliage' },
        plant: 'byg:ether_foliage',
        substrate: 'end_mushroom'
    },
    {
        seed: 'byg:ether_grass',
        render: { type: 'generic', block: 'byg:ether_grass' },
        plant: 'byg:ether_grass',
        substrate: 'end_mushroom'
    },
    {
        seed: 'byg:tall_ether_grass',
        render: { type: 'generic', block: 'byg:tall_ether_grass' },
        plant: 'byg:tall_ether_grass',
        substrate: 'end_mushroom'
    },
    {
        seed: 'byg:ether_bush',
        render: { type: 'generic', block: 'byg:ether_bush' },
        plant: 'byg:ether_bush',
        substrate: 'end_mushroom'
    },
    {
        seed: 'byg:imparius_bush',
        render: { type: 'generic', block: 'byg:imparius_bush' },
        plant: 'byg:imparius_bush',
        substrate: 'end_mushroom'
    },
    {
        seed: 'byg:bulbis_sprouts',
        render: { type: 'generic', block: 'byg:bulbis_sprouts' },
        plant: 'byg:bulbis_sprouts',
        substrate: 'end_mushroom'
    },
    {
        seed: 'byg:flower_patch',
        render: { type: 'generic', block: 'byg:flower_patch' },
        plant: 'byg:flower_patch',
        substrate: 'dirt'
    },
    {
        seed: 'byg:ivis_roots',
        render: { type: 'generic', block: 'byg:ivis_roots' },
        plant: 'byg:ivis_roots',
        substrate: 'end_mushroom'
    },
    {
        seed: 'byg:ivis_sprout',
        render: { type: 'generic', block: 'byg:ivis_sprout' },
        plant: 'byg:ivis_sprout',
        substrate: 'nether_mushroom'
    },
    {
        seed: 'byg:lament_sprouts',
        render: { type: 'generic', block: 'byg:lament_sprouts' },
        plant: 'byg:lament_sprouts',
        substrate: 'nether_mushroom'
    },
    {
        seed: 'byg:leaf_pile',
        render: { type: 'generic', block: 'byg:leaf_pile' },
        plant: 'byg:leaf_pile',
        substrate: 'dirt'
    },
    {
        seed: 'byg:nightshade_roots',
        render: { type: 'generic', block: 'byg:nightshade_roots' },
        plant: 'byg:nightshade_roots',
        substrate: 'nether_mushroom'
    },
    {
        seed: 'byg:nightshade_sprouts',
        render: { type: 'generic', block: 'byg:nightshade_sprouts' },
        plant: 'byg:nightshade_sprouts',
        substrate: 'nether_mushroom'
    },
    {
        seed: 'byg:pink_cherry_foliage',
        render: { type: 'generic', block: 'byg:pink_cherry_foliage' },
        plant: 'byg:pink_cherry_foliage',
        substrate: 'dirt'
    },
    {
        seed: 'byg:poison_ivy',
        render: { type: 'generic', block: 'byg:poison_ivy' },
        plant: 'byg:poison_ivy',
        substrate: 'dirt'
    },
    {
        seed: 'byg:prairie_grass',
        render: { type: 'generic', block: 'byg:prairie_grass' },
        plant: 'byg:prairie_grass',
        substrate: 'grass'
    },
    {
        seed: 'byg:scorched_grass',
        render: { type: 'generic', block: 'byg:scorched_grass' },
        plant: 'byg:scorched_grass',
        substrate: 'netherrack'
    },
    {
        seed: 'byg:shulkren_moss_blanket',
        render: { type: 'generic', block: 'byg:shulkren_moss_blanket' },
        plant: 'byg:shulkren_moss_blanket',
        substrate: 'end_stone'
    },
    {
        seed: 'byg:sythian_roots',
        render: { type: 'generic', block: 'byg:sythian_roots' },
        plant: 'byg:sythian_roots',
        substrate: 'nether_mushroom'
    },
    {
        seed: 'byg:sythian_sprout',
        render: { type: 'generic', block: 'byg:sythian_sprout' },
        plant: 'byg:sythian_sprout',
        substrate: 'nether_mushroom'
    },
    {
        seed: 'byg:vermilion_sculk_growth',
        render: { type: 'generic', block: 'byg:vermilion_sculk_growth' },
        plant: 'byg:vermilion_sculk_growth',
        substrate: 'end_stone'
    },
    {
        seed: 'byg:vermilion_sculk_tendrils',
        render: { type: 'generic', block: 'byg:vermilion_sculk_tendrils' },
        plant: 'byg:vermilion_sculk_tendrils',
        substrate: 'end_stone'
    },
    {
        seed: 'byg:warped_bush',
        render: { type: 'generic', block: 'byg:warped_bush' },
        plant: 'byg:warped_bush',
        substrate: 'soul_sand'
    },
    {
        seed: 'byg:white_cherry_foliage',
        render: { type: 'generic', block: 'byg:white_cherry_foliage' },
        plant: 'byg:white_cherry_foliage',
        substrate: 'dirt'
    },
    {
        seed: 'byg:cattail_sprout',
        render: { type: 'generic', block: 'byg:cattail' },
        plant: 'byg:cattail_sprout',
        substrate: 'water'
    },

    // Twilight Forest
    {
        seed: 'twilightforest:fallen_leaves',
        render: { type: 'generic', block: 'twilightforest:fallen_leaves' },
        plant: 'twilightforest:fallen_leaves',
        substrate: 'grass'
    },
    {
        seed: 'twilightforest:fiddlehead',
        render: { type: 'generic', block: 'twilightforest:fiddlehead' },
        plant: 'twilightforest:fiddlehead',
        substrate: 'grass'
    },
    {
        seed: 'twilightforest:clover_patch',
        render: { type: 'generic', block: 'twilightforest:clover_patch' },
        plant: 'twilightforest:clover_patch',
        substrate: 'grass'
    },
    {
        seed: 'twilightforest:mayapple',
        render: { type: 'generic', block: 'twilightforest:mayapple' },
        plant: 'twilightforest:mayapple',
        substrate: 'grass'
    },
    {
        seed: 'twilightforest:moss_patch',
        render: { type: 'generic', block: 'twilightforest:moss_patch' },
        plant: 'twilightforest:moss_patch',
        substrate: 'grass'
    },

    // Blue Skies
    {
        seed: 'blue_skies:crystallized_grass',
        render: { type: 'generic', block: 'blue_skies:crystallized_grass' },
        plant: 'blue_skies:crystallized_grass',
        substrate: 'grass'
    },
    {
        seed: 'blue_skies:glimmer_reed',
        render: { type: 'generic', block: 'blue_skies:glimmer_reed' },
        plant: 'blue_skies:glimmer_reed',
        substrate: 'grass'
    },
    {
        seed: 'blue_skies:cherry_grass',
        render: { type: 'generic', block: 'blue_skies:cherry_grass' },
        plant: 'blue_skies:cherry_grass',
        substrate: 'grass'
    },
    {
        seed: 'blue_skies:lunar_grass',
        render: { type: 'generic', block: 'blue_skies:lunar_grass' },
        plant: 'blue_skies:lunar_grass',
        substrate: 'grass'
    },
    {
        seed: 'blue_skies:turquoise_grass',
        render: { type: 'generic', block: 'blue_skies:turquoise_grass' },
        plant: 'blue_skies:turquoise_grass',
        substrate: 'grass'
    }
];
crop_properties.aquatic.crops = [
    // Minecraft
    {
        seed: 'minecraft:lily_pad',
        render: { type: 'generic', block: 'minecraft:lily_pad' },
        plant: 'minecraft:lily_pad',
        substrate: 'water'
    },
    {
        seed: 'minecraft:sea_pickle',
        render: { type: 'generic', block: 'minecraft:sea_pickle' },
        plant: 'minecraft:sea_pickle',
        substrate: 'water'
    },
    {
        seed: 'minecraft:kelp',
        render: { type: 'generic', block: 'minecraft:kelp_plant' },
        plant: 'minecraft:kelp',
        substrate: 'water'
    },
    {
        seed: 'minecraft:big_dripleaf',
        render: { type: 'generic', block: 'minecraft:big_dripleaf' },
        plant: 'minecraft:big_dripleaf',
        substrate: 'water'
    },
    {
        seed: 'minecraft:small_dripleaf',
        render: { type: 'generic', block: 'minecraft:small_dripleaf' },
        plant: 'minecraft:small_dripleaf',
        substrate: 'water'
    },
    // Byg
    {
        seed: 'byg:tiny_lilypads',
        render: { type: 'generic', block: 'byg:tiny_lilypads' },
        plant: 'byg:tiny_lilypads',
        substrate: 'water'
    },
    {
        seed: 'byg:flowering_tiny_lily_pads',
        render: { type: 'generic', block: 'byg:flowering_tiny_lily_pads' },
        plant: 'byg:flowering_tiny_lily_pads',
        substrate: 'water'
    },
    {
        seed: 'byg:water_silk',
        render: { type: 'generic', block: 'byg:water_silk' },
        plant: 'byg:water_silk',
        substrate: 'water'
    },
    // Twilight Forest
    {
        seed: 'twilightforest:huge_lily_pad',
        render: { type: 'generic', block: 'twilightforest:huge_lily_pad' },
        plant: 'twilightforest:huge_lily_pad',
        substrate: 'water'
    },
    {
        seed: 'twilightforest:huge_water_lily',
        render: { type: 'generic', block: 'twilightforest:huge_water_lily' },
        plant: 'twilightforest:huge_water_lily',
        substrate: 'water'
    },
    // Blue Skies
    {
        seed: 'blue_skies:chilled_lily_pad',
        render: { type: 'generic', block: 'blue_skies:chilled_lily_pad' },
        plant: 'blue_skies:chilled_lily_pad',
        substrate: 'water'
    },
    {
        seed: 'blue_skies:moonlit_water_lily',
        render: { type: 'generic', block: 'blue_skies:moonlit_water_lily' },
        plant: 'blue_skies:moonlit_water_lily',
        substrate: 'water'
    },
    {
        seed: 'blue_skies:brumble',
        render: { type: 'generic', block: 'blue_skies:brumble' },
        plant: 'blue_skies:brumble',
        substrate: 'water'
    },
    {
        seed: 'blue_skies:brumble_vine_top',
        render: { type: 'generic', block: 'blue_skies:brumble_vine_top' },
        plant: 'blue_skies:brumble_vine_top',
        substrate: 'water'
    },
    // Hexerei
    {
        seed: 'hexerei:flowering_lily_pad',
        render: { type: 'generic', block: 'hexerei:flowering_lily_pad' },
        plant: 'hexerei:flowering_lily_pad',
        substrate: 'water'
    }
];
crop_properties.mushrooms.crops = [
    // Minecraft
    {
        seed: 'minecraft:red_mushroom',
        render: { type: 'generic', block: 'minecraft:red_mushroom' },
        plant: 'minecraft:red_mushroom',
        substrate: 'mushroom'
    },
    {
        seed: 'minecraft:brown_mushroom',
        render: { type: 'generic', block: 'minecraft:brown_mushroom' },
        plant: 'minecraft:brown_mushroom',
        substrate: 'mushroom'
    },
    {
        seed: 'minecraft:crimson_fungus',
        render: { type: 'generic', block: 'minecraft:crimson_fungus' },
        plant: 'minecraft:crimson_fungus',
        substrate: 'nether_mushroom'
    },
    {
        seed: 'minecraft:warped_fungus',
        render: { type: 'generic', block: 'minecraft:warped_fungus' },
        plant: 'minecraft:warped_fungus',
        substrate: 'nether_mushroom'
    },
    {
        seed: 'minecraft:nether_wart',
        render: { type: 'generic', block: 'minecraft:nether_wart' },
        plant: 'minecraft:nether_wart',
        substrate: 'soul_sand'
    },
    // Byg
    {
        seed: 'byg:wood_blewit',
        render: { type: 'generic', block: 'byg:wood_blewit' },
        plant: 'byg:wood_blewit',
        substrate: 'mushroom'
    },
    {
        seed: 'byg:weeping_milkcap',
        render: { type: 'generic', block: 'byg:weeping_milkcap' },
        plant: 'byg:weeping_milkcap',
        substrate: 'mushroom'
    },
    {
        seed: 'byg:green_mushroom',
        render: { type: 'generic', block: 'byg:green_mushroom' },
        plant: 'byg:green_mushroom',
        substrate: 'mushroom'
    },
    {
        seed: 'byg:shulkren_fungus',
        render: { type: 'generic', block: 'byg:shulkren_fungus' },
        plant: 'byg:shulkren_fungus',
        substrate: 'end_mushroom'
    },
    {
        seed: 'byg:death_cap',
        render: { type: 'generic', block: 'byg:death_cap' },
        plant: 'byg:death_cap',
        substrate: 'nether_mushroom'
    },
    {
        seed: 'byg:soul_shroom',
        render: { type: 'generic', block: 'byg:soul_shroom' },
        plant: 'byg:soul_shroom',
        substrate: 'nether_mushroom'
    },
    {
        seed: 'byg:embur_wart',
        render: { type: 'generic', block: 'byg:embur_wart' },
        plant: 'byg:embur_wart',
        substrate: 'nether_mushroom'
    },
    {
        seed: 'byg:sythian_fungus',
        render: { type: 'generic', block: 'byg:sythian_fungus' },
        plant: 'byg:sythian_fungus',
        substrate: 'nether_mushroom'
    },
    {
        seed: 'byg:imparius_mushroom',
        render: { type: 'generic', block: 'byg:imparius_mushroom' },
        plant: 'byg:imparius_mushroom',
        substrate: 'end_mushroom'
    },
    {
        seed: 'byg:fungal_imparius',
        render: { type: 'generic', block: 'byg:fungal_imparius' },
        plant: 'byg:fungal_imparius',
        substrate: 'end_mushroom'
    },
    {
        seed: 'byg:bulbis_oddity',
        render: { type: 'generic', block: 'byg:bulbis_oddity' },
        plant: 'byg:bulbis_oddity',
        substrate: 'end_mushroom'
    },
    {
        seed: 'byg:purple_bulbis_oddity',
        render: { type: 'generic', block: 'byg:purple_bulbis_oddity' },
        plant: 'byg:purple_bulbis_oddity',
        substrate: 'end_mushroom'
    },
    // Quark
    {
        seed: 'quark:glow_shroom',
        render: { type: 'generic', block: 'quark:glow_shroom' },
        plant: 'quark:glow_shroom',
        substrate: 'mushroom'
    },
    // Twilight Forest
    {
        seed: 'twilightforest:mushgloom',
        render: { type: 'generic', block: 'twilightforest:mushgloom' },
        plant: 'twilightforest:mushgloom',
        substrate: 'mushroom'
    },
    // Blue Skies
    {
        seed: 'blue_skies:snowcap_mushroom',
        render: { type: 'generic', block: 'blue_skies:snowcap_mushroom' },
        plant: 'blue_skies:snowcap_mushroom',
        substrate: 'mushroom'
    },
    {
        seed: 'blue_skies:snowcap_pinhead',
        render: { type: 'generic', block: 'blue_skies:snowcap_pinhead' },
        plant: 'blue_skies:snowcap_pinhead',
        substrate: 'mushroom'
    },
    // Thermal Series
    {
        seed: 'thermal:redstone_mushroom_spores',
        render: { type: 'crop', block: 'thermal:redstone_mushroom' },
        plant: 'thermal:redstone_mushroom_spores',
        substrate: 'mushroom'
    },
    {
        seed: 'thermal:glowstone_mushroom_spores',
        render: { type: 'crop', block: 'thermal:glowstone_mushroom' },
        plant: 'thermal:glowstone_mushroom_spores',
        substrate: 'mushroom'
    },
    {
        seed: 'thermal:gunpowder_mushroom_spores',
        render: { type: 'crop', block: 'thermal:gunpowder_mushroom' },
        plant: 'thermal:gunpowder_mushroom_spores',
        substrate: 'mushroom'
    },
    {
        seed: 'thermal:slime_mushroom_spores',
        render: { type: 'crop', block: 'thermal:slime_mushroom' },
        plant: 'thermal:slime_mushroom_spores',
        substrate: 'mushroom'
    }
    // Botania
    // {
    //     seed: 'botania:black_mushroom',
    //     render: { type: 'generic', block: 'botania:black_mushroom' },
    //     plant: 'botania:black_mushroom',
    //     substrate: 'mushroom'
    // },
    // {
    //     seed: 'botania:blue_mushroom',
    //     render: { type: 'generic', block: 'botania:blue_mushroom' },
    //     plant: 'botania:blue_mushroom',
    //     substrate: 'mushroom'
    // },
    // {
    //     seed: 'botania:brown_mushroom',
    //     render: { type: 'generic', block: 'botania:brown_mushroom' },
    //     plant: 'botania:brown_mushroom',
    //     substrate: 'mushroom'
    // },
    // {
    //     seed: 'botania:cyan_mushroom',
    //     render: { type: 'generic', block: 'botania:cyan_mushroom' },
    //     plant: 'botania:cyan_mushroom',
    //     substrate: 'mushroom'
    // },
    // {
    //     seed: 'botania:gray_mushroom',
    //     render: { type: 'generic', block: 'botania:gray_mushroom' },
    //     plant: 'botania:gray_mushroom',
    //     substrate: 'mushroom'
    // },
    // {
    //     seed: 'botania:green_mushroom',
    //     render: { type: 'generic', block: 'botania:green_mushroom' },
    //     plant: 'botania:green_mushroom',
    //     substrate: 'mushroom'
    // },
    // {
    //     seed: 'botania:light_blue_mushroom',
    //     render: { type: 'generic', block: 'botania:light_blue_mushroom' },
    //     plant: 'botania:light_blue_mushroom',
    //     substrate: 'mushroom'
    // },
    // {
    //     seed: 'botania:light_gray_mushroom',
    //     render: { type: 'generic', block: 'botania:light_gray_mushroom' },
    //     plant: 'botania:light_gray_mushroom',
    //     substrate: 'mushroom'
    // },
    // {
    //     seed: 'botania:lime_mushroom',
    //     render: { type: 'generic', block: 'botania:lime_mushroom' },
    //     plant: 'botania:lime_mushroom',
    //     substrate: 'mushroom'
    // },
    // {
    //     seed: 'botania:magenta_mushroom',
    //     render: { type: 'generic', block: 'botania:magenta_mushroom' },
    //     plant: 'botania:magenta_mushroom',
    //     substrate: 'mushroom'
    // },
    // {
    //     seed: 'botania:orange_mushroom',
    //     render: { type: 'generic', block: 'botania:orange_mushroom' },
    //     plant: 'botania:orange_mushroom',
    //     substrate: 'mushroom'
    // },
    // {
    //     seed: 'botania:pink_mushroom',
    //     render: { type: 'generic', block: 'botania:pink_mushroom' },
    //     plant: 'botania:pink_mushroom',
    //     substrate: 'mushroom'
    // },
    // {
    //     seed: 'botania:purple_mushroom',
    //     render: { type: 'generic', block: 'botania:purple_mushroom' },
    //     plant: 'botania:purple_mushroom',
    //     substrate: 'mushroom'
    // },
    // {
    //     seed: 'botania:red_mushroom',
    //     render: { type: 'generic', block: 'botania:red_mushroom' },
    //     plant: 'botania:red_mushroom',
    //     substrate: 'mushroom'
    // },
    // {
    //     seed: 'botania:white_mushroom',
    //     render: { type: 'generic', block: 'botania:white_mushroom' },
    //     plant: 'botania:white_mushroom',
    //     substrate: 'mushroom'
    // },
    // {
    //     seed: 'botania:yellow_mushroom',
    //     render: { type: 'generic', block: 'botania:yellow_mushroom' },
    //     plant: 'botania:yellow_mushroom',
    //     substrate: 'mushroom'
    // }
];
crop_properties.shrubs.crops = [
    // Minecraft
    {
        seed: 'minecraft:sweet_berries',
        render: { type: 'generic', block: 'minecraft:sweet_berry_bush' },
        plant: 'minecraft:sweet_berries',
        substrate: 'dirt'
    },
    // Byg
    {
        seed: 'byg:blueberries',
        render: { type: 'generic', block: 'byg:blueberry_bush' },
        plant: 'byg:blueberries',
        substrate: 'dirt'
    },
    {
        seed: 'byg:oddity_bush',
        render: { type: 'generic', block: 'byg:oddity_bush' },
        plant: 'byg:oddity_bush',
        substrate: 'end_mushroom'
    }
];
crop_properties.vines.crops = [
    // Minecraft
    {
        seed: 'minecraft:twisting_vines',
        render: { type: 'generic', block: 'minecraft:twisting_vines_plant' },
        plant: 'minecraft:twisting_vines',
        substrate: 'nether_mushroom'
    },
    {
        seed: 'minecraft:vine',
        render: { type: 'generic', block: 'minecraft:vine' },
        plant: 'minecraft:vine',
        substrate: 'dirt'
    },
    {
        seed: 'minecraft:weeping_vines',
        render: { type: 'generic', block: 'minecraft:weeping_vines_plant' },
        plant: 'minecraft:weeping_vines',
        substrate: 'nether_mushroom'
    },
    // Byg
    {
        seed: 'byg:lament_vine',
        render: { type: 'generic', block: 'byg:lament_vine_plant' },
        plant: 'byg:lament_vine',
        substrate: 'netherrack'
    },
    {
        seed: 'byg:shulkren_vine',
        render: { type: 'generic', block: 'byg:shulkren_vine_plant' },
        plant: 'byg:shulkren_vine',
        substrate: 'nether_mushroom'
    },
    {
        seed: 'byg:skyris_vine',
        render: { type: 'generic', block: 'byg:skyris_vine' },
        plant: 'byg:skyris_vine',
        substrate: 'dirt'
    },
    {
        seed: 'byg:soul_shroom_spore_end',
        render: { type: 'generic', block: 'byg:soul_shroom_spore_end' },
        plant: 'byg:soul_shroom_spore_end',
        substrate: 'nether_mushroom'
    },
    {
        seed: 'byg:weeping_roots',
        render: { type: 'generic', block: 'byg:weeping_roots' },
        plant: 'byg:weeping_roots',
        substrate: 'nether_mushroom'
    },
    {
        seed: 'byg:wailing_vine',
        render: { type: 'generic', block: 'byg:wailing_vine' },
        plant: 'byg:wailing_vine',
        substrate: 'end_stone'
    },
    {
        seed: 'byg:imparius_vine',
        render: { type: 'generic', block: 'byg:imparius_vine' },
        plant: 'byg:imparius_vine',
        substrate: 'end_mushroom'
    },
    {
        seed: 'byg:nether_bristle',
        render: { type: 'generic', block: 'byg:nether_bristle' },
        plant: 'byg:nether_bristle',
        substrate: 'netherrack'
    },
    // Blue Skies
    {
        seed: 'blue_skies:maple_vine',
        render: { type: 'generic', block: 'blue_skies:maple_vine' },
        plant: 'blue_skies:maple_vine',
        substrate: 'netherrack'
    },
    {
        seed: 'blue_skies:dusk_vine',
        render: { type: 'generic', block: 'blue_skies:dusk_vine' },
        plant: 'blue_skies:dusk_vine',
        substrate: 'netherrack'
    },
    {
        seed: 'blue_skies:lunar_vine',
        render: { type: 'generic', block: 'blue_skies:lunar_vine' },
        plant: 'blue_skies:lunar_vine',
        substrate: 'netherrack'
    },
    {
        seed: 'blue_skies:bluebright_vine',
        render: { type: 'generic', block: 'blue_skies:bluebright_vine' },
        plant: 'blue_skies:bluebright_vine',
        substrate: 'netherrack'
    },
    {
        seed: 'blue_skies:starlit_vine',
        render: { type: 'generic', block: 'blue_skies:starlit_vine' },
        plant: 'blue_skies:starlit_vine',
        substrate: 'netherrack'
    },
    {
        seed: 'blue_skies:frostbright_vine',
        render: { type: 'generic', block: 'blue_skies:frostbright_vine' },
        plant: 'blue_skies:frostbright_vine',
        substrate: 'netherrack'
    }
];
crop_properties.flowers.crops = [
    // Minecraft

    {
        seed: 'minecraft:allium',
        render: { type: 'generic', block: 'minecraft:allium' },
        plant: 'minecraft:allium',
        substrate: 'grass'
    },
    {
        seed: 'minecraft:azure_bluet',
        render: { type: 'generic', block: 'minecraft:azure_bluet' },
        plant: 'minecraft:azure_bluet',
        substrate: 'grass'
    },
    {
        seed: 'minecraft:blue_orchid',
        render: { type: 'generic', block: 'minecraft:blue_orchid' },
        plant: 'minecraft:blue_orchid',
        substrate: 'grass'
    },
    {
        seed: 'minecraft:cornflower',
        render: { type: 'generic', block: 'minecraft:cornflower' },
        plant: 'minecraft:cornflower',
        substrate: 'grass'
    },
    {
        seed: 'minecraft:dandelion',
        render: { type: 'generic', block: 'minecraft:dandelion' },
        plant: 'minecraft:dandelion',
        substrate: 'grass'
    },
    {
        seed: 'minecraft:lilac',
        render: { type: 'generic', block: 'minecraft:lilac' },
        plant: 'minecraft:lilac',
        substrate: 'grass'
    },
    {
        seed: 'minecraft:lily_of_the_valley',
        render: { type: 'generic', block: 'minecraft:lily_of_the_valley' },
        plant: 'minecraft:lily_of_the_valley',
        substrate: 'grass'
    },
    {
        seed: 'minecraft:orange_tulip',
        render: { type: 'generic', block: 'minecraft:orange_tulip' },
        plant: 'minecraft:orange_tulip',
        substrate: 'grass'
    },
    {
        seed: 'minecraft:oxeye_daisy',
        render: { type: 'generic', block: 'minecraft:oxeye_daisy' },
        plant: 'minecraft:oxeye_daisy',
        substrate: 'grass'
    },
    {
        seed: 'minecraft:peony',
        render: { type: 'generic', block: 'minecraft:peony' },
        plant: 'minecraft:peony',
        substrate: 'grass'
    },
    {
        seed: 'minecraft:pink_tulip',
        render: { type: 'generic', block: 'minecraft:pink_tulip' },
        plant: 'minecraft:pink_tulip',
        substrate: 'grass'
    },
    {
        seed: 'minecraft:poppy',
        render: { type: 'generic', block: 'minecraft:poppy' },
        plant: 'minecraft:poppy',
        substrate: 'grass'
    },
    {
        seed: 'minecraft:red_tulip',
        render: { type: 'generic', block: 'minecraft:red_tulip' },
        plant: 'minecraft:red_tulip',
        substrate: 'grass'
    },
    {
        seed: 'minecraft:rose_bush',
        render: { type: 'generic', block: 'minecraft:rose_bush' },
        plant: 'minecraft:rose_bush',
        substrate: 'grass'
    },
    {
        seed: 'minecraft:sunflower',
        render: { type: 'generic', block: 'minecraft:sunflower' },
        plant: 'minecraft:sunflower',
        substrate: 'grass'
    },
    {
        seed: 'minecraft:white_tulip',
        render: { type: 'generic', block: 'minecraft:white_tulip' },
        plant: 'minecraft:white_tulip',
        substrate: 'grass'
    },
    {
        seed: 'minecraft:wither_rose',
        render: { type: 'generic', block: 'minecraft:wither_rose' },
        plant: 'minecraft:wither_rose',
        substrate: 'soul_sand'
    },

    // Botania
    // {
    //     seed: 'botania:black_mystical_flower',
    //     render: { type: 'generic', block: 'botania:black_mystical_flower' },
    //     plant: 'botania:black_mystical_flower',
    //     substrate: 'grass'
    // },
    // {
    //     seed: 'botania:blue_mystical_flower',
    //     render: { type: 'generic', block: 'botania:blue_mystical_flower' },
    //     plant: 'botania:blue_mystical_flower',
    //     substrate: 'grass'
    // },
    // {
    //     seed: 'botania:brown_mystical_flower',
    //     render: { type: 'generic', block: 'botania:brown_mystical_flower' },
    //     plant: 'botania:brown_mystical_flower',
    //     substrate: 'grass'
    // },
    // {
    //     seed: 'botania:cyan_mystical_flower',
    //     render: { type: 'generic', block: 'botania:cyan_mystical_flower' },
    //     plant: 'botania:cyan_mystical_flower',
    //     substrate: 'grass'
    // },
    // {
    //     seed: 'botania:gray_mystical_flower',
    //     render: { type: 'generic', block: 'botania:gray_mystical_flower' },
    //     plant: 'botania:gray_mystical_flower',
    //     substrate: 'grass'
    // },
    // {
    //     seed: 'botania:green_mystical_flower',
    //     render: { type: 'generic', block: 'botania:green_mystical_flower' },
    //     plant: 'botania:green_mystical_flower',
    //     substrate: 'grass'
    // },
    // {
    //     seed: 'botania:light_blue_mystical_flower',
    //     render: { type: 'generic', block: 'botania:light_blue_mystical_flower' },
    //     plant: 'botania:light_blue_mystical_flower',
    //     substrate: 'grass'
    // },
    // {
    //     seed: 'botania:light_gray_mystical_flower',
    //     render: { type: 'generic', block: 'botania:light_gray_mystical_flower' },
    //     plant: 'botania:light_gray_mystical_flower',
    //     substrate: 'grass'
    // },
    // {
    //     seed: 'botania:lime_mystical_flower',
    //     render: { type: 'generic', block: 'botania:lime_mystical_flower' },
    //     plant: 'botania:lime_mystical_flower',
    //     substrate: 'grass'
    // },
    // {
    //     seed: 'botania:magenta_mystical_flower',
    //     render: { type: 'generic', block: 'botania:magenta_mystical_flower' },
    //     plant: 'botania:magenta_mystical_flower',
    //     substrate: 'grass'
    // },
    // {
    //     seed: 'botania:orange_mystical_flower',
    //     render: { type: 'generic', block: 'botania:orange_mystical_flower' },
    //     plant: 'botania:orange_mystical_flower',
    //     substrate: 'grass'
    // },
    // {
    //     seed: 'botania:pink_mystical_flower',
    //     render: { type: 'generic', block: 'botania:pink_mystical_flower' },
    //     plant: 'botania:pink_mystical_flower',
    //     substrate: 'grass'
    // },
    // {
    //     seed: 'botania:purple_mystical_flower',
    //     render: { type: 'generic', block: 'botania:purple_mystical_flower' },
    //     plant: 'botania:purple_mystical_flower',
    //     substrate: 'grass'
    // },
    // {
    //     seed: 'botania:red_mystical_flower',
    //     render: { type: 'generic', block: 'botania:red_mystical_flower' },
    //     plant: 'botania:red_mystical_flower',
    //     substrate: 'grass'
    // },
    // {
    //     seed: 'botania:white_mystical_flower',
    //     render: { type: 'generic', block: 'botania:white_mystical_flower' },
    //     plant: 'botania:white_mystical_flower',
    //     substrate: 'grass'
    // },
    // {
    //     seed: 'botania:yellow_mystical_flower',
    //     render: { type: 'generic', block: 'botania:yellow_mystical_flower' },
    //     plant: 'botania:yellow_mystical_flower',
    //     substrate: 'grass'
    // },

    // Byg
    {
        seed: 'byg:allium_flower_bush',
        render: { type: 'generic', block: 'byg:allium_flower_bush' },
        plant: 'byg:allium_flower_bush',
        substrate: 'grass'
    },
    {
        seed: 'byg:alpine_bellflower',
        render: { type: 'generic', block: 'byg:alpine_bellflower' },
        plant: 'byg:alpine_bellflower',
        substrate: 'grass'
    },
    {
        seed: 'byg:amaranth',
        render: { type: 'generic', block: 'byg:amaranth' },
        plant: 'byg:amaranth',
        substrate: 'grass'
    },
    {
        seed: 'byg:angelica',
        render: { type: 'generic', block: 'byg:angelica' },
        plant: 'byg:angelica',
        substrate: 'grass'
    },
    {
        seed: 'byg:begonia',
        render: { type: 'generic', block: 'byg:begonia' },
        plant: 'byg:begonia',
        substrate: 'grass'
    },
    {
        seed: 'byg:bistort',
        render: { type: 'generic', block: 'byg:bistort' },
        plant: 'byg:bistort',
        substrate: 'grass'
    },
    {
        seed: 'byg:black_rose',
        render: { type: 'generic', block: 'byg:black_rose' },
        plant: 'byg:black_rose',
        substrate: 'grass'
    },
    {
        seed: 'byg:blue_sage',
        render: { type: 'generic', block: 'byg:blue_sage' },
        plant: 'byg:blue_sage',
        substrate: 'grass'
    },
    {
        seed: 'byg:california_poppy',
        render: { type: 'generic', block: 'byg:california_poppy' },
        plant: 'byg:california_poppy',
        substrate: 'grass'
    },
    {
        seed: 'byg:clover_patch',
        render: { type: 'generic', block: 'byg:clover_patch' },
        plant: 'byg:clover_patch',
        substrate: 'grass'
    },
    {
        seed: 'byg:crocus',
        render: { type: 'generic', block: 'byg:crocus' },
        plant: 'byg:crocus',
        substrate: 'grass'
    },
    {
        seed: 'byg:cyan_amaranth',
        render: { type: 'generic', block: 'byg:cyan_amaranth' },
        plant: 'byg:cyan_amaranth',
        substrate: 'grass'
    },
    {
        seed: 'byg:cyan_rose',
        render: { type: 'generic', block: 'byg:cyan_rose' },
        plant: 'byg:cyan_rose',
        substrate: 'grass'
    },
    {
        seed: 'byg:cyan_tulip',
        render: { type: 'generic', block: 'byg:cyan_tulip' },
        plant: 'byg:cyan_tulip',
        substrate: 'grass'
    },
    {
        seed: 'byg:daffodil',
        render: { type: 'generic', block: 'byg:daffodil' },
        plant: 'byg:daffodil',
        substrate: 'grass'
    },
    {
        seed: 'byg:delphinium',
        render: { type: 'generic', block: 'byg:delphinium' },
        plant: 'byg:delphinium',
        substrate: 'grass'
    },
    {
        seed: 'byg:fairy_slipper',
        render: { type: 'generic', block: 'byg:fairy_slipper' },
        plant: 'byg:fairy_slipper',
        substrate: 'grass'
    },
    {
        seed: 'byg:firecracker_flower_bush',
        render: { type: 'generic', block: 'byg:firecracker_flower_bush' },
        plant: 'byg:firecracker_flower_bush',
        substrate: 'grass'
    },
    {
        seed: 'byg:foxglove',
        render: { type: 'generic', block: 'byg:foxglove' },
        plant: 'byg:foxglove',
        substrate: 'grass'
    },
    {
        seed: 'byg:green_tulip',
        render: { type: 'generic', block: 'byg:green_tulip' },
        plant: 'byg:green_tulip',
        substrate: 'grass'
    },
    {
        seed: 'byg:guzmania',
        render: { type: 'generic', block: 'byg:guzmania' },
        plant: 'byg:guzmania',
        substrate: 'grass'
    },
    {
        seed: 'byg:incan_lily',
        render: { type: 'generic', block: 'byg:incan_lily' },
        plant: 'byg:incan_lily',
        substrate: 'grass'
    },
    {
        seed: 'byg:iris',
        render: { type: 'generic', block: 'byg:iris' },
        plant: 'byg:iris',
        substrate: 'grass'
    },
    {
        seed: 'byg:japanese_orchid',
        render: { type: 'generic', block: 'byg:japanese_orchid' },
        plant: 'byg:japanese_orchid',
        substrate: 'grass'
    },
    {
        seed: 'byg:kovan_flower',
        render: { type: 'generic', block: 'byg:kovan_flower' },
        plant: 'byg:kovan_flower',
        substrate: 'grass'
    },
    {
        seed: 'byg:lazarus_bellflower',
        render: { type: 'generic', block: 'byg:lazarus_bellflower' },
        plant: 'byg:lazarus_bellflower',
        substrate: 'grass'
    },
    {
        seed: 'byg:lollipop_flower',
        render: { type: 'generic', block: 'byg:lollipop_flower' },
        plant: 'byg:lollipop_flower',
        substrate: 'grass'
    },
    {
        seed: 'byg:magenta_amaranth',
        render: { type: 'generic', block: 'byg:magenta_amaranth' },
        plant: 'byg:magenta_amaranth',
        substrate: 'grass'
    },
    {
        seed: 'byg:magenta_tulip',
        render: { type: 'generic', block: 'byg:magenta_tulip' },
        plant: 'byg:magenta_tulip',
        substrate: 'grass'
    },
    {
        seed: 'byg:orange_amaranth',
        render: { type: 'generic', block: 'byg:orange_amaranth' },
        plant: 'byg:orange_amaranth',
        substrate: 'grass'
    },
    {
        seed: 'byg:orange_daisy',
        render: { type: 'generic', block: 'byg:orange_daisy' },
        plant: 'byg:orange_daisy',
        substrate: 'grass'
    },
    {
        seed: 'byg:osiria_rose',
        render: { type: 'generic', block: 'byg:osiria_rose' },
        plant: 'byg:osiria_rose',
        substrate: 'grass'
    },
    {
        seed: 'byg:peach_leather_flower',
        render: { type: 'generic', block: 'byg:peach_leather_flower' },
        plant: 'byg:peach_leather_flower',
        substrate: 'grass'
    },
    {
        seed: 'byg:pink_allium',
        render: { type: 'generic', block: 'byg:pink_allium' },
        plant: 'byg:pink_allium',
        substrate: 'grass'
    },
    {
        seed: 'byg:pink_allium_flower_bush',
        render: { type: 'generic', block: 'byg:pink_allium_flower_bush' },
        plant: 'byg:pink_allium_flower_bush',
        substrate: 'grass'
    },
    {
        seed: 'byg:pink_anemone',
        render: { type: 'generic', block: 'byg:pink_anemone' },
        plant: 'byg:pink_anemone',
        substrate: 'grass'
    },
    {
        seed: 'byg:pink_daffodil',
        render: { type: 'generic', block: 'byg:pink_daffodil' },
        plant: 'byg:pink_daffodil',
        substrate: 'grass'
    },
    {
        seed: 'byg:protea_flower',
        render: { type: 'generic', block: 'byg:protea_flower' },
        plant: 'byg:protea_flower',
        substrate: 'grass'
    },
    {
        seed: 'byg:purple_amaranth',
        render: { type: 'generic', block: 'byg:purple_amaranth' },
        plant: 'byg:purple_amaranth',
        substrate: 'grass'
    },
    {
        seed: 'byg:purple_sage',
        render: { type: 'generic', block: 'byg:purple_sage' },
        plant: 'byg:purple_sage',
        substrate: 'grass'
    },
    {
        seed: 'byg:purple_tulip',
        render: { type: 'generic', block: 'byg:purple_tulip' },
        plant: 'byg:purple_tulip',
        substrate: 'grass'
    },
    {
        seed: 'byg:richea',
        render: { type: 'generic', block: 'byg:richea' },
        plant: 'byg:richea',
        substrate: 'grass'
    },
    {
        seed: 'byg:rose',
        render: { type: 'generic', block: 'byg:rose' },
        plant: 'byg:rose',
        substrate: 'grass'
    },
    {
        seed: 'byg:silver_vase_flower',
        render: { type: 'generic', block: 'byg:silver_vase_flower' },
        plant: 'byg:silver_vase_flower',
        substrate: 'grass'
    },
    {
        seed: 'byg:snowdrops',
        render: { type: 'generic', block: 'byg:snowdrops' },
        plant: 'byg:snowdrops',
        substrate: 'grass'
    },
    {
        seed: 'byg:tall_allium',
        render: { type: 'generic', block: 'byg:tall_allium' },
        plant: 'byg:tall_allium',
        substrate: 'grass'
    },
    {
        seed: 'byg:tall_pink_allium',
        render: { type: 'generic', block: 'byg:tall_pink_allium' },
        plant: 'byg:tall_pink_allium',
        substrate: 'grass'
    },
    {
        seed: 'byg:thereal_bellflower',
        render: { type: 'generic', block: 'byg:thereal_bellflower' },
        plant: 'byg:thereal_bellflower',
        substrate: 'grass'
    },
    {
        seed: 'byg:torch_ginger',
        render: { type: 'generic', block: 'byg:torch_ginger' },
        plant: 'byg:torch_ginger',
        substrate: 'grass'
    },
    {
        seed: 'byg:violet_leather_flower',
        render: { type: 'generic', block: 'byg:violet_leather_flower' },
        plant: 'byg:violet_leather_flower',
        substrate: 'grass'
    },
    {
        seed: 'byg:white_anemone',
        render: { type: 'generic', block: 'byg:white_anemone' },
        plant: 'byg:white_anemone',
        substrate: 'grass'
    },
    {
        seed: 'byg:white_sage',
        render: { type: 'generic', block: 'byg:white_sage' },
        plant: 'byg:white_sage',
        substrate: 'grass'
    },
    {
        seed: 'byg:winter_cyclamen',
        render: { type: 'generic', block: 'byg:winter_cyclamen' },
        plant: 'byg:winter_cyclamen',
        substrate: 'grass'
    },
    {
        seed: 'byg:winter_rose',
        render: { type: 'generic', block: 'byg:winter_rose' },
        plant: 'byg:winter_rose',
        substrate: 'grass'
    },
    {
        seed: 'byg:winter_scilla',
        render: { type: 'generic', block: 'byg:winter_scilla' },
        plant: 'byg:winter_scilla',
        substrate: 'grass'
    },
    {
        seed: 'byg:winter_succulent',
        render: { type: 'generic', block: 'byg:winter_succulent' },
        plant: 'byg:winter_succulent',
        substrate: 'grass'
    },
    {
        seed: 'byg:yellow_daffodil',
        render: { type: 'generic', block: 'byg:yellow_daffodil' },
        plant: 'byg:yellow_daffodil',
        substrate: 'grass'
    },
    {
        seed: 'byg:yellow_tulip',
        render: { type: 'generic', block: 'byg:yellow_tulip' },
        plant: 'byg:yellow_tulip',
        substrate: 'grass'
    },
    {
        seed: 'twilightforest:thorn_rose',
        render: { type: 'generic', block: 'twilightforest:thorn_rose' },
        plant: 'twilightforest:thorn_rose',
        substrate: 'grass'
    },
    // Blue Skies
    {
        seed: 'blue_skies:blaze_bud',
        render: { type: 'generic', block: 'blue_skies:blaze_bud' },
        plant: 'blue_skies:blaze_bud',
        substrate: 'grass'
    },
    {
        seed: 'blue_skies:blush_blossom',
        render: { type: 'generic', block: 'blue_skies:blush_blossom' },
        plant: 'blue_skies:blush_blossom',
        substrate: 'grass'
    },
    {
        seed: 'blue_skies:briskbloom',
        render: { type: 'generic', block: 'blue_skies:briskbloom' },
        plant: 'blue_skies:briskbloom',
        substrate: 'grass'
    },
    {
        seed: 'blue_skies:brittlebush',
        render: { type: 'generic', block: 'blue_skies:brittlebush' },
        plant: 'blue_skies:brittlebush',
        substrate: 'grass'
    },
    {
        seed: 'blue_skies:camellia',
        render: { type: 'generic', block: 'blue_skies:camellia' },
        plant: 'blue_skies:camellia',
        substrate: 'grass'
    },
    {
        seed: 'blue_skies:chillweed',
        render: { type: 'generic', block: 'blue_skies:chillweed' },
        plant: 'blue_skies:chillweed',
        substrate: 'grass'
    },
    {
        seed: 'blue_skies:crystal_flower',
        render: { type: 'generic', block: 'blue_skies:crystal_flower' },
        plant: 'blue_skies:crystal_flower',
        substrate: 'grass'
    },
    {
        seed: 'blue_skies:flare_floret',
        render: { type: 'generic', block: 'blue_skies:flare_floret' },
        plant: 'blue_skies:flare_floret',
        substrate: 'grass'
    },
    {
        seed: 'blue_skies:frose',
        render: { type: 'generic', block: 'blue_skies:frose' },
        plant: 'blue_skies:frose',
        substrate: 'grass'
    },
    {
        seed: 'blue_skies:lucentroot',
        render: { type: 'generic', block: 'blue_skies:lucentroot' },
        plant: 'blue_skies:lucentroot',
        substrate: 'grass'
    },
    {
        seed: 'blue_skies:midday_bayhop',
        render: { type: 'generic', block: 'blue_skies:midday_bayhop' },
        plant: 'blue_skies:midday_bayhop',
        substrate: 'grass'
    },
    {
        seed: 'blue_skies:moonlit_bloom',
        render: { type: 'generic', block: 'blue_skies:moonlit_bloom' },
        plant: 'blue_skies:moonlit_bloom',
        substrate: 'grass'
    },
    {
        seed: 'blue_skies:muckweed',
        render: { type: 'generic', block: 'blue_skies:muckweed' },
        plant: 'blue_skies:muckweed',
        substrate: 'grass'
    },
    {
        seed: 'blue_skies:nightcress',
        render: { type: 'generic', block: 'blue_skies:nightcress' },
        plant: 'blue_skies:nightcress',
        substrate: 'grass'
    },
    {
        seed: 'blue_skies:polar_posy',
        render: { type: 'generic', block: 'blue_skies:polar_posy' },
        plant: 'blue_skies:polar_posy',
        substrate: 'grass'
    },
    {
        seed: 'blue_skies:snowbloom',
        render: { type: 'generic', block: 'blue_skies:snowbloom' },
        plant: 'blue_skies:snowbloom',
        substrate: 'grass'
    }
];
