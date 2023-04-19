ServerEvents.recipes((event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:normal/enigmatica/shapeless/';

    const recipes = [
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
