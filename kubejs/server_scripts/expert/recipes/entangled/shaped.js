ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/entangled/shaped/';

    const recipes = [
        {
            output: '4x entangled:block',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:plates/bronze',
                B: 'ars_nouveau:sourcestone',
                C: 'ars_nouveau:ritual_warping'
            },
            id: 'entangled:block'
        },
        {
            output: 'entangled:item',
            pattern: [' AB', ' CA', 'C  '],
            key: {
                A: '#forge:rods/lead',
                B: '#forge:gems/infused_diamond',
                C: 'naturesaura:ancient_stick'
            },
            id: 'entangled:item'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
