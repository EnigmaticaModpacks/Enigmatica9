ServerEvents.recipes((event) => {
    const id_prefix = 'enigmatica:base/enigmatica/shapeless/';

    const recipes = [
        {
            output: Item.of('minecraft:orange_dye', 2),
            inputs: ['#forge:dyes/red', '#forge:dyes/yellow'],
            id: `${id_prefix}orange_dye_from_red_yellow`
        },
        {
            output: Item.of('minecraft:magenta_dye', 2),
            inputs: ['#forge:dyes/purple', '#forge:dyes/pink'],
            id: `${id_prefix}magenta_dye_from_purple_pink`
        },
        {
            output: Item.of('minecraft:magenta_dye', 3),
            inputs: ['#forge:dyes/blue', '#forge:dyes/red', '#forge:dyes/pink'],
            id: `${id_prefix}magenta_dye_from_blue_red_pink`
        },
        {
            output: Item.of('minecraft:magenta_dye', 4),
            inputs: ['#forge:dyes/blue', '#forge:dyes/red', '#forge:dyes/pink'],
            id: `${id_prefix}magenta_dye_from_blue_red_white`
        },
        {
            output: Item.of('minecraft:light_blue_dye', 2),
            inputs: ['#forge:dyes/blue', '#forge:dyes/white'],
            id: `${id_prefix}light_blue_dye_from_blue_white`
        },
        {
            output: Item.of('minecraft:lime_dye', 2),
            inputs: ['#forge:dyes/green', '#forge:dyes/white'],
            id: `${id_prefix}lime_dye_from_green_white`
        },
        {
            output: Item.of('minecraft:pink_dye', 2),
            inputs: ['#forge:dyes/red', '#forge:dyes/white'],
            id: `${id_prefix}pink_dye_from_red_white`
        },
        {
            output: Item.of('minecraft:gray_dye', 2),
            inputs: ['#forge:dyes/black', '#forge:dyes/white'],
            id: `${id_prefix}gray_dye_from_black_white`
        },
        {
            output: Item.of('minecraft:light_gray_dye', 2),
            inputs: ['#forge:dyes/gray', '#forge:dyes/white'],
            id: `${id_prefix}light_gray_dye_from_gray_white`
        },
        {
            output: Item.of('minecraft:light_gray_dye', 3),
            inputs: ['#forge:dyes/black', '#forge:dyes/white', '#forge:dyes/white'],
            id: `${id_prefix}light_gray_dye_from_black_white`
        },
        {
            output: Item.of('minecraft:cyan_dye', 2),
            inputs: ['#forge:dyes/blue', '#forge:dyes/green'],
            id: `${id_prefix}cyan_dye_from_blue_green`
        },
        {
            output: Item.of('minecraft:purple_dye', 2),
            inputs: ['#forge:dyes/blue', '#forge:dyes/red'],
            id: `${id_prefix}purple_dye_from_blue_red`
        },
        {
            output: Item.of('minecraft:brown_dye', 2),
            inputs: ['#forge:dyes/green', '#forge:dyes/red'],
            id: `${id_prefix}brown_dye_from_green_red`
        },
        {
            output: Item.of('minecraft:green_dye', 2),
            inputs: ['#forge:dyes/blue', '#forge:dyes/yellow'],
            id: `${id_prefix}green_dye_from_blue_yellow`
        },
        {
            output: Item.of(AlmostUnified.getPreferredItemForTag('forge:dusts/brass'), 2),
            inputs: ['#forge:dusts/copper', '#forge:dusts/zinc'],
            id: `${id_prefix}brass_dust`
        },
        {
            output: Item.of(AlmostUnified.getPreferredItemForTag('forge:ingots/brass'), 2),
            inputs: [
                ['#forge:dusts/copper', '#forge:ingots/copper'],
                ['#forge:dusts/zinc', '#forge:ingots/zinc'],
                `minecraft:fire_charge`
            ],
            id: `${id_prefix}brass_ingot`
        },
        {
            output: Item.of(AlmostUnified.getPreferredItemForTag('forge:dusts/rose_gold'), 2),
            inputs: ['#forge:dusts/copper', '#forge:dusts/gold'],
            id: `${id_prefix}rose_gold_dust`
        },
        {
            output: Item.of(AlmostUnified.getPreferredItemForTag('forge:ingots/rose_gold'), 2),
            inputs: [
                ['#forge:dusts/copper', '#forge:ingots/copper'],
                ['#forge:dusts/gold', '#forge:ingots/gold'],
                `minecraft:fire_charge`
            ],
            id: `${id_prefix}rose_gold_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
