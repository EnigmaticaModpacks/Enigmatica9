ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/minecraft/smelting/';
    const recipes = [
        {
            input: 'minecraft:clay_ball',
            output: 'minecraft:brick',
            xp: 0.5,
            id: `${id_prefix}brick`
        },
        {
            input: 'minecraft:netherrack',
            output: 'minecraft:nether_brick',
            xp: 0.5,
            id: `${id_prefix}nether_brick`
        },
        {
            input: 'occultism:otherstone',
            output: 'occultism:burnt_otherstone',
            xp: 0.5,
            id: `${id_prefix}burnt_otherstone`
        },
        {
            input: '#forge:dusts/aluminum',
            output: AlmostUnified.getPreferredItemForTag('forge:ingots/aluminum'),
            xp: 0.5,
            id: `${id_prefix}aluminum_ingot_from_dust`
        },
        {
            input: '#forge:dusts/invar',
            output: AlmostUnified.getPreferredItemForTag('forge:ingots/invar'),
            xp: 0.5,
            id: `${id_prefix}invar_dust_to_ingot`
        },
        {
            input: '#forge:dusts/constantan',
            output: AlmostUnified.getPreferredItemForTag('forge:ingots/constantan'),
            xp: 0.5,
            id: `${id_prefix}constantan_dust_to_ingot`
        },
        {
            input: '#forge:dusts/electrum',
            output: AlmostUnified.getPreferredItemForTag('forge:ingots/electrum'),
            xp: 0.5,
            id: `${id_prefix}electrum_dust_to_ingot`
        },
        {
            input: '#forge:dusts/bronze',
            output: AlmostUnified.getPreferredItemForTag('forge:ingots/bronze'),
            xp: 0.5,
            id: `${id_prefix}bronze_dust_to_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        event.smelting(recipe.output, recipe.input).xp(recipe.xp).id(recipe.id);
    });
});
