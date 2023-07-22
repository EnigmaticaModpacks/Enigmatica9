ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mekanism/nucleosynthesizing/';
    const recipes = [
        {
            output: { item: 'powah:steel_energized' },
            gasInput: { gas: 'mekanism:antimatter', amount: 10 },
            itemInput: { ingredient: { tag: 'forge:ingots/copper' } },
            duration: 500,
            id: `${id_prefix}steel_energized`
        },
        {
            output: { item: 'minecraft:end_crystal' },
            gasInput: { gas: 'mekanism:antimatter', amount: 1 },
            itemInput: { ingredient: { tag: 'forge:glass/purple' } },
            duration: 750,
            id: 'mekanism:nucleosynthesizing/end_crystal'
        },
        {
            output: { item: 'the_bumblezone:royal_jelly_block' },
            gasInput: { gas: 'mekanism:antimatter', amount: 1 },
            itemInput: { ingredient: { item: 'minecraft:honey_block' } },
            duration: 1000,
            id: `${id_prefix}royal_jelly_block`
        },
        {
            output: { item: 'twilightforest:cicada' },
            gasInput: { gas: 'mekanism:antimatter', amount: 1 },
            itemInput: { ingredient: { item: 'twilightforest:liveroot' } },
            duration: 100,
            id: `${id_prefix}cicada`
        },
        {
            output: { item: 'twilightforest:firefly' },
            gasInput: { gas: 'mekanism:antimatter', amount: 1 },
            itemInput: { ingredient: { item: 'twilightforest:mushgloom' } },
            duration: 100,
            id: `${id_prefix}firefly`
        },
        {
            output: { item: 'minecraft:shulker_shell' },
            gasInput: { gas: 'mekanism:antimatter', amount: 1 },
            itemInput: { ingredient: { item: 'minecraft:popped_chorus_fruit' } },
            duration: 100,
            id: `${id_prefix}shulker_shell`
        },
        {
            output: { item: 'quark:blank_rune' },
            gasInput: { gas: 'mekanism:antimatter', amount: 1 },
            itemInput: { ingredient: { item: 'ae2:matter_ball' } },
            duration: 100,
            id: `${id_prefix}blank_rune`
        },
        {
            output: Item.of(
                'industrialforegoing:infinity_drill',
                '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'
            ).toJson(),
            gasInput: { gas: 'mekanism:antimatter', amount: 100 },
            itemInput: { ingredient: { item: 'immersiveengineering:drillhead_steel' } },
            duration: 1200,
            id: `${id_prefix}infinity_drill`
        },
        {
            output: Item.of(
                'industrialforegoing:infinity_saw',
                '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'
            ),
            gasInput: { gas: 'mekanism:antimatter', amount: 100 },
            itemInput: { ingredient: { item: 'immersiveengineering:rockcutter' } },
            duration: 1200,
            id: `${id_prefix}infinity_saw`
        },
        {
            output: Item.of(
                'industrialforegoing:infinity_hammer',
                '{Beheading:0,CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'
            ),
            gasInput: { gas: 'mekanism:antimatter', amount: 100 },
            itemInput: { ingredient: { item: 'hexerei:warhammer' } },
            duration: 1200,
            id: `${id_prefix}infinity_hammer`
        },
        {
            output: Item.of(
                'industrialforegoing:infinity_trident',
                '{CanCharge:1b,Channeling:0b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Loyalty:0,Riptide:0,Selected:"POOR",Special:0b}'
            ),
            gasInput: { gas: 'mekanism:antimatter', amount: 100 },
            itemInput: { ingredient: { item: 'minecraft:trident' } },
            duration: 1200,
            id: `${id_prefix}infinity_trident`
        },
        {
            output: Item.of(
                'industrialforegoing:infinity_nuke',
                '{CanCharge:1b,Energy:0L,Fluid:{Amount:0,FluidName:"biofuel"},Selected:"POOR",Special:0b}'
            ),
            gasInput: { gas: 'mekanism:antimatter', amount: 100 },
            itemInput: { ingredient: { item: 'thermal:earth_tnt' } },
            duration: 1200,
            id: `${id_prefix}infinity_nuke`
        }
    ];

    const paint_transmutations = [
        { item: 'ae2:certus_quartz_crystal', color: 'light_blue' },
        { item: 'ae2:charged_certus_quartz_crystal', color: 'light_blue_lumen' },
        { item: 'ae2:fluix_crystal', color: 'purple_lumen' },
        { item: 'emendatusenigmatica:sulfur_gem', color: 'yellow' },
        { item: 'emendatusenigmatica:fluorite_gem', color: 'light_gray_lumen' },
        { item: 'emendatusenigmatica:niter_gem', color: 'white' },
        { item: 'emendatusenigmatica:apatite_gem', color: 'blue_lumen' },
        { item: 'emendatusenigmatica:carminite_gem', color: 'red' },
        { item: 'minecraft:quartz', color: 'white_lumen' },
        { item: 'minecraft:lapis_lazuli', color: 'blue' },
        { item: 'minecraft:diamond', color: 'cyan_lumen' },
        { item: 'minecraft:emerald', color: 'green_lumen' },
        { item: 'minecraft:amethyst_shard', color: 'purple' },
        { item: 'byg:subzero_crystal_shard', color: 'cyan' },
        { item: 'byg:therium_crystal_shard', color: 'orange' }
    ];

    paint_transmutations.forEach((transmute) => {
        recipes.push({
            output: { item: transmute.item },
            gasInput: { gas: 'mekanism:antimatter', amount: 1 },
            itemInput: { ingredient: { item: `ae2:${transmute.color}_paint_ball` } },
            duration: 100,
            id: `${id_prefix}${transmute.item.split(':')[1]}`
        });
    });
    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:nucleosynthesizing';
        event.custom(recipe).id(recipe.id);
    });
});
