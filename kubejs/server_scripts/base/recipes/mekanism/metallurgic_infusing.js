ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/mekanism/metallurgic_infusing/';

    const recipes = [
        // {
        //     input: { tag: 'forge:stones/andesite', amount: 2)}
        //     chemicalInput: { amount: 20, tag: "emendatusenigmatica:zinc"},
        //     output: Item.of('emendatusenigmatica:andesite_ingot'),
        //     id: `${id_prefix}andesite_alloy`
        // },
        // {
        //     input: { tag: 'forge:dusts/iron', amount: 2)},
        //     chemicalInput: { amount: 10, tag: "emendatusenigmatica:nickel"},
        //     output: Item.of('emendatusenigmatica:invar_dust', 2),
        //     id: `${id_prefix}invar_alloy`
        // },
        {
            input: { tag: 'forge:dusts/copper' },
            chemicalInput: { amount: 10, tag: 'mekanism:gold' },
            output: Item.of('emendatusenigmatica:rose_gold_dust'),
            id: `${id_prefix}rose_gold_alloy`
        } //,
        // {
        //     input: { tag: 'forge:dusts/copper' },
        //     chemicalInput: { amount: 10, tag: "emendatusenigmatica:zinc"},
        //     output: Item.of('emendatusenigmatica:brass_dust'),
        //     id: `${id_prefix}brass_alloy`
        // },
        // {
        //     input: { tag: 'forge:dusts/copper' },
        //     chemicalInput: { amount: 10, tag: "emendatusenigmatica:nickel"},
        //     output: Item.of('emendatusenigmatica:constantan_dust'),
        //     id: `${id_prefix}constantan_alloy`
        // }
    ];

    const mossy_conversions = [
        { in: 'minecraft:cobblestone', out: 'minecraft:mossy_cobblestone' },
        { in: 'minecraft:stone_bricks', out: 'minecraft:mossy_stone_bricks' },
        { in: 'minecraft:stone_brick_wall', out: 'minecraft:mossy_stone_brick_wall' },
        { in: 'minecraft:stone_brick_stairs', out: 'minecraft:mossy_stone_brick_stairs' },
        { in: 'minecraft:cobblestone_stairs', out: 'minecraft:mossy_cobblestone_stairs' },
        { in: 'minecraft:cobblestone_slab', out: 'minecraft:mossy_cobblestone_slab' },
        { in: 'minecraft:cobblestone_wall', out: 'minecraft:mossy_cobblestone_wall' },
        { in: 'twilightforest:etched_nagastone', out: 'twilightforest:mossy_etched_nagastone' },
        { in: 'twilightforest:nagastone_pillar', out: 'twilightforest:mossy_nagastone_pillar' },
        { in: 'twilightforest:nagastone_stairs_left', out: 'twilightforest:mossy_nagastone_stairs_left' },
        { in: 'twilightforest:nagastone_stairs_right', out: 'twilightforest:mossy_nagastone_stairs_right' },
        { in: 'twilightforest:mazestone_brick', out: 'twilightforest:mossy_mazestone' },
        { in: 'twilightforest:underbrick', out: 'twilightforest:mossy_underbrick' },
        { in: 'twilightforest:towerwood', out: 'twilightforest:mossy_towerwood' },
        { in: 'twilightforest:castle_brick', out: 'twilightforest:mossy_castle_brick' },
        { in: 'twilightforest:castle_brick_stairs', out: 'twilightforest:mossy_castle_brick_stairs' },
        { in: 'quark:cobblestone_bricks', out: 'quark:mossy_cobblestone_bricks' },
        { in: 'quark:cobblestone_bricks_slab', out: 'quark:mossy_cobblestone_bricks_slab' },
        { in: 'quark:cobblestone_bricks_stairs', out: 'quark:mossy_cobblestone_bricks_stairs' },
        { in: 'quark:cobblestone_bricks_wall', out: 'quark:mossy_cobblestone_bricks_wall' },
        { in: 'quark:cobblestone_bricks_vertical_slab', out: 'quark:mossy_cobblestone_bricks_vertical_slab' },
        { in: 'quark:stone_brick_vertical_slab', out: 'quark:mossy_stone_brick_vertical_slab' },
        { in: 'quark:cobblestone_vertical_slab', out: 'quark:mossy_cobblestone_vertical_slab' },
        { in: 'byg:rocky_stone', out: 'byg:mossy_stone' },
        { in: 'byg:rocky_stone_stairs', out: 'byg:mossy_stone_stairs' },
        { in: 'byg:rocky_stone_slab', out: 'byg:mossy_stone_slab' },
        { in: 'byg:rocky_stone_wall', out: 'byg:mossy_stone_wall' }
    ];

    mossy_conversions.forEach((block) => {
        recipes.push({
            input: { item: block.in },
            chemicalInput: { amount: 10, tag: 'mekanism:bio' },
            output: Item.of(block.out),
            id: `${id_prefix}${block.out.replace(':', '_')}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:metallurgic_infusing';
        recipe.itemInput = { ingredient: recipe.input };
        recipe.output = recipe.output.toJson();
        event.custom(recipe).id(recipe.id);
    });
});
