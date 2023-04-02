ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:base/mininggadgets/shaped/';
    const recipes = [
        {
            output: 'mininggadgets:modificationtable',
            pattern: [' A ', 'BCB', 'BDB'],
            key: {
                A: 'supplementaries:crystal_display',
                B: '#forge:ingots/compressed_iron',
                C: 'ars_nouveau:arcane_core',
                D: 'mininggadgets:upgrade_empty'
            },
            id: `${id_prefix}modificationtable`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
