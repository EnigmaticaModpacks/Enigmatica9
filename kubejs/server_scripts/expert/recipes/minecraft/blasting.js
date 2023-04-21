ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/minecraft/blasting/';
    const recipes = [
        {
            output: '2x twilightforest:ironwood_ingot',
            input: '#forge:ores/ironwood',
            xp: 0.5,
            id: `${id_prefix}ironwood_ingot`
        },
        {
            output: 'occultism:burnt_otherstone',
            input: 'occultism:otherstone',
            xp: 0.5,
            id: `${id_prefix}burnt_otherstone`
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

    const simple_metals = ['copper', 'silver', 'gold', 'tin', 'horizonite', 'ventium', 'ventium', 'falsite'];

    simple_metals.forEach((metal) => {
        recipes.push(
            {
                output: `emendatusenigmatica:${metal}_clump`,
                input: `#create:crushed_ores/${metal}`,
                xp: 0.5,
                id: `${id_prefix}clump_${metal}_from_crushed_ore`
            },
            {
                output: `emendatusenigmatica:${metal}_ingot`,
                input: `emendatusenigmatica:${metal}_dirty_dust`,
                xp: 0.5,
                id: `${id_prefix}${metal}_ingot_from_dirty_dust`
            }
        );
    });

    recipes.forEach((recipe) => {
        event.blasting(recipe.output, recipe.input).xp(recipe.xp).id(recipe.id);
    });
});
