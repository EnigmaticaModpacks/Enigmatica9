ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/create/shaped/';

    const recipes = [
        {
            output: 'create:wand_of_symmetry',
            pattern: [' BA', ' CD', 'C  '],
            key: {
                A: 'ars_nouveau:spell_prism',
                B: '#forge:plates/bronze',
                C: 'naturesaura:ancient_stick',
                D: '#forge:wires/electrum'
            },
            id: `${id_prefix}wand_of_symmetry`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
