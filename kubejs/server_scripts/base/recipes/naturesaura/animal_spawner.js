ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/naturesaura/animal_spawner/';
    const recipes = [
        {
            entity: 'ars_nouveau:starbuncle',
            inputs: ['naturesaura:birth_spirit', '#forge:gems/source', 'naturesaura:gold_leaf'],
            aura: aura_cost.large,
            time: 40,
            id: `${id_prefix}starbuncle`
        },
        {
            entity: 'ars_nouveau:whirlisprig',
            inputs: ['naturesaura:birth_spirit', '#forge:gems/source', 'naturesaura:ancient_sapling'],
            aura: aura_cost.large,
            time: 40,
            id: `${id_prefix}whirlisprig`
        },
        {
            entity: 'ars_nouveau:drygmy',
            inputs: ['naturesaura:birth_spirit', '#forge:gems/source', 'naturesaura:pet_reviver'],
            aura: aura_cost.large,
            time: 40,
            id: `${id_prefix}drygmy`
        },
        {
            entity: 'minecraft:frog',
            inputs: ['naturesaura:birth_spirit', 'minecraft:spider_eye', 'minecraft:lily_pad'],
            aura: aura_cost.small,
            time: 40,
            id: `${id_prefix}frog`
        },
        {
            entity: 'minecraft:rabbit',
            inputs: ['naturesaura:birth_spirit', 'farmersdelight:cabbage', 'minecraft:carrot'],
            aura: aura_cost.small,
            time: 40,
            id: 'naturesaura:animal_spawner/rabbit'
        },
        {
            entity: 'minecraft:parrot',
            inputs: ['naturesaura:birth_spirit', 'minecraft:wheat_seeds', 'minecraft:jungle_sapling'],
            aura: aura_cost.small,
            time: 40,
            id: 'naturesaura:animal_spawner/parrot'
        },
        {
            entity: 'minecraft:turtle',
            inputs: ['naturesaura:birth_spirit', 'minecraft:kelp', 'minecraft:seagrass'],
            aura: aura_cost.medium,
            time: 40,
            id: 'naturesaura:animal_spawner/turtle'
        },
        {
            entity: 'hexerei:crow',
            inputs: ['naturesaura:birth_spirit', 'hexerei:seed_mixture'],
            aura: aura_cost.small,
            time: 40,
            id: `${id_prefix}crow`
        },
        {
            entity: 'twilightforest:helmet_crab',
            inputs: ['naturesaura:birth_spirit', 'farmersdelight:cod_slice', 'minecraft:sand'],
            aura: aura_cost.small,
            time: 40,
            id: `${id_prefix}helmet_crab`
        },
        {
            entity: 'quark:crab',
            inputs: ['naturesaura:birth_spirit', 'farmersdelight:salmon_slice', 'minecraft:sand'],
            aura: aura_cost.small,
            time: 40,
            id: `${id_prefix}crab`
        },
        {
            entity: 'blue_skies:whistleshell_crab',
            inputs: ['naturesaura:birth_spirit', 'blue_skies:grittle_flatfish', 'minecraft:sand'],
            aura: aura_cost.medium,
            time: 40,
            id: `${id_prefix}whistleshell_crab`
        },
        {
            entity: 'twilightforest:penguin',
            inputs: ['naturesaura:birth_spirit', 'minecraft:snowball', '#forge:raw_fishes'],
            aura: aura_cost.small,
            time: 40,
            id: `${id_prefix}penguin`
        },
        {
            entity: 'twilightforest:deer',
            inputs: ['naturesaura:birth_spirit', 'minecraft:carrot', 'minecraft:apple'],
            aura: aura_cost.medium,
            time: 40,
            id: `${id_prefix}deer`
        },
        {
            entity: 'minecraft:cow',
            inputs: ['naturesaura:birth_spirit', 'minecraft:wheat', 'minecraft:grass'],
            aura: aura_cost.medium,
            time: 40,
            id: 'naturesaura:animal_spawner/cow'
        },
        {
            entity: 'minecraft:goat',
            inputs: ['naturesaura:birth_spirit', 'minecraft:grass', 'farmersdelight:tree_bark'],
            aura: aura_cost.medium,
            time: 40,
            id: `${id_prefix}goat`
        },
        {
            entity: 'twilightforest:dwarf_rabbit',
            inputs: ['naturesaura:birth_spirit', 'farmersdelight:cabbage_leaf', 'minecraft:carrot'],
            aura: aura_cost.small,
            time: 40,
            id: `${id_prefix}dwarf_rabbit`
        },
        {
            entity: 'twilightforest:tiny_bird',
            inputs: ['naturesaura:birth_spirit', 'minecraft:wheat_seeds', 'twilightforest:canopy_sapling'],
            aura: aura_cost.small,
            time: 40,
            id: `${id_prefix}tiny_bird`
        },
        {
            entity: 'minecraft:bat',
            inputs: ['naturesaura:birth_spirit', 'cnb:apple_slice'],
            aura: aura_cost.small,
            time: 40,
            id: 'naturesaura:animal_spawner/bat'
        },
        {
            entity: 'twilightforest:raven',
            inputs: ['naturesaura:birth_spirit', 'minecraft:pumpkin_seeds', 'thermal:strawberry'],
            aura: aura_cost.small,
            time: 40,
            id: `${id_prefix}raven`
        },
        {
            entity: 'minecraft:chicken',
            inputs: ['naturesaura:birth_spirit', 'minecraft:wheat_seeds', 'thermal:spinach'],
            aura: aura_cost.small,
            time: 40,
            id: 'naturesaura:animal_spawner/chicken'
        },
        {
            entity: 'twilightforest:squirrel',
            inputs: ['naturesaura:birth_spirit', 'thermal:peanut'],
            aura: aura_cost.small,
            time: 40,
            id: `${id_prefix}squirrel`
        },
        {
            entity: 'minecraft:pig',
            inputs: ['naturesaura:birth_spirit', 'minecraft:mud', 'minecraft:carrot'],
            aura: aura_cost.medium,
            time: 40,
            id: 'naturesaura:animal_spawner/pig'
        },
        {
            entity: 'twilightforest:boar',
            inputs: ['naturesaura:birth_spirit', 'minecraft:mud', 'minecraft:potato'],
            aura: aura_cost.medium,
            time: 40,
            id: `${id_prefix}boar`
        },
        {
            entity: 'minecraft:sheep',
            inputs: ['naturesaura:birth_spirit', '#forge:wool', 'minecraft:wheat'],
            aura: aura_cost.medium,
            time: 40,
            id: 'naturesaura:sheep_white'
        },
        {
            entity: 'twilightforest:bighorn_sheep',
            inputs: ['naturesaura:birth_spirit', '#forge:wool', 'minecraft:hay_block'],
            aura: aura_cost.medium,
            time: 40,
            id: `${id_prefix}bighorn_sheep`
        },
        {
            entity: 'quark:foxhound',
            inputs: ['naturesaura:birth_spirit', '#forge:foods/meat/raw', 'minecraft:coal'],
            aura: aura_cost.medium,
            time: 40,
            id: `${id_prefix}foxhound`
        },
        {
            entity: 'minecraft:wolf',
            inputs: ['naturesaura:birth_spirit', '#forge:foods/meat/raw', 'minecraft:bone'],
            aura: aura_cost.medium,
            time: 40,
            id: 'naturesaura:animal_spawner/wolf'
        },
        {
            entity: 'blue_skies:diophyde_prowler',
            inputs: ['naturesaura:birth_spirit', 'blue_skies:municipal_monkfish', 'minecraft:snowball'],
            aura: aura_cost.huge,
            time: 40,
            id: `${id_prefix}diophyde_prowler`
        },
        {
            entity: 'minecraft:horse',
            inputs: ['naturesaura:birth_spirit', 'minecraft:golden_carrot', 'minecraft:apple'],
            aura: aura_cost.large,
            time: 40,
            id: 'naturesaura:animal_spawner/horse'
        },
        {
            entity: 'minecraft:donkey',
            inputs: ['naturesaura:birth_spirit', 'minecraft:golden_carrot', 'minecraft:apple', 'minecraft:chest'],
            aura: aura_cost.large,
            time: 40,
            id: 'naturesaura:animal_spawner/donkey'
        },
        {
            entity: 'minecraft:mule',
            inputs: ['naturesaura:birth_spirit', 'minecraft:carrot', 'minecraft:apple', 'minecraft:chest'],
            aura: aura_cost.large,
            time: 40,
            id: 'naturesaura:animal_spawner/mule'
        },
        {
            entity: 'minecraft:mooshroom',
            inputs: ['naturesaura:birth_spirit', 'minecraft:wheat', 'minecraft:grass', 'minecraft:red_mushroom'],
            aura: aura_cost.large,
            time: 40,
            id: 'naturesaura:animal_spawner/mooshroom'
        },
        {
            entity: 'blue_skies:stardust_ram',
            inputs: ['naturesaura:birth_spirit', 'blue_skies:lunar_grass', 'farmersdelight:tree_bark'],
            aura: aura_cost.medium,
            time: 40,
            id: `${id_prefix}stardust_ram`
        },
        {
            entity: 'blue_skies:cosmic_fox',
            inputs: ['naturesaura:birth_spirit', 'blue_skies:crescent_fruit', 'minecraft:feather'],
            aura: aura_cost.medium,
            time: 40,
            id: `${id_prefix}cosmic_fox`
        },
        {
            entity: 'blue_skies:crystal_camel',
            inputs: ['naturesaura:birth_spirit', 'blue_skies:scalefruit', 'blue_skies:crystal_sand'],
            aura: aura_cost.large,
            time: 40,
            id: `${id_prefix}crystal_camel`
        },
        {
            entity: 'blue_skies:snow_owl',
            inputs: ['naturesaura:birth_spirit', 'minecraft:rabbit', 'minecraft:snowball'],
            aura: aura_cost.medium,
            time: 40,
            id: `${id_prefix}snow_owl`
        },
        {
            entity: 'blue_skies:reindeer',
            inputs: ['naturesaura:birth_spirit', 'blue_skies:pine_fruit', 'minecraft:snowball'],
            aura: aura_cost.medium,
            time: 40,
            id: `${id_prefix}reindeer`
        },
        {
            entity: 'blue_skies:sliv',
            inputs: ['naturesaura:birth_spirit', 'farmersdelight:raw_pasta'],
            aura: aura_cost.small,
            time: 40,
            id: `${id_prefix}sliv`
        },
        {
            entity: 'blue_skies:azulfo',
            inputs: ['naturesaura:birth_spirit', 'minecraft:wheat', 'blue_skies:turquoise_grass'],
            aura: aura_cost.huge,
            time: 40,
            id: `${id_prefix}azulfo`
        },
        {
            entity: 'blue_skies:shade_monitor',
            inputs: ['naturesaura:birth_spirit', '#forge:foods/meat/raw', 'blue_skies:grittle_flatfish'],
            aura: aura_cost.medium,
            time: 40,
            id: `${id_prefix}shade_monitor`
        },
        {
            entity: 'blue_skies:seclam',
            inputs: ['naturesaura:birth_spirit', 'minecraft:kelp', 'blue_skies:brumble'],
            aura: aura_cost.medium,
            time: 40,
            id: `${id_prefix}seclam`
        },
        {
            entity: 'blue_skies:crogre',
            inputs: ['naturesaura:birth_spirit', 'blue_skies:bug_guts', 'blue_skies:chilled_lily_pad'],
            aura: aura_cost.large,
            time: 40,
            id: `${id_prefix}crogre`
        },
        {
            entity: 'blue_skies:emberback',
            inputs: ['naturesaura:birth_spirit', 'blue_skies:black_brewberry', 'blue_skies:flare_floret'],
            aura: aura_cost.large,
            time: 40,
            id: `${id_prefix}emberback`
        },
        {
            entity: 'blue_skies:firefly',
            inputs: ['naturesaura:birth_spirit', 'blue_skies:nightcress', 'blue_skies:lucentroot'],
            aura: aura_cost.large,
            time: 40,
            id: `${id_prefix}firefly`
        },
        {
            entity: 'blue_skies:nyctofly',
            inputs: ['naturesaura:birth_spirit', 'blue_skies:moonlit_bloom', 'blue_skies:glimmer_reed'],
            aura: aura_cost.large,
            time: 40,
            id: `${id_prefix}nyctofly`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:animal_spawner';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        event.custom(recipe).id(recipe.id);
    });
});
