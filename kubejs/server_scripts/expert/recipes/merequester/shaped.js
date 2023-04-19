ServerEvents.recipes((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/merequester/shaped/';

    const recipes = [
        {
            output: 'merequester:requester',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'naturesaura:infused_stone',
                B: '#ae2:interface',
                C: 'ae2:crafting_accelerator',
                D: 'pneumaticcraft:logistics_core',
                E: '#forge:gems/source'
            },
            id: 'merequester:requester'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
