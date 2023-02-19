ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/minecraft/blasting/';
    const recipes = [
        {
            input: 'create:crushed_copper_ore',
            output: 'mekanism:clump_copper',
            xp: 0.5,
            id: `${id_prefix}clump_copper_from_crushed_ore`
        },
        {
            input: 'mekanism:dirty_dust_copper',
            output: 'minecraft:copper_ingot',
            xp: 0.5,
            id: `${id_prefix}copper_ingot_from_dirty_dust`
        },
        {
            input: '#forge:ores/ironwood',
            output: '2x twilightforest:ironwood_ingot',
            xp: 0.5,
            id: `${id_prefix}ironwood_ingot`
        }
    ];
    recipes.forEach((recipe) => {
        event.blasting(recipe.output, recipe.input).xp(recipe.xp).id(recipe.id);
    });
});
